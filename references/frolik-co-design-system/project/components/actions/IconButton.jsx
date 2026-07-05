import React from 'react';

/**
 * Circular icon-only button. Same palette language as Button.
 */
export function IconButton({
  children,
  variant = 'outline',
  size = 'md',
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const dims = { sm: 36, md: 44, lg: 54 };
  const variants = {
    primary: { background: 'var(--coral-400)', color: 'var(--cream-50)', border: '2px solid var(--coral-400)' },
    secondary: { background: 'var(--mint-300)', color: 'var(--ink-900)', border: '2px solid var(--mint-300)' },
    ink: { background: 'var(--ink-900)', color: 'var(--cream-50)', border: '2px solid var(--ink-900)' },
    outline: { background: 'transparent', color: 'var(--ink-900)', border: '2px solid var(--ink-900)' },
    ghost: { background: 'transparent', color: 'var(--ink-900)', border: '2px solid transparent' },
  };
  const d = dims[size];
  return (
    <button
      aria-label={label}
      disabled={disabled}
      style={{
        width: d, height: d, minWidth: d,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
        ...variants[variant], ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-1px) scale(1.04)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
