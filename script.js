/**
 * Centro Médico Especializado Gelvisol - JavaScript Puro (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar Lucide Icons se disponível
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // 2. Header com sombra ao rolar a página
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('btn-back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) {
      if (scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Menu Mobile (Gaveta / Drawer)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu(open) {
    if (!mobileMenuDrawer || !mobileMenuOverlay) return;
    if (open) {
      mobileMenuDrawer.classList.remove('translate-x-full');
      mobileMenuOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenuDrawer.classList.add('translate-x-full');
      mobileMenuOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', () => toggleMobileMenu(false));
  }

  const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
  if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener('click', () => toggleMobileMenu(false));
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // 4. Modal de Marcação de Consulta
  const appointmentModal = document.getElementById('appointment-modal');
  const openModalButtons = document.querySelectorAll('[data-open-appointment]');
  const closeModalButtons = document.querySelectorAll('[data-close-appointment]');
  const appointmentForm = document.getElementById('appointment-form');
  const appointmentSuccess = document.getElementById('appointment-success');

  function openAppointmentModal(specialtyName = '') {
    if (!appointmentModal) return;
    appointmentModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Se passou uma especialidade, seleciona-a no formulário
    if (specialtyName) {
      const selectElem = document.getElementById('modal-field-specialty');
      if (selectElem) {
        selectElem.value = specialtyName;
      }
    }
  }

  function closeAppointmentModal() {
    if (!appointmentModal) return;
    appointmentModal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (appointmentSuccess) appointmentSuccess.classList.add('hidden');
      if (appointmentForm) {
        appointmentForm.classList.remove('hidden');
        appointmentForm.reset();
      }
    }, 300);
  }

  openModalButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const spec = btn.getAttribute('data-specialty') || '';
      openAppointmentModal(spec);
    });
  });

  closeModalButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAppointmentModal();
    });
  });

  // Fechar ao clicar no fundo escuro
  if (appointmentModal) {
    appointmentModal.addEventListener('click', (e) => {
      if (e.target === appointmentModal) {
        closeAppointmentModal();
      }
    });
  }

  // Tecla ESC fecha menu e modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAppointmentModal();
      toggleMobileMenu(false);
    }
  });

  // Submissão do Formulário de Marcação
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('modal-field-name')?.value || '';
      const phone = document.getElementById('modal-field-phone')?.value || '';
      const specialty = document.getElementById('modal-field-specialty')?.value || '';
      const date = document.getElementById('modal-field-date')?.value || '';
      const shift = document.getElementById('modal-field-shift')?.value || 'Manhã';
      const notes = document.getElementById('modal-field-notes')?.value || '';

      // Redirecionar para o WhatsApp com a mensagem formatada
      const text = `Olá! Gostaria de agendar uma consulta no Centro Médico Gelvisol:\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Especialidade:* ${specialty}\n*Data Preferencial:* ${date || 'A combinar'} (${shift})\n${notes ? `*Observações:* ${notes}` : ''}`;
      const whatsappUrl = `https://wa.me/244949934949?text=${encodeURIComponent(text)}`;

      // Abre WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');

      // Exibe mensagem de confirmação no modal
      appointmentForm.classList.add('hidden');
      if (appointmentSuccess) {
        appointmentSuccess.classList.remove('hidden');
      }
    });
  }

  // Formulário de Contacto Rápido na Secção de Contactos
  const quickContactForm = document.getElementById('quick-contact-form');
  const qcFeedback = document.getElementById('qc-feedback');
  if (quickContactForm) {
    quickContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('qc-name')?.value || '';
      const phone = document.getElementById('qc-phone')?.value || '';
      const message = document.getElementById('qc-message')?.value || '';

      const text = `Olá! Mensagem de contacto através do site Gelvisol:\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Mensagem:* ${message}`;
      const whatsappUrl = `https://wa.me/244949934949?text=${encodeURIComponent(text)}`;
      
      try {
        window.open(whatsappUrl, '_blank');
      } catch (_) {
        window.location.href = whatsappUrl;
      }

      if (qcFeedback) {
        qcFeedback.classList.remove('hidden');
        setTimeout(() => {
          qcFeedback.classList.add('hidden');
        }, 5000);
      }
      quickContactForm.reset();
    });
  }

  // 5. Filtro e Pesquisa de Especialidades
  const specialtySearch = document.getElementById('specialty-search');
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const specialtyCards = document.querySelectorAll('.specialty-card');
  const noResultsMsg = document.getElementById('no-specialties-found');
  let currentCategory = 'all';

  function filterSpecialties() {
    const searchTerm = specialtySearch ? specialtySearch.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    specialtyCards.forEach((card) => {
      const name = card.getAttribute('data-name')?.toLowerCase() || '';
      const desc = card.getAttribute('data-desc')?.toLowerCase() || '';
      const cat = card.getAttribute('data-category') || '';

      const matchesSearch = !searchTerm || name.includes(searchTerm) || desc.includes(searchTerm);
      const matchesCategory = currentCategory === 'all' || cat === currentCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultsMsg) {
      if (visibleCount === 0) {
        noResultsMsg.classList.remove('hidden');
      } else {
        noResultsMsg.classList.add('hidden');
      }
    }
  }

  if (specialtySearch) {
    specialtySearch.addEventListener('input', filterSpecialties);
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      filterSpecialties();
    });
  });

  // 6. Salvaguarda e tratamento automático de imagens
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('error', function () {
      const src = this.getAttribute('src');
      if (src && !src.startsWith('public/')) {
        this.src = 'public/' + src;
      }
    });
  });
});
