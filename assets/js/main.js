/**
 * Main JavaScript for Luxury Fragrance Platform
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header on Scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile Menu Toggle (Placeholder logic)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Dark Mode Logic ---
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      if (themeIcon) {
        if (isDark) {
          themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
          themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
      }
    });
  }

  // --- RTL Logic ---
  const rtlToggle = document.getElementById('rtl-toggle');
  const htmlTag = document.documentElement;
  if (rtlToggle) {
    const savedDir = localStorage.getItem('direction');
    
    if (savedDir === 'rtl') {
      htmlTag.setAttribute('dir', 'rtl');
      rtlToggle.style.color = 'var(--color-accent)';
    }

    rtlToggle.addEventListener('click', () => {
      const currentDir = htmlTag.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      htmlTag.setAttribute('dir', newDir);
      localStorage.setItem('direction', newDir);
      rtlToggle.style.color = newDir === 'rtl' ? 'var(--color-accent)' : 'inherit';
    });
  }
});
