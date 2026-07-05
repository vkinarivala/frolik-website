import React from 'react';

export interface SectionLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color of the short rule. @default 'coral' */
  tone?: 'coral' | 'mint' | 'ink' | 'sun' | 'sky';
  /** Show the leading colored rule. @default true */
  rule?: boolean;
  children: React.ReactNode;
}

export function SectionLabel(props: SectionLabelProps): JSX.Element;
