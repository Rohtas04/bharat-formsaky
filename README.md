"use client";
import { useState } from 'react';

export default function Home() {
const [search, setSearch] = useState("");

return (
<div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
{/_ Header _/}
<header className="bg-blue-700 text-white p-4 shadow-md sticky top-0 z-50">
<div className="max-w-4xl mx-auto flex justify-between items-center">
<h1 className="text-2xl font-bold">🇮🇳 Bharat Forms</h1>
<button className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow hover:bg-gray-100">
📲 Install App
</button>
</div>
</header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 mt-6">
        {/* Search Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Aapko kaunsa form chahiye?</h2>
          <input
            type="text"
            placeholder="Jaise: PAN Card, PM Kisan, Voter ID..."
            className="w-full p-4 border-2 border-blue-200 rounded-xl text-lg focus:outline-none focus:border-blue-600 transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
            🔍 Search Karein
          </button>
        </div>

        {/* Categories */}
        <h3 className="text-xl font-bold mb-4 text-gray-700">Popular Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['🆔 Identity (Aadhaar/PAN)', '🏛️ Govt Schemes', '💼 Jobs & Exams', '🎓 Education'].map((cat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer text-center border border-gray-100">
              <p className="font-semibold text-gray-800">{cat}</p>
            </div>
          ))}
        </div>

        {/* AI Chatbot Placeholder (FormMitra) */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold hidden md:inline">FormMitra AI</span>
          </button>
        </div>
      </main>
    </div>

);
}
