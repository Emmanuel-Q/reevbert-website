document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
    document.querySelectorAll('svg').forEach((icon) => {
      icon.style.color = 'var(--orange)';
    });
  }

  const currentPage = document.body.dataset.page;
  const yearsActive = document.querySelector('[data-start-year]');
  if (yearsActive) {
    yearsActive.textContent = String(new Date().getFullYear() - Number(yearsActive.dataset.startYear));
  }

  const contactDetails = document.querySelector('.contact-details');
  if (contactDetails) {
    const contactDetails = document.querySelector('.contact-details');
    if (contactDetails) {
      const address = contactDetails.querySelector('address');
      const contactList = contactDetails.querySelector('.contact-list');
      if (address) address.innerHTML = 'Head Office, Community Nine (9) Market<br>Office No. TMA/CIX/ST/102 &amp; 103<br>Behind Goil Filling Station<br>Tema, Ghana';
      if (contactList) contactList.innerHTML = '<a href="tel:+233244981273"><i data-lucide="phone"></i><span>+233 24 498 1273</span></a><a href="tel:+233244862384"><i data-lucide="phone"></i><span>+233 24 486 2384</span></a><a class="whatsapp-link" href="https://wa.me/233244981273" target="_blank" rel="noreferrer"><i data-lucide="message-circle"></i><span>WhatsApp: +233 24 498 1273</span></a><a href="mailto:reevbert.mcaghana@gmail.com"><i data-lucide="mail"></i><span>reevbert.mcaghana@gmail.com</span></a><a href="mailto:ringreeves@gmail.com"><i data-lucide="mail"></i><span>ringreeves@gmail.com</span></a><a href="https://maps.google.com/?q=Behind+Goil+Filling+Station+Community+Nine+Market+Tema+Ghana" target="_blank" rel="noreferrer"><i data-lucide="map-pin"></i><span>Open in Google Maps</span></a>';
      const poBox = contactDetails.querySelector('.po-box') || document.createElement('p');
      poBox.className = 'po-box';
      poBox.textContent = 'P.O. BOX CE 11860, Tema, Ghana';
      if (!poBox.parentElement) contactDetails.appendChild(poBox);
    }
  }

  const footer = document.querySelector('.site-footer');
  if (footer) {
    const footerTop = footer.querySelector('.footer-top');
    const brand = footerTop.querySelector('.brand-footer');
    const description = footerTop.querySelector('p');
    const getInTouch = footerTop.querySelector('.footer-contact');
    footerTop.innerHTML = '';
    const logoColumn = document.createElement('div');
    logoColumn.className = 'footer-logo-column';
    logoColumn.append(brand, description, getInTouch);
    footerTop.appendChild(logoColumn);
    footerTop.insertAdjacentHTML('beforeend', '<div class="footer-contact-column"><span class="footer-column-label">Contact</span><a href="tel:+233244981273"><i data-lucide="phone"></i><span>+233 24 498 1273</span></a><a href="tel:+233244862384"><i data-lucide="phone"></i><span>+233 24 486 2384</span></a><a href="https://wa.me/233244981273" target="_blank" rel="noreferrer"><i data-lucide="message-circle"></i><span>WhatsApp</span></a><a href="mailto:reevbert.mcaghana@gmail.com"><i data-lucide="mail"></i><span>reevbert.mcaghana@gmail.com</span></a><a href="mailto:ringreeves@gmail.com"><i data-lucide="mail"></i><span>ringreeves@gmail.com</span></a></div><nav class="footer-nav" aria-label="Footer navigation"><span class="footer-column-label">Explore</span><a href="index.html" data-link="home">Home</a><a href="about.html" data-link="about">About</a><a href="services.html" data-link="services">Services</a><a href="contact.html" data-link="contact">Contact</a></nav>');
  }
  if (window.lucide) {
    lucide.createIcons();
    document.querySelectorAll('svg').forEach((icon) => { icon.style.color = 'var(--orange)'; });
  }

  document.querySelectorAll('[data-link]').forEach((link) => {
    if (link.dataset.link === currentPage) link.classList.add('active');
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('.form-status');
  const inquiryRecipient = 'sampsonjubell@gmail.com';
  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim() || 'Customer';
      const email = (formData.get('email') || '').toString().trim();
      const interest = (formData.get('interest') || 'General enquiry').toString();
      const message = (formData.get('message') || '').toString().trim() || 'No message provided.';

      const subject = encodeURIComponent(`Reevbert enquiry from ${name} - ${interest}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`
      );

      status.textContent = 'Opening your email app to send the enquiry...';
      window.location.href = `mailto:${inquiryRecipient}?subject=${subject}&body=${body}`;
      form.reset();
    });
  }

  const galleryTrigger = document.querySelector('.gallery-trigger');
  const galleryLightbox = document.querySelector('.gallery-lightbox');
  const galleryImages = [...document.querySelectorAll('.gallery-item img')];
  if (galleryLightbox && galleryImages.length) {
    const lightboxImage = galleryLightbox.querySelector('img');
    const lightboxCaption = galleryLightbox.querySelector('figcaption');
    const closeButton = galleryLightbox.querySelector('.gallery-close');
    const prevButton = galleryLightbox.querySelector('.gallery-prev');
    const nextButton = galleryLightbox.querySelector('.gallery-next');
    let currentGalleryIndex = 0;

    const closeGallery = () => {
      galleryLightbox.classList.remove('open');
      galleryLightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    const openGallery = (index) => {
      const safeIndex = (index + galleryImages.length) % galleryImages.length;
      currentGalleryIndex = safeIndex;
      const image = galleryImages[currentGalleryIndex];
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = image.alt;
      galleryLightbox.classList.add('open');
      galleryLightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    if (galleryTrigger) {
      galleryTrigger.addEventListener('click', () => openGallery(0));
    }

    galleryImages.forEach((image, index) => {
      const figure = image.closest('.gallery-item');
      if (figure) {
        figure.addEventListener('click', () => openGallery(index));
      }
    });

    closeButton.addEventListener('click', closeGallery);
    galleryLightbox.addEventListener('click', (event) => {
      if (event.target === galleryLightbox) closeGallery();
    });
    prevButton.addEventListener('click', () => openGallery(currentGalleryIndex - 1));
    nextButton.addEventListener('click', () => openGallery(currentGalleryIndex + 1));
    document.addEventListener('keydown', (event) => {
      if (!galleryLightbox.classList.contains('open')) return;
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowRight') openGallery(currentGalleryIndex + 1);
      if (event.key === 'ArrowLeft') openGallery(currentGalleryIndex - 1);
    });

    if (window.lucide) lucide.createIcons();
  }

  const carousel = document.querySelector('.hero-carousel');
  if (carousel) {
    const slides = [...carousel.querySelectorAll('.hero-slide')];
    const dots = [...carousel.querySelectorAll('.carousel-dot')];
    const pauseButton = carousel.querySelector('[data-carousel="pause"]');
    let currentSlide = 0;
    let isPaused = false;
    let rotation = null;

    const updatePauseButton = () => {
      pauseButton.setAttribute('aria-label', isPaused ? 'Resume banner rotation' : 'Pause banner rotation');
      pauseButton.setAttribute('aria-pressed', String(isPaused));
      pauseButton.innerHTML = `<i data-lucide="${isPaused ? 'play' : 'pause'}"></i>`;

      if (window.lucide) {
        lucide.createIcons();
      }
      document.querySelectorAll('.hero-carousel svg').forEach((icon) => {
        icon.style.color = 'var(--orange)';
      });
    };

    const showSlide = (index) => {
      currentSlide = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === currentSlide));
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === currentSlide);
        dot.setAttribute('aria-selected', String(dotIndex === currentSlide));
      });
    };

    const rotate = () => {
      if (!isPaused) {
        showSlide(currentSlide + 1);
      }
    };

    const restartRotation = () => {
      if (isPaused) return;
      clearInterval(rotation);
      rotation = setInterval(rotate, 5500);
    };

    const startRotation = () => {
      if (isPaused) return;
      clearInterval(rotation);
      rotation = setInterval(rotate, 5500);
    };

    if (pauseButton) {
      pauseButton.addEventListener('click', () => {
        isPaused = !isPaused;
        updatePauseButton();

        if (isPaused) {
          clearInterval(rotation);
          return;
        }

        startRotation();
      });
    }

    carousel.querySelector('[data-carousel="previous"]').addEventListener('click', () => {
      showSlide(currentSlide - 1);
      restartRotation();
    });
    carousel.querySelector('[data-carousel="next"]').addEventListener('click', () => {
      showSlide(currentSlide + 1);
      restartRotation();
    });
    dots.forEach((dot, index) => dot.addEventListener('click', () => {
      showSlide(index);
      restartRotation();
    }));

    updatePauseButton();
    startRotation();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isPaused = true;
      pauseButton.hidden = true;
      clearInterval(rotation);
      updatePauseButton();
    }
  }
});

