/* Frolik+Co - shared header & footer.
   Usage: <div id="site-header"></div> after <body>, <div id="site-footer"></div>
   before the scripts. Load with `defer`, BEFORE main.js (main.js binds to .nav).

   Path-aware: pages in subfolders (work/, journal/) get a "../" prefix so every
   nav/footer link + the logo image resolve correctly from any depth. Each page's
   OWN <head> resources still use the matching relative prefix in its markup. */
(function () {
  'use strict';

  var KIDS_CHILDREN = [
    { href: 'kids-spaces/kids-bedrooms.html', label: "Kids' bedrooms" },
    { href: 'kids-spaces/playrooms.html', label: 'Playrooms' },
    { href: 'kids-spaces/study-rooms.html', label: 'Study rooms' },
    { href: 'kids-spaces/shared-sibling-rooms.html', label: 'Shared sibling rooms' },
  ];

  var SERVICES_CHILDREN = [
    { href: 'services/residential-interiors.html', label: 'Residential interiors' },
    { href: 'services/kids-spaces.html', label: "Kids' spaces" },
    { href: 'services/commercial-studio-interiors.html', label: 'Commercial & studio interiors' },
    { href: 'services/design-consultation.html', label: 'Design consultation' },
    { href: 'services/turnkey-execution.html', label: 'Turnkey execution' },
    { href: 'services/styling-decor.html', label: 'Styling & décor' },
  ];

  var LINKS = [
    { href: 'work.html', label: 'Work' },
    { href: 'kids-spaces.html', label: "Kids' spaces", children: KIDS_CHILDREN },
    { href: 'services.html', label: 'Services', children: SERVICES_CHILDREN },
    { href: 'process.html', label: 'Process' },
    { href: 'about.html', label: 'About' },
  ];

  /* depth prefix - strip the trailing "/file" then one "../" per remaining dir */
  var dir = location.pathname.replace(/\/[^\/]*$/, '');
  var segs = dir.split('/').filter(Boolean);
  var prefix = segs.map(function () { return '../'; }).join('');

  var file = (location.pathname.split('/').pop() || 'index.html');
  var currentRel = segs.concat(file).join('/');     /* e.g. "kids-spaces/study-rooms.html" */

  function isActive(href) {
    if (href === file) return true;                 /* exact page match */
    var base = href.replace('.html', '');           /* e.g. "work" */
    return segs.length > 0 && segs[0] === base;      /* subpage: /work/…, /services/… */
  }

  function childActive(href) { return href === currentRel; }

  var navLinks = LINKS.map(function (l) {
    var active = isActive(l.href) ? ' active' : '';

    if (!l.children) {
      return '<a class="nav-link' + active + '" href="' + prefix + l.href + '">' + l.label + '</a>';
    }

    var items = l.children.map(function (c) {
      var ca = childActive(c.href) ? ' class="active"' : '';
      return '<a href="' + prefix + c.href + '"' + ca + ' role="menuitem">' + c.label + '</a>';
    }).join('');

    return '<div class="nav-item has-dropdown">' +
        '<a class="nav-link' + active + '" href="' + prefix + l.href + '" aria-haspopup="true" aria-expanded="false">' +
          l.label +
          '<svg class="nav-caret" width="10" height="7" viewBox="0 0 10 7" aria-hidden="true">' +
            '<path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
          '</svg>' +
        '</a>' +
        '<div class="dropdown" role="menu">' + items + '</div>' +
      '</div>';
  }).join('');

  var HEADER =
    '<header class="nav" id="nav">' +
      '<div class="nav-inner">' +
        '<a class="logo" href="' + prefix + 'index.html">' +
          '<img src="' + prefix + 'assets/frolik-logo.jpeg" alt="Frolik+Co - interior design studio, Ahmedabad">' +
        '</a>' +
        '<nav class="nav-links">' + navLinks + '</nav>' +
        '<a class="btn btn-coral" href="' + prefix + 'contact.html">Let\'s talk</a>' +
      '</div>' +
    '</header>';

  var FOOTER =
    '<footer class="footer">' +
      '<div class="wrap">' +
        '<div class="footer-grid">' +
          '<div>' +
            '<a class="logo" href="' + prefix + 'index.html">' +
              '<img src="' + prefix + 'assets/frolik-logo.jpeg" alt="Frolik+Co - interior design studio, Ahmedabad">' +
            '</a>' +
            '<p>An interior design studio in Ahmedabad - homes, workspaces, commercial spaces, and the kids\' rooms we\'re known for.</p>' +
          '</div>' +
          '<div>' +
            '<h4>Studio</h4>' +
            '<ul>' +
              '<li><a href="' + prefix + 'work.html">Work</a></li>' +
              '<li><a href="' + prefix + 'process.html">Process</a></li>' +
              '<li><a href="' + prefix + 'about.html">About</a></li>' +
              '<li><a href="' + prefix + 'journal.html">Journal</a></li>' +
              '<li><a href="' + prefix + 'contact.html">Contact</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4><a href="' + prefix + 'services.html">Services</a></h4>' +
            '<ul>' +
              SERVICES_CHILDREN.map(function (c) {
                return '<li><a href="' + prefix + c.href + '">' + c.label + '</a></li>';
              }).join('') +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4><a href="' + prefix + 'kids-spaces.html">Kids\' spaces</a></h4>' +
            '<ul>' +
              KIDS_CHILDREN.map(function (c) {
                return '<li><a href="' + prefix + c.href + '">' + c.label + '</a></li>';
              }).join('') +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4>Say hello</h4>' +
            '<ul>' +
              '<li><a href="mailto:hello@frolik.co.in">hello@frolik.co.in</a></li>' +
              '<li><a href="https://wa.me/919876543210" target="_blank" rel="noopener">WhatsApp us</a></li>' +
              '<li><a href="https://www.instagram.com/frolikncodesigns/" target="_blank" rel="noopener">@frolikncodesigns</a></li>' +
              '<li>Ahmedabad, India</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>© 2026 Frolik+Co. All rights reserved.</span>' +
          '<span>Made with grown-up craft and a child\'s sense of play.</span>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var headerMount = document.getElementById('site-header');
  var footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.outerHTML = HEADER;
  if (footerMount) footerMount.outerHTML = FOOTER;
})();
