import React from 'react';

/**
 * Generic surface card. Soft warm shadow by default; `pop` swaps to the
 * Memphis hard-offset shadow with an ink outline.
 */
export function Card({ children, pop = false, popTone = 'ink', pad = 'md', style = {}, ...rest }) {
  const pads = { none: 0, sm: 16, md: 24, lg: 32 };
  const popShadow = { ink: 'var(--shadow-pop)', coral: 'var(--shadow-pop-coral)', mint: 'var(--shadow-pop-mint)' }[popTone];
  return (
    <div
      style={{
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        padding: pads[pad],
        border: pop ? '2px solid var(--ink-900)' : '1px solid var(--border-subtle)',
        boxShadow: pop ? popShadow : 'var(--shadow-sm)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
