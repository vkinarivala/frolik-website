import React from 'react';

/**
 * Sticker — a decorative Memphis shape motif pulled straight from the logo
 * (striped circle, coral slash, split circle, plus). Purely decorative;
 * scatter behind or beside content for the brand's playful energy.
 */
export function Sticker({ shape = 'plus', color = 'coral', size = 64, rotate = 0, style = {}, ...rest }) {
  const c = {
    coral: 'var(--coral-400)', mint: 'var(--mint-300)', ink: 'var(--ink-900)',
    sun: 'var(--sun-400)', sky: 'var(--sky-400)',
  }[color] || 'var(--coral-400)';
  const wrap = { width: size, height: size, transform: `rotate(${rotate}deg)`, display: 'inline-block', ...style };

  const shapes = {
    plus: (
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <path d="M40 8 h20 v32 h32 v20 h-32 v32 h-20 v-32 h-32 v-20 h32 z" fill={c} />
      </svg>
    ),
    striped: (
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <defs>
          <clipPath id="fk-circ"><circle cx="50" cy="50" r="46" /></clipPath>
        </defs>
        <g clipPath="url(#fk-circ)">
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={i} x={i * 8} y="0" width="4" height="100" fill={c} />
          ))}
        </g>
        <circle cx="50" cy="50" r="46" fill="none" stroke={c} strokeWidth="3" />
      </svg>
    ),
    slash: (
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <rect x="38" y="6" width="24" height="88" rx="4" fill={c} transform="rotate(20 50 50)" />
      </svg>
    ),
    split: (
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <defs><clipPath id="fk-split"><circle cx="50" cy="50" r="46" /></clipPath></defs>
        <g clipPath="url(#fk-split)">
          <rect x="0" y="0" width="100" height="100" fill="var(--mint-300)" />
          <path d="M0 100 L100 0 L100 100 Z" fill={c} />
        </g>
      </svg>
    ),
    arc: (
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <path d="M6 96 A44 44 0 0 1 94 96" fill="none" stroke={c} strokeWidth="16" strokeLinecap="round" />
      </svg>
    ),
    dot: (
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <circle cx="50" cy="50" r="42" fill={c} />
      </svg>
    ),
  };

  return <span style={wrap} {...rest}>{shapes[shape] || shapes.plus}</span>;
}
