import React, { useState } from 'react';
import { CheckCircle2, HeartHandshake } from 'lucide-react';
import clinicImg from '../assets/images/gelvisol_consultorio_doutora_1789837217272.jpg';

export const Presentation: React.FC = () => {
  const [currentImg, setCurrentImg] = useState('/consultorio.png');
  const highlights = [
    'Consultórios modernos e equipados',
    'Laboratório para análises clínicas',
    'Bloco operatório para cirurgias',
    'Salas de internamento VIP com privacidade',
  ];

  return (
    <section id="apresentacao" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic clinic photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 aspect-[4/3]">
              <img
                src={currentImg}
                onError={() => {
                  if (currentImg !== clinicImg) setCurrentImg(clinicImg);
                }}
                alt="Apresentação do Centro Médico Gelvisol em Luanda"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Text Presentation */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-800">
              Sobre a Nossa Atuação
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
              Cuidado especializado. Tecnologia. Humanização.
            </h2>

            <div className="space-y-3.5 text-slate-600 text-base leading-relaxed">
              <p>
                O Centro Médico Especializado Gelvisol é um centro médico polivalente localizado em Luanda, com instalações modernas e preparadas para responder aos desafios da medicina atual.
              </p>

              <p>
                Dispõe de consultórios, laboratório, bloco operatório e salas de internamento VIP.
              </p>

              <p>
                Realizam-se consultas de diagnóstico e tratamento nas principais especialidades médicas, contando com um corpo médico e paramédico de elevada competência técnica e científica.
              </p>

              <p>
                Entre as suas valências destacam-se também as cirurgias minimamente invasivas nas áreas geral, ortopédica e urológica, além da realização de análises e exames de diagnóstico.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center gap-2 text-xs text-slate-500 border-t border-slate-100">
              <HeartHandshake className="w-4 h-4 text-slate-400" />
              <span>Atendimento ético, confidencial e centrado no bem-estar do paciente.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
