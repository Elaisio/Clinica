import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenAppointment: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAppointment }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Informações Gerais',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contactos" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1.5">
            Atendimento ao Paciente
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Contactos e Localização
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Estamos em Luanda, prontos para responder às suas dúvidas e agendar o seu atendimento médico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-slate-900">
                Canais de Atendimento
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Localização</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Centro Médico Especializado Gelvisol
                      <br />
                      Luanda, Angola
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Telefones</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      <a href="tel:+244923000000" className="hover:text-sky-800 font-medium block">
                        (+244) 923 000 000
                      </a>
                      <a href="tel:+244945000000" className="hover:text-sky-800 font-medium block">
                        (+244) 945 000 000
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Correio Eletrónico</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      <a href="mailto:contacto@gelvisol.ao" className="hover:text-sky-800 font-medium">
                        contacto@gelvisol.ao
                      </a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Horário de Atendimento</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Segunda a Sexta: 07h30 às 19h00
                      <br />
                      Sábados: 08h00 às 14h00
                      <br />
                      <span className="text-sky-800 font-semibold">
                        Internamento e Cuidados Cirúrgicos com apoio permanente
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp / Quick Action */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href="https://wa.me/244923000000?text=Olá,%20gostaria%20de%20solicitar%20informações%20sobre%20as%20consultas%20no%20Centro%20Médico%20Gelvisol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition-colors text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Envie uma Mensagem
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Preencha o formulário e responderemos com a maior brevidade.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-sky-800 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-md border border-sky-200 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Marcar Consulta</span>
                </button>
              </div>

              {formSubmitted ? (
                <div className="p-6 text-center bg-emerald-50 rounded-lg border border-emerald-200 space-y-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">
                    Mensagem Enviada
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Agradecemos o seu contacto. A equipa do Centro Médico Gelvisol responderá em breve.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subject: 'Informações Gerais',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold text-emerald-800 hover:underline cursor-pointer"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: João Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-sky-800 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: +244 923 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-sky-800 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Assunto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-sky-800 focus:bg-white"
                    >
                      <option value="Informações Gerais">Informações Gerais</option>
                      <option value="Agendamento de Consultas">Agendamento de Consultas</option>
                      <option value="Exames e Laboratório">Exames e Laboratório</option>
                      <option value="Cirurgias">Cirurgias e Internamento</option>
                      <option value="Outro">Outro Assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva a sua solicitação ou dúvida..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-sky-800 focus:bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-sky-800 hover:bg-sky-900 text-white font-medium py-2.5 px-4 rounded-md shadow-sm transition-colors cursor-pointer text-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar Mensagem</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
