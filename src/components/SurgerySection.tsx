import React, { useState } from 'react';
import { SURGERY_AREAS } from '../data/clinicData';
import { CheckCircle2, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import surgeryImg from '../assets/images/gelvisol_bloco_operatorio_1789837236658.jpg';

interface SurgerySectionProps {
  onLearnMore: () => void;
  onOpenAppointment: () => void;
}

export const SurgerySection: React.FC<SurgerySectionProps> = ({
  onLearnMore,
  onOpenAppointment,
}) => {
  const [currentImg, setCurrentImg] = useState('/colsutorio.png');
  return (
    <section id="cirurgias" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1.5">
            Valências Cirúrgicas
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Cirurgias Minimamente Invasivas
          </h2>
          <p className="mt-2 text-base text-slate-600">
            O Centro Médico Gelvisol dispõe de bloco operatório estruturado para cirurgias e procedimentos minimamente invasivos, priorizando segurança, precisão e recuperação mais rápida.
          </p>
        </div>

        {/* Feature Image & Overview Banner */}
        <div className="mb-10 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-88 relative">
              <img
                src={currentImg}
                onError={() => {
                  if (currentImg !== surgeryImg) setCurrentImg(surgeryImg);
                }}
                alt="Bloco Operatório de Cirurgia no Gelvisol"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 text-left">
              <div className="w-10 h-10 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Precisão, Segurança e Menor Tempo de Recuperação
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nossos blocos operatórios contam com infraestrutura dedicada para intervenções cirúrgicas modernas que garantem menor trauma tecidual e bem-estar integral aos pacientes.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white bg-sky-800 hover:bg-sky-900 px-4 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <span>Marcar Avaliação</span>
                </button>
                <button
                  type="button"
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-sky-800 px-3 py-2.5 transition-colors cursor-pointer"
                >
                  <span>Conhecer Estrutura</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Surgical Cards: Cirurgia Geral, Ortopedia, Urologia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SURGERY_AREAS.map((area) => (
            <div
              key={area.id}
              id={`cirurgia-${area.id}`}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-sky-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-slate-900">
                    {area.title}
                  </h3>
                  <ShieldCheck className="w-4 h-4 text-sky-800" />
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {area.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {area.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-950 transition-colors cursor-pointer"
                >
                  <span>Agendar Avaliação</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
