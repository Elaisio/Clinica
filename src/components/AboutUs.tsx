import React from 'react';
import { OBJECTIVES } from '../data/clinicData';
import { CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="quem-somos" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1.5">
            Identidade Institucional
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Quem Somos
          </h2>
          <p className="mt-2 text-base text-slate-600">
            O Centro Médico Especializado Gelvisol trabalha para oferecer cuidados de saúde especializados, combinando competência técnica, tecnologia e atendimento humanizado em Luanda.
          </p>
        </div>

        {/* Mission Statement Box */}
        <div className="mb-12 bg-slate-50 border-l-4 border-sky-800 rounded-r-lg p-6 sm:p-8 border-y border-r border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-sky-900 mb-2">
            Nossa Missão
          </h3>
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-serif italic">
            &ldquo;O centro médico presta cuidados em especialidades clínicas e cirúrgicas, com apoio psicológico personalizado a pacientes com patologias que assim necessitem.&rdquo;
          </p>
        </div>

        {/* Objectives Section */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Objetivos Institucionais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OBJECTIVES.map((obj, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-sky-800 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
