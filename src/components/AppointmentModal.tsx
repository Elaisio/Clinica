import React, { useState } from 'react';
import { SPECIALTIES, SPECIALIZED_CONSULTATIONS } from '../data/clinicData';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Send,
  MessageSquare,
} from 'lucide-react';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialty?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialSpecialty = 'Clínica Geral',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [protocol, setProtocol] = useState('');
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    specialty: initialSpecialty,
    preferredDate: '',
    preferredPeriod: 'manha',
    serviceType: 'consulta',
    notes: '',
  });

  // Update specialty if changed from parent prop
  React.useEffect(() => {
    if (initialSpecialty) {
      setFormData((prev) => ({ ...prev, specialty: initialSpecialty }));
    }
  }, [initialSpecialty]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedProtocol = `GELV-${Math.floor(100000 + Math.random() * 900000)}`;
    setProtocol(generatedProtocol);
    setSubmitted(true);
  };

  const handleWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Olá, Centro Médico Especializado Gelvisol! Gostaria de agendar um atendimento:\n\n` +
      `• Protocolo: ${protocol}\n` +
      `• Nome: ${formData.fullName}\n` +
      `• Especialidade: ${formData.specialty}\n` +
      `• Tipo: ${formData.serviceType}\n` +
      `• Data sugerida: ${formData.preferredDate || 'A combinar'}\n` +
      `• Período: ${formData.preferredPeriod === 'manha' ? 'Manhã (07h30 - 12h00)' : 'Tarde (13h00 - 18h00)'}\n` +
      `• Contacto: ${formData.phone}\n` +
      (formData.notes ? `• Observações: ${formData.notes}\n` : '') +
      `\nAguardo confirmação da vossa equipa.`
    );
    window.open(`https://wa.me/244923000000?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full p-6 sm:p-8 my-8 border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Protocolo Gerado: {protocol}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-3 font-display">
                Solicitação Registada com Sucesso!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                Sr(a). <strong>{formData.fullName}</strong>, a sua solicitação para a especialidade de <strong>{formData.specialty}</strong> foi recebida pela nossa equipa em Luanda.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 text-left text-xs text-slate-600 space-y-1.5">
              <p><strong>Especialidade:</strong> {formData.specialty}</p>
              <p><strong>Período pretendido:</strong> {formData.preferredPeriod === 'manha' ? 'Manhã' : 'Tarde'}</p>
              <p><strong>Telefone indicado:</strong> {formData.phone}</p>
              <p className="text-slate-500 pt-1 border-t border-slate-200/50">
                Entraremos em contacto para confirmação de data e horário.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppConfirmation}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-colors text-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar de Imediato pelo WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full text-xs font-semibold text-slate-500 hover:text-slate-800 py-2 cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1">
                Agendamento Online
              </p>
              <h3 className="text-xl font-bold text-slate-900">
                Marcar Consulta ou Exame
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Centro Médico Especializado Gelvisol • Luanda, Angola
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Tipo de Atendimento
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'consulta', label: 'Consulta' },
                    { id: 'exame', label: 'Exame' },
                    { id: 'laboratorio', label: 'Laboratório' },
                    { id: 'cirurgia', label: 'Cirurgia' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          serviceType: type.id as AppointmentFormData['serviceType'],
                        })
                      }
                      className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        formData.serviceType === type.id
                          ? 'bg-sky-50 border-sky-500 text-sky-700 font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specialty Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Especialidade Médica ou Serviço *
                </label>
                <select
                  required
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all font-medium"
                >
                  <optgroup label="18 Especialidades Médicas">
                    {SPECIALTIES.map((spec) => (
                      <option key={spec.id} value={spec.name}>
                        {spec.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Consultas Especializadas">
                    {SPECIALIZED_CONSULTATIONS.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Cirurgias Minimamente Invasivas">
                    <option value="Cirurgia Geral (Minimamente Invasiva)">
                      Cirurgia Geral (Minimamente Invasiva)
                    </option>
                    <option value="Ortopedia (Cirurgia Minimamente Invasiva)">
                      Ortopedia (Cirurgia Minimamente Invasiva)
                    </option>
                    <option value="Urologia (Cirurgia Minimamente Invasiva)">
                      Urologia (Cirurgia Minimamente Invasiva)
                    </option>
                  </optgroup>
                </select>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nome Completo do Paciente *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Nome e Sobrenome"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 923 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Date & Period */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Data Pretendida (Opcional)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Período Preferencial
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredPeriod: 'manha' })}
                      className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        formData.preferredPeriod === 'manha'
                          ? 'bg-sky-50 border-sky-500 text-sky-700 font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Manhã (07h30-12h)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredPeriod: 'tarde' })}
                      className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        formData.preferredPeriod === 'tarde'
                          ? 'bg-sky-50 border-sky-500 text-sky-700 font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Tarde (13h-18h)
                    </button>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Observações Clínicas ou Sintomas (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Informações adicionais para a equipa médica..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-200 cursor-pointer text-sm active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submeter Pedido de Marcação</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
