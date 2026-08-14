"use strict";
exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ui_Reveal)
});

// EXTERNAL MODULE: external "C:\\Users\\mnbro\\grow-lab\\node_modules\\react\\index.js"
var external_C_Users_mnbro_grow_lab_node_modules_react_index_js_ = __webpack_require__(4504);
var external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_mnbro_grow_lab_node_modules_react_index_js_);
;// ./src/hooks/useScrollReveal.ts
function useScrollReveal(threshold=0.1){const ref=(0,external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.useRef)(null);(0,external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.useEffect)(()=>{const el=ref.current;if(!el)return;const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduceMotion){el.classList.remove('opacity-0','translate-y-6');return;}const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){el.classList.add('animate-fade-in-up');observer.unobserve(entry.target);}},{threshold});observer.observe(el);return()=>observer.disconnect();},[threshold]);return ref;}
;// ./src/components/ui/Reveal.tsx
const Reveal=({as:Component='div',children,className=''})=>{const ref=useScrollReveal();return/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Component,{ref:ref,className:`opacity-0 translate-y-6 ${className}`},children);};/* harmony default export */ const ui_Reveal = (Reveal);

/***/ }),

/***/ 1901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var _shared_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4202);
/* harmony import */ var _shared_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4578);




const exploreLinks = [{
  to: '/services',
  label: 'Services'
}, {
  to: '/website-plans',
  label: 'Plans'
}, {
  to: '/#work',
  label: 'Work'
}, {
  to: '/blog',
  label: 'Insights'
}];
const startLinks = [{
  to: '/contact',
  label: 'Book a Strategy Call'
}, {
  to: '/website-plans',
  label: 'Compare Plans'
}];
const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
  className: "border-t border-white/5 bg-ink-900 py-16 text-gray-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "grid gap-12 sm:grid-cols-2 md:grid-cols-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "col-span-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Logo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
  className: "h-16 lg:h-20"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "mt-4 max-w-xs text-sm text-gray-500"
}, "Design, hosting, and automation for ambitious small businesses: one monthly plan, built to grow with you.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
  className: "eyebrow mb-4 text-gray-400"
}, "Explore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "space-y-3 text-sm"
}, exploreLinks.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  key: link.to
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: link.to,
  className: "transition-colors hover:text-white"
}, link.label))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
  className: "eyebrow mb-4 text-gray-400"
}, "Get Started"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "space-y-3 text-sm"
}, startLinks.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  key: link.to
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: link.to,
  className: "transition-colors hover:text-white"
}, link.label)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs sm:flex-row"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 ", new Date().getFullYear(), " GrowLab. All rights reserved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "flex gap-6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/contact",
  className: "transition-colors hover:text-white"
}, "Contact")))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 4202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const Container=({children,className=''})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`},children);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ 4278:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);

function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Bars3Icon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 4576:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);

function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XMarkIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 4578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ shared_Logo)
});

// EXTERNAL MODULE: external "C:\\Users\\mnbro\\grow-lab\\node_modules\\react\\index.js"
var external_C_Users_mnbro_grow_lab_node_modules_react_index_js_ = __webpack_require__(4504);
var external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_mnbro_grow_lab_node_modules_react_index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// ./src/components/shared/images/growlabLogoTrans.png
/* harmony default export */ const growlabLogoTrans = ("/static/growlabLogoTrans-ba852c05aba24131cd05717314e30817.png");
;// ./src/components/shared/Logo.tsx
// Default logo sizes have been increased.
// Mobile: h-28 (112px)
// Large screens (lg): h-36 (144px)
const Logo=({className='h-28 lg:h-36'})=>/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"inline-block","aria-label":"Go to homepage"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("img",{src:growlabLogoTrans,alt:"GrowLabs Logo",className:`w-auto ${className}`}));/* harmony default export */ const shared_Logo = (Logo);

/***/ }),

/***/ 4844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const base='inline-flex items-center justify-center font-semibold font-accent rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 transition-transform duration-200 ease-in-out transform hover:scale-105';const variants={primary:'bg-accent-400 text-ink-900 hover:brightness-110 focus-visible:ring-accent-400',secondary:'bg-transparent text-white border border-gray-600 hover:text-ink-900 hover:bg-white focus-visible:ring-gray-400',ghost:'bg-transparent text-white border border-white/20 hover:border-accent-400 hover:text-accent-300 focus-visible:ring-accent-400'};const sizes={normal:'px-6 py-3 text-sm',large:'px-8 py-4 text-base',xl:'px-10 py-5 text-lg sm:text-xl'};const Button=({variant='primary',size='normal',as:Component='button',children,...props})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component,Object.assign({className:`${base} ${variants[variant]} ${sizes[size]}`},props),children);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 6464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8154);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8466);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1901);
/* harmony import */ var _components_sections_PricingTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7980);
/* harmony import */ var _components_layout_BackgroundGlow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4411);






const WebsitePlansPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Website Plans | GrowLab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
  name: "description",
  content: "Three monthly plans covering website design, hosting, and automation: Starter, Growth, and Pro Launch."
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
  id: "main-content",
  className: "relative pt-12 text-white"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_BackgroundGlow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_PricingTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsitePlansPage);

/***/ }),

/***/ 7980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4844);
/* harmony import */ var _shared_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4202);
/* harmony import */ var _ui_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9263);
/* harmony import */ var _ui_Reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(374);
/* harmony import */ var _StyledSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9726);






const plans = [{
  name: 'Starter',
  price: '$149/mo',
  tagline: 'Your online presence: built, hosted, and launched for you.',
  popular: false,
  features: ['1–3 page branded website (mobile ready)', 'Hosted on Netlify: fast, secure, always live', 'Google Business Profile setup', 'AI logo + color palette', '3 Canva post templates', '1 automation per quarter', 'Monthly website & Google snapshot', 'Email support']
}, {
  name: 'Growth',
  price: '$299/mo',
  tagline: 'Everything your brand needs to look professional, stay active, and bring in leads.',
  popular: true,
  features: ['Website up to 8 pages + landing page', 'Fully branded style kit', 'Hosted on Netlify: optimized for mobile, SEO & speed', 'Monthly automation', '6 branded social posts/month', '2 short-form videos/month', 'Blog section setup + 1 post/month', 'Booking/calendar embed', 'Priority email support']
}, {
  name: 'Pro Launch',
  price: '$499/mo',
  tagline: 'The all-in-one system to scale your digital presence, content, and client funnels.',
  popular: false,
  features: ['Unlimited pages + multi-location ready', 'Dynamic content system on Netlify', 'AI-powered content calendar', '4 reels/month', '2 SEO blog posts/month', 'Lead magnet funnel + email automation', 'Email marketing flows', 'Full Maps listing management', 'Monthly 30-minute strategy call', 'Slack or direct message support']
}];
const PricingTable = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StyledSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
  id: "pricing",
  className: "py-28 text-white sm:py-32"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "mx-auto mb-16 max-w-2xl text-center"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "eyebrow mb-4"
}, "Plans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
  className: "text-display-sm font-heading font-black text-white"
}, "GrowLab Business Launch Plans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "mx-auto mt-6 text-gray-300"
}, "We build, host, and grow your business online \u2014 no tech skills needed. Every site is hosted on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
  className: "text-white"
}, "Netlify"), ", a fast, secure, always-on platform used by companies like Nike and Peloton.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "grid gap-8 lg:grid-cols-3 lg:items-start"
}, plans.map(plan => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Reveal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
  key: plan.name
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: `relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${plan.popular ? 'border-accent-400/70 bg-ink-700 lg:-translate-y-4 lg:shadow-2xl lg:shadow-accent-400/10' : 'border-white/10 bg-ink-800 hover:border-white/20'}`
}, plan.popular && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink-900"
}, "Most Popular"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
  className: "text-lg font-semibold text-white"
}, plan.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "mt-3 font-heading text-4xl font-black text-white"
}, plan.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "mt-3 text-sm text-gray-400"
}, plan.tagline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "mt-8 flex-grow space-y-3 border-t border-white/10 pt-8 text-sm text-gray-300"
}, plan.features.map(f => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  key: f,
  className: "flex items-start gap-3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
  name: "check",
  className: "mt-0.5 h-4 w-4 shrink-0 text-accent-400"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, f)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
  className: "mt-8 w-full",
  as: "a",
  variant: plan.popular ? 'primary' : 'secondary',
  href: `/contact?plan=${encodeURIComponent(plan.name)}`
}, "Choose ", plan.name))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "mx-auto mt-20 max-w-3xl"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
  className: "mb-6 text-center text-base font-semibold text-white"
}, "Hosting & Tech, Explained"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "grid gap-4 text-sm text-gray-300 sm:grid-cols-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
  name: "check",
  className: "mt-0.5 h-4 w-4 shrink-0 text-accent-400"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Every website is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
  className: "text-white"
}, "hosted by GrowLab on Netlify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
  name: "check",
  className: "mt-0.5 h-4 w-4 shrink-0 text-accent-400"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Fast, always online, and safe from hackers \u2014 by default")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
  name: "check",
  className: "mt-0.5 h-4 w-4 shrink-0 text-accent-400"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "You don\u2019t manage servers or pay extra for hosting")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
  name: "check",
  className: "mt-0.5 h-4 w-4 shrink-0 text-accent-400"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Basic or full of automation, your site just works \u2014 we handle it"))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingTable);

/***/ }),

/***/ 8466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ layout_Header)
});

// EXTERNAL MODULE: external "C:\\Users\\mnbro\\grow-lab\\node_modules\\react\\index.js"
var external_C_Users_mnbro_grow_lab_node_modules_react_index_js_ = __webpack_require__(4504);
var external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_mnbro_grow_lab_node_modules_react_index_js_);
// EXTERNAL MODULE: ./src/components/shared/Logo.tsx + 1 modules
var Logo = __webpack_require__(4578);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// ./src/components/layout/Nav.tsx
const links=[{to:'/services',label:'Services'},{to:'/website-plans',label:'Plans'},{to:'/#work',label:'Work'},{to:'/blog',label:'Insights'},{to:'/contact',label:'Contact'}];const Nav=({vertical=false,onNavigate})=>/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("nav",{className:`${vertical?'flex flex-col space-y-4 text-center':'space-x-10'} text-sm font-medium text-gray-400`},links.map(link=>/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{key:link.to,to:link.to,className:"transition-colors hover:text-white",activeClassName:"text-white",onClick:onNavigate},link.label)));/* harmony default export */ const layout_Nav = (Nav);
// EXTERNAL MODULE: ./src/components/ui/Button.tsx
var Button = __webpack_require__(4844);
// EXTERNAL MODULE: ./src/components/shared/Container.tsx
var Container = __webpack_require__(4202);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(4576);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(4278);
;// ./src/components/layout/Header.tsx
const Header=()=>{const{0:open,1:setOpen}=(0,external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.useState)(false);// The 'scrolled' state is no longer needed for styling but can be kept for other logic if necessary.
// For this component, we can simplify by removing it if it's not used elsewhere.
// For now, it's left in, but the styles that use it are removed.
// Effect to prevent scrolling when mobile menu is open
(0,external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.useEffect)(()=>{if(open){document.body.style.overflow='hidden';}else{document.body.style.overflow='auto';}return()=>{document.body.style.overflow='auto';// Cleanup on unmount
};},[open]);return/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement((external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("a",{href:"#main-content",className:"skip-link"},"Skip to content"),/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("header",{className:"sticky top-0 z-50 border-b border-white/5 bg-ink-900/80 backdrop-blur-md"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Container/* default */.A,{className:"flex items-center justify-between transition-all duration-300 py-4"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div",{className:"hidden flex-1 items-center justify-between md:flex"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div",{className:"flex-shrink-0"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Logo/* default */.A,{className:"h-32"})),/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div",{className:"flex-1 flex justify-center"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(layout_Nav,null)),/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div",{className:"flex-shrink-0"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Button/* default */.A,{variant:"primary",size:"large",as:"a",href:"/contact"},"Book Now"))),/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div",{className:"flex w-full items-center justify-between md:hidden"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div",{className:"flex-1"}),/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div",{className:"flex flex-col items-center gap-0"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Logo/* default */.A,null)),/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div",{className:"flex-1 flex justify-end"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("button",{onClick:()=>setOpen(!open),className:"rounded-md p-2 text-gray-400 transition hover:bg-white/10 hover:text-white","aria-label":"Toggle menu"},open?/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(XMarkIcon/* default */.A,{className:"h-7 w-7"}):/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Bars3Icon/* default */.A,{className:"h-7 w-7"}))))),/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div",{className:`absolute left-0 w-full origin-top transform border-b border-white/5 bg-ink-800 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${open?'scale-y-100':'scale-y-0'}`},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Container/* default */.A,{className:"flex flex-col items-center gap-y-8 py-10"},/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(layout_Nav,{vertical:true,onNavigate:()=>setOpen(false)}),/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Button/* default */.A,{variant:"primary",size:"large",as:"a",href:"/contact",onClick:()=>setOpen(false)},"Book Now")))));};/* harmony default export */ const layout_Header = (Header);

/***/ }),

/***/ 9263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const icons={check:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"h-5 w-5"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z",clipRule:"evenodd"})),menu:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path",{fillRule:"evenodd",d:"M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 000 2h16a1 1 0 100-2H4z",clipRule:"evenodd"})),close:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path",{fillRule:"evenodd",d:"M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z",clipRule:"evenodd"}))};const Icon=({name,className=''})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:className},icons[name]||null);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ 9726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const StyledSection=({children,className='',id})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{id:id,className:`relative w-full bg-transparent ${className}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"relative z-10"},children));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledSection);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-website-plans-tsx.js.map