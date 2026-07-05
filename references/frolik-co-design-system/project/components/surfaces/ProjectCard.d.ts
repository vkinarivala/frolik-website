import React from 'react';

export interface ProjectCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  category?: string;
  location?: string;
  /** Image/element rendered in the media area. */
  media?: React.ReactNode;
  /** Solid placeholder color if no media. @default 'var(--mint-200)' */
  mediaColor?: string;
}

/**
 * Portfolio project card.
 * @startingPoint section="Surfaces" subtitle="Portfolio card with hard-shadow hover" viewport="700x420"
 */
export function ProjectCard(props: ProjectCardProps): JSX.Element;
