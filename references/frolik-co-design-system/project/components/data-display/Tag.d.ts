import React from 'react';

export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Filled/active state. @default false */
  selected?: boolean;
  /** Fill color when selected. @default 'coral' */
  tone?: 'coral' | 'mint' | 'ink' | 'sun' | 'sky';
  /** @default 'md' */
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
