import React from 'react';
import { ShieldCheck, Leaf, Users } from 'lucide-react';

export const QualityPolicy: React.FC = () => {
  return (
    <section id="qualidade" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1.5">
            Garantia e Rigor
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Política de Qualidade
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Rigor assistencial, melhoria contínua e sustentabilidade no serviço à comunidade de Luanda.
          </p>
        </div>

        {/* Quality Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Prestação Especializada */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-white border border-slate-200 text-sky-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Serviços de Elevada Qualidade
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                O Centro Médico tem como política de qualidade a prestação de serviços assistenciais especializados, de laboratório clínico e imagiológicos de elevada qualidade, o que representa o compromisso tanto da direção como de cada um dos colaboradores.
              </p>
            </div>
          </div>

          {/* Card 2: Boas Práticas & RH */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-white border border-slate-200 text-sky-800 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Boas Práticas e Melhoria Contínua
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                O Centro Médico procura trabalhar segundo boas práticas, promovendo a melhoria contínua, a satisfação dos pacientes e o desenvolvimento contínuo dos seus recursos humanos.
              </p>
            </div>
          </div>

          {/* Card 3: Sustentabilidade & Recursos */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-white border border-slate-200 text-sky-800 flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Responsabilidade e Meio Ambiente
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                São também prioridades a utilização responsável e eficiente dos recursos materiais e energéticos, bem como o cuidado com o meio ambiente.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Regulatory Note */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-left text-xs text-slate-600 space-y-1">
          <p className="font-semibold text-slate-900">
            Referenciais Técnicos de Gestão da Qualidade:
          </p>
          <p className="leading-relaxed">
            Segundo informações institucionais do Centro Médico Gelvisol, os processos e padrões laboratoriais da clínica têm como base as boas práticas das normas ISO/IEC 17025:2005 e ISO 9001:2008 aplicadas aos serviços de diagnóstico e assistência médica.
          </p>
        </div>
      </div>
    </section>
  );
};
