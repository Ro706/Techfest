import React from 'react'

export default function HackathonName() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
    <header className="flex justify-between p-4">
      <div>POSTDIGITALIST</div>
      <div className="flex items-center justify-center">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22L3 13H21L12 22Z" fill="currentColor" />
          <path d="M12 2L21 11H3L12 2Z" fill="currentColor" />
        </svg>
      </div>
      <div>POSTHOURS</div>
    </header>
    
    <main className="flex-grow flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-8">SyneriaX</h1>
      <div className="flex space-x-8">
        <div>15 de julio</div>
        <div>19:00 hs</div>
        <div>Mamarracho</div>
      </div>
    </main>
  </div>
  )
}
