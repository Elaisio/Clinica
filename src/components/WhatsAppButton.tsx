import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-xs px-3.5 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 max-w-xs animate-in fade-in duration-300">
          <span>Precisa de ajuda ou marcação? Fale connosco no WhatsApp.</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/244923000000?text=Olá,%20gostaria%20de%20obter%20informações%20sobre%20as%20consultas%20e%20serviços%20do%20Centro%20Médico%20Gelvisol."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Contactar Centro Médico Gelvisol via WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="sr-only">Contactar via WhatsApp</span>
      </a>
    </div>
  );
};
