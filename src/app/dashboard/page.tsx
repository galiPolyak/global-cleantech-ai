"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Message = {
  role: "user" | "ai";
  content: string;
};

type Conversation = {
  id: string;
  title: string;
  messages: Message[];
};

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get("prompt");

  const MAX_PROMPTS = 10;

  // Initialize first conversation if prompt exists
  const initialConversation: Conversation | null = initialPrompt
    ? {
        id: uuidv4(),
        title: initialPrompt.slice(0, 30),
        messages: [
          { role: "user", content: initialPrompt },
          { role: "ai", content: "Your example ai answer" },
        ],
      }
    : null;

  const [conversations, setConversations] = useState<Conversation[]>(
    initialConversation ? [initialConversation] : []
  );

  const [activeId, setActiveId] = useState<string | null>(
    initialConversation ? initialConversation.id : null
  );

  const [input, setInput] = useState("");

  const activeConversation = conversations.find((c) => c.id === activeId);

  const totalPromptsUsed = conversations.reduce(
    (count, convo) =>
      count + convo.messages.filter((m) => m.role === "user").length,
    0
  );

  const promptsRemaining = MAX_PROMPTS - totalPromptsUsed;

  const handleSend = () => {
    if (!input.trim()) return;
    if (totalPromptsUsed >= MAX_PROMPTS) return;
    if (!activeConversation) return;

    const newUserMessage: Message = {
        role: "user",
        content: input,
    };

    const newAiMessage: Message = {
        role: "ai",
        content: "Your example ai answer",
    };

    const updatedConversations: Conversation[] = conversations.map((convo) => {
        if (convo.id === activeId) {
        return {
            ...convo,
            messages: [...convo.messages, newUserMessage, newAiMessage],
        };
        }
        return convo;
    });

    setConversations(updatedConversations);
    setInput("");
    };


  const handleNewConversation = () => {
    const newConvo: Conversation = {
      id: uuidv4(),
      title: "New Conversation",
      messages: [],
    };

    setConversations([newConvo, ...conversations]);
    setActiveId(newConvo.id);
  };

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-gray-50 flex">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-white border-r border-gray-200 p-5 flex flex-col">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-gray-700">
            Conversations
          </h2>

          <button
            onClick={handleNewConversation}
            className="w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center hover:bg-green-700"
          >
            +
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2">
          {conversations.map((convo) => (
            <button
              key={convo.id}
              onClick={() => setActiveId(convo.id)}
              className={`w-full text-left text-xs rounded-lg px-3 py-2 truncate ${
                activeId === convo.id
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100"
              }`}
            >
              {convo.title}
            </button>
          ))}
        </div>

        <div className="mt-6 text-xs text-gray-600">
          <div className="font-medium">
            Prompts Used: {totalPromptsUsed}/{MAX_PROMPTS}
          </div>
          <div>
            Remaining: {promptsRemaining >= 0 ? promptsRemaining : 0}
          </div>
        </div>

      </aside>

      {/* ================= CHAT AREA ================= */}
      <div className="flex-1 flex flex-col justify-between max-w-4xl mx-auto w-full p-6">

        {/* Messages */}
        <div className="space-y-6 overflow-y-auto">

          {activeConversation?.messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`px-5 py-3 rounded-2xl max-w-md text-sm ${
                  message.role === "user"
                    ? "bg-green-600 text-white"
                    : "bg-white border border-gray-200 shadow text-gray-700"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

        </div>

        {/* Input Bar */}
        <div className="mt-8">
          {totalPromptsUsed >= MAX_PROMPTS ? (
            <div className="text-center text-sm text-red-500">
              You have reached your 10 free prompts.
            </div>
          ) : (
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask another cleantech question..."
                className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSend}
                className="rounded-full bg-green-600 text-white px-5 py-3 hover:bg-green-700 transition"
              >
                Send
              </button>
            </div>
          )}
        </div>

      </div>

    </main>
  );
}
