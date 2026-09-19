import React, { useState } from 'react';
import { Stethoscope, FlaskConical, Activity, BedDouble } from 'lucide-react';
import vipImg from '../assets/images/gelvisol_internamento_vip_1789837250919.jpg';

export const Infrastructure: React.FC = () => {
  const [currentImg, setCurrentImg] = useState('/sala-vip.png');
  const items = [
    {
      id: 'consultorios',
      title: 'Consultórios',
      description: 'Espaços preparados para consultas e acompanhamento médico das diversas especialidades.',
      icon: Stethoscope,
    },
    {
      id: 'laboratorio',
      title: 'Laboratório',
      description: 'Estrutura própria destinada à realização de análises clínicas com rapidez e rigor.',
      icon: FlaskConical,
    },
    {
      id: 'bloco-operatorio',
      title: 'Bloco Operatório',
      description: 'Estrutura preparada para procedimentos cirúrgicos gerais e especializados com segurança.',
      icon: Activity,
    },
    {
      id: 'internamento-vip',
      title: 'Internamento VIP',
      description: 'Salas individuais e privativas com acompanhamento de enfermagem dedicado.',
      icon: BedDouble,
    },
  ];

  return (
    <section id="estrutura" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1.5">
            Instalações em Luanda
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Nossa Estrutura Clínica
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Ambientes modernos em Luanda projetados com foco no rigor assistencial, comodidade e bem-estar do paciente.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {items.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                id={`estrutura-${item.id}`}
                className="bg-white rounded-lg p-5 border border-slate-200 hover:border-sky-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Feature: VIP Inpatient Experience */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-6 sm:p-10 space-y-4 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Salas de Internamento VIP
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Salas destinadas ao internamento com maior conforto e privacidade, concebidas para proporcionar tranquilidade aos pacientes em recuperação e aos seus acompanhantes, com apoio de enfermagem dedicado e ambiente acolhedor.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="bg-slate-100 px-3 py-1.5 rounded-md">
                  Privacidade Total
                </span>
                <span className="bg-slate-100 px-3 py-1.5 rounded-md">
                  Conforto para Acompanhante
                </span>
                <span className="bg-slate-100 px-3 py-1.5 rounded-md">
                  Acompanhamento Contínuo
                </span>
              </div>
            </div>
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-88">
              <img
                src={currentImg}
                onError={() => {
                  if (currentImg === '/sala-vip.png') {
                    setCurrentImg('/sala vip.png');
                  } else if (currentImg !== vipImg) {
                    setCurrentImg(vipImg);
                  }
                }}
                alt="Salas de Internamento VIP no Gelvisol em Luanda"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
