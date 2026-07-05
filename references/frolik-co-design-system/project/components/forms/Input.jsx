import React from 'react';

/**
 * Text input with the brand's ink-outline treatment and coral focus ring.
 */
export function Input({ label, hint, tone = 'ink', style = {}, id, ...rest }) {
  const inputId = id || (label ? `fk-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8125rem',
          color: 'var(--ink-900)',
        }}>{label}</label>
      )}
      <input
        id={inputId}
        onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
        style={{
          fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--ink-800)',
          padding: '12px 16px',
          background: 'var(--color-surface)',
          border: `2px solid ${focused ? 'var(--coral-400)' : 'var(--ink-900)'}`,
          borderRadius: 'var(--radius-md)',
          outline: 'none',
          boxShadow: focused ? '0 0 0 4px var(--coral-100)' : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        }}
        {...rest}
      />
      {hint && <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}
