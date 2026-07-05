/* Frolik + Co - shared header & footer, injected on every page.
   Edit nav/footer once here. Mount points: #site-header / #site-footer. */

(function () {
  var HEADER_HTML = [
    '<header class="header" id="header">',
    '  <div class="container header__inner">',
    '    <a class="header__logo" href="/">frolik <em>+</em> co</a>',
    '    <nav class="header__nav" aria-label="Main">',
    '      <a href="/work">Work</a>',
    '      <a href="/kids-spaces">Kids Spaces</a>',
    '      <a href="/services">Services</a>',
    '      <a href="/about">About</a>',
    '      <a href="/journal">Journal</a>',
    '      <a class="btn btn--primary" href="/contact">Start a Project <span class="btn__plus" aria-hidden="true">+</span></a>',
    '    </nav>',
    '    <button class="header__menu-btn" id="menu-open" aria-expanded="false" aria-controls="mobile-menu">Menu <span class="btn__plus" aria-hidden="true">+</span></button>',
    '  </div>',
    '</header>',
    '<div class="mobile-menu" id="mobile-menu" aria-hidden="true">',
    '  <button class="mobile-menu__close" id="menu-close">Close <span aria-hidden="true">&times;</span></button>',
    '  <nav aria-label="Mobile">',
    '    <a href="/work">Work</a>',
    '    <a href="/kids-spaces">Kids Spaces</a>',
    '    <a href="/services">Services</a>',
    '    <a href="/process">Process</a>',
    '    <a href="/about">About</a>',
    '    <a href="/journal">Journal</a>',
    '  </nav>',
    '  <a class="btn btn--primary" href="/contact">Start a Project <span class="btn__plus" aria-hidden="true">+</span></a>',
    '  <span class="mobile-menu__shape" aria-hidden="true"></span>',
    '</div>'
  ].join('\n');

  /* TODO: replace placeholder phone/WhatsApp/email/Instagram with real studio details */
  var FOOTER_HTML = [
    '<footer class="footer">',
    '  <div class="container">',
    '    <div class="footer__top">',
    '      <div class="footer__brand">',
    '        <a class="header__logo" href="/">frolik <em>+</em> co</a>',
    '        <p class="footer__nap">Interior design studio<br>Ahmedabad, Gujarat, India</p>',
    '        <p class="footer__tag">Let’s make room for wonder.</p>',
    '      </div>',
    '      <nav class="footer__nav" aria-label="Footer">',
    '        <a href="/work">Work</a>',
    '        <a href="/kids-spaces">Kids Spaces</a>',
    '        <a href="/services">Services</a>',
    '        <a href="/process">Process</a>',
    '        <a href="/about">About</a>',
    '        <a href="/journal">Journal</a>',
    '        <a href="/contact">Contact</a>',
    '      </nav>',
    '    </div>',
    '    <hr class="footer__rule">',
    '    <div class="footer__bottom">',
    '      <div class="footer__contacts">',
    '        <a href="tel:+910000000000">Call</a>',
    '        <a href="https://wa.me/910000000000">WhatsApp</a>',
    '        <a href="mailto:hello@frolik.co.in">Email</a>',
    '        <a href="https://www.instagram.com/frolikandco" rel="noopener">Instagram</a>',
    '      </div>',
    '      <p>© Frolik + Co</p>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  var headerMount = document.getElementById('site-header');
  var footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.outerHTML = HEADER_HTML;
  if (footerMount) footerMount.outerHTML = FOOTER_HTML;

  /* Mobile menu open/close */
  var menu = document.getElementById('mobile-menu');
  var openBtn = document.getElementById('menu-open');
  var closeBtn = document.getElementById('menu-close');

  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    if (openBtn) openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open && closeBtn) closeBtn.focus();
    if (!open && openBtn) openBtn.focus();
  }

  if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false);
    });
  }

  /* Header: transparent over hero → ivory blur once scrolled */
  var header = document.getElementById('header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
