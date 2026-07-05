import React from 'react';
import { Tag } from '../data-display/Tag.jsx';

/**
 * Portfolio project card — image on top, meta below. Lifts on hover.
 * Pass an <img>/element as `media`, or a solid `mediaColor` placeholder.
 */
export function ProjectCard({ title, category, location, media = null, mediaColor = 'var(--mint-200)', style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block', textDecoration: 'none', color: 'inherit',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '2px solid var(--ink-900)',
        overflow: 'hidden',
        boxShadow: hover ? '8px 8px 0 var(--coral-400)' : '4px 4px 0 var(--ink-900)',
        transform: hover ? 'translate(-2px,-2px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        cursor: 'pointer', ...style,
      }}
      {...rest}
    >
      <div style={{ aspectRatio: '4 / 3', background: mediaColor, overflow: 'hidden', display: 'flex' }}>
        {media}
      </div>
      <div style={{ padding: '18px 20px 20px', borderTop: '2px solid var(--ink-900)' }}>
        {category && (
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--coral-500)',
          }}>{category}</span>
        )}
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 600,
          letterSpacing: '-0.01em', color: 'var(--ink-900)', margin: '6px 0 0',
        }}>{title}</h3>
        {location && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', margin: '4px 0 0' }}>{location}</p>
        )}
      </div>
    </a>
  );
}
