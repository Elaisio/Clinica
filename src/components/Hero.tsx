import React, { useState } from 'react';
import { Calendar, ArrowRight, Stethoscope, FlaskConical, Activity, BedDouble } from 'lucide-react';
import heroImg from '../assets/images/gelvisol_sala_recepcao_1789837151289.jpg';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  const [currentImg, setCurrentImg] = useState('/sala.png');
  const indicators = [
    {
      id: 'ind-especialidades',
      title: 'Especialidades Médicas',
      desc: '18 Especialidades dedicadas',
      icon: Stethoscope,
      href: '#especialidades',
    },
    {
      id: 'ind-laboratorio',
      title: 'Laboratório',
      desc: 'Análises clínicas rigorosas',
      icon: FlaskConical,
      href: '#estrutura',
    },
    {
      id: 'ind-cirurgia',
      title: 'Cirurgia',
      desc: 'Minimamente invasiva',
      icon: Activity,
      href: '#cirurgias',
    },
    {
      id: 'ind-internamento',
      title: 'Internamento VIP',
      desc: 'Privacidade e conforto',
      icon: BedDouble,
      href: '#estrutura',
    },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-24 md:pt-28 pb-16 md:pb-20 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-800">
              Centro Médico Polivalente • Luanda, Angola
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Centro Médico Especializado <span className="text-sky-800">Gelvisol</span>
            </h1>

            {/* Secondary Headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug">
              Cuidados médicos especializados, com competência, tecnologia e humanização.
            </p>

            {/* Complementary Text */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Centro médico polivalente localizado em Luanda, preparado para responder aos desafios da medicina moderna, com consultórios, laboratório, bloco operatório e salas de internamento VIP.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-btn-marcar-consulta"
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 bg-sky-800 hover:bg-sky-900 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition-colors text-base cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-200" />
                <span>Marcar Consulta</span>
              </button>

              <a
                id="hero-btn-conheca-nos"
                href="#quem-somos"
                onClick={(e) => handleScrollTo(e, '#quem-somos')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-medium px-6 py-3 rounded-lg border border-slate-300 transition-colors text-base"
              >
                <span>Conheça-nos</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Practical Information */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 border-t border-slate-200">
              <div>
                <span className="font-semibold text-slate-900">18 Especialidades</span> Médicas
              </div>
              <span className="text-slate-300">•</span>
              <div>
                <span className="font-semibold text-slate-900">Laboratório</span> de Análises Clínicas
              </div>
              <span className="text-slate-300">•</span>
              <div>
                <span className="font-semibold text-slate-900">Bloco Operatório</span> & Internamento VIP
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={currentImg}
                onError={() => {
                  if (currentImg !== heroImg) setCurrentImg(heroImg);
                }}
                alt="Centro Médico Especializado Gelvisol em Luanda"
                className="w-full h-full object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Hero Indicators */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {indicators.map((item) => {
              const IconComp = item.icon;
              return (
                <a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="p-4 rounded-lg bg-white border border-slate-200 hover:border-sky-700 hover:shadow-sm transition-colors flex items-center gap-3.5 text-left"
                >
                  <div className="w-10 h-10 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 truncate">
                      {item.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
