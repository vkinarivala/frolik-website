import React from 'react';

/**
 * Small non-interactive status/label badge. Soft tinted fill.
 */
export function Badge({ children, tone = 'coral', style = {}, ...rest }) {
  const tones = {
    coral: { bg: 'var(--coral-100)', fg: 'var(--coral-600)' },
    mint: { bg: 'var(--mint-100)', fg: 'var(--mint-600)' },
    sand: { bg: 'var(--sand-200)', fg: 'var(--taupe-500)' },
    sun: { bg: '#FBEECB', fg: '#9A7A16' },
    sky: { bg: '#E1F0F7', fg: '#3B7A98' },
    ink: { bg: 'var(--ink-900)', fg: 'var(--cream-50)' },
  };
  const t = tones[tone] || tones.coral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        fontFamily: 'var(--font-body)', fontWeight: 600,
        fontSize: '0.6875rem', letterSpacing: '0.06em', textTransform: 'uppercase',
        padding: '4px 10px', borderRadius: 'var(--radius-pill)',
        background: t.bg, color: t.fg, ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
