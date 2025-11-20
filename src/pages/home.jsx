import React from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="container py-20 space-y-32">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.05]">
            Olá, eu sou Pietro.<br />
          </h1>

          <p className="text-lg text-gray-600 mt-6 max-w-xl">
            Sou um desenvolvedor que gosta de tecnologia e computadores desde pequeno. Estou sempre buscando aprender mais e criar novos projetos.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="/projects"
              className="px-6 py-3 rounded-xl bg-black text-white flex items-center gap-2 hover:bg-neutral-800 transition"
            >
              Ver Projetos
              <ArrowRight size={18} />
            </a>

            <a
              href="/about"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-50 transition"
            >
              Sobre mim
            </a>
          </div>
        </div>

        <div className="card p-0 shadow-xl rounded-2xl overflow-hidden">
          <img
            src="/src/assets/hero-mockup.png"
            alt="mockup"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* SOBRE */}
      <section id="about">
        <div id="about" className="mt-24">
          <div className="backdrop-blur-lg bg-white/60 border border-white/80 shadow-xl rounded-2xl p-10 max-w-3xl mx-auto text-center">

            <h2 className="text-3xl font-semibold mb-3">
              Sobre mim
            </h2>

            <div className="w-12 h-1 bg-black/80 mx-auto rounded mb-6"></div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Sou uma pessoa bastante ativa: gosto de esportes, principalmente futebol, de viajar,
              conhecer lugares novos e aproveitar o tempo com amigos. Também sou fã de jogos e de
              histórias — de animes a filmes clássicos como Star Wars e Harry Potter. Já morei em Londres
              para estudar inglês, e desde então carrego comigo o hábito de estar sempre aprendendo e
              criando projetos novos.
            </p>

          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="w-full py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Projetos em Destaque</h2>

          <a 
            href="/projetos" 
            className="text-blue-500 hover:underline text-lg font-medium"
          >
            Ver mais →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="/projetos/metro-sp.png" 
                className="w-full h-full object-cover hover:scale-110 transition"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sistema de Gestão — Metrô de SP</h3>
              <p className="text-gray-600">
                Sistema desenvolvido em equipe para apoiar a gestão de processos do Metrô de São Paulo.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="/projetos/financeiro.png" 
                className="w-full h-full object-cover hover:scale-110 transition"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Gerenciador Financeiro</h3>
              <p className="text-gray-600">
                Aplicação individual para controle de gastos e planejamento financeiro.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="/projetos/poliedro.png" 
                className="w-full h-full object-cover hover:scale-110 transition"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sistema Escolar — Poliedro</h3>
              <p className="text-gray-600">
                Projeto acadêmico desenvolvido para o Colégio Poliedro, com gestão de alunos e turmas.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section id="contact">
        <div id="contact" className="mt-24">
          <div className="max-w-3xl mx-auto p-10 rounded-2xl shadow-lg bg-white/90 text-center">

            <h2 className="text-3xl font-semibold mb-4">
              Contato
            </h2>

            <div className="w-12 h-1 bg-black/80 mx-auto rounded mb-6"></div>

            <p className="text-gray-700 text-lg mb-6">
              Vamos conversar! Entre em contato por email ou me encontre nas redes:
            </p>

            <a 
              href="mailto:seu-email@exemplo.com"
              className="text-lg font-medium text-black underline underline-offset-4 hover:opacity-70 transition"
            >
              pietromaffepena@gmail.com
            </a>

            <div className="flex justify-center gap-8 mt-8 text-gray-700">

              <a href="https://github.com/" target="_blank" className="hover:text-black transition">
                <i className="fa-brands fa-github text-3xl"></i>
              </a>

              <a href="https://linkedin.com" target="_blank" className="hover:text-black transition">
                <i className="fa-brands fa-linkedin text-3xl"></i>
              </a>

              <a href="https://instagram.com" target="_blank" className="hover:text-black transition">
                <i className="fa-brands fa-instagram text-3xl"></i>
              </a>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
