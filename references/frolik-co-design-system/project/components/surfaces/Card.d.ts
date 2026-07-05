import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Use the Memphis hard-offset shadow + ink outline. @default false */
  pop?: boolean;
  /** Offset-shadow color when pop. @default 'ink' */
  popTone?: 'ink' | 'coral' | 'mint';
  /** @default 'md' */
  pad?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
