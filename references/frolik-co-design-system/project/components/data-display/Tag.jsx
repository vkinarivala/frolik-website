import React from 'react';

/**
 * Filter / category chip. Selected state fills with the brand color; the
 * resting state is an ink outline. Used for portfolio filters and tags.
 */
export function Tag({ children, selected = false, tone = 'coral', size = 'md', style = {}, ...rest }) {
  const tones = {
    coral: { fill: 'var(--coral-400)', on: 'var(--cream-50)' },
    mint: { fill: 'var(--mint-300)', on: 'var(--ink-900)' },
    ink: { fill: 'var(--ink-900)', on: 'var(--cream-50)' },
    sun: { fill: 'var(--sun-400)', on: 'var(--ink-900)' },
    sky: { fill: 'var(--sky-400)', on: 'var(--ink-900)' },
  };
  const sizes = { sm: { padding: '5px 12px', fontSize: '0.75rem' }, md: { padding: '8px 16px', fontSize: '0.8125rem' } };
  const t = tones[tone] || tones.coral;
  return (
    <button
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-body)', fontWeight: 500,
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: '2px solid var(--ink-900)',
        background: selected ? t.fill : 'transparent',
        color: selected ? t.on : 'var(--ink-900)',
        borderColor: selected ? t.fill : 'var(--ink-900)',
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
        ...sizes[size], ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
