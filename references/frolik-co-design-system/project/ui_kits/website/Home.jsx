// Home screen for the Frolik+Co marketing site.
function Home({ onNav }) {
  const { Button, SectionLabel, Sticker, ProjectCard } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  const D = window.FROLIK_DATA;
  const featured = D.projects.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(48px,7vw,96px) var(--container-pad) clamp(40px,6vw,72px)', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
        <div>
          <SectionLabel tone="coral">Interior Design Studio · Est. 2016</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.8rem,6.2vw,5rem)', letterSpacing: '-0.03em', lineHeight: 0.98, color: 'var(--ink-900)', margin: '22px 0 0' }}>
            Spaces that<br/>let you <span style={{ color: 'var(--coral-500)', position: 'relative' }}>frolic
              <svg width="100%" height="14" viewBox="0 0 200 14" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6 }}><path d="M2 9 C 50 3, 150 3, 198 9" fill="none" stroke="var(--mint-400)" strokeWidth="4" strokeLinecap="round"/></svg>
            </span>.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem,1.4vw,1.2rem)', lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 480, margin: '26px 0 0' }}>
            We design interiors for how people really live and work - homes, offices and commercial spaces, with a soft spot for the rooms where kids grow up.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" pop onClick={() => onNav('contact')} iconRight={<I.arrow size={18} />}>Start a project</Button>
            <Button variant="outline" size="lg" onClick={() => onNav('work')}>See our work</Button>
          </div>
        </div>
        {/* Playful collage */}
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '160px 130px', gap: 14 }}>
          <div style={{ gridRow: 'span 2', borderRadius: 20, background: 'var(--mint-300)', border: '2px solid var(--ink-900)', boxShadow: '6px 6px 0 var(--ink-900)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 18 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--ink-900)' }}>The Playhouse Loft</span>
            <div style={{ position: 'absolute', top: 16, right: 16 }}><Sticker shape="dot" color="coral" size={34} /></div>
          </div>
          <div style={{ borderRadius: 20, background: 'var(--coral-300)', border: '2px solid var(--ink-900)', boxShadow: '6px 6px 0 var(--ink-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sticker shape="striped" color="ink" size={54} />
          </div>
          <div style={{ borderRadius: 20, background: 'var(--sun-400)', border: '2px solid var(--ink-900)', boxShadow: '6px 6px 0 var(--ink-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sticker shape="arc" color="ink" size={54} />
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div style={{ background: 'var(--coral-400)', borderTop: '2px solid var(--ink-900)', borderBottom: '2px solid var(--ink-900)', overflow: 'hidden', padding: '12px 0' }}>
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', whiteSpace: 'nowrap', justifyContent: 'center' }}>
          {['Residential', '✳', 'Commercial', '✳', 'Workspace', '✳', "Kids' Spaces", '✳', 'Ahmedabad'].map((t, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, letterSpacing: '0.04em', color: 'var(--cream-50)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--container-pad)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 44, flexWrap: 'wrap' }}>
          <div>
            <SectionLabel tone="mint">What we do</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,3.6vw,3rem)', letterSpacing: '-0.02em', color: 'var(--ink-900)', margin: '16px 0 0' }}>One studio, every kind of room.</h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-muted)', maxWidth: 320, lineHeight: 1.6 }}>Kids' spaces are our niche - but our range runs from living rooms to boardrooms.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {D.services.map((s, i) => {
            const Icon = I[s.icon];
            const tones = ['var(--coral-200)', 'var(--mint-200)', 'var(--sand-200)', 'var(--sky-400)'];
            return (
              <div key={i} style={{ background: 'var(--color-surface)', borderRadius: 20, border: '2px solid var(--ink-900)', padding: 24, boxShadow: '4px 4px 0 var(--ink-900)' }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: tones[i], border: '2px solid var(--ink-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: 'var(--ink-900)' }}>
                  {Icon && <Icon size={24} />}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, color: 'var(--ink-900)', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)', margin: 0 }}>{s.blurb}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured work */}
      <section style={{ background: 'var(--sand-200)', borderTop: '2px solid var(--ink-900)', borderBottom: '2px solid var(--ink-900)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--container-pad)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <SectionLabel tone="coral">Selected work</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,3.6vw,3rem)', letterSpacing: '-0.02em', color: 'var(--ink-900)', margin: '16px 0 0' }}>Recent spaces we love.</h2>
            </div>
            <Button variant="ink" onClick={() => onNav('work')} iconRight={<I.arrow size={18} />}>All projects</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {featured.map((p, i) => (
              <ProjectCard key={i} title={p.title} category={p.category} location={p.location} mediaColor={p.color}
                media={<div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><window.FrolikCoDesignSystem_d61cd3.Sticker shape={['striped','split','arc'][i]} color={i===1?'coral':'ink'} size={72} /></div>} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats + quote */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--container-pad)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {D.stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.4rem,5vw,3.6rem)', letterSpacing: '-0.03em', color: 'var(--coral-500)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ position: 'relative', background: 'var(--mint-200)', border: '2px solid var(--ink-900)', borderRadius: 24, padding: 36, boxShadow: '6px 6px 0 var(--ink-900)' }}>
          <div style={{ position: 'absolute', top: -18, left: 28 }}><Sticker shape="plus" color="coral" size={40} rotate={-10} /></div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.2rem,2vw,1.6rem)', lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--ink-900)', margin: 0 }}>
            "They turned our chaotic three-bedroom into a home that finally makes sense - and our daughter's room is pure magic."
          </p>
          <div style={{ marginTop: 22, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', fontWeight: 600 }}>Rhea &amp; Aakash - Residential, Ahmedabad</div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { FKHome: Home });
