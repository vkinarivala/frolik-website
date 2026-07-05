// Work (portfolio) screen with interactive category filters.
function Work({ onNav }) {
  const { Tag, ProjectCard, SectionLabel, Sticker } = window.FrolikCoDesignSystem_d61cd3;
  const D = window.FROLIK_DATA;
  const [filter, setFilter] = React.useState('All work');
  const shown = filter === 'All work' ? D.projects : D.projects.filter((p) => p.category === filter);
  const shapes = ['striped', 'split', 'arc', 'dot', 'plus', 'slash'];

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(40px,6vw,72px) var(--container-pad) var(--section-y)' }}>
      <SectionLabel tone="coral">Portfolio</SectionLabel>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '-0.03em', color: 'var(--ink-900)', margin: '16px 0 0', maxWidth: 760, lineHeight: 1.0 }}>
        Every space starts with a story.
      </h1>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-body)', maxWidth: 520, margin: '18px 0 0', lineHeight: 1.6 }}>
        A selection of homes, workplaces and playful little rooms across Gujarat.
      </p>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '32px 0 36px' }}>
        {D.filters.map((f) => (
          <Tag key={f} selected={filter === f} tone={f === "Kids' Spaces" ? 'sun' : 'coral'} onClick={() => setFilter(f)}>{f}</Tag>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {shown.map((p, i) => (
          <ProjectCard key={p.title} title={p.title} category={p.category} location={p.location} mediaColor={p.color}
            media={<div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sticker shape={shapes[i % shapes.length]} color={p.tag === 'coral' ? 'ink' : 'coral'} size={70} /></div>} />
        ))}
      </div>
      {shown.length === 0 && (
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', padding: '40px 0' }}>No projects in this category yet.</p>
      )}
    </div>
  );
}
Object.assign(window, { FKWork: Work });
