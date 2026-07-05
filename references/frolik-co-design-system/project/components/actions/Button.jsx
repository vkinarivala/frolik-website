import React from 'react';

/**
 * Frolik+Co primary action. Bold geometric label, confident radius, and an
 * optional Memphis "pop" offset shadow. Variants map to the brand palette.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  pop = false,
  full = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '0.875rem', gap: '6px' },
    md: { padding: '12px 22px', fontSize: '1rem', gap: '8px' },
    lg: { padding: '16px 30px', fontSize: '1.0625rem', gap: '10px' },
  };

  const variants = {
    primary: {
      background: 'var(--coral-400)',
      color: 'var(--text-on-coral)',
      border: '2px solid var(--coral-400)',
    },
    secondary: {
      background: 'var(--mint-300)',
      color: 'var(--text-on-mint)',
      border: '2px solid var(--mint-300)',
    },
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      border: '2px solid var(--ink-900)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '2px solid var(--ink-900)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '2px solid transparent',
    },
  };

  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    boxShadow: pop ? 'var(--shadow-pop)' : 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
    ...variants[variant],
    ...style,
  };

  const onEnter = (e) => {
    if (disabled) return;
    if (pop) { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--ink-900)'; }
    else { e.currentTarget.style.transform = 'translateY(-1px)'; }
  };
  const onLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = pop ? 'var(--shadow-pop)' : 'none';
  };

  return (
    <button style={base} disabled={disabled} onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
