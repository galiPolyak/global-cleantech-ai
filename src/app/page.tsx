export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f3fbf8] flex flex-col items-center px-4 pt-24 text-center">
      
      {/* Badge */}
      <div className="mb-6 rounded-full border border-green-300 px-4 py-1 text-sm text-green-700 bg-white shadow-sm">
        🌱 Innovative Cleantech Platform
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        Global Cleantech Directory
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-gray-600 mb-10">
        Step into a world of innovation and sustainability with our intuitive Global Cleantech Directory platform for showcasing new clean technologies and innovative solutions to combat global warming challenges.
      </p>

      {/* Search Box */}
      <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-3xl flex flex-col gap-3">

        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="font-medium text-gray-700">🔍 Search</span>
          <span className="ml-auto flex items-center gap-1">
            🤖 AI Assistant
          </span>
        </div>

        <div className="flex gap-2">
          <input
            placeholder="Search technologies, companies, solutions..."
            className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-12 mt-14 text-center">

        <div>
          <p className="text-2xl font-semibold text-green-700">12K+</p>
          <p className="text-gray-600 text-sm">Companies</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-blue-700">180+</p>
          <p className="text-gray-600 text-sm">Countries</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-green-700">25K+</p>
          <p className="text-gray-600 text-sm">Technologies</p>
        </div>

      </div>
    </main>
  );
}
