'use client';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🇮🇳 Bharat Forms</h1>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-bold shadow hover:bg-gray-100">
            Install App
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Aapko kaunsa form chahiye?
          </h2>
          <p className="text-gray-600 mb-6">
            India ke saare forms ek jagah par
          </p>

          <div className="flex gap-2 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Jaise: PAN Card, PM Kisan, Voter ID, Aadhaar..."
              className="flex-1 p-4 border-2 border-blue-200 rounded-xl text-lg focus:outline-none focus:border-blue-600"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700">
              🔍 Search
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            📂 Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🆔', name: 'Identity', desc: 'Aadhaar, PAN, Voter ID' },
              {
                icon: '🏛️',
                name: 'Govt Schemes',
                desc: 'PM Kisan, Ayushman Bharat',
              },
              { icon: '💼', name: 'Jobs & Exams', desc: 'UPSC, SSC, Railways' },
              {
                icon: '🎓',
                name: 'Education',
                desc: 'Admission, Scholarships',
              },
              { icon: '🏦', name: 'Banking', desc: 'Account, Loan, PF' },
              { icon: '🚗', name: 'Transport', desc: 'Driving License, RC' },
              { icon: '🏠', name: 'Property', desc: 'Land Records, Mutation' },
              { icon: '⚖️', name: 'Legal', desc: 'RTI, FIR, Court Forms' },
            ].map((cat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer border-l-4 border-blue-600"
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <h4 className="font-bold text-lg text-gray-800">{cat.name}</h4>
                <p className="text-sm text-gray-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Chatbot Button */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition flex items-center gap-2">
            <span className="text-3xl"></span>
            <span className="font-bold hidden md:inline">FormMitra AI</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-12">
        <p>© 2026 Bharat Forms - India's Largest Forms Directory</p>
      </footer>
    </div>
  );
}
