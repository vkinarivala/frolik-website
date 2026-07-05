// Client-facing mood board layout for a Frolik+Co project.
function MoodBoard() {
  const { SectionLabel, Badge, Sticker, Tag } = window.FrolikCoDesignSystem_d61cd3;
  const palette = [
    ['Warm Clay', 'var(--coral-300)'], ['Sage', 'var(--mint-300)'], ['Cream', 'var(--cream-100)'],
    ['Terracotta', 'var(--coral-500)'], ['Ink', 'var(--ink-900)'], ['Honey', 'var(--sun-400)'],
  ];
  const materials = [
    ['Oak, oiled', 'var(--sand-300)'], ['Bouclé, ecru', 'var(--cream-50)'], ['Rattan', 'var(--clay-400)'],
    ['Brushed brass', '#C9A15A'], ['Lime plaster', 'var(--sand-200)'], ['Terrazzo', 'var(--mint-200)'],
  ];
  return (
    <div style={{ maxWidth: 1120, margin: '0 auto', padding: 'clamp(28px,4vw,56px) clamp(20px,4vw,48px)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, marginBottom: 30 }}>
        <div>
          <SectionLabel tone="coral">Mood board · Client review</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-0.03em', color: 'var(--ink-900)', margin: '14px 0 6px', lineHeight: 1 }}>The Playhouse Loft</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', margin: 0 }}>Residential · Ahmedabad · Direction 01</p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Badge tone="mint">In review</Badge>
          <Badge tone="sand">Rev 2</Badge>
        </div>
      </div>

      {/* Collage grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gridAutoRows: '92px', gap: 14 }}>
        {/* concept statement */}
        <div style={{ gridColumn: 'span 5', gridRow: 'span 2', background: 'var(--ink-900)', color: 'var(--cream-50)', borderRadius: 18, padding: 26, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--coral-300)' }}>The feeling</span>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.1rem,1.8vw,1.5rem)', lineHeight: 1.3, margin: '12px 0 0', letterSpacing: '-0.01em' }}>Sun-warmed, un-precious, and built for a six-year-old to actually live in.</p>
        </div>
        {/* hero image tile */}
        <div style={{ gridColumn: 'span 4', gridRow: 'span 2', background: 'var(--mint-300)', borderRadius: 18, border: '2px solid var(--ink-900)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 16 }}>
          <div style={{ position: 'absolute', top: 14, right: 14 }}><Sticker shape="striped" color="coral" size={44} /></div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--ink-900)' }}>Reading corner</span>
        </div>
        <div style={{ gridColumn: 'span 3', gridRow: 'span 1', background: 'var(--coral-300)', borderRadius: 18, border: '2px solid var(--ink-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sticker shape="arc" color="ink" size={40} /></div>
        <div style={{ gridColumn: 'span 3', gridRow: 'span 1', background: 'var(--sun-400)', borderRadius: 18, border: '2px solid var(--ink-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sticker shape="dot" color="ink" size={34} /></div>
      </div>

      {/* Palette + Materials */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 32 }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--ink-900)', margin: '0 0 16px' }}>Colour story</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {palette.map(([name, c]) => (
              <div key={name}>
                <div style={{ height: 64, borderRadius: 12, background: c, border: '2px solid var(--ink-900)' }} />
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600, color: 'var(--ink-900)', marginTop: 7 }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--ink-900)', margin: '0 0 16px' }}>Materials &amp; finishes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {materials.map(([name, c]) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--color-surface)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: '8px 12px' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: c, border: '2px solid var(--ink-900)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--ink-900)' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keywords */}
      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--ink-900)', margin: '0 0 16px' }}>Keywords</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['Playful', 'Grounded', 'Tactile', 'Soft edges', 'Sunlit', 'Un-precious', 'Nooks'].map((k, i) => (
            <Tag key={k} tone={['coral','mint','sun','sky'][i%4]} selected={i%3===0}>{k}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { FKMoodBoard: MoodBoard });
