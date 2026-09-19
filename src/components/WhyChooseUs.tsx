import React from 'react';
import { WHY_CHOOSE_US } from '../data/clinicData';
import { Layers, ScanLine, Crosshair, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'ScanLine': return ScanLine;
      case 'Crosshair': return Crosshair;
      case 'HeartHandshake': return HeartHandshake;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="porque-escolher" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1.5">
            Compromisso Assistencial
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Por que Escolher o Gelvisol
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Cuidado médico baseado em competência clínica, proximidade e confiança mútua.
          </p>
        </div>

        {/* 4 Destaques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_CHOOSE_US.map((item) => {
            const IconComp = getIcon(item.icon);
            return (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-white border border-slate-200 text-sky-800 flex items-center justify-center mb-4">
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
      </div>
    </section>
  );
};
