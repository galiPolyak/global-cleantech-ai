export default function HomePage() {
  return (
    <main className="w-full text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-50 to-white pt-22 pb-24">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-10">

          {/* Headings */}
          <div className="text-center max-w-3xl flex flex-col gap-4">
            <span className="text-sm font-medium text-green-700">
              Innovative Cleantech Platform
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold">
              Global Cleantech Directory
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              An AI-powered global directory for discovering verified cleantech innovations and solutions addressing climate change.
            </p>
          </div>

          {/* AI Section */}
          <div className="flex w-full max-w-5xl gap-8 items-start">

            {/* Left: AI Assistant + Input */}
            <div className="flex-1 flex flex-col items-center gap-6">

              {/* AI Assistant */}
              <div className="">
                <img
                  src="/images/leaf_logo_3.png"
                  alt="AI Assistant"
                  className="w-70 h-70 mb-5 object-contain"
                />
              </div>

              {/* Input */}
              <div className="flex w-full max-w-md gap-3">
                <input
                  placeholder="Ask our AI agent"
                  className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-sm shadow focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition">
                  ➤
                </button>
              </div>

            </div>

            {/* Right: Prompt Card */}
            <div className="w-100 rounded-2xl bg-green-50/60 border border-green-100 shadow-md p-6">
              <h3 className="text-sm font-medium mb-4">
                Try these prompts:
              </h3>

              <div className="flex flex-col gap-2">
                {[
                  "Find cleantech companies working on battery storage in North America",
                  "Show verified solar energy startups operating in Europe",
                  "What cleantech solutions address industrial carbon capture?",
                  "List funding opportunities for early-stage climate tech startups",
                  "Compare sustainable packaging companies by region",
                ].map((text) => (
                  <button
                    key={text}
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

      {/* ================= INFO STRIP ================= */}
      <section className="py-16 bg-white">
        <p className="mx-auto max-w-3xl px-6 text-center text-lg text-gray-800">
          Explore global cleantech with anti-greenwashing protection, and access
          diverse, credible innovators worldwide.
        </p>
      </section>

      {/* ================= WHY WE EXIST ================= */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium text-green-700 mb-4">
            Why We Exist:
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            AI-Trusted Innovation using secure internal datasets to simplify global
            cleantech discovery, prevent greenwashing, and open access to diverse
            cross-border trade and credible innovators worldwide.
          </p>
        </div>
      </section>

      {/* ================= PURPOSE ================= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium text-green-700 mb-4">
            Purpose:
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            To unlock global cleantech opportunities through trusted AI, transparent
            data, and equal access for innovators worldwide.
          </p>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium text-green-700 mb-4">
            Vision:
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            To create peace by developing innovative solutions that harmonize humans,
            technology, and nature.
          </p>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-center text-sm font-medium text-green-700 mb-12">
            Why It Matters:
          </p>

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Secure AI Discovery",
                text: "AI guidance is protected from noise, misinformation, and unreliable external data.",
                icon: "🛡️",
              },
              {
                title: "Diverse Global Trade Access",
                text: "Users can explore cleantech solutions, suppliers, and opportunities across all regions.",
                icon: "🌍",
              },
              {
                title: "Anti-Greenwashing Protection",
                text: "AI reduces misleading claims and prioritizes credible, evidence-based information.",
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

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Smart Matchmaking",
                text: "AI connects buyers, investors, researchers, and innovators with relevant solutions and partners.",
                icon: "🤝",
              },
              {
                title: "Access to Global Funding",
                text: "Users can discover diverse cleantech funds, grants, and investors in one place.",
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
