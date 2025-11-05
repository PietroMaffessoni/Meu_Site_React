import React from "react";

export default function Home() {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="hero-title text-4xl md:text-5xl mb-4">
            Olá — eu sou Pietro.<br/>
            Desenvolvedor de software & designer de experiências.
          </h1>
          <p className="text-gray-600 mb-6 max-w-xl">
            Eu crio aplicações limpas, performáticas e com atenção aos detalhes.
            Aqui estão alguns dos meus projetos recentes — disponíveis para visualização no meu portfólio.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="inline-block px-5 py-3 rounded-md bg-black text-white hover:opacity-95">Ver Projetos</a>
            <a href="#about" className="inline-block px-5 py-3 rounded-md border border-gray-200 text-gray-700">Sobre mim</a>
          </div>
        </div>

        <div>
          <div className="card">
            <img src="/src/assets/hero-mockup.png" alt="mockup" className="w-full rounded-md" />
          </div>
        </div>
      </div>

      {/* Placeholder for projects anchor */}
      <div id="projects" className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Projetos</h2>
        <p className="text-gray-600 mb-4">(Ainda vamos popular esta seção com cartões dinâmicos.)</p>
      </div>

      <div id="about" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
        <p className="text-gray-600">Estudante de Ciência da Computação, apaixonado por tecnologia e design.</p>
      </div>

      <div id="contact" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <p className="text-gray-600">Email: seu-email@exemplo.com</p>
      </div>
    </section>
  );
}
