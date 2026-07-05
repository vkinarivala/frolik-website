import React from 'react';

/**
 * Eyebrow / section label — the wide-tracked uppercase kicker used above
 * headings throughout the brand, with a short colored rule.
 */
export function SectionLabel({ children, tone = 'coral', rule = true, style = {}, ...rest }) {
  const tones = { coral: 'var(--coral-400)', mint: 'var(--mint-400)', ink: 'var(--ink-900)', sun: 'var(--sun-400)', sky: 'var(--sky-400)' };
  const c = tones[tone] || tones.coral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: 'var(--text-eyebrow)', letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase', color: 'var(--ink-900)', ...style,
      }}
      {...rest}
    >
      {rule && <span style={{ width: 28, height: 3, borderRadius: 2, background: c, display: 'inline-block' }} />}
      {children}
    </span>
  );
}
