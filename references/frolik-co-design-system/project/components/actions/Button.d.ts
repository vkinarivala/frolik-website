import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ink' | 'outline' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Show the Memphis hard-offset "pop" shadow. @default false */
  pop?: boolean;
  /** Full-width block button. @default false */
  full?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
}

/**
 * Frolik+Co primary action button.
 * @startingPoint section="Actions" subtitle="Pill buttons with Memphis pop shadow" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
