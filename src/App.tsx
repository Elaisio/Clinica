import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Presentation } from './components/Presentation';
import { Specialties } from './components/Specialties';
import { SpecializedConsultations } from './components/SpecializedConsultations';
import { SurgerySection } from './components/SurgerySection';
import { AboutUs } from './components/AboutUs';
import { Values } from './components/Values';
import { QualityPolicy } from './components/QualityPolicy';
import { Infrastructure } from './components/Infrastructure';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('Clínica Geral');

  const handleOpenAppointment = (specialtyName?: string) => {
    if (specialtyName) {
      setSelectedSpecialty(specialtyName);
    }
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setAppointmentModalOpen(false);
  };

  const handleScrollToServices = () => {
    const target = document.querySelector('#servicos') || document.querySelector('#estrutura');
    if (target) {
      const navOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Section 4: Hero — Início */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* Section 5: Apresentação da Clínica */}
        <Presentation />

        {/* Section 6: Especialidades Médicas (18 Especialidades) */}
        <Specialties onSelectSpecialty={(spec) => handleOpenAppointment(spec)} />

        {/* Anchor point for Serviços menu */}
        <div id="servicos" className="scroll-mt-24">
          {/* Section 7: Consultas Especializadas */}
          <SpecializedConsultations
            onSelectConsultation={(title) => handleOpenAppointment(title)}
          />

          {/* Section 8: Cirurgias Minimamente Invasivas */}
          <SurgerySection
            onLearnMore={handleScrollToServices}
            onOpenAppointment={() => handleOpenAppointment('Cirurgia Geral (Minimamente Invasiva)')}
          />

          {/* Section 12: Estrutura e Tecnologia */}
          <Infrastructure />
        </div>

        {/* Section 9: Quem Somos (Missão e Objetivos) */}
        <AboutUs />

        {/* Section 10: Os nossos valores */}
        <Values />

        {/* Section 11: Política de Qualidade */}
        <QualityPolicy />

        {/* Section 13: Porque Escolher o Gelvisol */}
        <WhyChooseUs />

        {/* Section 14: Contactos */}
        <ContactSection onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointment}
        initialSpecialty={selectedSpecialty}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppButton />
    </div>
  );
}
