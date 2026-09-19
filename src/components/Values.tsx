import React from 'react';
import { VALUES } from '../data/clinicData';
import {
  Heart,
  Shield,
  Users,
  Lock,
  GraduationCap,
  Sparkles,
  Building2,
  Microscope,
  Award,
} from 'lucide-react';

export const Values: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return Heart;
      case 'Shield': return Shield;
      case 'Users': return Users;
      case 'Lock': return Lock;
      case 'GraduationCap': return GraduationCap;
      case 'Sparkles': return Sparkles;
      case 'Building2': return Building2;
      case 'Microscope': return Microscope;
      case 'Award': return Award;
      default: return Heart;
    }
  };

  return (
    <section id="valores" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1.5">
            Conduta e Ética
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Os Nossos Valores
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Princípios fundamentais que orientam diariamente a conduta da nossa equipa e o relacionamento com cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((val) => {
            const IconComp = getIcon(val.icon);
            return (
              <div
                key={val.id}
                className="bg-white rounded-lg p-5 border border-slate-200 hover:border-sky-700 transition-colors flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                  {val.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
