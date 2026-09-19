import React from 'react';
import { GelvisolLogo } from './GelvisolLogo';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface FooterProps {
  onOpenAppointment: () => void;
  onSelectSpecialty?: (name: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 inline-block">
              <GelvisolLogo variant="horizontal" size="md" inverted={true} />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              Centro médico polivalente localizado em Luanda, preparado para responder aos desafios da medicina moderna, com consultórios, laboratório, bloco operatório e salas de internamento VIP.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Competência técnica, tecnologia e humanização.</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Luanda, República de Angola</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center bg-sky-800 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Marcar Consulta Online</span>
              </button>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4 lg:pl-8 lg:border-l lg:border-slate-800/80">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white pb-2">
              Contactos e Atendimento
            </h4>
            <div className="space-y-4 text-xs text-slate-400">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+244923000000" className="hover:text-white block font-medium">
                    (+244) 923 000 000
                  </a>
                  <a href="tel:+244945000000" className="hover:text-white block font-medium">
                    (+244) 945 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a href="mailto:contacto@gelvisol.ao" className="hover:text-white font-medium">
                  contacto@gelvisol.ao
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <p className="font-medium text-slate-300">Segunda a Sexta: 07h30 às 19h00</p>
                  <p className="font-medium text-slate-300">Sábados: 08h00 às 14h00</p>
                  <p className="text-sky-400 mt-1">Internamento e Cuidados Cirúrgicos com apoio permanente</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Centro Médico Especializado Gelvisol. Todos os direitos reservados. Luanda, Angola.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Cuidados médicos com competência, tecnologia e humanização</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
