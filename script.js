/**
 * AMARA PUTRI SONIAJI - PORTFOLIO INTERACTIVITY SCRIPT
 * Features: Active Nav Observer, Mobile Menu, Project Detail Modal, SVG Image Fallback
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. MOBILE NAVIGATION TOGGLE
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });

    // Close menu when clicking a nav link
    const navLinks = siteNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. SCROLL SPY FOR ACTIVE NAVIGATION LINK
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinksAll.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  /* --------------------------------------------------------------------------
     3. IMAGE FALLBACK SYSTEM
     Replaces broken or missing image links with structured SVG Placeholders
     -------------------------------------------------------------------------- */
  const projectImages = document.querySelectorAll('.project-img');

  projectImages.forEach(img => {
    img.addEventListener('error', function handleImageError() {
      const filename = this.getAttribute('data-filename') || 'image-placeholder.png';
      const caption = this.getAttribute('data-caption') || 'Visual Evidence';
      const wrapper = this.parentElement;

      // Replace wrapper content with clean SVG placeholder
      wrapper.innerHTML = `
        <div class="image-fallback-placeholder">
          <svg class="fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span class="fallback-title">${caption}</span>
          <code class="fallback-filename">images/${filename}</code>
          <span class="fallback-sub">Place real image file in <code>/images/</code> directory to display screenshot.</span>
        </div>
      `;
    });
  });

  /* --------------------------------------------------------------------------
     4. PROJECT DETAIL MODAL DATA & CONTROLLER
     -------------------------------------------------------------------------- */
  const projectData = {
    'project-1': {
      title: 'Faculty Business Process Mapping',
      category: 'Research Project · Business Process Analysis · BPMN',
      year: '2024',
      role: 'Business Process Analyst / BPMN Modelling Contributor',
      context: 'Conducted in 2024 as an academic research project requested by a lecturer at Diponegoro University. The goal was to map, standardize, and structure operational workflows across all faculty divisions.',
      deliverables: [
        'BPMN Level 0 High-Level Faculty Process Map',
        'BPMN Level 1 SOP Process Breakdown across 4 primary process groups',
        'BPMN Level 2 Detailed Process Workflows in Sparx EA / Bizagi',
        'Stakeholder Matrix (Students, Lecturers, Administrative Staff)',
        'Process Documentation & Simulation Logs'
      ],
      methodology: 'Analysed existing Standard Operating Procedures (SOPs), grouped operational functions into high-level categories (Department Management, Academic & Student Affairs, Resource Management, Administration), and modeled full process hierarchies from macro Level 0 down to execution Level 2.',
      tools: ['Sparx Systems Enterprise Architect (EA)', 'Bizagi Modeler', 'BPMN 2.0 Standard', 'SOP Analysis']
    },
    'project-2': {
      title: 'SpecFlow AI – Hackathon Product Concept',
      category: 'Requirements Analysis · Product Documentation · C4 Context Diagram',
      year: '2026',
      role: 'IT Business Analyst (Refactory x Telkom University Hackathon)',
      achievement: '🏆 3rd Place – Rising Innovator Award',
      context: 'Developed during the Refactory x Telkom University Hackathon in May 2026. Served as the IT Business Analyst responsible for defining the product scope, structuring user stories, preparing the PRD, and illustrating system relationships using the C4 Model.',
      featuredUserStory: '“As a Project Manager, I want to instantly generate an automated technical impact analysis when business requirements unexpectedly change, so that the engineering team can avoid manually tracing architectural impacts and reduce the risk of project delays.”',
      deliverables: [
        'Product Requirements Document (PRD)',
        'C4 Architecture Context Diagram',
        'User Story Backlog & Acceptance Criteria',
        'Judge Presentation Deck & Value Proposition'
      ],
      methodology: 'Identified key friction points in agile software development when requirements shift rapidly. Structured functional requirements and mapped software boundary interactions using C4 Context level diagrams to align business managers and technical engineers.',
      tools: ['C4 Architecture Model', 'PRD Structuring', 'User Story Writing', 'Figma', 'Presentation Design']
    },
    'project-3': {
      title: 'SIPRAKER – Internship Attendance System',
      category: 'Business Process Analysis · Requirements Documentation · System Implementation',
      year: '2026',
      role: 'Solo Developer / Business Process and System Analysis Contributor',
      organization: 'PT PLN Indonesia Power UBP Semarang (Jan 2026)',
      context: 'Developed during a one-month IT internship at PT PLN Indonesia Power UBP Semarang to digitize manual internship attendance and leave tracking workflows.',
      supportedFeatures: [
        'Attendance recording with timestamping',
        'Leave submission & approval workflow',
        'Humas Admin dashboard for participant oversight',
        'Automated attendance recap generation',
        'Public QR code verification for official certificates'
      ],
      deliverables: [
        'AS-IS and TO-BE Workflow Comparison Maps',
        'BPMN Process Diagrams in Bizagi Modeler',
        'Functional Database Schema & Entity Relationship Model',
        'Working Web System Implementation in Laravel 12',
        'System User & Functional Documentation'
      ],
      methodology: 'Engaged directly with Humas administrators to conduct requirement gathering interviews. Modeled AS-IS manual workflows, designed TO-BE automated process flows in Bizagi, designed the MySQL database schema, and implemented the functional web application.',
      tools: ['Laravel 12', 'PHP', 'MySQL', 'Bizagi Modeler', 'BPMN 2.0', 'Functional Testing']
    }
  };

  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');
  const openModalButtons = document.querySelectorAll('.open-modal-btn');

  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    let htmlContent = `
      <div class="modal-header-meta">
        <span class="project-year">${data.year}</span>
        <span class="project-category">${data.category}</span>
      </div>
      <h2 class="modal-title" id="modalTitle">${data.title}</h2>
      
      ${data.achievement ? `<div class="award-badge" style="display:inline-block; margin-bottom:1.2rem;">${data.achievement}</div>` : ''}
      
      <div class="modal-section">
        <h4 class="modal-section-title">My Role & Context</h4>
        <p><strong>Role:</strong> ${data.role}</p>
        ${data.organization ? `<p><strong>Organization:</strong> ${data.organization}</p>` : ''}
        <p>${data.context}</p>
      </div>
    `;

    if (data.featuredUserStory) {
      htmlContent += `
        <div class="modal-section">
          <h4 class="modal-section-title">Featured User Story</h4>
          <div class="user-story-card" style="margin-top:0.5rem;">
            <blockquote class="user-story-text">${data.featuredUserStory}</blockquote>
          </div>
        </div>
      `;
    }

    if (data.supportedFeatures) {
      htmlContent += `
        <div class="modal-section">
          <h4 class="modal-section-title">Supported System Features</h4>
          <ul class="bullet-list">
            ${data.supportedFeatures.map(feat => `<li>${feat}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    htmlContent += `
      <div class="modal-section">
        <h4 class="modal-section-title">Approach & Methodology</h4>
        <p>${data.methodology}</p>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">Key Deliverables</h4>
        <ul class="bullet-list">
          ${data.deliverables.map(del => `<li>${del}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">Tools & Frameworks</h4>
        <div class="tech-pill-container">
          ${data.tools.map(tool => `<span class="tech-pill">${tool}</span>`).join('')}
        </div>
      </div>
    `;

    modalBody.innerHTML = htmlContent;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeProjectModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attach event listeners to detail buttons
  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectId = e.currentTarget.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Close modal on backdrop click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('active')) {
        closeProjectModal();
      }
      if (lightboxOverlay && lightboxOverlay.classList.contains('active')) {
        closeLightboxModal();
      }
    }
  });

  /* --------------------------------------------------------------------------
     5. IMAGE LIGHTBOX PREVIEW CONTROLLER
     -------------------------------------------------------------------------- */
  const lightboxOverlay = document.getElementById('imageLightboxModal');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDescription = document.getElementById('lightboxDescription');
  const galleryItems = document.querySelectorAll('.gallery-item');

  function openLightboxModal(imgSrc, titleText, descText) {
    if (!lightboxOverlay || !lightboxImg) return;

    lightboxImg.src = imgSrc;
    lightboxTitle.innerText = titleText || 'Image Preview';
    lightboxDescription.innerText = descText || '';

    lightboxOverlay.classList.add('active');
    lightboxOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightboxModal() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('active');
    lightboxOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Prevent trigger if clicking an explicit inner action link if any
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

      const imgEl = item.querySelector('.project-img');
      const titleEl = item.querySelector('.gallery-caption strong');
      const descEl = item.querySelector('.gallery-caption p');

      const imgSrc = imgEl ? imgEl.src : '';
      const titleText = titleEl ? titleEl.innerText : (imgEl ? imgEl.getAttribute('data-caption') : '');
      const descText = descEl ? descEl.innerText : '';

      if (imgSrc) {
        openLightboxModal(imgSrc, titleText, descText);
      }
    });
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightboxModal);
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) {
        closeLightboxModal();
      }
    });
  }

});

