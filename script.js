/**
 * AMARA PUTRI SONIAJI - DIGITAL PRODUCT ANALYST & BUSINESS ANALYSIS PORTFOLIO
 * Features: Active Nav Observer, Mobile Menu, Project Detail Modal, Lightbox Preview, Image Fallback
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
     -------------------------------------------------------------------------- */
  const projectImages = document.querySelectorAll('.project-img');

  projectImages.forEach(img => {
    img.addEventListener('error', function handleImageError() {
      const filename = this.getAttribute('data-filename') || 'image-placeholder.png';
      const caption = this.getAttribute('data-caption') || 'Visual Evidence';
      const wrapper = this.parentElement;

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
    'project-sipraker': {
      title: 'SIPRAKER — Internship Attendance System',
      subtitle: 'Business Process Analysis · Requirements · System Implementation · Testing',
      category: 'Digital Solution & Business Process Analysis',
      year: '2026',
      role: 'Business Process & System Analysis | Developer',
      organization: 'PT PLN Indonesia Power UBP Semarang',
      sections: [
        {
          num: '01',
          title: 'Context',
          content: 'SIPRAKER is an internal internship attendance system developed for PT PLN Indonesia Power UBP Semarang to replace a manual, paper-based attendance and leave tracking process.'
        },
        {
          num: '02',
          title: 'Problem & Objective',
          content: 'The existing attendance process relied on physical attendance sheets and informal leave coordination. Humas administrators spent considerable manual effort recording daily entries, reconciling attendance summaries at the end of each cohort, and verifying completion certificates. The objective was to design and implement a centralized digital workflow.'
        },
        {
          num: '03',
          title: 'My Role & Responsibilities',
          content: 'Engaged directly with Humas administrators to analyze existing workflows and gather user needs. Modeled AS-IS and TO-BE business processes in BPMN 2.0 using Bizagi Modeler, translated process pain points into functional requirements, designed the database schema, developed the web application, and executed functional test verification.'
        },
        {
          num: '04',
          title: 'Process Analysis (AS-IS)',
          content: 'Mapped the manual attendance journey from initial participant arrival through monthly review and certificate issuance. Identified key bottlenecks: delayed status visibility, manual arithmetic recap errors, and lack of real-time validation.'
        },
        {
          num: '05',
          title: 'Requirements & Scope',
          list: [
            'Attendance Recording: Secure participant check-in with automatic timestamping.',
            'Leave Submission: Digital leave form with attachment support and structured admin approval status.',
            'Admin Dashboard: Real-time oversight of daily attendance numbers and participant status.',
            'Automated Recap: Instant cohort-based attendance calculation and reporting export.',
            'Public QR Verification: Secure public verification endpoint for official completion certificates.'
          ]
        },
        {
          num: '06',
          title: 'Solution & TO-BE Workflow',
          content: 'Implemented the TO-BE workflow where participants log attendance directly via the web portal, while administrators monitor data and approve leave requests in real time. Built using Laravel 12, PHP, MySQL, Blade, and Tailwind CSS.'
        },
        {
          num: '07',
          title: 'Testing & Verification',
          content: 'Conducted functional testing across all user paths (participant check-in, invalid date handling, admin approval toggles, recap calculations, and public QR scans) to ensure compliance with the defined requirements and expected workflows.'
        },
        {
          num: '08',
          title: 'Outcome & Impact',
          content: 'Delivered an operational, centralized attendance management system that eliminated paper logs, reduced administrative verification time, and established an auditable digital trail for internship cohorts.'
        }
      ],
      tools: ['BPMN 2.0', 'Bizagi Modeler', 'Requirements Engineering', 'Laravel 12', 'PHP', 'MySQL', 'Functional Testing']
    },

    'project-specflow': {
      title: 'SpecFlow AI — AI-Assisted Requirements & Impact Analysis',
      subtitle: 'IT Business Analysis · Product Requirements · Solution Design',
      category: 'IT Business Analysis & Product Requirements',
      year: '2026',
      role: 'IT Business Analyst (Refactory Hackathon x Telkom University)',
      achievement: '🏆 3rd Place – Rising Innovator',
      sections: [
        {
          num: '01',
          title: 'Context',
          content: 'SpecFlow AI was a hackathon product concept developed during the Refactory Hackathon x Telkom University, awarded 3rd Place – Rising Innovator.'
        },
        {
          num: '02',
          title: 'Problem & Objective',
          content: 'When business requirements unexpectedly shift during agile software development, teams often struggle to quickly identify the technical dependencies, database schemas, and API contracts affected. The objective was to design an AI-powered requirements assistant that parses natural language requirements and maps architectural impacts.'
        },
        {
          num: '03',
          title: 'My Role & Responsibilities',
          content: 'Served as the IT Business Analyst responsible for product scope formulation, user stories, acceptance criteria, Product Requirements Document (PRD), and C4 Context architecture mapping.'
        },
        {
          num: '04',
          title: 'User Story & Need Analysis',
          quote: '“As a Project Manager, I want to instantly generate an automated technical impact analysis when business requirements unexpectedly change, so that the engineering team can avoid manually tracing architectural impacts and reduce the risk of project delays.”',
          content: 'Identified the core workflow disconnect between non-technical project managers defining requirements and technical engineers tracing architectural dependencies.'
        },
        {
          num: '05',
          title: 'Requirements & PRD Structure',
          list: [
            'FR-01: Natural language requirement ingestion and entity extraction.',
            'FR-02: Impact analysis engine correlating changed user stories with codebase metadata.',
            'FR-03: Visual dependency mapping and automated change summary report generation.'
          ]
        },
        {
          num: '06',
          title: 'Solution Concept & C4 Architecture',
          content: 'Modeled the C4 Level 1 System Context Diagram defining interactions between Project Managers, the SpecFlow AI engine, third-party LLM providers, and engineering repository services.'
        },
        {
          num: '07',
          title: 'Outcome & Validation',
          content: 'Delivered a complete PRD, user story backlog, and architectural concept that was pitched to hackathon judges, winning 3rd Place – Rising Innovator.'
        }
      ],
      tools: ['PRD Writing', 'User Stories & Acceptance Criteria', 'C4 Architecture Model', 'Requirements Engineering', 'Figma']
    },

    'project-automation': {
      title: 'Process Automation — From Manual Workflow to Digital Process',
      subtitle: 'Process Improvement · Workflow Analysis · Digital Automation',
      category: 'Process Improvement & Digital Automation',
      year: '2025',
      role: 'Process Improvement & Automation Contributor',
      achievement: 'Official Copyright (HKI) Protected',
      sections: [
        {
          num: '01',
          title: 'Context',
          content: 'Reviewed an existing administrative workflow to identify manual redundancies, eliminate operational friction, and support the development of a cloud automation solution.'
        },
        {
          num: '02',
          title: 'Problem & Objective',
          content: 'Administrative personnel previously handled recurring submissions through manual copy-pasting, physical tracking sheets, and manual email notifications. This created processing delays and increased risk of data entry inconsistencies.'
        },
        {
          num: '03',
          title: 'My Role & Responsibilities',
          content: 'Analyzed the manual administrative workflow, pinpointed repetitive bottlenecks suitable for automation, formulated flow logic and trigger criteria, supported the implementation in Microsoft Power Automate, and validated flow execution.'
        },
        {
          num: '04',
          title: 'Workflow Analysis & Opportunity',
          content: 'Decomposed the end-to-end task cycle to identify rules-based activities: automated submission detection, data extraction, centralized record synchronization, and condition-based email dispatch.'
        },
        {
          num: '05',
          title: 'Automated Solution Implementation',
          list: [
            'Automated Cloud Trigger: Listens for incoming digital form submissions.',
            'Data Parsing & Sync: Automatically parses input attributes and logs them into structured records.',
            'Notification & Approval Routing: Triggers automated notification emails and routing alerts to relevant personnel.',
            'Audit Logging: Maintains an automated timestamped audit trail of all processed items.'
          ]
        },
        {
          num: '06',
          title: 'Outcome & Impact',
          content: 'Eliminated manual copy-paste overhead, shortened turnaround time for administrative updates, and secured official intellectual property (HKI) copyright recognition.'
        }
      ],
      tools: ['Microsoft Power Automate', 'Workflow Analysis', 'Process Improvement', 'Process Documentation']
    },

    'project-bpmn': {
      title: 'Faculty Business Process Mapping',
      subtitle: 'Business Process Analysis · BPMN · Process Architecture',
      category: 'Business Process Analysis & BPMN',
      year: '2024',
      role: 'Business Process Analyst / BPMN Modelling Contributor',
      organization: 'Diponegoro University',
      sections: [
        {
          num: '01',
          title: 'Context',
          content: 'A faculty-wide business process mapping project conducted as an academic research project requested by a lecturer at Diponegoro University.'
        },
        {
          num: '02',
          title: 'Problem & Objective',
          content: 'The faculty required a standardized, visual, and hierarchical documentation of its operational processes across multiple divisions to ensure SOP alignment, clarify administrative responsibilities, and support institutional accreditation.'
        },
        {
          num: '03',
          title: 'My Role & Responsibilities',
          content: 'Reviewed faculty standard operating procedure documents, mapped organizational process hierarchies across three structured levels, identified multi-stakeholder roles, and authored standardized BPMN 2.0 diagrams.'
        },
        {
          num: '04',
          title: 'Process Hierarchy Architecture',
          list: [
            'Level 0 (Process Landscape): High-level overview of core faculty operational domains (Academic & Student Affairs, Resource Management, Department Administration).',
            'Level 1 (Process Groups): Decomposition of main functional areas into individual Standard Operating Procedures (SOPs).',
            'Level 2 (Detailed Workflow): Granular BPMN 2.0 workflows illustrating activity sequences, gateways, decision points, and stakeholder swimlanes.'
          ]
        },
        {
          num: '05',
          title: 'Artifacts & Stakeholder Alignment',
          content: 'Produced comprehensive BPMN models visualizing interactions between students, lecturers, academic heads, and administrative staff using Sparx Systems Enterprise Architect and Bizagi Modeler.'
        },
        {
          num: '06',
          title: 'Outcome & Value Delivered',
          content: 'Standardized process documentation across the faculty, eliminated ambiguity regarding SOP ownership, and established a modular process framework for continuous operational review.'
        }
      ],
      tools: ['BPMN 2.0', 'Sparx Systems Enterprise Architect', 'Bizagi Modeler', 'Process Decomposition', 'SOP Analysis']
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
      <p class="modal-subtitle-text" style="color:var(--text-secondary); margin-top:-1rem; margin-bottom:1.2rem; font-weight:500;">${data.subtitle || ''}</p>
      
      ${data.achievement ? `<div class="award-badge" style="display:inline-block; margin-bottom:1.4rem;">${data.achievement}</div>` : ''}
      
      <div class="modal-section role-badge-box" style="background:var(--bg-subtle); padding:1rem 1.2rem; border-radius:var(--radius-md); border:1px solid var(--border-color); margin-bottom:1.8rem;">
        <p style="margin-bottom:0.2rem;"><strong>Role:</strong> ${data.role}</p>
        ${data.organization ? `<p style="margin-bottom:0; color:var(--text-muted); font-size:0.9rem;"><strong>Organization:</strong> ${data.organization}</p>` : ''}
      </div>
    `;

    if (data.sections && data.sections.length > 0) {
      data.sections.forEach(sec => {
        htmlContent += `
          <div class="modal-section">
            <h4 class="modal-section-title"><span style="color:var(--accent-blue); opacity:0.8; margin-right:0.4rem;">${sec.num}</span> ${sec.title}</h4>
            ${sec.content ? `<p>${sec.content}</p>` : ''}
            ${sec.quote ? `
              <div class="user-story-card" style="margin: 0.8rem 0;">
                <blockquote class="user-story-text" style="font-size:0.95rem;">${sec.quote}</blockquote>
              </div>
            ` : ''}
            ${sec.list ? `
              <ul class="bullet-list" style="margin-top:0.4rem;">
                ${sec.list.map(item => `<li>${item}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `;
      });
    }

    if (data.tools && data.tools.length > 0) {
      htmlContent += `
        <div class="modal-section" style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border-color);">
          <h4 class="modal-section-title">Tools & Competencies Applied</h4>
          <div class="tech-pill-container" style="margin-top:0.6rem;">
            ${data.tools.map(tool => `<span class="tech-pill">${tool}</span>`).join('')}
          </div>
        </div>
      `;
    }

    modalBody.innerHTML = htmlContent;
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

  // Close modals on Escape key press
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

});
