/* Frolik+Co — shared page behaviours.
   Every feature is optional: it binds only if its markup exists, so any page
   can load this file. All scroll-coupled effects share ONE rAF loop.
   Load with `defer`, AFTER partials.js (needs the injected .nav). */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var nav = document.getElementById('nav');

  /* ── Reveal on scroll ─────────────────────────────────────────────── */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
        /* clear stagger delay so hover transitions stay snappy */
        if (e.target.style.transitionDelay) {
          setTimeout(function () { e.target.style.transitionDelay = ''; }, 1000);
        }
      }
    });
  }, { threshold: 0.18 });
  document.querySelectorAll('.reveal, .reveal-pop').forEach(function (el) { io.observe(el); });

  /* ── Count-up stats ───────────────────────────────────────────────── */
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      var el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix || '';
      if (reduced) { el.textContent = target + suffix; return; }
      var t0 = performance.now(), dur = 1400;
      (function tick(now) {
        var p = Math.min((now - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(function (el) { cio.observe(el); });

  /* ── Media photos ─────────────────────────────────────────────────────
     Each .media-img covers its flat-colour/motif placeholder well. When the
     .webp is absent the image is hidden and the placeholder shows through —
     so URLs can be wired ahead of the real files (drop file in → it appears). */
  document.querySelectorAll('img[data-media]').forEach(function (img) {
    function settle(ok) {
      img.classList.toggle('media-missing', !ok);
      if (img.parentElement) img.parentElement.classList.toggle('has-photo', ok);
    }
    img.addEventListener('load', function () { settle(img.naturalWidth > 0); });
    img.addEventListener('error', function () { settle(false); });
    if (img.complete) settle(img.naturalWidth > 0);   /* already resolved before JS ran */
  });

  /* ── Marquee content ──────────────────────────────────────────────── */
  var WORDS = ['Residential', '✳', 'Commercial', '✳', 'Workspace', '✳', "Kids' spaces", '✳', 'Ahmedabad', '✳'];
  var marquees = Array.prototype.slice.call(document.querySelectorAll('[data-marquee]'));
  marquees.forEach(function (track) {
    var words = track.dataset.words ? track.dataset.words.split('|') : WORDS;
    var html = '';
    for (var r = 0; r < 6; r++) {
      html += words.map(function (w) {
        return '<span' + (w === '✳' ? ' class="star"' : '') + '>' + w + '</span>';
      }).join('');
    }
    track.innerHTML = html;
  });

  /* ── Card filter (Work / Journal) ─────────────────────────────────────
     Markup: a `.filter-bar[data-filter-key="cat"]` holding `.pill[data-value]`
     buttons; grid items carry `data-cat` (or the matching key). Toggles [hidden];
     pre-applies from `?cat=` so filtered category URLs land correctly. No-JS:
     bar is inert and every card stays visible — work is never hidden behind JS. */
  var filterBar = document.querySelector('.filter-bar[data-filter-key]');
  if (filterBar) {
    var fkey = filterBar.dataset.filterKey;
    var pills = Array.prototype.slice.call(filterBar.querySelectorAll('.pill'));
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-' + fkey + ']'));
    var applyFilter = function (val) {
      pills.forEach(function (p) {
        var on = p.dataset.value === val;
        p.classList.toggle('active', on);
        p.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      items.forEach(function (it) {
        it.hidden = !(val === 'all' || it.getAttribute('data-' + fkey) === val);
      });
    };
    pills.forEach(function (p) {
      p.addEventListener('click', function () {
        applyFilter(p.dataset.value);
        try { history.replaceState(null, '', '?' + fkey + '=' + p.dataset.value); } catch (e) {}
      });
    });
    var q = new URLSearchParams(location.search).get(fkey);
    applyFilter(q && pills.some(function (p) { return p.dataset.value === q; }) ? q : 'all');
  }

  /* ── Contact form: ?type= prefill + graceful submit ───────────────────
     No backend yet — validate, then swap the form for the success message.
     (Wire a real endpoint later; markup + copy are launch-ready.) */
  var typeSel = document.getElementById('projectType');
  if (typeSel) {
    var t = new URLSearchParams(location.search).get('type');
    if (t) {
      Array.prototype.slice.call(typeSel.options).forEach(function (o) {
        if (o.value === t) typeSel.value = t;
      });
    }
  }
  var enquiry = document.getElementById('enquiryForm');
  if (enquiry) {
    enquiry.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!enquiry.checkValidity()) { enquiry.reportValidity(); return; }
      enquiry.hidden = true;
      var ok = document.getElementById('formSuccess');
      if (ok) { ok.hidden = false; ok.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); }
    });
  }

  /* ── Pinned horizontal work gallery ───────────────────────────────── */
  var pin = document.getElementById('workPin');
  var rail = document.getElementById('workRail');
  var progress = document.getElementById('workProgress');
  var railMax = 0;
  function sizePin() {
    if (!pin || !rail) return;
    if (reduced) {
      /* no pinning — let the rail scroll natively */
      pin.style.height = 'auto';
      var sticky = pin.querySelector('.work-sticky');
      sticky.style.position = 'static';
      sticky.style.height = 'auto';
      sticky.style.overflowX = 'auto';
      sticky.style.padding = '64px 0';
      railMax = 0;
      return;
    }
    railMax = Math.max(0, rail.scrollWidth - document.documentElement.clientWidth);
    pin.style.height = (window.innerHeight + railMax) + 'px';
  }

  /* ── Process line fill ────────────────────────────────────────────── */
  var steps = document.getElementById('steps');
  var lineFill = document.getElementById('lineFill');
  var stepEls = Array.prototype.slice.call(document.querySelectorAll('[data-step]'));

  /* ── One rAF-driven scroll loop for everything scroll-coupled ────── */
  var stickers = Array.prototype.slice.call(document.querySelectorAll('.sticker[data-speed]'));
  var drift = 0, lastY = window.scrollY, ticking = false;

  function frame() {
    ticking = false;
    var y = window.scrollY;
    lastY = y;
    var vh = window.innerHeight;

    if (nav) nav.classList.toggle('scrolled', y > 24);

    if (reduced) return;

    /* marquees: constant drift + scroll scrub */
    drift += 0.6;
    marquees.forEach(function (t) {
      var dir = +t.dataset.dir || 1;
      var span = t.scrollWidth / 2;
      var x = ((drift + y * 0.5) * dir) % span;
      if (x > 0) x -= span;
      t.style.transform = 'translateX(' + x + 'px)';
    });

    /* parallax stickers */
    stickers.forEach(function (s) {
      var rect = s.parentElement.getBoundingClientRect();
      var offset = (rect.top + rect.height / 2 - vh / 2) * -parseFloat(s.dataset.speed) * 0.3;
      s.style.transform = 'translateY(' + offset.toFixed(1) + 'px)';
    });

    /* pinned work rail */
    if (pin && rail) {
      var pr = pin.getBoundingClientRect();
      var traveled = Math.min(Math.max(-pr.top, 0), railMax);
      rail.style.transform = 'translateX(' + (-traveled) + 'px)';
      if (progress) progress.style.width = (railMax ? (traveled / railMax) * 100 : 0) + '%';
    }

    /* process line + step dots */
    if (steps && lineFill) {
      var sr = steps.getBoundingClientRect();
      var total = sr.height - 56;
      var passed = Math.min(Math.max(vh * 0.65 - sr.top - 28, 0), total);
      lineFill.style.height = passed + 'px';
      stepEls.forEach(function (st) {
        var dot = st.getBoundingClientRect();
        st.classList.toggle('lit', dot.top + 28 < vh * 0.65);
      });
    }
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { sizePin(); onScroll(); });
  window.addEventListener('load', function () { sizePin(); onScroll(); });
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(function () { sizePin(); }); }

  /* idle marquee drift even without scrolling */
  if (!reduced) {
    (function idle() { onScroll(); requestAnimationFrame(idle); })();
  } else {
    /* static fallbacks: full process line, lit steps, no progress bar */
    if (lineFill) lineFill.style.height = 'calc(100% - 56px)';
    stepEls.forEach(function (st) { st.classList.add('lit'); });
    if (progress) progress.parentElement.style.display = 'none';
  }

  sizePin();
  frame();
})();
