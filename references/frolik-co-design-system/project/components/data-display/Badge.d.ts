import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'coral' */
  tone?: 'coral' | 'mint' | 'sand' | 'sun' | 'sky' | 'ink';
  children: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
