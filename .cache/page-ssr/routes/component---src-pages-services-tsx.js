"use strict";
exports.id = 819;
exports.ids = [819];
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

/***/ 3211:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);

function ArrowPathIcon({
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
    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowPathIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

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

/***/ 4999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);

function GlobeAltIcon({
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
    d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(GlobeAltIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 5338:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);

function ChartBarIcon({
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
    d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChartBarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 7388:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);

function LifebuoyIcon({
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
    d: "M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LifebuoyIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 7755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8154);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4999);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7388);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3211);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7959);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5338);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8404);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8466);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1901);
/* harmony import */ var _components_shared_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4202);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4844);
/* harmony import */ var _components_ui_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9263);
/* harmony import */ var _components_ui_Reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(374);
/* harmony import */ var _components_layout_BackgroundGlow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4411);










const services = [{
  id: 'design',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
  title: 'Web Design & Build',
  description: 'A custom, mobile-first site built around your business, never a drag-and-drop template.',
  points: ['Custom design, not a reused template', '1–3 pages on Starter, up to unlimited on Pro Launch', 'Fast, modern build hosted on Netlify', 'Launched in as little as two weeks']
}, {
  id: 'hosting',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
  title: 'Hosting & Care',
  description: 'The same class of hosting infrastructure used by companies like Nike and Peloton, included on every plan.',
  points: ['Netlify hosting on every plan, no extra cost', 'Automatic backups and uptime monitoring', 'Monthly website & Google Business snapshot', 'We handle updates so you never touch a server']
}, {
  id: 'automation',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,
  title: 'Automation',
  description: 'Booking flows, lead intake, and follow-ups that run in the background so nothing gets missed.',
  points: ['Booking and calendar embeds', 'Lead intake flows that sync automatically', 'Email marketing flows on Pro Launch', 'From quarterly automations to a full content calendar, by plan']
}, {
  id: 'branding',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
  title: 'Branding & Content',
  description: 'A cohesive visual identity and a steady stream of content, so the brand looks as sharp as the work you do.',
  points: ['AI-assisted logo and color palette', 'Fully branded style kit on Growth and Pro Launch', 'Monthly blog posts, social content, and short-form video', 'Everything designed to feel like one brand']
}, {
  id: 'growth',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
  title: 'SEO & Local Growth',
  description: 'Built to be found, not just built to look good.',
  points: ['Google Business Profile setup and management', 'SEO-optimized blog content', 'Lead magnet funnels on Pro Launch', 'Full Maps listing management on Pro Launch']
}, {
  id: 'support',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,
  title: 'Strategy & Support',
  description: 'A real team on the other end, not a ticket queue.',
  points: ['Email support on every plan', 'Priority email support on Growth', 'Slack or direct-message support on Pro Launch', 'Monthly 30-minute strategy calls on Pro Launch']
}];
const ServicesPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Services | GrowLab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
  name: "description",
  content: "Web design, hosting, automation, branding, SEO, and ongoing support: everything your business needs online, in one monthly plan."
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
  id: "main-content",
  className: "relative text-white"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_BackgroundGlow__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  className: "pt-32 pb-20 sm:pt-40"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_shared_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "eyebrow mb-6"
}, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
  className: "max-w-3xl font-heading text-display-md font-black text-white"
}, "Everything your online presence needs. In one plan."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "mt-6 max-w-xl text-lg text-gray-300"
}, "No \xE0 la carte pricing, no chasing down five different vendors. GrowLab bundles design, hosting, automation, and growth into a single monthly plan."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  className: "pb-28 sm:pb-32"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_shared_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "grid grid-cols-1 gap-6 lg:grid-cols-2"
}, services.map(({
  id,
  icon: IconComponent,
  title,
  description,
  points
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_Reveal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
  key: id,
  as: "div"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: id,
  className: "scroll-mt-24 rounded-2xl border border-white/10 bg-ink-800 p-8 sm:p-10"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, {
  className: "h-8 w-8 text-accent-400",
  "aria-hidden": "true"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
  className: "mt-6 text-2xl font-semibold text-white"
}, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "mt-3 text-gray-400"
}, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "mt-6 space-y-3 text-sm text-gray-300"
}, points.map(point => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  key: point,
  className: "flex items-start gap-3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
  name: "check",
  className: "mt-0.5 h-4 w-4 shrink-0 text-accent-400"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, point)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "mt-16 text-center"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "mb-6 text-gray-400"
}, "See exactly what's included on each plan."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "flex flex-col items-center justify-center gap-4 sm:flex-row"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
  as: "a",
  href: "/website-plans",
  variant: "primary",
  size: "large"
}, "Compare Plans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
  as: "a",
  href: "/contact",
  variant: "ghost",
  size: "large"
}, "Book a Strategy Call")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesPage);

/***/ }),

/***/ 7959:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);

function PaintBrushIcon({
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
    d: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PaintBrushIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 8404:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);

function ChatBubbleLeftRightIcon({
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
    d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChatBubbleLeftRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-services-tsx.js.map