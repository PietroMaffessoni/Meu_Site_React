import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl mb-4 leading-tight">
            Olá — eu sou Pietro.<br/>
            Desenvolvedor de software & designer de experiências.
          </h1>

          <p className="text-gray-600 mb-6 max-w-xl">
            Eu crio aplicações limpas, performáticas e com atenção aos detalhes.
            Aqui estão alguns dos meus projetos recentes — disponíveis para visualização no meu portfólio.
          </p>

          <div className="flex gap-4">
            <Link
              to="/projects"
              className="inline-block px-5 py-3 rounded-md bg-black text-white hover:opacity-95"
            >
              Ver Projetos
            </Link>

            <Link
              to="/about"
              className="inline-block px-5 py-3 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Sobre mim
            </Link>
          </div>
        </div>

        <div>
          <img
            src="/src/assets/hero-mockup.png"
            alt="mockup"
            className="w-full rounded-md shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
