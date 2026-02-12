"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [input, setInput] = useState("");

  return (
    <main className="w-full text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-50 to-white pt-24 pb-28">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-12">

          {/* Headings */}
          <div className="text-center max-w-3xl flex flex-col gap-5">
            <span className="text-sm font-medium text-green-700 tracking-wide">
              AI-Powered Cleantech Intelligence
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Discover Verified Climate Solutions Worldwide
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              A trusted AI directory that helps you find credible cleantech
              companies, technologies, funding opportunities, and global partners —
              without greenwashing or noise.
            </p>
          </div>

          {/* AI Section */}
          <div className="flex w-full max-w-5xl gap-10 items-start">

            {/* Left: AI Assistant + Input */}
            <div className="flex-1 flex flex-col items-center gap-8">

              <img
                src="/images/leaf_logo_3.png"
                alt="Cleantech AI"
                className="w-64 h-64 object-contain"
              />

              <div className="flex w-full max-w-md gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Search companies, technologies, funding..."
                  className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-sm shadow focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={() => {
                    if (!input) return;
                    router.push(`/dashboard?prompt=${encodeURIComponent(input)}`);
                  }}
                  className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition"
                >
                  ➤
                </button>
              </div>
            </div>

            {/* Right: Prompt Card */}
            <div className="w-96 rounded-2xl bg-green-50/60 border border-green-100 shadow-md p-6">
              <h3 className="text-sm font-medium mb-4 text-gray-800">
                Explore with AI:
              </h3>

              <div className="flex flex-col gap-3">
                {[
                  "Find battery storage companies in North America",
                  "Show verified solar startups in Europe",
                  "What solutions address industrial carbon capture?",
                  "List climate tech funding opportunities",
                  "Compare sustainable packaging innovators by region",
                ].map((text) => (
                  <button
                    key={text}
                    onClick={() =>
                      router.push(`/dashboard?prompt=${encodeURIComponent(text)}`)
                    }
                    className="text-left text-sm text-gray-700 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-50 transition"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-16 bg-white">
        <p className="mx-auto max-w-3xl px-6 text-center text-lg text-gray-800">
          Built on verified datasets and secure AI infrastructure to ensure
          credibility, transparency, and protection against greenwashing.
        </p>
      </section>

      {/* ================= WHY WE EXIST ================= */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium text-green-700 mb-4">
            Our Mission
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We simplify global cleantech discovery by combining trusted AI,
            structured data, and international access into one intelligent platform.
          </p>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium text-green-700 mb-4">
            Our Vision
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            To accelerate climate innovation by connecting innovators, investors,
            buyers, and researchers through transparent, AI-driven intelligence.
          </p>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-center text-sm font-medium text-green-700 mb-12">
            Why It Matters
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Verified AI Discovery",
                text: "Filter out misinformation and surface credible cleantech solutions backed by trusted data.",
                icon: "🛡️",
              },
              {
                title: "Global Market Access",
                text: "Explore technologies, suppliers, and climate innovators across regions in seconds.",
                icon: "🌍",
              },
              {
                title: "Anti-Greenwashing Intelligence",
                text: "Prioritize evidence-based companies and reduce misleading sustainability claims.",
                icon: "✅",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-green-700 font-medium mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Smart Matchmaking",
                text: "Connect buyers, investors, researchers, and founders with relevant climate solutions.",
                icon: "🤝",
              },
              {
                title: "Funding & Opportunity Discovery",
                text: "Access grants, investors, and cleantech funding streams globally in one place.",
                icon: "💰",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-green-700 font-medium mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
