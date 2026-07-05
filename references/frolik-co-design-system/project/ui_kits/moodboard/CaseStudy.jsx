// Portfolio case-study layout for a Frolik+Co project.
function CaseStudy() {
  const { SectionLabel, Badge, Button, Sticker } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  const facts = [['Type', 'Residential'], ['Location', 'Ahmedabad'], ['Area', '1,850 sq ft'], ['Year', '2025'], ['Scope', 'Full interior']];
  const gallery = [
    ['var(--mint-300)', 'striped', 'Living room'],
    ['var(--coral-300)', 'split', 'Kids\u2019 room'],
    ['var(--sand-300)', 'arc', 'Kitchen'],
    ['var(--sky-400)', 'dot', 'Study nook'],
  ];
  return (
    <div style={{ maxWidth: 1120, margin: '0 auto', padding: 'clamp(28px,4vw,56px) clamp(20px,4vw,48px)' }}>
      <SectionLabel tone="coral">Case study</SectionLabel>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, margin: '14px 0 28px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.2rem,4.4vw,3.6rem)', letterSpacing: '-0.03em', color: 'var(--ink-900)', margin: 0, lineHeight: 1, maxWidth: 700 }}>The Playhouse Loft</h1>
        <Badge tone="mint">Completed 2025</Badge>
      </div>

      {/* Hero panel */}
      <div style={{ height: 'clamp(240px,32vw,420px)', borderRadius: 24, background: 'var(--mint-300)', border: '2px solid var(--ink-900)', boxShadow: '8px 8px 0 var(--ink-900)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 28 }}>
        <div style={{ position: 'absolute', top: 24, right: 28, display: 'flex', gap: 12 }}>
          <Sticker shape="plus" color="coral" size={44} rotate={-8} />
          <Sticker shape="dot" color="sun" size={40} />
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(1rem,1.6vw,1.4rem)', color: 'var(--ink-900)' }}>A three-bedroom home built around a very serious six-year-old.</span>
      </div>

      {/* Facts + intro */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 'clamp(28px,5vw,64px)', marginTop: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {facts.map(([k, v], i) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>{k}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--ink-900)' }}>{v}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.2rem,2vw,1.7rem)', lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--ink-900)', margin: '0 0 20px' }}>
            The brief was simple and impossible: a home that felt calm for the parents and endlessly playable for their daughter.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>
            We anchored the flat in warm oak and sage, then let colour arrive in the details — a striped reading nook, a split-circle rug, brass that catches the afternoon light. Every low surface is child-height and washable; every high one is for the grown-ups. The result is a space that grows with the family instead of being redecorated out of it.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginTop: 44 }}>
        {gallery.map(([c, shape, label], i) => (
          <div key={i} style={{ aspectRatio: '3/4', borderRadius: 16, background: c, border: '2px solid var(--ink-900)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 14 }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}><Sticker shape={shape} color="ink" size={56} /></div>
            <span style={{ position: 'relative', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--ink-900)' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginTop: 48, padding: 'clamp(24px,4vw,40px)', background: 'var(--coral-400)', border: '2px solid var(--ink-900)', borderRadius: 22, boxShadow: '6px 6px 0 var(--ink-900)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.3rem,2.4vw,2rem)', letterSpacing: '-0.02em', color: 'var(--cream-50)' }}>Dreaming up something similar?</span>
        <Button variant="ink" size="lg" iconRight={<I.arrow size={18} />}>Start your project</Button>
      </div>
    </div>
  );
}
Object.assign(window, { FKCaseStudy: CaseStudy });
