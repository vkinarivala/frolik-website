import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default 'outline' */
  variant?: 'primary' | 'secondary' | 'ink' | 'outline' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (required, icon-only). */
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export function IconButton(props: IconButtonProps): JSX.Element;
