import React from 'react';
import { SPECIALIZED_CONSULTATIONS } from '../data/clinicData';
import { HeartHandshake, UserCheck, ShieldAlert, Calendar } from 'lucide-react';

interface SpecializedConsultationsProps {
  onSelectConsultation: (title: string) => void;
}

export const SpecializedConsultations: React.FC<SpecializedConsultationsProps> = ({
  onSelectConsultation,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return HeartHandshake;
      case 'UserCheck': return UserCheck;
      case 'ShieldPulse': return ShieldAlert;
      default: return HeartHandshake;
    }
  };

  return (
    <section id="consultas-especializadas" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1.5">
            Atendimento Focado
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Consultas Especializadas
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Além das consultas médicas convencionais, o Centro Médico Gelvisol disponibiliza consultas direcionadas a necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIALIZED_CONSULTATIONS.map((item) => {
            const IconComp = getIcon(item.icon);
            return (
              <div
                key={item.id}
                id={`consulta-${item.id}`}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-sky-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-white border border-slate-200 text-sky-800 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => onSelectConsultation(item.title)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 hover:text-sky-950 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Marcar esta Consulta</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
