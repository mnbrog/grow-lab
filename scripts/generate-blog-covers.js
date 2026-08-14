/**
 * Generates the featured/social cover image for every blog post.
 *
 * Covers are drawn as SVG on the GrowLab palette (see tailwind.config.js) and
 * rasterised to 1200x630 PNG -- the Open Graph size, which also crops cleanly
 * to the 400x250 card on the blog index.
 *
 * Each cover is a scene built from UI primitives (windows, cards, charts) so it
 * depicts what the post is actually about rather than a generic icon.
 *
 * Run with: npm run covers
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const W = 1200;
const H = 630;
const OUT_DIR = path.join(__dirname, '..', 'src', 'components', 'shared', 'images', 'blog');

const INK_900 = '#060E17';
const INK_800 = '#0A1622';
const INK_700 = '#0F1F30';
const INK_600 = '#16293C';
const INK_500 = '#20374C';
const ACCENT_400 = '#74b3bf';
const ACCENT_300 = '#9BCCD4';
const ACCENT_200 = '#B4DEE3';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const n = (v) => Number(v.toFixed(1));

/* ---------------------------------------------------------------- primitives */

/** Rounded panel. */
const card = (x, y, w, h, o = {}) => {
  const { fill = INK_600, fo = 1, stroke = ACCENT_400, so = 0.45, sw = 3, r = 18 } = o;
  const s = stroke ? ` stroke="${stroke}" stroke-opacity="${so}" stroke-width="${sw}"` : '';
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" fill-opacity="${fo}"${s}/>`;
};

/** Pill used as a stand-in for a line of text. */
const bar = (x, y, w, h = 10, c = ACCENT_300, o = 0.45) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${c}" fill-opacity="${o}"/>`;

/** Panel with a title bar and traffic-light dots. */
const win = (x, y, w, h, o = {}) => {
  const { r = 20, chrome = 46 } = o;
  return `
    ${card(x, y, w, h, { r, ...o })}
    <path d="M ${x} ${y + chrome} H ${x + w}" stroke="${ACCENT_400}" stroke-opacity="0.35" stroke-width="3"/>
    ${[0, 1, 2]
      .map((i) => `<circle cx="${x + 26 + i * 22}" cy="${y + chrome / 2}" r="7" fill="${ACCENT_300}" fill-opacity="${0.8 - i * 0.18}"/>`)
      .join('')}`;
};

/** Filled call-to-action button. */
const btn = (x, y, w, h = 40, o = 0.9) =>
  `${card(x, y, w, h, { fill: ACCENT_400, fo: o, stroke: null, r: h / 2 })}
   ${bar(x + w * 0.25, y + h / 2 - 5, w * 0.5, 10, INK_900, 0.55)}`;

/** Empty input field. */
const field = (x, y, w, h = 44) =>
  `${card(x, y, w, h, { fill: INK_800, stroke: ACCENT_400, so: 0.35, r: 10 })}
   ${bar(x + 16, y + h / 2 - 5, w * 0.42, 10, ACCENT_300, 0.3)}`;

const sparkle = (x, y, r, o = 1) =>
  `<path d="M ${x} ${y - r} Q ${x + r * 0.18} ${y - r * 0.18} ${x + r} ${y}
            Q ${x + r * 0.18} ${y + r * 0.18} ${x} ${y + r}
            Q ${x - r * 0.18} ${y + r * 0.18} ${x - r} ${y}
            Q ${x - r * 0.18} ${y - r * 0.18} ${x} ${y - r} Z"
        fill="${ACCENT_200}" fill-opacity="${o}"/>`;

const check = (x, y, r = 15) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${ACCENT_400}" fill-opacity="0.9"/>
   <path d="M ${x - r * 0.45} ${y} l ${r * 0.32} ${r * 0.35} l ${r * 0.62} ${-r * 0.72}"
         stroke="${INK_900}" stroke-width="${r * 0.28}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

const arrow = (x1, y1, x2, y2, o = 0.6) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const hx = x2 - Math.cos(a) * 16;
  const hy = y2 - Math.sin(a) * 16;
  return `<path d="M ${x1} ${y1} L ${n(hx)} ${n(hy)}" stroke="${ACCENT_400}" stroke-opacity="${o}" stroke-width="4" stroke-linecap="round" stroke-dasharray="12 9"/>
          <path d="M ${x2} ${y2} L ${n(hx - Math.sin(a) * 9)} ${n(hy + Math.cos(a) * 9)} L ${n(hx + Math.sin(a) * 9)} ${n(hy - Math.cos(a) * 9)} Z" fill="${ACCENT_300}"/>`;
};

const label = (x, y, text, size = 22, c = ACCENT_200, anchor = 'start') =>
  `<text x="${x}" y="${y}" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="${size}"
         font-weight="bold" fill="${c}" text-anchor="${anchor}">${esc(text)}</text>`;

/* -------------------------------------------------------------------- frame */

const frame = (motif, tag) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${INK_900}"/>
      <stop offset="100%" stop-color="${INK_800}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.72" cy="0.18" r="0.75">
      <stop offset="0%" stop-color="${ACCENT_400}" stop-opacity="0.28"/>
      <stop offset="55%" stop-color="${ACCENT_400}" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="${ACCENT_400}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.12" cy="0.92" r="0.6">
      <stop offset="0%" stop-color="${ACCENT_300}" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="${ACCENT_300}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" fill-opacity="0.05"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>

  <g transform="translate(600 285)">${motif}</g>

  <g transform="translate(72 552)">
    <rect x="0" y="-22" width="4" height="30" rx="2" fill="${ACCENT_400}"/>
    <text x="20" y="0" font-family="Liberation Sans, DejaVu Sans, sans-serif"
          font-size="21" font-weight="bold" letter-spacing="5" fill="#ffffff">GROWLAB</text>
  </g>
  <text x="${W - 72}" y="552" text-anchor="end"
        font-family="Liberation Sans, DejaVu Sans, sans-serif"
        font-size="17" font-weight="bold" letter-spacing="4"
        fill="${ACCENT_300}" fill-opacity="0.95">${esc(tag)}</text>
  <rect x="72" y="580" width="${W - 144}" height="2" rx="1" fill="#ffffff" fill-opacity="0.08"/>
</svg>`;

/* ------------------------------------------------------------------- scenes */
/* Drawn around a 0,0 origin at the composition centre.
   Safe area is roughly x -520..520, y -265..205.                            */

const scenes = {
  /** Draft in an editor with an AI assistant suggesting the next paragraph. */
  aiContent: `
    ${win(-500, -250, 640, 450)}
    ${bar(-460, -170, 300, 20, ACCENT_200, 0.9)}
    ${bar(-460, -124, 540, 11)}
    ${bar(-460, -92, 500, 11)}
    ${bar(-460, -60, 545, 11)}
    ${card(-468, -30, 560, 46, { fill: ACCENT_400, fo: 0.16, stroke: ACCENT_400, so: 0.5, r: 10 })}
    ${bar(-460, -12, 420, 11, ACCENT_200, 0.75)}
    ${bar(-460, 42, 520, 11, ACCENT_300, 0.28)}
    ${bar(-460, 74, 470, 11, ACCENT_300, 0.28)}
    ${bar(-460, 106, 540, 11, ACCENT_300, 0.28)}
    ${bar(-460, 138, 300, 11, ACCENT_300, 0.28)}

    ${card(105, -110, 400, 250, { fill: INK_700, stroke: ACCENT_300, so: 0.6, r: 22 })}
    ${sparkle(150, -68, 22)}
    ${label(180, -60, 'AI SUGGESTION', 19, ACCENT_200)}
    ${bar(133, -28, 340, 11, ACCENT_300, 0.55)}
    ${bar(133, 4, 300, 11, ACCENT_300, 0.55)}
    ${bar(133, 36, 250, 11, ACCENT_300, 0.55)}
    ${btn(133, 74, 150, 42)}
    ${card(299, 74, 130, 42, { fill: 'none', fo: 0, stroke: ACCENT_300, so: 0.5, r: 21 })}
    ${sparkle(470, -150, 34, 0.75)}
    ${sparkle(520, -88, 18, 0.5)}`,

  /** A workflow canvas: one trigger branching into automated steps. */
  automate: `
    ${win(-510, -250, 1020, 455)}
    ${bar(-470, -218, 150, 12, ACCENT_200, 0.7)}
    ${card(300, -232, 170, 34, { fill: ACCENT_400, fo: 0.2, stroke: ACCENT_400, so: 0.5, r: 17 })}
    ${bar(325, -220, 120, 10, ACCENT_200, 0.75)}

    ${card(-450, -80, 190, 150, { fill: INK_700, stroke: ACCENT_300, so: 0.7 })}
    <path d="M -372 -46 l -34 46 h 26 l -8 40 l 36 -48 h -26 z" fill="${ACCENT_200}"/>
    ${bar(-425, 22, 140, 11, ACCENT_300, 0.6)}
    ${bar(-425, 44, 100, 11, ACCENT_300, 0.35)}

    ${arrow(-250, -5, -170, -5)}
    <path d="M -80 -85 L 10 -5 L -80 75 L -170 -5 Z" fill="${INK_700}" stroke="${ACCENT_400}" stroke-width="3" stroke-opacity="0.7"/>
    ${bar(-125, -12, 90, 11, ACCENT_300, 0.6)}

    ${arrow(20, -30, 110, -100)}
    ${arrow(20, 20, 110, 90)}
    ${card(120, -175, 210, 145, { fill: INK_700, stroke: ACCENT_400, so: 0.6 })}
    ${check(160, -138, 16)}
    ${bar(186, -145, 110, 11, ACCENT_300, 0.6)}
    ${bar(150, -108, 150, 11, ACCENT_300, 0.32)}
    ${bar(150, -84, 110, 11, ACCENT_300, 0.32)}

    ${card(120, 20, 210, 145, { fill: INK_700, stroke: ACCENT_400, so: 0.6 })}
    ${check(160, 57, 16)}
    ${bar(186, 50, 110, 11, ACCENT_300, 0.6)}
    ${bar(150, 87, 150, 11, ACCENT_300, 0.32)}
    ${bar(150, 111, 130, 11, ACCENT_300, 0.32)}

    ${arrow(340, -100, 415, -30)}
    ${arrow(340, 90, 415, 20)}
    ${card(420, -80, 70, 70, { fill: ACCENT_400, fo: 0.18, stroke: ACCENT_300, so: 0.7, r: 35 })}
    ${check(455, -45, 20)}`,

  /** A landing page whose form is filling a subscriber list. */
  lead: `
    ${win(-505, -245, 545, 445)}
    ${card(-465, -175, 180, 230, { fill: INK_700, stroke: ACCENT_300, so: 0.55, r: 12 })}
    ${bar(-445, -150, 120, 12, ACCENT_200, 0.85)}
    ${bar(-445, -124, 140, 9, ACCENT_300, 0.4)}
    ${bar(-445, -106, 100, 9, ACCENT_300, 0.4)}
    <path d="M -455 -40 h 160 v 90 h -160 z" fill="${ACCENT_400}" fill-opacity="0.15"/>
    ${bar(-445, -20, 140, 9, ACCENT_300, 0.35)}
    ${bar(-445, -2, 120, 9, ACCENT_300, 0.35)}
    ${bar(-445, 16, 135, 9, ACCENT_300, 0.35)}
    ${bar(-255, -175, 190, 18, ACCENT_200, 0.9)}
    ${bar(-255, -138, 210, 11, ACCENT_300, 0.4)}
    ${bar(-255, -110, 170, 11, ACCENT_300, 0.4)}
    ${field(-255, -66, 215)}
    ${field(-255, -6, 215)}
    ${btn(-255, 56, 215, 46)}

    ${arrow(75, -20, 160, -20, 0.75)}

    ${card(180, -215, 330, 390, { fill: INK_700, stroke: ACCENT_400, so: 0.55, r: 20 })}
    ${bar(212, -182, 150, 13, ACCENT_200, 0.8)}
    ${Array.from({ length: 5 })
      .map((_, i) => {
        const y = -140 + i * 66;
        return `${card(206, y, 280, 52, { fill: INK_800, stroke: ACCENT_400, so: 0.22, r: 12 })}
                <circle cx="240" cy="${y + 26}" r="17" fill="${ACCENT_400}" fill-opacity="${0.75 - i * 0.1}"/>
                ${bar(268, y + 14, 130, 10, ACCENT_300, 0.55)}
                ${bar(268, y + 31, 90, 8, ACCENT_300, 0.28)}`;
      })
      .join('')}`,

  /** One site, maintained on a plan -- desktop and mobile, always current. */
  waas: `
    ${win(-505, -245, 720, 440)}
    ${card(-330, -225, 380, 30, { fill: INK_800, stroke: ACCENT_400, so: 0.3, r: 15 })}
    ${bar(-310, -215, 200, 10, ACCENT_300, 0.35)}
    ${bar(-465, -170, 110, 14, ACCENT_200, 0.85)}
    ${[-140, -60, 20].map((x) => bar(x, -168, 60, 10, ACCENT_300, 0.4)).join('')}
    ${bar(-465, -110, 300, 24, ACCENT_200, 0.9)}
    ${bar(-465, -70, 380, 12, ACCENT_300, 0.4)}
    ${bar(-465, -44, 320, 12, ACCENT_300, 0.4)}
    ${btn(-465, -4, 165, 46)}
    ${[0, 1, 2]
      .map((i) => {
        const x = -465 + i * 225;
        return `${card(x, 68, 200, 110, { fill: INK_700, stroke: ACCENT_400, so: 0.35, r: 14 })}
                ${card(x + 20, 88, 40, 40, { fill: ACCENT_400, fo: 0.35, stroke: null, r: 10 })}
                ${bar(x + 20, 142, 130, 10, ACCENT_300, 0.45)}
                ${bar(x + 20, 160, 95, 8, ACCENT_300, 0.25)}`;
      })
      .join('')}

    ${card(255, -160, 200, 355, { fill: INK_600, stroke: ACCENT_300, so: 0.6, r: 28 })}
    ${card(320, -150, 70, 12, { fill: INK_900, stroke: null, r: 6 })}
    ${bar(280, -110, 100, 16, ACCENT_200, 0.85)}
    ${bar(280, -82, 150, 10, ACCENT_300, 0.4)}
    ${btn(280, -50, 110, 34)}
    ${[0, 1, 2].map((i) => card(280, 8 + i * 58, 150, 44, { fill: INK_700, stroke: ACCENT_400, so: 0.3, r: 10 })).join('')}

    <g transform="translate(430 -215)">
      <circle cx="0" cy="0" r="52" fill="${INK_900}" fill-opacity="0.9"/>
      <path d="M 40 14 a 42 42 0 1 1 -14 -36" stroke="${ACCENT_300}" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M 30 -38 l 4 26 l -26 -4 z" fill="${ACCENT_300}"/>
    </g>`,

  /** A template gallery, one click from running. */
  templates: `
    ${win(-510, -250, 1020, 455)}
    ${card(-470, -222, 420, 36, { fill: INK_800, stroke: ACCENT_400, so: 0.35, r: 18 })}
    <circle cx="-444" cy="-204" r="10" fill="none" stroke="${ACCENT_300}" stroke-width="4"/>
    <path d="M -437 -197 l 9 9" stroke="${ACCENT_300}" stroke-width="4" stroke-linecap="round"/>
    ${bar(-420, -209, 190, 10, ACCENT_300, 0.35)}
    ${[0, 1, 2].map((i) => card(160 + i * 116, -222, 100, 36, { fill: i === 0 ? ACCENT_400 : INK_800, fo: i === 0 ? 0.25 : 1, stroke: ACCENT_400, so: 0.35, r: 18 })).join('')}

    ${Array.from({ length: 6 })
      .map((_, i) => {
        const x = -470 + (i % 3) * 320;
        const y = -150 + Math.floor(i / 3) * 175;
        const hot = i === 1;
        return `
          ${card(x, y, 290, 150, { fill: hot ? INK_600 : INK_700, stroke: hot ? ACCENT_200 : ACCENT_400, so: hot ? 0.85 : 0.35, sw: hot ? 4 : 3 })}
          ${card(x + 22, y + 22, 46, 46, { fill: ACCENT_400, fo: hot ? 0.6 : 0.3, stroke: null, r: 12 })}
          <path d="M ${x + 45} ${y + 32} l -12 18 h 9 l -3 14 l 13 -19 h -9 z" fill="${INK_900}" fill-opacity="0.8"/>
          ${bar(x + 84, y + 30, 150, 12, ACCENT_200, hot ? 0.9 : 0.6)}
          ${bar(x + 84, y + 52, 110, 9, ACCENT_300, 0.3)}
          ${bar(x + 22, y + 88, 240, 9, ACCENT_300, 0.25)}
          ${bar(x + 22, y + 106, 190, 9, ACCENT_300, 0.25)}
          ${hot ? btn(x + 176, y + 96, 92, 34) : card(x + 176, y + 96, 92, 34, { fill: 'none', fo: 0, stroke: ACCENT_400, so: 0.45, r: 17 })}`;
      })
      .join('')}`,

  /** The whole stack assembled over a weekend, item by item. */
  allInOne: `
    <g transform="translate(-250 20)">
      ${[3, 2, 1, 0]
        .map((i) => {
          const y = 95 - i * 66;
          return `<path d="M 0 ${y - 58} L 235 ${y} L 0 ${y + 58} L -235 ${y} Z"
                    fill="${ACCENT_400}" fill-opacity="${0.2 + i * 0.16}" stroke="${ACCENT_300}" stroke-opacity="0.5" stroke-width="3"/>`;
        })
        .join('')}
    </g>
    <g transform="translate(-250 -190) scale(0.5)">
      <path d="M 0 0 c -24 -32 -32 -52 -32 -68 h 64 c 0 16 -8 36 -32 68 z" fill="${ACCENT_200}"/>
      <path d="M -70 -124 l -46 58 v -66 c 0 -26 18 -46 46 -56 z" fill="${ACCENT_400}"/>
      <path d="M 70 -124 l 46 58 v -66 c 0 -26 -18 -46 -46 -56 z" fill="${ACCENT_400}"/>
      <path d="M 0 -246 c 46 56 70 116 70 172 v 12 h -140 v -12 c 0 -56 24 -116 70 -172 z"
            fill="${INK_600}" stroke="${ACCENT_300}" stroke-width="7"/>
      <circle cx="0" cy="-152" r="30" fill="${ACCENT_200}"/>
    </g>

    ${card(105, -230, 410, 420, { fill: INK_700, stroke: ACCENT_400, so: 0.5, r: 22 })}
    ${bar(140, -200, 175, 14, ACCENT_200, 0.85)}
    <path d="M 140 -172 H 480" stroke="${ACCENT_400}" stroke-opacity="0.3" stroke-width="2"/>
    ${[0, 1, 2, 3, 4]
      .map((i) => {
        const y = -142 + i * 66;
        const done = i < 4;
        return `${done ? check(165, y + 22, 17) : `<circle cx="165" cy="${y + 22}" r="17" fill="none" stroke="${ACCENT_400}" stroke-opacity="0.5" stroke-width="3"/>`}
                ${bar(196, y + 10, 150 + (i % 3) * 40, 12, ACCENT_300, done ? 0.65 : 0.3)}
                ${bar(196, y + 32, 90 + (i % 2) * 40, 9, ACCENT_300, 0.25)}`;
      })
      .join('')}`,

  /** A brand board: mark, type, palette and a card mock. */
  brand: `
    ${card(-500, -240, 430, 250, { fill: INK_700, stroke: ACCENT_400, so: 0.45, r: 20 })}
    ${label(-470, -200, 'LOGO', 17, ACCENT_300)}
    <circle cx="-355" cy="-105" r="72" fill="none" stroke="${ACCENT_400}" stroke-width="22"/>
    <circle cx="-355" cy="-105" r="26" fill="${ACCENT_200}"/>
    <path d="M -245 -160 v 110 M -245 -160 h 70 a 34 34 0 0 1 0 68 h -70" stroke="${ACCENT_300}" stroke-width="13" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

    ${card(-40, -240, 540, 250, { fill: INK_700, stroke: ACCENT_400, so: 0.45, r: 20 })}
    ${label(-10, -200, 'TYPEFACE', 17, ACCENT_300)}
    <text x="-10" y="-90" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="118" font-weight="bold" fill="${ACCENT_200}">Aa Bb Cc</text>
    ${bar(-10, -60, 480, 10, ACCENT_300, 0.3)}
    ${bar(-10, -38, 380, 10, ACCENT_300, 0.3)}

    ${card(-500, 40, 430, 155, { fill: INK_700, stroke: ACCENT_400, so: 0.45, r: 20 })}
    ${label(-470, 76, 'PALETTE', 17, ACCENT_300)}
    ${[ACCENT_200, ACCENT_400, '#457885', INK_500, '#ffffff']
      .map((c, i) => card(-470 + i * 76, 96, 62, 78, { fill: c, fo: c === '#ffffff' ? 0.9 : 1, stroke: null, r: 12 }))
      .join('')}

    <g transform="translate(255 120) rotate(-6)">
      ${card(-245, -80, 490, 160, { fill: INK_600, stroke: ACCENT_300, so: 0.6, r: 16 })}
      <circle cx="-190" cy="-20" r="26" fill="${ACCENT_400}" fill-opacity="0.8"/>
      ${bar(-150, -34, 150, 13, ACCENT_200, 0.85)}
      ${bar(-150, -12, 110, 9, ACCENT_300, 0.4)}
      ${bar(-190, 30, 340, 9, ACCENT_300, 0.25)}
      ${bar(-190, 48, 260, 9, ACCENT_300, 0.25)}
    </g>`,

  /** A results dashboard: traffic up and to the right after launch. */
  dashboard: `
    ${win(-510, -250, 1020, 455)}
    ${bar(-470, -218, 190, 13, ACCENT_200, 0.8)}
    ${[0, 1, 2]
      .map((i) => {
        const x = -470 + i * 220;
        return `${card(x, -168, 195, 105, { fill: INK_700, stroke: ACCENT_400, so: 0.35, r: 14 })}
                ${bar(x + 20, -145, 80, 9, ACCENT_300, 0.35)}
                ${bar(x + 20, -122, 110, 20, ACCENT_200, 0.85)}
                <path d="M ${x + 20} -82 l 22 -16 l 20 10 l 26 -22" stroke="${ACCENT_400}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      })
      .join('')}

    ${card(-470, -40, 635, 220, { fill: INK_700, stroke: ACCENT_400, so: 0.35, r: 16 })}
    <path d="M -430 145 H 130" stroke="${ACCENT_400}" stroke-opacity="0.3" stroke-width="3"/>
    ${[40, 62, 55, 88, 104, 132, 158]
      .map((h, i) => `<rect x="${-424 + i * 80}" y="${145 - h}" width="46" height="${h}" rx="8" fill="${ACCENT_400}" fill-opacity="${0.2 + i * 0.06}"/>`)
      .join('')}
    <path d="M -401 90 L -321 72 L -241 80 L -161 44 L -81 26 L -1 -8 L 79 -32"
          stroke="${ACCENT_200}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${[[-401, 90], [-241, 80], [-81, 26], [79, -32]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="${INK_700}" stroke="${ACCENT_200}" stroke-width="5"/>`)
      .join('')}

    ${card(195, -40, 275, 220, { fill: INK_700, stroke: ACCENT_400, so: 0.35, r: 16 })}
    ${bar(220, -14, 120, 11, ACCENT_300, 0.5)}
    ${[0, 1, 2, 3]
      .map((i) => {
        const y = 20 + i * 42;
        return `${bar(220, y, 40, 9, ACCENT_300, 0.3)}
                ${bar(268, y - 3, 180 - i * 34, 15, ACCENT_400, 0.75 - i * 0.14)}`;
      })
      .join('')}`,

  /** The first post going live. */
  helloWorld: `
    <g transform="translate(90 -30)">
      ${win(-330, -190, 620, 380, { so: 0.3 })}
      ${bar(-290, -120, 220, 16, ACCENT_300, 0.4)}
      ${bar(-290, -88, 380, 11, ACCENT_300, 0.22)}
      ${bar(-290, -60, 330, 11, ACCENT_300, 0.22)}
      ${[0, 1, 2, 3, 4]
        .map((i) => bar(-290, -10 + i * 32, [420, 380, 440, 350, 400][i], 11, ACCENT_300, 0.18))
        .join('')}
    </g>

    <g transform="translate(-140 60)">
      ${win(-350, -215, 700, 400, { fill: INK_700, stroke: ACCENT_300, so: 0.7 })}
      <text x="-310" y="-105" font-family="DejaVu Sans Mono, Liberation Mono, monospace" font-size="34" fill="${ACCENT_400}">$ growlab new post</text>
      <text x="-310" y="-30" font-family="DejaVu Sans Mono, Liberation Mono, monospace" font-size="58" font-weight="bold" fill="${ACCENT_200}">hello world</text>
      <rect x="100" y="-72" width="26" height="52" fill="${ACCENT_200}" fill-opacity="0.9"/>
      <text x="-310" y="35" font-family="DejaVu Sans Mono, Liberation Mono, monospace" font-size="28" fill="${ACCENT_300}" fill-opacity="0.6">building site...</text>
      ${card(-310, 62, 560, 22, { fill: INK_800, stroke: null, r: 11 })}
      ${card(-310, 62, 400, 22, { fill: ACCENT_400, fo: 0.85, stroke: null, r: 11 })}
      <text x="-310" y="130" font-family="DejaVu Sans Mono, Liberation Mono, monospace" font-size="28" fill="${ACCENT_200}">published</text>
      ${check(-60, 120, 17)}
    </g>
    ${sparkle(430, -230, 36, 0.7)}
    ${sparkle(500, -160, 20, 0.45)}`,

  /** A month of posts, scheduled and queued. */
  calendar: `
    ${win(-510, -250, 700, 455)}
    ${bar(-470, -218, 160, 13, ACCENT_200, 0.8)}
    ${[0, 1].map((i) => card(90 + i * 46, -226, 34, 30, { fill: INK_800, stroke: ACCENT_400, so: 0.35, r: 8 })).join('')}
    ${['M', 'T', 'W', 'T', 'F']
      .map((d, i) => label(-440 + i * 130, -160, d, 19, ACCENT_300, 'middle'))
      .join('')}
    ${Array.from({ length: 20 })
      .map((_, i) => {
        const x = -490 + (i % 5) * 130;
        const y = -140 + Math.floor(i / 5) * 82;
        const post = { 1: 0.85, 3: 0.6, 7: 0.85, 10: 0.5, 13: 0.85, 16: 0.6, 18: 0.5 }[i];
        return `${card(x, y, 112, 66, { fill: INK_800, stroke: ACCENT_400, so: 0.2, r: 10 })}
                ${label(x + 12, y + 24, String(i + 1), 15, ACCENT_300, 'start')}
                ${post ? `${card(x + 10, y + 34, 92, 20, { fill: ACCENT_400, fo: post, stroke: null, r: 10 })}` : ''}`;
      })
      .join('')}

    ${card(215, -250, 295, 455, { fill: INK_700, stroke: ACCENT_400, so: 0.5, r: 20 })}
    ${bar(245, -218, 130, 12, ACCENT_200, 0.8)}
    ${[0, 1, 2]
      .map((i) => {
        const y = -180 + i * 138;
        return `${card(243, y, 240, 120, { fill: INK_800, stroke: ACCENT_400, so: 0.28, r: 14 })}
                ${card(263, y + 18, 42, 42, { fill: ACCENT_400, fo: 0.5 - i * 0.12, stroke: null, r: 10 })}
                ${bar(319, y + 24, 130, 11, ACCENT_200, 0.7)}
                ${bar(319, y + 44, 90, 9, ACCENT_300, 0.3)}
                ${bar(263, y + 78, 200, 9, ACCENT_300, 0.25)}
                ${bar(263, y + 95, 150, 9, ACCENT_300, 0.25)}`;
      })
      .join('')}`,

  /** Diagnosing why the traffic isn't arriving. */
  traffic: `
    ${win(-510, -250, 660, 455)}
    ${bar(-470, -218, 170, 13, ACCENT_200, 0.8)}
    <path d="M -470 150 H 100" stroke="${ACCENT_400}" stroke-opacity="0.3" stroke-width="3"/>
    <path d="M -470 150 V -150" stroke="${ACCENT_400}" stroke-opacity="0.3" stroke-width="3"/>
    ${[30, 34, 28, 40, 46, 72, 108, 150]
      .map((h, i) => `<rect x="${-450 + i * 70}" y="${150 - h}" width="42" height="${h}" rx="8" fill="${ACCENT_400}" fill-opacity="${0.16 + i * 0.05}"/>`)
      .join('')}
    <path d="M -429 118 L -359 112 L -289 120 L -219 104 L -149 96 L -79 62 L -9 12 L 61 -38"
          stroke="${ACCENT_200}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 30 -78 h 60 v 60" stroke="${ACCENT_200}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

    ${card(180, -250, 330, 455, { fill: INK_700, stroke: ACCENT_400, so: 0.5, r: 20 })}
    ${card(208, -218, 275, 34, { fill: INK_800, stroke: ACCENT_400, so: 0.35, r: 17 })}
    <circle cx="232" cy="-201" r="9" fill="none" stroke="${ACCENT_300}" stroke-width="4"/>
    <path d="M 238 -195 l 8 8" stroke="${ACCENT_300}" stroke-width="4" stroke-linecap="round"/>
    ${bar(254, -206, 150, 10, ACCENT_300, 0.35)}
    ${[0, 1, 2, 3]
      .map((i) => {
        const y = -160 + i * 92;
        return `${bar(208, y, 60, 10, ACCENT_400, 0.6)}
                ${bar(208, y + 22, 250 - i * 30, 14, ACCENT_200, 0.8 - i * 0.15)}
                ${bar(208, y + 48, 240, 9, ACCENT_300, 0.25)}
                ${bar(208, y + 64, 190, 9, ACCENT_300, 0.25)}`;
      })
      .join('')}

    <g transform="translate(-160 30)">
      <circle cx="0" cy="0" r="108" fill="${INK_900}" fill-opacity="0.55" stroke="${ACCENT_200}" stroke-width="13"/>
      <path d="M 76 76 L 150 150" stroke="${ACCENT_200}" stroke-width="24" stroke-linecap="round"/>
      <path d="M -56 24 l 38 -42 l 34 28 l 46 -58" stroke="${ACCENT_200}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>`,

  /** An idea board for when the page is blank. */
  ideas: `
    <g transform="translate(0 -195)">
      <circle cx="0" cy="0" r="62" fill="${ACCENT_200}" fill-opacity="0.95"/>
      <path d="M -24 54 h 48 M -18 74 h 36" stroke="${ACCENT_200}" stroke-width="12" stroke-linecap="round"/>
      <path d="M -17 -8 a 17 17 0 1 1 34 0 c 0 11 -17 15 -17 32" stroke="${INK_900}" stroke-width="9" fill="none" stroke-linecap="round"/>
      ${[195, 240, 300, 345]
        .map((a) => {
          const r = (a * Math.PI) / 180;
          return `<line x1="${n(Math.cos(r) * 82)}" y1="${n(Math.sin(r) * 82)}" x2="${n(Math.cos(r) * 108)}" y2="${n(Math.sin(r) * 108)}" stroke="${ACCENT_300}" stroke-width="9" stroke-linecap="round" stroke-opacity="0.6"/>`;
        })
        .join('')}
    </g>

    ${[
      { x: -390, y: 20, rot: -5, icon: 'camera' },
      { x: -130, y: 55, rot: 3, icon: 'quote' },
      { x: 130, y: 30, rot: -3, icon: 'list' },
      { x: 390, y: 60, rot: 5, icon: 'chart' },
    ]
      .map(({ x, y, rot, icon }) => {
        const glyph = {
          camera: `${card(-46, -30, 92, 66, { fill: ACCENT_400, fo: 0.55, stroke: null, r: 10 })}
                   <circle cx="0" cy="3" r="20" fill="${INK_900}" fill-opacity="0.75"/>
                   ${card(-18, -42, 36, 14, { fill: ACCENT_400, fo: 0.55, stroke: null, r: 5 })}`,
          quote: `<text x="0" y="34" font-family="Liberation Serif, DejaVu Serif, serif" font-size="150" font-weight="bold" fill="${ACCENT_400}" fill-opacity="0.6" text-anchor="middle">&#8220;</text>`,
          list: `${[0, 1, 2].map((i) => `<circle cx="-40" cy="${-24 + i * 26}" r="7" fill="${ACCENT_400}" fill-opacity="0.7"/>
                   ${bar(-22, -30 + i * 26, 62, 12, ACCENT_400, 0.55)}`).join('')}`,
          chart: `${[0, 1, 2].map((i) => `<rect x="${-42 + i * 32}" y="${10 - (i + 1) * 22}" width="22" height="${(i + 1) * 22 + 14}" rx="5" fill="${ACCENT_400}" fill-opacity="${0.4 + i * 0.18}"/>`).join('')}`,
        }[icon];
        return `
          <g transform="translate(${x} ${y}) rotate(${rot})">
            ${card(-118, -140, 236, 280, { fill: INK_600, stroke: ACCENT_400, so: 0.45, r: 18 })}
            <g transform="translate(0 -68)">${glyph}</g>
            ${bar(-88, 12, 176, 13, ACCENT_200, 0.75)}
            ${bar(-88, 40, 140, 10, ACCENT_300, 0.32)}
            ${bar(-88, 62, 165, 10, ACCENT_300, 0.32)}
            ${bar(-88, 84, 110, 10, ACCENT_300, 0.32)}
          </g>`;
      })
      .join('')}`,
};

/* ------------------------------------------------------------------ mapping */

const covers = [
  {
    file: 'ai-content-tools.png',
    scene: scenes.aiContent,
    tag: 'AI & CONTENT',
    alt: 'A writing app with a draft open beside an AI suggestion panel offering the next paragraph, illustrating AI-powered content tools that save startups hours.',
  },
  {
    file: 'automate-before-you-scale.png',
    scene: scenes.automate,
    tag: 'AUTOMATION',
    alt: 'An automation builder showing a trigger branching through a condition into two completed steps, illustrating workflows that run without an employee.',
  },
  {
    file: 'lead-magnet.png',
    scene: scenes.lead,
    tag: 'LEAD GEN',
    alt: 'A landing page with a downloadable guide and sign-up form feeding names into a growing subscriber list, illustrating a lead magnet built in minutes.',
  },
  {
    file: 'waas-website.png',
    scene: scenes.waas,
    tag: 'WAAS',
    alt: 'A website shown on desktop and mobile with a recurring update badge, illustrating Website as a Service where hosting and upkeep are handled on a plan.',
  },
  {
    file: 'power-automate-templates.png',
    scene: scenes.templates,
    tag: 'TEMPLATES',
    alt: 'A searchable gallery of automation templates with one highlighted and ready to run, illustrating Power Automate templates for small business owners.',
  },
  {
    file: 'weekend-tech-stack.png',
    scene: scenes.allInOne,
    tag: 'TECH STACK',
    alt: 'A layered tech stack beside a launch checklist with most items ticked off, illustrating the tools needed to launch a business in a single weekend.',
  },
  {
    file: 'brand-design.png',
    scene: scenes.brand,
    tag: 'BRANDING',
    alt: 'A brand board showing a logo mark, typeface specimen, colour palette and business card mockup, illustrating building a pro brand without a design degree.',
  },
  {
    file: 'case-study-upright-medical.png',
    scene: scenes.dashboard,
    tag: 'CASE STUDY',
    alt: 'An analytics dashboard with metric tiles, a rising bar chart and a trend line climbing, illustrating results from the Upright Medical website project.',
  },
  {
    file: 'hello-world.png',
    scene: scenes.helloWorld,
    tag: 'GROWLAB NEWS',
    alt: 'A terminal publishing a first post with the finished site behind it, marking the launch of the GrowLab blog.',
  },
  {
    file: 'content-calendar.png',
    scene: scenes.calendar,
    tag: 'CONTENT',
    alt: 'A content calendar with posts scheduled across the month beside a queue of drafts ready to publish, illustrating a planned posting schedule.',
  },
  {
    file: 'website-traffic.png',
    scene: scenes.traffic,
    tag: 'SEO & TRAFFIC',
    alt: 'A traffic report under a magnifying glass beside a list of search results, illustrating diagnosing and fixing a website that gets no visitors.',
  },
  {
    file: 'what-to-post.png',
    scene: scenes.ideas,
    tag: 'CONTENT IDEAS',
    alt: 'An idea board of post cards for photos, quotes, tips and results beneath a lit bulb, illustrating what to post when you do not know what to post.',
  },
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const { file, scene, tag } of covers) {
    await sharp(Buffer.from(frame(scene, tag)))
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(path.join(OUT_DIR, file));
    console.log(`  ✓ ${file}`);
  }

  console.log(`\n${covers.length} covers written to ${path.relative(process.cwd(), OUT_DIR)}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { covers };
