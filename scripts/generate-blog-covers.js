/**
 * Generates the featured/social cover image for every blog post.
 *
 * Covers are drawn as SVG on the GrowLab palette (see tailwind.config.js) and
 * rasterised to 1200x630 PNG -- the Open Graph size, which also crops cleanly
 * to the 400x250 card on the blog index.
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
const INK_600 = '#16293C';
const ACCENT_400 = '#74b3bf';
const ACCENT_300 = '#9BCCD4';
const ACCENT_200 = '#B4DEE3';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Shared background: ink gradient, teal glow, faint dot grid. */
const frame = (motif, label) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${INK_900}"/>
      <stop offset="100%" stop-color="${INK_800}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.72" cy="0.18" r="0.75">
      <stop offset="0%" stop-color="${ACCENT_400}" stop-opacity="0.30"/>
      <stop offset="55%" stop-color="${ACCENT_400}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="${ACCENT_400}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.12" cy="0.92" r="0.6">
      <stop offset="0%" stop-color="${ACCENT_300}" stop-opacity="0.16"/>
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

  <g transform="translate(600 300)">${motif}</g>

  <g transform="translate(72 545)">
    <rect x="0" y="-22" width="4" height="30" rx="2" fill="${ACCENT_400}"/>
    <text x="20" y="0" font-family="Liberation Sans, DejaVu Sans, sans-serif"
          font-size="21" font-weight="bold" letter-spacing="5" fill="#ffffff">GROWLAB</text>
  </g>
  <text x="${W - 72}" y="545" text-anchor="end"
        font-family="Liberation Sans, DejaVu Sans, sans-serif"
        font-size="17" font-weight="bold" letter-spacing="4"
        fill="${ACCENT_300}" fill-opacity="0.95">${esc(label)}</text>
  <rect x="72" y="576" width="${W - 144}" height="2" rx="1" fill="#ffffff" fill-opacity="0.08"/>
</svg>`;

/* ---- motifs (drawn around a 0,0 origin at the canvas centre) ---- */

const sparkle = (x, y, r, o = 1) =>
  `<path d="M ${x} ${y - r} Q ${x + r * 0.18} ${y - r * 0.18} ${x + r} ${y}
            Q ${x + r * 0.18} ${y + r * 0.18} ${x} ${y + r}
            Q ${x - r * 0.18} ${y + r * 0.18} ${x - r} ${y}
            Q ${x - r * 0.18} ${y - r * 0.18} ${x} ${y - r} Z"
        fill="${ACCENT_200}" fill-opacity="${o}"/>`;

const textLine = (x, y, w, o = 0.55) =>
  `<rect x="${x}" y="${y}" width="${w}" height="10" rx="5" fill="${ACCENT_300}" fill-opacity="${o}"/>`;

const motifs = {
  // A page of copy writing itself -- AI sparkles over a document.
  aiContent: `
    <rect x="-210" y="-165" width="300" height="360" rx="20" fill="${INK_600}" stroke="${ACCENT_400}" stroke-opacity="0.45" stroke-width="3"/>
    ${textLine(-170, -120, 200, 0.85)}
    ${textLine(-170, -85, 220)}
    ${textLine(-170, -50, 180)}
    ${textLine(-170, -15, 215)}
    ${textLine(-170, 20, 140)}
    ${textLine(-170, 78, 220, 0.3)}
    ${textLine(-170, 113, 190, 0.3)}
    ${textLine(-170, 148, 120, 0.3)}
    ${sparkle(150, -70, 62)}
    ${sparkle(226, 10, 36, 0.75)}
    ${sparkle(136, 52, 24, 0.5)}`,

  // Three chained steps running on their own -- a workflow loop.
  automate: `
    <path d="M -300 30 H -170 M -70 30 H 70 M 170 30 H 292" stroke="${ACCENT_400}" stroke-width="5" stroke-opacity="0.55" stroke-dasharray="14 11" stroke-linecap="round"/>
    ${[-235, 0, 235]
      .map(
        (x, i) => `
      <rect x="${x - 88}" y="-58" width="176" height="176" rx="32" fill="${INK_600}" stroke="${ACCENT_400}" stroke-opacity="${0.5 + i * 0.2}" stroke-width="4"/>
      ${textLine(x - 54, -20, 108, 0.5 + i * 0.15)}
      ${textLine(x - 54, 12, 76, 0.3)}
      <circle cx="${x}" cy="72" r="${16 + i * 3}" fill="${ACCENT_400}" fill-opacity="${0.4 + i * 0.25}"/>`
      )
      .join('')}
    <path d="M 300 30 l -30 -18 v 36 z" fill="${ACCENT_300}"/>
    <g transform="translate(0 -180)">
      <circle cx="0" cy="0" r="46" fill="none" stroke="${ACCENT_300}" stroke-width="14" stroke-opacity="0.9"/>
      ${Array.from({ length: 8 })
        .map((_, i) => {
          const a = (i * Math.PI) / 4;
          const c = Math.cos(a);
          const s = Math.sin(a);
          return `<line x1="${(c * 52).toFixed(1)}" y1="${(s * 52).toFixed(1)}" x2="${(c * 70).toFixed(1)}" y2="${(s * 70).toFixed(1)}" stroke="${ACCENT_300}" stroke-width="13" stroke-linecap="round" stroke-opacity="0.9"/>`;
        })
        .join('')}
    </g>
    <path d="M -300 -96 q 300 -86 600 0" stroke="${ACCENT_300}" stroke-width="3" stroke-opacity="0.35" fill="none" stroke-dasharray="8 12"/>`,

  // A funnel pulling contacts down into a captured list.
  lead: `
    <path d="M -190 -160 H 190 L 66 10 V 150 L -66 200 V 10 Z" fill="${INK_600}" stroke="${ACCENT_400}" stroke-width="4" stroke-opacity="0.75"/>
    <path d="M -190 -160 H 190 L 128 -75 H -128 Z" fill="${ACCENT_400}" fill-opacity="0.28"/>
    ${[-140, -70, 0, 70, 140]
      .map((x, i) => `<circle cx="${x}" cy="${-215 - (i % 2) * 46}" r="15" fill="${ACCENT_300}" fill-opacity="${0.9 - i * 0.1}"/>`)
      .join('')}
    <circle cx="0" cy="120" r="17" fill="${ACCENT_200}"/>
    ${sparkle(250, -110, 34, 0.6)}`,

  // A site that keeps shipping -- browser frame on a subscription cycle.
  waas: `
    <rect x="-260" y="-175" width="520" height="330" rx="22" fill="${INK_600}" stroke="${ACCENT_400}" stroke-opacity="0.6" stroke-width="3"/>
    <path d="M -260 -120 H 260" stroke="${ACCENT_400}" stroke-opacity="0.45" stroke-width="3"/>
    ${[-225, -192, -159].map((x, i) => `<circle cx="${x}" cy="-147" r="9" fill="${ACCENT_300}" fill-opacity="${0.85 - i * 0.2}"/>`).join('')}
    <rect x="-215" y="-85" width="200" height="14" rx="7" fill="${ACCENT_200}" fill-opacity="0.9"/>
    ${textLine(-215, -45, 300, 0.4)}
    ${textLine(-215, -10, 250, 0.4)}
    <rect x="-215" y="35" width="130" height="40" rx="20" fill="${ACCENT_400}" fill-opacity="0.85"/>
    <rect x="40" y="-85" width="175" height="160" rx="16" fill="${ACCENT_400}" fill-opacity="0.18" stroke="${ACCENT_400}" stroke-opacity="0.4" stroke-width="2"/>
    <path d="M 300 40 a 78 78 0 1 1 -30 -63" stroke="${ACCENT_300}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M 270 -50 l 8 42 l -42 -8 z" fill="${ACCENT_300}"/>`,

  // A vault of ready-made templates, one bolt away from running.
  aiTools: `
    ${[0, 1, 2, 3, 4, 5]
      .map((i) => {
        const x = -270 + (i % 3) * 190;
        const y = -140 + Math.floor(i / 3) * 170;
        return `<rect x="${x}" y="${y}" width="160" height="140" rx="18" fill="${INK_600}" stroke="${ACCENT_400}" stroke-opacity="0.45" stroke-width="3"/>
                ${textLine(x + 24, y + 32, 84, 0.7)}
                ${textLine(x + 24, y + 60, 112, 0.35)}
                ${textLine(x + 24, y + 88, 66, 0.35)}`;
      })
      .join('')}
    <circle cx="215" cy="150" r="82" fill="${INK_900}"/>
    <path d="M 232 92 l -66 82 h 44 l -14 66 l 66 -84 h -44 z" fill="${ACCENT_300}"/>`,

  // The whole stack in one box -- layers under a launch.
  allInOne: `
    ${[2, 1, 0]
      .map((i) => {
        const y = 90 - i * 62;
        const op = 0.28 + i * 0.22;
        return `<path d="M 0 ${y - 62} L 250 ${y} L 0 ${y + 62} L -250 ${y} Z"
                  fill="${ACCENT_400}" fill-opacity="${op}" stroke="${ACCENT_300}" stroke-opacity="0.55" stroke-width="3"/>`;
      })
      .join('')}
    <g transform="translate(0 -125) scale(0.62)">
      <path d="M 0 0 c -24 -32 -32 -52 -32 -68 h 64 c 0 16 -8 36 -32 68 z" fill="${ACCENT_200}"/>
      <path d="M -70 -124 l -46 58 v -66 c 0 -26 18 -46 46 -56 z" fill="${ACCENT_400}"/>
      <path d="M 70 -124 l 46 58 v -66 c 0 -26 -18 -46 -46 -56 z" fill="${ACCENT_400}"/>
      <path d="M 0 -246 c 46 56 70 116 70 172 v 12 h -140 v -12 c 0 -56 24 -116 70 -172 z"
            fill="${INK_600}" stroke="${ACCENT_300}" stroke-width="7"/>
      <circle cx="0" cy="-152" r="30" fill="${ACCENT_200}"/>
    </g>
    ${sparkle(-215, -170, 30, 0.55)}
    ${sparkle(230, -205, 22, 0.4)}`,

  // Brand kit without the design degree -- palette plus letterforms.
  buildDesign: `
    ${[ACCENT_200, ACCENT_400, '#457885', '#ffffff']
      .map(
        (c, i) =>
          `<rect x="${-280 + i * 106}" y="30" width="88" height="150" rx="16" fill="${c}" fill-opacity="${i === 3 ? 0.9 : 1}"/>`
      )
      .join('')}
    <rect x="-280" y="-190" width="380" height="190" rx="20" fill="${INK_600}" stroke="${ACCENT_400}" stroke-opacity="0.5" stroke-width="3"/>
    <text x="-250" y="-50" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="140" font-weight="bold" fill="${ACCENT_200}">Aa</text>
    <circle cx="200" cy="-95" r="94" fill="none" stroke="${ACCENT_400}" stroke-width="26" stroke-opacity="0.85"/>
    <circle cx="200" cy="-95" r="34" fill="${ACCENT_300}"/>`,

  // Results from a real engagement -- measured growth.
  caseStudy: `
    <path d="M -280 190 H 280" stroke="${ACCENT_400}" stroke-opacity="0.45" stroke-width="4" stroke-linecap="round"/>
    ${[70, 120, 185, 250, 320]
      .map(
        (h, i) =>
          `<rect x="${-250 + i * 104}" y="${190 - h}" width="70" height="${h}" rx="12"
             fill="${ACCENT_400}" fill-opacity="${0.3 + i * 0.16}"/>`
      )
      .join('')}
    <path d="M -215 60 L -111 20 L -7 -55 L 97 -95 L 201 -170" stroke="${ACCENT_200}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${[[-215, 60], [-111, 20], [-7, -55], [97, -95], [201, -170]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="${INK_900}" stroke="${ACCENT_200}" stroke-width="6"/>`)
      .join('')}
    <path d="M 232 -215 h 54 v 54" stroke="${ACCENT_200}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  // First post on the blog -- a terminal saying hello.
  helloWorld: `
    <rect x="-300" y="-175" width="600" height="350" rx="22" fill="${INK_600}" stroke="${ACCENT_400}" stroke-opacity="0.6" stroke-width="3"/>
    <path d="M -300 -115 H 300" stroke="${ACCENT_400}" stroke-opacity="0.4" stroke-width="3"/>
    ${[-265, -232, -199].map((x, i) => `<circle cx="${x}" cy="-145" r="9" fill="${ACCENT_300}" fill-opacity="${0.85 - i * 0.2}"/>`).join('')}
    <text x="-250" y="-20" font-family="DejaVu Sans Mono, Liberation Mono, monospace" font-size="52" font-weight="bold" fill="${ACCENT_200}">hello</text>
    <text x="-250" y="52" font-family="DejaVu Sans Mono, Liberation Mono, monospace" font-size="52" font-weight="bold" fill="${ACCENT_400}">world</text>
    <rect x="-8" y="12" width="26" height="52" fill="${ACCENT_200}" fill-opacity="0.9"/>
    ${textLine(-250, 100, 300, 0.3)}
    ${sparkle(230, -60, 40, 0.5)}`,

  // A month of posts, already planned.
  contentCalendar: `
    <rect x="-280" y="-190" width="560" height="380" rx="24" fill="${INK_600}" stroke="${ACCENT_400}" stroke-opacity="0.6" stroke-width="3"/>
    <path d="M -280 -110 H 280" stroke="${ACCENT_400}" stroke-opacity="0.4" stroke-width="3"/>
    <rect x="-200" y="-224" width="18" height="60" rx="9" fill="${ACCENT_300}"/>
    <rect x="182" y="-224" width="18" height="60" rx="9" fill="${ACCENT_300}"/>
    ${Array.from({ length: 20 })
      .map((_, i) => {
        const x = -232 + (i % 5) * 106;
        const y = -74 + Math.floor(i / 5) * 68;
        const on = [1, 3, 7, 10, 14, 16].includes(i);
        return `<rect x="${x}" y="${y}" width="72" height="48" rx="12"
                  fill="${on ? ACCENT_400 : '#ffffff'}" fill-opacity="${on ? 0.85 : 0.07}"/>`;
      })
      .join('')}`,

  // Traffic that finally shows up -- search plus a rising curve.
  traffic: `
    <path d="M -290 200 H 290" stroke="${ACCENT_400}" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
    ${[36, 58, 96, 122, 170, 196, 244]
      .map((h, i) => `<rect x="${-278 + i * 82}" y="${188 - h}" width="46" height="${h}" rx="10" fill="${ACCENT_400}" fill-opacity="${0.14 + i * 0.04}"/>`)
      .join('')}
    <path d="M -290 130 C -170 130 -150 10 -40 10 C 70 10 90 -140 288 -186"
          stroke="${ACCENT_400}" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M 224 -222 h 68 v 68" stroke="${ACCENT_200}" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="-96" cy="-62" r="100" fill="${INK_900}" fill-opacity="0.92" stroke="${ACCENT_200}" stroke-width="13"/>
    <path d="M -26 8 L 62 96" stroke="${ACCENT_200}" stroke-width="22" stroke-linecap="round"/>
    <path d="M -146 -34 l 34 -38 l 32 26 l 42 -52" stroke="${ACCENT_300}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  // Ideas on tap when the page is blank.
  ideas: `
    <rect x="-290" y="-160" width="330" height="215" rx="26" fill="${INK_600}" stroke="${ACCENT_400}" stroke-opacity="0.6" stroke-width="3"/>
    <path d="M -230 55 v 62 l 74 -62 z" fill="${INK_600}" stroke="${ACCENT_400}" stroke-opacity="0.6" stroke-width="3"/>
    ${textLine(-250, -120, 230, 0.8)}
    ${textLine(-250, -82, 260, 0.45)}
    ${textLine(-250, -44, 190, 0.45)}
    ${textLine(-250, -6, 235, 0.45)}
    <rect x="70" y="-40" width="230" height="160" rx="24" fill="${ACCENT_400}" fill-opacity="0.22" stroke="${ACCENT_400}" stroke-opacity="0.55" stroke-width="3"/>
    <path d="M 300 120 v 52 l -66 -52 z" fill="${ACCENT_400}" fill-opacity="0.22"/>
    ${textLine(96, 5, 150, 0.6)}
    ${textLine(96, 43, 175, 0.35)}
    <g transform="translate(190 -168)">
      <circle cx="0" cy="0" r="66" fill="${ACCENT_200}" fill-opacity="0.95"/>
      <path d="M -26 58 h 52 M -20 80 h 40" stroke="${ACCENT_200}" stroke-width="13" stroke-linecap="round"/>
      <path d="M -18 -6 a 18 18 0 1 1 36 0 c 0 12 -18 16 -18 34" stroke="${INK_900}" stroke-width="9" fill="none" stroke-linecap="round"/>
      ${[190, 230, 270, 310, 350]
        .map((a) => {
          const r = (a * Math.PI) / 180;
          return `<line x1="${(Math.cos(r) * 86).toFixed(1)}" y1="${(Math.sin(r) * 86).toFixed(1)}" x2="${(Math.cos(r) * 112).toFixed(1)}" y2="${(Math.sin(r) * 112).toFixed(1)}" stroke="${ACCENT_300}" stroke-width="9" stroke-linecap="round" stroke-opacity="0.6"/>`;
        })
        .join('')}
    </g>`,
};

/** slug -> { motif, label, alt } ; alt doubles as the frontmatter alt text. */
const covers = [
  {
    file: 'ai-content-tools.png',
    motif: motifs.aiContent,
    label: 'AI & CONTENT',
    alt: 'Illustration of a document being drafted with AI sparkles beside the text, representing AI-powered content tools for startups.',
  },
  {
    file: 'automate-before-you-scale.png',
    motif: motifs.automate,
    label: 'AUTOMATION',
    alt: 'Illustration of three connected workflow steps running automatically in sequence, representing business processes automated before hiring.',
  },
  {
    file: 'lead-magnet.png',
    motif: motifs.lead,
    label: 'LEAD GEN',
    alt: 'Illustration of contacts dropping through a funnel into a captured list, representing a lead magnet collecting email subscribers.',
  },
  {
    file: 'waas-website.png',
    motif: motifs.waas,
    label: 'WAAS',
    alt: 'Illustration of a browser window paired with a recurring cycle arrow, representing Website as a Service with ongoing updates and hosting.',
  },
  {
    file: 'power-automate-templates.png',
    motif: motifs.aiTools,
    label: 'TEMPLATES',
    alt: 'Illustration of a grid of ready-made template cards with a lightning bolt, representing Power Automate templates for small businesses.',
  },
  {
    file: 'weekend-tech-stack.png',
    motif: motifs.allInOne,
    label: 'TECH STACK',
    alt: 'Illustration of stacked platform layers beneath a launching rocket, representing a complete tech stack for launching a business in a weekend.',
  },
  {
    file: 'brand-design.png',
    motif: motifs.buildDesign,
    label: 'BRANDING',
    alt: 'Illustration of a colour palette, letterforms and a logo mark, representing building a professional brand without a design degree.',
  },
  {
    file: 'case-study-upright-medical.png',
    motif: motifs.caseStudy,
    label: 'CASE STUDY',
    alt: 'Illustration of a rising bar chart with an upward trend line, representing measured growth from the Upright Medical website project.',
  },
  {
    file: 'hello-world.png',
    motif: motifs.helloWorld,
    label: 'GROWLAB NEWS',
    alt: 'Illustration of a terminal window displaying the words hello world, marking the first post on the GrowLab blog.',
  },
  {
    file: 'content-calendar.png',
    motif: motifs.contentCalendar,
    label: 'CONTENT',
    alt: 'Illustration of a monthly calendar grid with publishing days highlighted, representing a planned social media content schedule.',
  },
  {
    file: 'website-traffic.png',
    motif: motifs.traffic,
    label: 'SEO & TRAFFIC',
    alt: 'Illustration of a magnifying glass over a rising traffic curve, representing diagnosing and fixing a website that gets no visitors.',
  },
  {
    file: 'what-to-post.png',
    motif: motifs.ideas,
    label: 'CONTENT IDEAS',
    alt: 'Illustration of speech bubbles beside a glowing lightbulb, representing content ideas for when you do not know what to post.',
  },
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const { file, motif, label } of covers) {
    const svg = frame(motif, label);
    await sharp(Buffer.from(svg))
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
