import React, { useState, useMemo } from 'react';
import { SPECIALTIES } from '../data/clinicData';
import {
  Search,
  X,
  Stethoscope,
  Activity,
  HeartPulse,
  Baby,
  Smile,
  ShieldCheck,
  Sparkles,
  Eye,
  Heart,
  Apple,
  Bone,
  ShieldAlert,
  Scissors,
  FileSpreadsheet,
  Compass,
  Brain,
  Crosshair,
  Ear,
} from 'lucide-react';

interface SpecialtiesProps {
  onSelectSpecialty: (specialtyName: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectSpecialty }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'clinica' | 'cirurgica' | 'diagnostico'>('all');

  const categories = [
    { id: 'all', label: 'Todas as Especialidades', count: SPECIALTIES.length },
    { id: 'clinica', label: 'Clínicas', count: SPECIALTIES.filter((s) => s.category === 'clinica').length },
    { id: 'cirurgica', label: 'Cirúrgicas', count: SPECIALTIES.filter((s) => s.category === 'cirurgica').length },
    { id: 'diagnostico', label: 'Diagnóstico & Exames', count: SPECIALTIES.filter((s) => s.category === 'diagnostico').length },
  ] as const;

  const filteredSpecialties = useMemo(() => {
    return SPECIALTIES.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const normalizedSearch = searchTerm.trim().toLowerCase();
      const matchesSearch =
        normalizedSearch === '' ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'Activity': return Activity;
      case 'HeartPulse': return HeartPulse;
      case 'Baby': return Baby;
      case 'Smile': return Smile;
      case 'ShieldCheck': return ShieldCheck;
      case 'Sparkles': return Sparkles;
      case 'Eye': return Eye;
      case 'Heart': return Heart;
      case 'Apple': return Apple;
      case 'Bone': return Bone;
      case 'ShieldAlert': return ShieldAlert;
      case 'Scissors': return Scissors;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'Compass': return Compass;
      case 'Brain': return Brain;
      case 'Crosshair': return Crosshair;
      case 'Ear': return Ear;
      default: return Stethoscope;
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setActiveCategory('all');
  };

  return (
    <section id="especialidades" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-800 mb-1.5">
              Corpo Clínico e Especialidades
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Nossas Especialidades Médicas
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Disponibilizamos consultas e acompanhamento clínico em 18 áreas especializadas com médicos dedicados em Luanda.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Mostrando <strong className="text-slate-800">{filteredSpecialties.length}</strong> de {SPECIALTIES.length} especialidades
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="search-specialties-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar especialidade (ex: Cardiologia, Pediatria, Cirurgia, Urologia...)"
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 hover:bg-slate-50/80 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-sky-800 transition-colors"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Limpar pesquisa"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap text-xs font-semibold px-3 py-2.5 rounded-lg border transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-sky-800 border-sky-800 text-white shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredSpecialties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSpecialties.map((item) => {
              const IconComp = getIcon(item.icon);
              return (
                <div
                  key={item.id}
                  id={`especialidade-${item.id}`}
                  onClick={() => onSelectSpecialty(item.name)}
                  className="group bg-white rounded-lg p-5 border border-slate-200 hover:border-sky-800 hover:shadow-xs transition-all duration-150 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="w-10 h-10 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center mb-3.5">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-sky-800 transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-sky-800">
                    <span>Marcar Consulta</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-xl border border-dashed border-slate-300 p-8 sm:p-12 text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-800">
              Nenhuma especialidade encontrada
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              Não encontramos resultados para &quot;{searchTerm}&quot;. Verifique o termo digitado ou explore todas as opções.
            </p>
            <button
              type="button"
              onClick={handleClear}
              className="mt-4 inline-flex items-center gap-1.5 bg-sky-800 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Ver Todas as Especialidades
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
