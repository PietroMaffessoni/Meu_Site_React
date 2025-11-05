import React from "react";

export default function Navbar() {
  return (
    <header className="border-b border-gray-100">
      <div className="container flex items-center justify-between py-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">PM</div>
          <div>
            <div className="text-sm text-gray-500">Pietro</div>
            <div className="text-lg font-semibold">Maffessoni</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projetos</a>
          <a href="#about" className="hover:underline">Sobre</a>
          <a href="#contact" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
}
