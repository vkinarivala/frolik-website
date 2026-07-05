// Nav + Footer chrome for the Frolik+Co marketing site.
function Nav({ route, onNav }) {
  const { Button } = window.FrolikCoDesignSystem_d61cd3;
  const links = [['work', 'Work'], ['studio', 'Studio'], ['contact', 'Contact']];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(251,246,239,0.82)', backdropFilter: 'blur(10px)', borderBottom: '2px solid var(--ink-900)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px var(--container-pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a onClick={() => onNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textDecoration: 'none' }}>
          <img src="../../assets/frolik-logo.jpeg" alt="Frolik+Co" style={{ width: 40, height: 46, objectFit: 'cover', borderRadius: 8, border: '2px solid var(--ink-900)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em', color: 'var(--ink-900)' }}>Frolik<span style={{ color: 'var(--coral-500)' }}>+</span>Co</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map(([key, label]) => (
            <a key={key} onClick={() => onNav(key)} style={{
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15, cursor: 'pointer',
              color: route === key ? 'var(--coral-500)' : 'var(--ink-900)',
              textDecoration: 'none', paddingBottom: 2,
              borderBottom: route === key ? '2px solid var(--coral-400)' : '2px solid transparent',
            }}>{label}</a>
          ))}
          <Button variant="ink" size="sm" onClick={() => onNav('contact')}>Start a project</Button>
        </nav>
      </div>
    </header>
  );
}

function Footer({ onNav }) {
  const { Button, Sticker } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'var(--cream-50)', marginTop: 0 }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--container-pad) 40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
          <div style={{ maxWidth: 560 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <Sticker shape="plus" color="coral" size={30} rotate={-8} />
              <Sticker shape="striped" color="mint" size={30} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.2rem,4.4vw,3.6rem)', letterSpacing: '-0.025em', lineHeight: 1.02, margin: 0 }}>Got a space that's<br/>ready to frolic?</h2>
          </div>
          <Button variant="primary" size="lg" pop onClick={() => onNav('contact')} iconRight={<I.arrow size={18} />}>Let's talk</Button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'space-between', paddingTop: 32, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>Frolik<span style={{ color: 'var(--coral-400)' }}>+</span>Co</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: 6 }}><I.pin size={15} /> Ahmedabad, India</span>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <a style={{ color: 'inherit', display: 'flex' }}><I.instagram size={20} /></a>
            <a style={{ color: 'inherit', display: 'flex' }}><I.mail size={20} /></a>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FKNav: Nav, FKFooter: Footer });
