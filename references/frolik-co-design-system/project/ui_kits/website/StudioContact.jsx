// Studio (about) + Services + Contact screens.
function Studio({ onNav }) {
  const { SectionLabel, Sticker, Button } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  const values = [
    ['Play first', 'Good design should make you smile before it makes you think.'],
    ['Made to last', 'Warm materials, honest craft, and rooms that age gracefully.'],
    ['Your story', 'We design around your life - not a magazine spread.'],
  ];
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(40px,6vw,72px) var(--container-pad) var(--section-y)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
        <div>
          <SectionLabel tone="mint">Our studio</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.2rem,4.4vw,3.6rem)', letterSpacing: '-0.03em', color: 'var(--ink-900)', margin: '16px 0 0', lineHeight: 1.02 }}>
            A small studio<br/>with big feelings<br/>about rooms.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-body)', margin: '22px 0 0', lineHeight: 1.65, maxWidth: 460 }}>
            Frolik+Co started in a spare bedroom in Ahmedabad with a single kids' room commission. Nine years on, we design homes, offices and commercial spaces across Gujarat - but that first delight in a well-made playroom still runs through everything we do.
          </p>
          <div style={{ marginTop: 30 }}>
            <Button variant="primary" pop onClick={() => onNav('contact')} iconRight={<I.arrow size={18} />}>Work with us</Button>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div style={{ height: 200, borderRadius: 20, background: 'var(--coral-300)', border: '2px solid var(--ink-900)', boxShadow: '6px 6px 0 var(--ink-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sticker shape="split" size={72} rotate={8} /></div>
          <div style={{ height: 200, borderRadius: 20, background: 'var(--mint-300)', border: '2px solid var(--ink-900)', boxShadow: '6px 6px 0 var(--ink-900)', marginTop: 34, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sticker shape="striped" color="ink" size={64} /></div>
        </div>
      </div>

      {/* Values */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 'clamp(48px,7vw,96px)' }}>
        {values.map(([t, b], i) => (
          <div key={i} style={{ borderTop: '3px solid var(--coral-400)', paddingTop: 20 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--coral-500)', marginBottom: 12 }}>0{i + 1}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink-900)', margin: '0 0 8px' }}>{t}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact({ onNav }) {
  const { SectionLabel, Input, Button, Sticker } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  const [sent, setSent] = React.useState(false);
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(40px,6vw,72px) var(--container-pad) var(--section-y)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
        <div>
          <SectionLabel tone="coral">Start a project</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.2rem,4.4vw,3.6rem)', letterSpacing: '-0.03em', color: 'var(--ink-900)', margin: '16px 0 0', lineHeight: 1.02 }}>
            Tell us about<br/>your space.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-body)', margin: '20px 0 0', lineHeight: 1.65, maxWidth: 420 }}>
            Whether it's one room or a whole floor, we'd love to hear what you're dreaming up. We reply within two working days.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 32 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)' }}><I.mail size={18} /> hello@frolikandco.com</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)' }}><I.pin size={18} /> Ahmedabad, Gujarat</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)' }}><I.instagram size={18} /> @frolikncodesigns</span>
          </div>
        </div>
        <div style={{ position: 'relative', background: 'var(--color-surface)', border: '2px solid var(--ink-900)', borderRadius: 24, padding: 32, boxShadow: '8px 8px 0 var(--mint-300)' }}>
          <div style={{ position: 'absolute', top: -20, right: 26 }}><Sticker shape="dot" color="coral" size={44} /></div>
          {sent ? (
            <div style={{ padding: '40px 8px', textAlign: 'center' }}>
              <Sticker shape="plus" color="mint" size={56} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--ink-900)', margin: '18px 0 8px' }}>Thanks - we're on it!</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', margin: 0 }}>We'll be in touch within two working days.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Input label="Name" placeholder="Jane Doe" />
                <Input label="Email" type="email" placeholder="jane@email.com" />
              </div>
              <Input label="Where's the space?" placeholder="Ahmedabad" />
              <Input label="Project type" placeholder="Residential · Kids' room · Office…" />
              <Button variant="primary" size="lg" full pop onClick={() => setSent(true)} iconRight={<I.arrow size={18} />}>Send enquiry</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FKStudio: Studio, FKContact: Contact });
