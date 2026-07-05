/* @ds-bundle: {"format":4,"namespace":"FrolikCoDesignSystem_d61cd3","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"SectionLabel","sourcePath":"components/data-display/SectionLabel.jsx"},{"name":"Sticker","sourcePath":"components/data-display/Sticker.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProjectCard","sourcePath":"components/surfaces/ProjectCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"50252437a3de","components/actions/IconButton.jsx":"8f9191753d10","components/data-display/Badge.jsx":"ac15a061f0fd","components/data-display/SectionLabel.jsx":"9b0172736966","components/data-display/Sticker.jsx":"9ee956e72f0b","components/data-display/Tag.jsx":"8ab85499e351","components/forms/Input.jsx":"89995cd58c20","components/surfaces/Card.jsx":"2bad79662e08","components/surfaces/ProjectCard.jsx":"e2f8827e4caf","ui_kits/moodboard/CaseStudy.jsx":"54ccd72ac04e","ui_kits/moodboard/MoodBoard.jsx":"e1b9b6d1a8ac","ui_kits/website/Chrome.jsx":"6e27265f831d","ui_kits/website/Home.jsx":"06f0d7b45fd5","ui_kits/website/Icons.jsx":"ed290e09b8a5","ui_kits/website/StudioContact.jsx":"d6f27a3218f1","ui_kits/website/Work.jsx":"d9c5a4774a85","ui_kits/website/data.js":"7da94e369461"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FrolikCoDesignSystem_d61cd3 = window.FrolikCoDesignSystem_d61cd3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Frolik+Co primary action. Bold geometric label, confident radius, and an
 * optional Memphis "pop" offset shadow. Variants map to the brand palette.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pop = false,
  full = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.875rem',
      gap: '6px'
    },
    md: {
      padding: '12px 22px',
      fontSize: '1rem',
      gap: '8px'
    },
    lg: {
      padding: '16px 30px',
      fontSize: '1.0625rem',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--coral-400)',
      color: 'var(--text-on-coral)',
      border: '2px solid var(--coral-400)'
    },
    secondary: {
      background: 'var(--mint-300)',
      color: 'var(--text-on-mint)',
      border: '2px solid var(--mint-300)'
    },
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      border: '2px solid var(--ink-900)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '2px solid var(--ink-900)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '2px solid transparent'
    }
  };
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    boxShadow: pop ? 'var(--shadow-pop)' : 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (pop) {
      e.currentTarget.style.transform = 'translate(-2px,-2px)';
      e.currentTarget.style.boxShadow = '8px 8px 0 var(--ink-900)';
    } else {
      e.currentTarget.style.transform = 'translateY(-1px)';
    }
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = pop ? 'var(--shadow-pop)' : 'none';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: base,
    disabled: disabled,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon-only button. Same palette language as Button.
 */
function IconButton({
  children,
  variant = 'outline',
  size = 'md',
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 54
  };
  const variants = {
    primary: {
      background: 'var(--coral-400)',
      color: 'var(--cream-50)',
      border: '2px solid var(--coral-400)'
    },
    secondary: {
      background: 'var(--mint-300)',
      color: 'var(--ink-900)',
      border: '2px solid var(--mint-300)'
    },
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      border: '2px solid var(--ink-900)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '2px solid var(--ink-900)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '2px solid transparent'
    }
  };
  const d = dims[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      width: d,
      height: d,
      minWidth: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-1px) scale(1.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small non-interactive status/label badge. Soft tinted fill.
 */
function Badge({
  children,
  tone = 'coral',
  style = {},
  ...rest
}) {
  const tones = {
    coral: {
      bg: 'var(--coral-100)',
      fg: 'var(--coral-600)'
    },
    mint: {
      bg: 'var(--mint-100)',
      fg: 'var(--mint-600)'
    },
    sand: {
      bg: 'var(--sand-200)',
      fg: 'var(--taupe-500)'
    },
    sun: {
      bg: '#FBEECB',
      fg: '#9A7A16'
    },
    sky: {
      bg: '#E1F0F7',
      fg: '#3B7A98'
    },
    ink: {
      bg: 'var(--ink-900)',
      fg: 'var(--cream-50)'
    }
  };
  const t = tones[tone] || tones.coral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.6875rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow / section label — the wide-tracked uppercase kicker used above
 * headings throughout the brand, with a short colored rule.
 */
function SectionLabel({
  children,
  tone = 'coral',
  rule = true,
  style = {},
  ...rest
}) {
  const tones = {
    coral: 'var(--coral-400)',
    mint: 'var(--mint-400)',
    ink: 'var(--ink-900)',
    sun: 'var(--sun-400)',
    sky: 'var(--sky-400)'
  };
  const c = tones[tone] || tones.coral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 3,
      borderRadius: 2,
      background: c,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Sticker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sticker — a decorative Memphis shape motif pulled straight from the logo
 * (striped circle, coral slash, split circle, plus). Purely decorative;
 * scatter behind or beside content for the brand's playful energy.
 */
function Sticker({
  shape = 'plus',
  color = 'coral',
  size = 64,
  rotate = 0,
  style = {},
  ...rest
}) {
  const c = {
    coral: 'var(--coral-400)',
    mint: 'var(--mint-300)',
    ink: 'var(--ink-900)',
    sun: 'var(--sun-400)',
    sky: 'var(--sky-400)'
  }[color] || 'var(--coral-400)';
  const wrap = {
    width: size,
    height: size,
    transform: `rotate(${rotate}deg)`,
    display: 'inline-block',
    ...style
  };
  const shapes = {
    plus: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      width: "100%",
      height: "100%",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M40 8 h20 v32 h32 v20 h-32 v32 h-20 v-32 h-32 v-20 h32 z",
      fill: c
    })),
    striped: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      width: "100%",
      height: "100%",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "fk-circ"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "46"
    }))), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#fk-circ)"
    }, Array.from({
      length: 12
    }).map((_, i) => /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: i * 8,
      y: "0",
      width: "4",
      height: "100",
      fill: c
    }))), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "46",
      fill: "none",
      stroke: c,
      strokeWidth: "3"
    })),
    slash: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      width: "100%",
      height: "100%",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "38",
      y: "6",
      width: "24",
      height: "88",
      rx: "4",
      fill: c,
      transform: "rotate(20 50 50)"
    })),
    split: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      width: "100%",
      height: "100%",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "fk-split"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "46"
    }))), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#fk-split)"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "0",
      y: "0",
      width: "100",
      height: "100",
      fill: "var(--mint-300)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M0 100 L100 0 L100 100 Z",
      fill: c
    }))),
    arc: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      width: "100%",
      height: "100%",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 96 A44 44 0 0 1 94 96",
      fill: "none",
      stroke: c,
      strokeWidth: "16",
      strokeLinecap: "round"
    })),
    dot: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      width: "100%",
      height: "100%",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "42",
      fill: c
    }))
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), shapes[shape] || shapes.plus);
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filter / category chip. Selected state fills with the brand color; the
 * resting state is an ink outline. Used for portfolio filters and tags.
 */
function Tag({
  children,
  selected = false,
  tone = 'coral',
  size = 'md',
  style = {},
  ...rest
}) {
  const tones = {
    coral: {
      fill: 'var(--coral-400)',
      on: 'var(--cream-50)'
    },
    mint: {
      fill: 'var(--mint-300)',
      on: 'var(--ink-900)'
    },
    ink: {
      fill: 'var(--ink-900)',
      on: 'var(--cream-50)'
    },
    sun: {
      fill: 'var(--sun-400)',
      on: 'var(--ink-900)'
    },
    sky: {
      fill: 'var(--sky-400)',
      on: 'var(--ink-900)'
    }
  };
  const sizes = {
    sm: {
      padding: '5px 12px',
      fontSize: '0.75rem'
    },
    md: {
      padding: '8px 16px',
      fontSize: '0.8125rem'
    }
  };
  const t = tones[tone] || tones.coral;
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '2px solid var(--ink-900)',
      background: selected ? t.fill : 'transparent',
      color: selected ? t.on : 'var(--ink-900)',
      borderColor: selected ? t.fill : 'var(--ink-900)',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...sizes[size],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with the brand's ink-outline treatment and coral focus ring.
 */
function Input({
  label,
  hint,
  tone = 'ink',
  style = {},
  id,
  ...rest
}) {
  const inputId = id || (label ? `fk-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.8125rem',
      color: 'var(--ink-900)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: 'var(--ink-800)',
      padding: '12px 16px',
      background: 'var(--color-surface)',
      border: `2px solid ${focused ? 'var(--coral-400)' : 'var(--ink-900)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused ? '0 0 0 4px var(--coral-100)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic surface card. Soft warm shadow by default; `pop` swaps to the
 * Memphis hard-offset shadow with an ink outline.
 */
function Card({
  children,
  pop = false,
  popTone = 'ink',
  pad = 'md',
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 16,
    md: 24,
    lg: 32
  };
  const popShadow = {
    ink: 'var(--shadow-pop)',
    coral: 'var(--shadow-pop-coral)',
    mint: 'var(--shadow-pop-mint)'
  }[popTone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: pads[pad],
      border: pop ? '2px solid var(--ink-900)' : '1px solid var(--border-subtle)',
      boxShadow: pop ? popShadow : 'var(--shadow-sm)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Portfolio project card — image on top, meta below. Lifts on hover.
 * Pass an <img>/element as `media`, or a solid `mediaColor` placeholder.
 */
function ProjectCard({
  title,
  category,
  location,
  media = null,
  mediaColor = 'var(--mint-200)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      border: '2px solid var(--ink-900)',
      overflow: 'hidden',
      boxShadow: hover ? '8px 8px 0 var(--coral-400)' : '4px 4px 0 var(--ink-900)',
      transform: hover ? 'translate(-2px,-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: mediaColor,
      overflow: 'hidden',
      display: 'flex'
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px',
      borderTop: '2px solid var(--ink-900)'
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--coral-500)'
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--ink-900)',
      margin: '6px 0 0'
    }
  }, title), location && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-muted)',
      margin: '4px 0 0'
    }
  }, location)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moodboard/CaseStudy.jsx
try { (() => {
// Portfolio case-study layout for a Frolik+Co project.
function CaseStudy() {
  const {
    SectionLabel,
    Badge,
    Button,
    Sticker
  } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  const facts = [['Type', 'Residential'], ['Location', 'Ahmedabad'], ['Area', '1,850 sq ft'], ['Year', '2025'], ['Scope', 'Full interior']];
  const gallery = [['var(--mint-300)', 'striped', 'Living room'], ['var(--coral-300)', 'split', 'Kids\u2019 room'], ['var(--sand-300)', 'arc', 'Kitchen'], ['var(--sky-400)', 'dot', 'Study nook']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: 'clamp(28px,4vw,56px) clamp(20px,4vw,48px)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "coral"
  }, "Case study"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 20,
      margin: '14px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.2rem,4.4vw,3.6rem)',
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)',
      margin: 0,
      lineHeight: 1,
      maxWidth: 700
    }
  }, "The Playhouse Loft"), /*#__PURE__*/React.createElement(Badge, {
    tone: "mint"
  }, "Completed 2025")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'clamp(240px,32vw,420px)',
      borderRadius: 24,
      background: 'var(--mint-300)',
      border: '2px solid var(--ink-900)',
      boxShadow: '8px 8px 0 var(--ink-900)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      right: 28,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "plus",
    color: "coral",
    size: 44,
    rotate: -8
  }), /*#__PURE__*/React.createElement(Sticker, {
    shape: "dot",
    color: "sun",
    size: 40
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(1rem,1.6vw,1.4rem)',
      color: 'var(--ink-900)'
    }
  }, "A three-bedroom home built around a very serious six-year-old.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 'clamp(28px,5vw,64px)',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, facts.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(1.2rem,2vw,1.7rem)',
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      color: 'var(--ink-900)',
      margin: '0 0 20px'
    }
  }, "The brief was simple and impossible: a home that felt calm for the parents and endlessly playable for their daughter."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "We anchored the flat in warm oak and sage, then let colour arrive in the details \u2014 a striped reading nook, a split-circle rug, brass that catches the afternoon light. Every low surface is child-height and washable; every high one is for the grown-ups. The result is a space that grows with the family instead of being redecorated out of it."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      marginTop: 44
    }
  }, gallery.map(([c, shape, label], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '3/4',
      borderRadius: 16,
      background: c,
      border: '2px solid var(--ink-900)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: shape,
    color: "ink",
    size: 56
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20,
      marginTop: 48,
      padding: 'clamp(24px,4vw,40px)',
      background: 'var(--coral-400)',
      border: '2px solid var(--ink-900)',
      borderRadius: 22,
      boxShadow: '6px 6px 0 var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(1.3rem,2.4vw,2rem)',
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)'
    }
  }, "Dreaming up something similar?"), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(I.arrow, {
      size: 18
    })
  }, "Start your project")));
}
Object.assign(window, {
  FKCaseStudy: CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodboard/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moodboard/MoodBoard.jsx
try { (() => {
// Client-facing mood board layout for a Frolik+Co project.
function MoodBoard() {
  const {
    SectionLabel,
    Badge,
    Sticker,
    Tag
  } = window.FrolikCoDesignSystem_d61cd3;
  const palette = [['Warm Clay', 'var(--coral-300)'], ['Sage', 'var(--mint-300)'], ['Cream', 'var(--cream-100)'], ['Terracotta', 'var(--coral-500)'], ['Ink', 'var(--ink-900)'], ['Honey', 'var(--sun-400)']];
  const materials = [['Oak, oiled', 'var(--sand-300)'], ['Bouclé, ecru', 'var(--cream-50)'], ['Rattan', 'var(--clay-400)'], ['Brushed brass', '#C9A15A'], ['Lime plaster', 'var(--sand-200)'], ['Terrazzo', 'var(--mint-200)']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: 'clamp(28px,4vw,56px) clamp(20px,4vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 20,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "coral"
  }, "Mood board \xB7 Client review"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2rem,4vw,3.2rem)',
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)',
      margin: '14px 0 6px',
      lineHeight: 1
    }
  }, "The Playhouse Loft"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Residential \xB7 Ahmedabad \xB7 Direction 01")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "mint"
  }, "In review"), /*#__PURE__*/React.createElement(Badge, {
    tone: "sand"
  }, "Rev 2"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gridAutoRows: '92px',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 5',
      gridRow: 'span 2',
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      borderRadius: 18,
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--coral-300)'
    }
  }, "The feeling"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(1.1rem,1.8vw,1.5rem)',
      lineHeight: 1.3,
      margin: '12px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "Sun-warmed, un-precious, and built for a six-year-old to actually live in.")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 4',
      gridRow: 'span 2',
      background: 'var(--mint-300)',
      borderRadius: 18,
      border: '2px solid var(--ink-900)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "striped",
    color: "coral",
    size: 44
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, "Reading corner")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 3',
      gridRow: 'span 1',
      background: 'var(--coral-300)',
      borderRadius: 18,
      border: '2px solid var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "arc",
    color: "ink",
    size: 40
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 3',
      gridRow: 'span 1',
      background: 'var(--sun-400)',
      borderRadius: 18,
      border: '2px solid var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "dot",
    color: "ink",
    size: 34
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--ink-900)',
      margin: '0 0 16px'
    }
  }, "Colour story"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, palette.map(([name, c]) => /*#__PURE__*/React.createElement("div", {
    key: name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      borderRadius: 12,
      background: c,
      border: '2px solid var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-900)',
      marginTop: 7
    }
  }, name))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--ink-900)',
      margin: '0 0 16px'
    }
  }, "Materials & finishes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, materials.map(([name, c]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--color-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: c,
      border: '2px solid var(--ink-900)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, name)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--ink-900)',
      margin: '0 0 16px'
    }
  }, "Keywords"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, ['Playful', 'Grounded', 'Tactile', 'Soft edges', 'Sunlit', 'Un-precious', 'Nooks'].map((k, i) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    tone: ['coral', 'mint', 'sun', 'sky'][i % 4],
    selected: i % 3 === 0
  }, k)))));
}
Object.assign(window, {
  FKMoodBoard: MoodBoard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodboard/MoodBoard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// Nav + Footer chrome for the Frolik+Co marketing site.
function Nav({
  route,
  onNav
}) {
  const {
    Button
  } = window.FrolikCoDesignSystem_d61cd3;
  const links = [['work', 'Work'], ['studio', 'Studio'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(251,246,239,0.82)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/frolik-logo.jpeg",
    alt: "Frolik+Co",
    style: {
      width: 40,
      height: 46,
      objectFit: 'cover',
      borderRadius: 8,
      border: '2px solid var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)'
    }
  }, "Frolik", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)'
    }
  }, "+"), "Co")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, links.map(([key, label]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    onClick: () => onNav(key),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 15,
      cursor: 'pointer',
      color: route === key ? 'var(--coral-500)' : 'var(--ink-900)',
      textDecoration: 'none',
      paddingBottom: 2,
      borderBottom: route === key ? '2px solid var(--coral-400)' : '2px solid transparent'
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "sm",
    onClick: () => onNav('contact')
  }, "Start a project"))));
}
function Footer({
  onNav
}) {
  const {
    Button,
    Sticker
  } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--container-pad) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingBottom: 48,
      borderBottom: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "plus",
    color: "coral",
    size: 30,
    rotate: -8
  }), /*#__PURE__*/React.createElement(Sticker, {
    shape: "striped",
    color: "mint",
    size: 30
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.2rem,4.4vw,3.6rem)',
      letterSpacing: '-0.025em',
      lineHeight: 1.02,
      margin: 0
    }
  }, "Got a space that's", /*#__PURE__*/React.createElement("br", null), "ready to frolic?")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    pop: true,
    onClick: () => onNav('contact'),
    iconRight: /*#__PURE__*/React.createElement(I.arrow, {
      size: 18
    })
  }, "Let's talk")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      justifyContent: 'space-between',
      paddingTop: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "Frolik", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-400)'
    }
  }, "+"), "Co"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.55)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(I.pin, {
    size: 15
  }), " Ahmedabad, India"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I.instagram, {
    size: 20
  })), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I.mail, {
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.55)'
    }
  }, "\xA9 2025")))));
}
Object.assign(window, {
  FKNav: Nav,
  FKFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// Home screen for the Frolik+Co marketing site.
function Home({
  onNav
}) {
  const {
    Button,
    SectionLabel,
    Sticker,
    ProjectCard
  } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  const D = window.FROLIK_DATA;
  const featured = D.projects.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(48px,7vw,96px) var(--container-pad) clamp(40px,6vw,72px)',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "coral"
  }, "Interior Design Studio \xB7 Est. 2016"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.8rem,6.2vw,5rem)',
      letterSpacing: '-0.03em',
      lineHeight: 0.98,
      color: 'var(--ink-900)',
      margin: '22px 0 0'
    }
  }, "Spaces that", /*#__PURE__*/React.createElement("br", null), "let you ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)',
      position: 'relative'
    }
  }, "frolic", /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "14",
    viewBox: "0 0 200 14",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      left: 0,
      bottom: -6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 9 C 50 3, 150 3, 198 9",
    fill: "none",
    stroke: "var(--mint-400)",
    strokeWidth: "4",
    strokeLinecap: "round"
  }))), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(1rem,1.4vw,1.2rem)',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 480,
      margin: '26px 0 0'
    }
  }, "We design interiors for how people really live and work \u2014 homes, offices and commercial spaces, with a soft spot for the rooms where kids grow up."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    pop: true,
    onClick: () => onNav('contact'),
    iconRight: /*#__PURE__*/React.createElement(I.arrow, {
      size: 18
    })
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('work')
  }, "See our work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '160px 130px',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: 'span 2',
      borderRadius: 20,
      background: 'var(--mint-300)',
      border: '2px solid var(--ink-900)',
      boxShadow: '6px 6px 0 var(--ink-900)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ink-900)'
    }
  }, "The Playhouse Loft"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "dot",
    color: "coral",
    size: 34
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      background: 'var(--coral-300)',
      border: '2px solid var(--ink-900)',
      boxShadow: '6px 6px 0 var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "striped",
    color: "ink",
    size: 54
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      background: 'var(--sun-400)',
      border: '2px solid var(--ink-900)',
      boxShadow: '6px 6px 0 var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "arc",
    color: "ink",
    size: 54
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--coral-400)',
      borderTop: '2px solid var(--ink-900)',
      borderBottom: '2px solid var(--ink-900)',
      overflow: 'hidden',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      alignItems: 'center',
      whiteSpace: 'nowrap',
      justifyContent: 'center'
    }
  }, ['Residential', '✳', 'Commercial', '✳', 'Workspace', '✳', "Kids' Spaces", '✳', 'Ahmedabad'].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '0.04em',
      color: 'var(--cream-50)'
    }
  }, t)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 44,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "mint"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2rem,3.6vw,3rem)',
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      margin: '16px 0 0'
    }
  }, "One studio, every kind of room.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-muted)',
      maxWidth: 320,
      lineHeight: 1.6
    }
  }, "Kids' spaces are our niche \u2014 but our range runs from living rooms to boardrooms.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, D.services.map((s, i) => {
    const Icon = I[s.icon];
    const tones = ['var(--coral-200)', 'var(--mint-200)', 'var(--sand-200)', 'var(--sky-400)'];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--color-surface)',
        borderRadius: 20,
        border: '2px solid var(--ink-900)',
        padding: 24,
        boxShadow: '4px 4px 0 var(--ink-900)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 12,
        background: tones[i],
        border: '2px solid var(--ink-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18,
        color: 'var(--ink-900)'
      }
    }, Icon && /*#__PURE__*/React.createElement(Icon, {
      size: 24
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 19,
        color: 'var(--ink-900)',
        margin: '0 0 8px'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--text-body)',
        margin: 0
      }
    }, s.blurb));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--sand-200)',
      borderTop: '2px solid var(--ink-900)',
      borderBottom: '2px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 44,
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "coral"
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2rem,3.6vw,3rem)',
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      margin: '16px 0 0'
    }
  }, "Recent spaces we love.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    onClick: () => onNav('work'),
    iconRight: /*#__PURE__*/React.createElement(I.arrow, {
      size: 18
    })
  }, "All projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, featured.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: i,
    title: p.title,
    category: p.category,
    location: p.location,
    mediaColor: p.color,
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(window.FrolikCoDesignSystem_d61cd3.Sticker, {
      shape: ['striped', 'split', 'arc'][i],
      color: i === 1 ? 'coral' : 'ink',
      size: 72
    }))
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, D.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.4rem,5vw,3.6rem)',
      letterSpacing: '-0.03em',
      color: 'var(--coral-500)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--mint-200)',
      border: '2px solid var(--ink-900)',
      borderRadius: 24,
      padding: 36,
      boxShadow: '6px 6px 0 var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -18,
      left: 28
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "plus",
    color: "coral",
    size: 40,
    rotate: -10
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(1.2rem,2vw,1.6rem)',
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      color: 'var(--ink-900)',
      margin: 0
    }
  }, "\"They turned our chaotic three-bedroom into a home that finally makes sense \u2014 and our daughter's room is pure magic.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      fontWeight: 600
    }
  }, "Rhea & Aakash \u2014 Residential, Ahmedabad"))));
}
Object.assign(window, {
  FKHome: Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
// Small inline icon set (Lucide-style, 2px stroke) for the Frolik+Co site.
const _i = (paths, extra = {}) => ({
  size = 22,
  stroke = 'currentColor',
  width = 2.2,
  ...rest
} = {}) => React.createElement('svg', {
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: extra.fill || 'none',
  stroke,
  strokeWidth: width,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...rest
}, paths.map((d, i) => React.createElement('path', {
  key: i,
  d
})));
window.FKIcons = {
  home: _i(['M3 10.5 12 3l9 7.5', 'M5 9.5V21h14V9.5']),
  briefcase: _i(['M4 8h16v11H4z', 'M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2', 'M4 13h16']),
  building: _i(['M5 21V4h10v17', 'M15 9h4v12', 'M8 8h1M8 12h1M8 16h1M12 8h0M12 12h0M12 16h0']),
  blocks: _i(['M4 4h7v7H4z', 'M14 9l4-4 4 4-4 4z', 'M14 14h6v6h-6z', 'M4 14h6v6H4z']),
  arrow: _i(['M5 12h14', 'M13 6l6 6-6 6']),
  arrowUpRight: _i(['M7 17 17 7', 'M8 7h9v9']),
  menu: _i(['M4 7h16', 'M4 12h16', 'M4 17h16']),
  x: _i(['M6 6l12 12', 'M18 6 6 18']),
  mail: _i(['M4 6h16v12H4z', 'm4 7 8 6 8-6']),
  instagram: _i(['M4 4h16v16H4z', 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z', 'M17 6.5h0']),
  pin: _i(['M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z', 'M12 10a1.5 1.5 0 1 0 0-1']),
  star: _i(['M12 3l2.6 5.6L21 9.3l-4.5 4.2 1.2 6.1L12 16.8 6.3 19.6l1.2-6.1L3 9.3l6.4-.7z'])
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StudioContact.jsx
try { (() => {
// Studio (about) + Services + Contact screens.
function Studio({
  onNav
}) {
  const {
    SectionLabel,
    Sticker,
    Button
  } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  const values = [['Play first', 'Good design should make you smile before it makes you think.'], ['Made to last', 'Warm materials, honest craft, and rooms that age gracefully.'], ['Your story', 'We design around your life — not a magazine spread.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) var(--container-pad) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "mint"
  }, "Our studio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.2rem,4.4vw,3.6rem)',
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)',
      margin: '16px 0 0',
      lineHeight: 1.02
    }
  }, "A small studio", /*#__PURE__*/React.createElement("br", null), "with big feelings", /*#__PURE__*/React.createElement("br", null), "about rooms."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-body)',
      margin: '22px 0 0',
      lineHeight: 1.65,
      maxWidth: 460
    }
  }, "Frolik+Co started in a spare bedroom in Ahmedabad with a single kids' room commission. Nine years on, we design homes, offices and commercial spaces across Gujarat \u2014 but that first delight in a well-made playroom still runs through everything we do."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    pop: true,
    onClick: () => onNav('contact'),
    iconRight: /*#__PURE__*/React.createElement(I.arrow, {
      size: 18
    })
  }, "Work with us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      borderRadius: 20,
      background: 'var(--coral-300)',
      border: '2px solid var(--ink-900)',
      boxShadow: '6px 6px 0 var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "split",
    size: 72,
    rotate: 8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      borderRadius: 20,
      background: 'var(--mint-300)',
      border: '2px solid var(--ink-900)',
      boxShadow: '6px 6px 0 var(--ink-900)',
      marginTop: 34,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "striped",
    color: "ink",
    size: 64
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      marginTop: 'clamp(48px,7vw,96px)'
    }
  }, values.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '3px solid var(--coral-400)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--coral-500)',
      marginBottom: 12
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '-0.01em',
      color: 'var(--ink-900)',
      margin: '0 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, b)))));
}
function Contact({
  onNav
}) {
  const {
    SectionLabel,
    Input,
    Button,
    Sticker
  } = window.FrolikCoDesignSystem_d61cd3;
  const I = window.FKIcons;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) var(--container-pad) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "coral"
  }, "Start a project"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.2rem,4.4vw,3.6rem)',
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)',
      margin: '16px 0 0',
      lineHeight: 1.02
    }
  }, "Tell us about", /*#__PURE__*/React.createElement("br", null), "your space."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-body)',
      margin: '20px 0 0',
      lineHeight: 1.65,
      maxWidth: 420
    }
  }, "Whether it's one room or a whole floor, we'd love to hear what you're dreaming up. We reply within two working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(I.mail, {
    size: 18
  }), " hello@frolikandco.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(I.pin, {
    size: 18
  }), " Ahmedabad, Gujarat"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(I.instagram, {
    size: 18
  }), " @frolikncodesigns"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--color-surface)',
      border: '2px solid var(--ink-900)',
      borderRadius: 24,
      padding: 32,
      boxShadow: '8px 8px 0 var(--mint-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -20,
      right: 26
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "dot",
    color: "coral",
    size: 44
  })), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    shape: "plus",
    color: "mint",
    size: 56
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--ink-900)',
      margin: '18px 0 8px'
    }
  }, "Thanks \u2014 we're on it!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "We'll be in touch within two working days.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Where's the space?",
    placeholder: "Ahmedabad"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Project type",
    placeholder: "Residential \xB7 Kids' room \xB7 Office\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true,
    pop: true,
    onClick: () => setSent(true),
    iconRight: /*#__PURE__*/React.createElement(I.arrow, {
      size: 18
    })
  }, "Send enquiry")))));
}
Object.assign(window, {
  FKStudio: Studio,
  FKContact: Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StudioContact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
// Work (portfolio) screen with interactive category filters.
function Work({
  onNav
}) {
  const {
    Tag,
    ProjectCard,
    SectionLabel,
    Sticker
  } = window.FrolikCoDesignSystem_d61cd3;
  const D = window.FROLIK_DATA;
  const [filter, setFilter] = React.useState('All work');
  const shown = filter === 'All work' ? D.projects : D.projects.filter(p => p.category === filter);
  const shapes = ['striped', 'split', 'arc', 'dot', 'plus', 'slash'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) var(--container-pad) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "coral"
  }, "Portfolio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.4rem,5vw,4rem)',
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)',
      margin: '16px 0 0',
      maxWidth: 760,
      lineHeight: 1.0
    }
  }, "Every space starts with a story."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-body)',
      maxWidth: 520,
      margin: '18px 0 0',
      lineHeight: 1.6
    }
  }, "A selection of homes, workplaces and playful little rooms across Gujarat."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      margin: '32px 0 36px'
    }
  }, D.filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    tone: f === "Kids' Spaces" ? 'sun' : 'coral',
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.title,
    title: p.title,
    category: p.category,
    location: p.location,
    mediaColor: p.color,
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Sticker, {
      shape: shapes[i % shapes.length],
      color: p.tag === 'coral' ? 'ink' : 'coral',
      size: 70
    }))
  }))), shown.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      padding: '40px 0'
    }
  }, "No projects in this category yet."));
}
Object.assign(window, {
  FKWork: Work
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Frolik+Co marketing site — sample content (fictional but on-brand).
window.FROLIK_DATA = {
  services: [{
    icon: 'home',
    title: 'Residential',
    blurb: 'Homes that hold your story — from a single playroom to a full renovation.'
  }, {
    icon: 'briefcase',
    title: 'Commercial',
    blurb: 'Cafés, studios and retail that feel unmistakably yours the moment you walk in.'
  }, {
    icon: 'building',
    title: 'Workspace',
    blurb: 'Offices designed for focus and warmth, not fluorescent fatigue.'
  }, {
    icon: 'blocks',
    title: "Kids' Spaces",
    blurb: 'Our first love — rooms that grow with the little ones who live in them.'
  }],
  projects: [{
    title: 'The Playhouse Loft',
    category: 'Residential',
    location: 'Ahmedabad',
    color: 'var(--mint-200)',
    tag: 'coral',
    year: '2025'
  }, {
    title: 'Clay & Co. Café',
    category: 'Commercial',
    location: 'Ahmedabad',
    color: 'var(--coral-200)',
    tag: 'mint',
    year: '2025'
  }, {
    title: 'Studio Marigold',
    category: 'Workspace',
    location: 'Baroda',
    color: 'var(--sand-200)',
    tag: 'sun',
    year: '2024'
  }, {
    title: 'Little Explorers Room',
    category: "Kids' Spaces",
    location: 'Ahmedabad',
    color: 'var(--sky-400)',
    tag: 'sky',
    year: '2024'
  }, {
    title: 'The Reading Nook House',
    category: 'Residential',
    location: 'Surat',
    color: 'var(--mint-300)',
    tag: 'mint',
    year: '2024'
  }, {
    title: 'Bloom Boutique',
    category: 'Commercial',
    location: 'Ahmedabad',
    color: 'var(--coral-300)',
    tag: 'coral',
    year: '2023'
  }],
  filters: ['All work', 'Residential', 'Commercial', 'Workspace', "Kids' Spaces"],
  stats: [{
    n: '120+',
    l: 'Spaces designed'
  }, {
    n: '9',
    l: 'Years in studio'
  }, {
    n: '4',
    l: 'Cities'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();
