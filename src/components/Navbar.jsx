import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-5 px-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">
            PM
          </div>
          <div>
            <div className="text-sm text-gray-500">Pietro</div>
            <div className="text-lg font-semibold">Maffessoni</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projetos</Link>
          <Link to="/about" className="hover:underline">Sobre</Link>
          <Link to="/contact" className="hover:underline">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
