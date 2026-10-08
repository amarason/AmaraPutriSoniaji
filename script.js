/**
 * AMARA PUTRI SONIAJI — PERSONAL WEBSITE & PRODUCT PORTFOLIO
 * Features: Mobile Nav Toggle, Scroll Spy, Case Study Deep-Dive Modal, Lightbox Preview, Image Fallback
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. MOBILE NAVIGATION TOGGLE
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    const navLinks = siteNav.querySelectorAll('.nav-item, .nav-cta');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside header
    document.addEventListener('click', (e) => {
      if (!siteNav.contains(e.target) && !navToggle.contains(e.target) && siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. SCROLL SPY FOR ACTIVE NAVIGATION LINK
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-item');

  function updateActiveNavOnScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
  updateActiveNavOnScroll();

  /* --------------------------------------------------------------------------
     3. IMAGE FALLBACK SYSTEM
     -------------------------------------------------------------------------- */
  const projectImages = document.querySelectorAll('.project-img');

  projectImages.forEach(img => {
    img.addEventListener('error', function handleImageError() {
      const caption = this.getAttribute('data-caption') || 'Project Diagram';
      const container = this.parentElement;

      if (container) {
        container.innerHTML = `
          <div style="padding: 2.5rem 1.5rem; text-align: center; background-color: var(--bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--border-strong);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 0.5rem; color: var(--text-muted);">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <div style="font-family: var(--font-heading); font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">${caption}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Visual artifact referenced in portfolio</div>
          </div>
        `;
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. CASE STUDY DEEP-DIVE MODAL DATA & CONTROLLER
     -------------------------------------------------------------------------- */
  const projectDetails = {
    'project-specflow': {
      title: 'SpecFlow AI',
      subtitle: 'AI-Powered Requirements & Change Impact Analysis',
      tag: 'AI Product · Product Requirements · Hackathon Project',
      year: '2026',
      role: 'IT Business Analyst (24-Hour Hackathon)',
      organization: 'Refactory Hackathon × Telkom University',
      award: '🏆 3rd Place – Rising Innovator',
      sections: [
        {
          num: '01',
          title: 'Context & Product Opportunity',
          content: 'SpecFlow AI was conceived and structured during the 24-hour Refactory Hackathon × Telkom University, where our team was awarded 3rd Place – Rising Innovator. The project targeted the acute operational friction software teams face when business requirements shift spontaneously mid-sprint.'
        },
        {
          num: '02',
          title: 'The Problem & User Story',
          content: 'When requirements change unexpectedly, product managers and engineering leads often lack an immediate way to understand which architectural modules, endpoints, database schemas, and external contracts are impacted. Teams resort to manual code tracing, which introduces risk, scope ambiguity, and delivery delays.',
          quote: '“As a Project Manager, I want to automatically generate an impact analysis report when business requirements change, so that technical teams can identify affected architectural components without manual code tracing.”'
        },
        {
          num: '03',
          title: 'My Role & Product Deliverables',
          content: 'Authored the Product Requirements Document (PRD) for SpecFlow, translating user needs into core features, workflows, and LLM-driven technical requirements within a 24-hour hackathon timeframe.',
          list: [
            'Conducted rapid problem and user workflow analysis for technical teams.',
            'Defined functional boundaries and scoped features into MVP and future iterations.',
            'Authored functional requirements specifications (FR-01 through FR-03).',
            'Formulated actionable user stories with explicit acceptance criteria.',
            'Authored the C4 Model Level 1 System Context Diagram defining system boundaries.',
            'Structured the product value proposition and pitched the concept to hackathon judges.'
          ]
        },
        {
          num: '04',
          title: 'PRD Functional Scope Breakdown',
          list: [
            'FR-01 (Requirement Parsing): Ingests natural-language change requests and extracts structured actors, actions, data models, and business rules.',
            'FR-02 (Impact Analysis Engine): Correlates modified requirements against repository schemas, API contracts, and service dependencies.',
            'FR-03 (Visual Dependency & Diff Report): Generates an automated visual diff and technical impact summary for project leads and developers.'
          ]
        },
        {
          num: '05',
          title: 'System Context Architecture (C4 Model)',
          content: 'Structured a C4 Level 1 Context model showing interactions between the Project Manager, SpecFlow AI Analysis Engine, external LLM parsing providers, and Git repository metadata services.'
        },
        {
          num: '06',
          title: 'Outcome & Recognition',
          content: 'Presented the complete PRD, user stories, and system context architecture to the evaluation panel, winning 3rd Place – Rising Innovator.'
        }
      ],
      tools: ['PRD Authoring', 'User Stories & Acceptance Criteria', 'C4 Architecture Model', 'Requirements Engineering', 'Figma', 'System Context Mapping'],
      externalLink: {
        text: 'View C4 Diagram & Hackathon Materials (Google Drive)',
        url: 'https://drive.google.com/drive/folders/1xYXkWMc9mXzrjY4BOzLBuO_GVg_M9leM?usp=drive_link'
      }
    },

    'project-sipraker': {
      title: 'SIPRAKER',
      subtitle: 'Internship Attendance & Verification Management System',
      tag: 'Digital Product · Business Process · System Implementation',
      year: '2026',
      role: 'Business Process & System Analysis + Developer',
      organization: 'PT PLN Indonesia Power UBP Semarang',
      sections: [
        {
          num: '01',
          title: 'Context & Background',
          content: 'SIPRAKER is an internal internship attendance system developed for PT PLN Indonesia Power UBP Semarang to replace a manual, physical paper roster and uncoordinated leave management workflow.'
        },
        {
          num: '02',
          title: 'The Problem & AS-IS Process Analysis',
          content: 'Engaged with Humas administrators to analyze the existing workflow. The manual process involved paper sign-in sheets, informal leave requests via chat, manual monthly recap calculations, and physical completion certificates lacking digital authenticity verification. Mapped the AS-IS workflow in BPMN 2.0 to locate operational friction and data gaps.'
        },
        {
          num: '03',
          title: 'Requirements & Scope Translation',
          content: 'Translated administrator discussions and AS-IS process findings into concrete system requirements:',
          list: [
            'Daily Attendance Logging: Secure digital check-in with automatic timestamping and status tracking.',
            'Leave Management: Structured submission with reason notes and administrative approval status.',
            'Admin Dashboard: Real-time visibility into daily cohort attendance and pending leave reviews.',
            'Automated Recap Generation: Automated monthly attendance calculation eliminating manual arithmetic.',
            'Public QR Verification: Secure public verification endpoint for completed internship certificates.'
          ]
        },
        {
          num: '04',
          title: 'TO-BE Process & System Implementation',
          content: 'Modeled the TO-BE BPMN workflow integrating SIPRAKER into the daily routine. Developed the web application using Laravel 12, PHP, MySQL, Blade, and Tailwind CSS.'
        },
        {
          num: '05',
          title: 'Functional Testing & Verification',
          content: 'Conducted functional test verification across attendance recording, date boundary checks, leave approval flows, recap generation, and QR certificate lookups against defined acceptance criteria.'
        },
        {
          num: '06',
          title: 'Outcome & Deliverables',
          content: 'Delivered an operational, centralized attendance management system that eliminated paper rosters, streamlined leave review workflows, and provided an auditable digital log for internship cohorts.'
        }
      ],
      tools: ['BPMN 2.0', 'Bizagi Modeler', 'Requirements Engineering', 'Laravel 12', 'PHP', 'MySQL', 'Database Design', 'Functional Testing']
    },

    'project-automation': {
      title: 'Process Automation',
      subtitle: 'From Manual Workflow to Automated Digital Execution',
      tag: 'Process Improvement · Automation · Workflow Design',
      year: '2025',
      role: 'Process Improvement & Automation Contributor',
      organization: 'Intellectual Property Protected (HKI)',
      sections: [
        {
          num: '01',
          title: 'Context & Objective',
          content: 'Reviewed an existing administrative workflow to identify repetitive manual activities, eliminate operational bottlenecks, and implement a cloud-based automated process.'
        },
        {
          num: '02',
          title: 'Manual Workflow Analysis',
          content: 'The original manual process required staff to continuously monitor inbound submissions, manually copy and paste details into tracking spreadsheets, and draft individual status emails to stakeholders. This routine caused processing lags and risked data entry inconsistencies.'
        },
        {
          num: '03',
          title: 'Automated Solution Design (Power Automate)',
          content: 'Structured an automated cloud workflow in Microsoft Power Automate featuring automated submission listeners, data parsing, centralized spreadsheet synchronization, condition-based notification routing, and automated audit logging.'
        },
        {
          num: '04',
          title: 'Testing, Validation & Outcome',
          content: 'Validated flow triggers, branch conditions, and error-handling steps. The implementation eliminated repetitive manual copy-pasting, reduced administrative turnaround time, and received official intellectual property (HKI) copyright protection.'
        }
      ],
      tools: ['Microsoft Power Automate', 'Workflow Analysis', 'Process Improvement', 'Process Documentation', 'HKI Copyright Protection']
    },

    'project-bpmn': {
      title: 'Faculty Business Process Mapping',
      subtitle: 'Multi-Level Process Hierarchy & Standard Operating Procedure Architecture',
      tag: 'Business Process · BPMN · Process Architecture',
      year: '2024',
      role: 'Business Process Analyst / BPMN Modelling Contributor',
      organization: 'Diponegoro University',
      sections: [
        {
          num: '01',
          title: 'Context & Scope',
          content: 'An academic research project requested by a faculty lecturer to document, structure, and standardize business processes across the faculty—including academic and student affairs, department management, resource management, and administrative workflows.'
        },
        {
          num: '02',
          title: 'Process Hierarchy Architecture (Levels 0–2)',
          list: [
            'Level 0 (Process Landscape): High-level overview of core faculty operational domains.',
            'Level 1 (Process Groups): Decomposition of main functional areas into individual Standard Operating Procedures (SOPs).',
            'Level 2 (Detailed Workflow): Granular BPMN 2.0 workflows detailing activity sequences, gateways, decision points, and stakeholder swimlanes.'
          ]
        },
        {
          num: '03',
          title: 'Stakeholder Alignment & Modeling',
          content: 'Mapped cross-functional interactions between students, lecturers, faculty leadership, and administrative staff using Sparx Systems Enterprise Architect and Bizagi Modeler.'
        },
        {
          num: '04',
          title: 'Outcome & Key Competencies',
          content: 'Standardized process documentation, clarified SOP ownership boundaries, and demonstrated organizational process hierarchy modeling.'
        }
      ],
      tools: ['BPMN 2.0', 'Sparx Systems Enterprise Architect', 'Bizagi Modeler', 'Process Decomposition', 'SOP Analysis']
    }
  };

  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');
  const openModalButtons = document.querySelectorAll('.open-case-modal-btn');

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    let modalHTML = `
      <div class="modal-eyebrow-row">
        <span class="project-index">${data.year}</span>
        <span class="project-tagline">${data.tag}</span>
      </div>
      <h2 class="modal-title" id="modalTitle">${data.title}</h2>
      <div class="modal-subtitle">${data.subtitle}</div>

      <div class="modal-meta-box">
        <p><strong>Role:</strong> ${data.role}</p>
        ${data.organization ? `<p style="margin-top:0.2rem; color:var(--text-secondary); font-size:0.84rem;"><strong>Context / Organization:</strong> ${data.organization}</p>` : ''}
        ${data.award ? `<p style="margin-top:0.3rem; color:var(--accent-color); font-weight:700; font-size:0.84rem;">${data.award}</p>` : ''}
      </div>
    `;

    if (data.sections && data.sections.length > 0) {
      data.sections.forEach(sec => {
        modalHTML += `
          <div class="modal-section-item">
            <div class="modal-sec-header">
              <span class="modal-sec-num">${sec.num}</span>
              <span>${sec.title}</span>
            </div>
            ${sec.content ? `<p>${sec.content}</p>` : ''}
            ${sec.quote ? `
              <div class="user-story-callout" style="margin: 0.8rem 0;">
                <blockquote class="callout-quote">${sec.quote}</blockquote>
              </div>
            ` : ''}
            ${sec.list ? `
              <ul class="modal-bullet-list">
                ${sec.list.map(item => `<li>${item}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `;
      });
    }

    if (data.externalLink) {
      modalHTML += `
        <div style="margin: 1.5rem 0;">
          <a href="${data.externalLink.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <span>${data.externalLink.text}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      `;
    }

    if (data.tools && data.tools.length > 0) {
      modalHTML += `
        <div class="modal-tools-container">
          <div style="font-family:var(--font-heading); font-size:0.84rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); margin-bottom:0.75rem;">
            Tools & Competencies
          </div>
          <div class="skills-pill-row">
            ${data.tools.map(tool => `<span class="pill">${tool}</span>`).join('')}
          </div>
        </div>
      `;
    }

    modalBody.innerHTML = modalHTML;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectId = e.currentTarget.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. IMAGE LIGHTBOX PREVIEW CONTROLLER
     -------------------------------------------------------------------------- */
  const lightboxOverlay = document.getElementById('imageLightboxModal');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDescription = document.getElementById('lightboxDescription');
  const previewCards = document.querySelectorAll('.gallery-preview-card');

  function openLightbox(src, title, desc) {
    if (!lightboxOverlay || !lightboxImg) return;

    lightboxImg.src = src;
    lightboxTitle.textContent = title || 'Image Preview';
    lightboxDescription.textContent = desc || '';

    lightboxOverlay.classList.add('active');
    lightboxOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('active');
    lightboxOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  previewCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

      const src = card.getAttribute('data-lightbox-src');
      const title = card.getAttribute('data-lightbox-title');
      const desc = card.getAttribute('data-lightbox-desc');

      if (src) {
        openLightbox(src, title, desc);
      }
    });
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) {
        closeLightbox();
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. KEYBOARD ACCESSIBILITY (ESCAPE KEY CLOSE)
     -------------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('active')) {
        closeProjectModal();
      }
      if (lightboxOverlay && lightboxOverlay.classList.contains('active')) {
        closeLightbox();
      }
    }
  });

});
