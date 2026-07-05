/* Frolik + Co — motion layer.
   Lenis smooth scroll + GSAP ScrollTrigger. Gentle, editorial, never hyperactive.
   Everything degrades: no JS → content visible; reduced motion → reveal all, no scrub. */

(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  /* Split the intro paragraph into word spans (needed before any early return
     so the CSS word-dim styling always has spans to fully light up). */
  var introText = document.querySelector('[data-words]');
  var wordSpans = [];
  if (introText) {
    var words = introText.textContent.trim().split(/\s+/);
    introText.innerHTML = words
      .map(function (w) { return '<span class="w">' + w + '</span>'; })
      .join(' ');
    wordSpans = Array.prototype.slice.call(introText.querySelectorAll('.w'));
  }

  if (prefersReduced || !hasGsap) {
    /* Reduced-motion / no-libs mode: show everything, no scrub. */
    document.documentElement.classList.add('reduce-motion');
    wordSpans.forEach(function (s) { s.classList.add('is-on'); });
    document.querySelectorAll('.image-reveal').forEach(function (el) {
      el.classList.add('is-revealed');
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Lenis smooth scroll, driven by GSAP's ticker ---------- */
  if (typeof window.Lenis !== 'undefined') {
    var lenis = new Lenis({ lerp: 0.11 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  var soft = 'power3.out';

  /* ---------- Hero entrance: staggered line reveal with blur-removal ---------- */
  var heroTl = gsap.timeline({ defaults: { ease: soft } });
  heroTl
    .to('.hero__line > span', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.1,
      stagger: 0.14,
      startAt: { opacity: 0, y: '105%', filter: 'blur(6px)' }
    }, 0.15)
    .to('.hero .reveal', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.1,
      startAt: { opacity: 0, y: 28 }
    }, 0.6);

  /* ---------- Hero shapes: differential parallax on scroll ---------- */
  document.querySelectorAll('.hero .shape').forEach(function (el) {
    var speed = parseFloat(el.dataset.speed || '0.5');
    gsap.to(el, {
      y: function () { return -window.innerHeight * speed * 0.45; },
      rotation: (speed - 0.5) * 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6
      }
    });
  });

  /* Fade the scroll cue out early */
  gsap.to('.hero__scrollcue', {
    opacity: 0,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '25% top', scrub: true }
  });

  /* ---------- Generic soft upward reveals ---------- */
  gsap.utils.toArray('.reveal').forEach(function (el) {
    if (el.closest('.hero')) return; /* hero handles its own */
    gsap.fromTo(el,
      { opacity: 0, y: 32, filter: 'blur(4px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)',
        duration: 0.9, ease: soft,
        scrollTrigger: { trigger: el, start: 'top 86%' }
      });
  });

  /* Cards: staggered rise per grid */
  gsap.utils.toArray('.work__grid, .services__grid').forEach(function (grid) {
    var cards = grid.querySelectorAll('.reveal-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 48 },
      {
        opacity: 1, y: 0,
        duration: 1, ease: soft, stagger: 0.12,
        scrollTrigger: { trigger: grid, start: 'top 82%' }
      });
  });

  /* ---------- Studio intro: word-by-word brighten, scrubbed ---------- */
  var wordEls = document.querySelectorAll('.intro__text .w');
  if (wordEls.length) {
    var lit = 0;
    ScrollTrigger.create({
      trigger: '.intro__panel',
      start: 'top 75%',
      end: 'top 30%',
      scrub: true,
      onUpdate: function (self) {
        var target = Math.round(self.progress * wordEls.length);
        while (lit < target) { wordEls[lit].classList.add('is-on'); lit++; }
        while (lit > target) { lit--; wordEls[lit].classList.remove('is-on'); }
      }
    });
  }

  /* ---------- Kids image: masked reveal ---------- */
  document.querySelectorAll('.image-reveal').forEach(function (el) {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: function () { el.classList.add('is-revealed'); }
    });
  });

  /* Kids band border draws attention with a slight settle */
  gsap.fromTo('.kids__band',
    { scale: 0.975 },
    {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: '.kids__band', start: 'top 90%', end: 'top 45%', scrub: 0.5 }
    });

  /* ---------- Process: coral rule draws across, steps pop in sequence ---------- */
  var rule = document.querySelector('.process__rule line');
  if (rule) {
    gsap.to(rule, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.process__steps',
        start: 'top 80%',
        end: 'top 35%',
        scrub: 0.5
      }
    });
  }
  gsap.fromTo('.process-step',
    { opacity: 0, y: 26 },
    {
      opacity: 1, y: 0,
      duration: 0.8, ease: soft, stagger: 0.14,
      scrollTrigger: { trigger: '.process__steps', start: 'top 78%' }
    });

  /* ---------- Final CTA: the door opens — frame expands as you arrive ---------- */
  gsap.fromTo('.cta__door',
    { scale: 0.92, borderRadius: '48% 48% 32px 32px' },
    {
      scale: 1, borderRadius: '200px 200px 32px 32px',
      ease: 'none',
      scrollTrigger: { trigger: '.cta', start: 'top 95%', end: 'top 40%', scrub: 0.6 }
    });
  gsap.fromTo('.cta__light',
    { opacity: 0 },
    {
      opacity: 0.8, ease: 'none',
      scrollTrigger: { trigger: '.cta', start: 'top 80%', end: 'top 30%', scrub: true }
    });
})();
