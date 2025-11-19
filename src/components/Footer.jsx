import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 text-[15px] text-gray-500">

        {/* Nome */}
        <p className="text-gray-800 font-semibold text-center mb-6">
          Pietro Maffessoni
        </p>

        {/* Links */}
        <div className="flex justify-center gap-8 mb-10">
          <a href="/" className="hover:text-gray-800 transition-colors">Home</a>
          <a href="/projects" className="hover:text-gray-800 transition-colors">Projetos</a>
          <a href="/about" className="hover:text-gray-800 transition-colors">Sobre</a>
          <a href="/contact" className="hover:text-gray-800 transition-colors">Contato</a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/seu-usuario"
            target="_blank" 
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <Github size={20} strokeWidth={1.7} />
          </a>

          <a 
            href="https://www.linkedin.com/in/seu-perfil"
            target="_blank" 
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <Linkedin size={20} strokeWidth={1.7} />
          </a>

          <a 
            href="mailto:seu-email@exemplo.com"
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <Mail size={20} strokeWidth={1.7} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Direitos autorais */}
        <p className="text-center text-[13px] text-gray-400">
          © {new Date().getFullYear()} Pietro Maffessoni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
