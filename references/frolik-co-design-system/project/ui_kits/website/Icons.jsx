// Small inline icon set (Lucide-style, 2px stroke) for the Frolik+Co site.
const _i = (paths, extra = {}) => ({ size = 22, stroke = 'currentColor', width = 2.2, ...rest } = {}) =>
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: extra.fill || 'none', stroke, strokeWidth: width, strokeLinecap: 'round', strokeLinejoin: 'round', ...rest },
    paths.map((d, i) => React.createElement('path', { key: i, d })));

window.FKIcons = {
  home: _i(['M3 10.5 12 3l9 7.5', 'M5 9.5V21h14V9.5']),
  briefcase: _i(['M4 8h16v11H4z', 'M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2', 'M4 13h16']),
  building: _i(['M5 21V4h10v17', 'M15 9h4v12', 'M8 8h1M8 12h1M8 16h1M12 8h0M12 12h0M12 16h0']),
  blocks: _i(['M4 4h7v7H4z', 'M14 9l4-4 4 4-4 4z', 'M14 14h6v6h-6z', 'M4 14h6v6H4z']),
  arrow: _i(['M5 12h14', 'M13 6l6 6-6 6']),
  arrowUpRight: _i(['M7 17 17 7', 'M8 7h9v9']),
  menu: _i(['M4 7h16', 'M4 12h16', 'M4 17h16']),
  x: _i(['M6 6l12 12', 'M18 6 6 18']),
  mail: _i(['M4 6h16v12H4z', 'm4 7 8 6 8-6']),
  instagram: _i(['M4 4h16v16H4z', 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z', 'M17 6.5h0']),
  pin: _i(['M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z', 'M12 10a1.5 1.5 0 1 0 0-1']),
  star: _i(['M12 3l2.6 5.6L21 9.3l-4.5 4.2 1.2 6.1L12 16.8 6.3 19.6l1.2-6.1L3 9.3l6.4-.7z']),
};
