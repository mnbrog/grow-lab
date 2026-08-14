"use strict";
exports.id = 245;
exports.ids = [245];
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

/***/ 9208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "C:\\Users\\mnbro\\grow-lab\\node_modules\\react\\index.js"
var external_C_Users_mnbro_grow_lab_node_modules_react_index_js_ = __webpack_require__(4504);
var external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_mnbro_grow_lab_node_modules_react_index_js_);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(8154);
// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(8466);
// EXTERNAL MODULE: ./src/components/layout/Footer.tsx
var Footer = __webpack_require__(1901);
// EXTERNAL MODULE: ./src/components/ui/Button.tsx
var Button = __webpack_require__(4844);
// EXTERNAL MODULE: ./src/components/shared/Container.tsx
var Container = __webpack_require__(4202);
;// ./src/components/ui/KineticText.tsx

/**
 * Splits text into words and staggers their entrance via CSS (see .kinetic-word
 * in GlobalStyles.css). Pure CSS animation-delay per word (no JS animation
 * loop), so it stays cheap and respects prefers-reduced-motion automatically.
 */
const KineticText = ({
  text,
  as: Component = 'span',
  startIndex = 0,
  className = '',
  wordClassName = ''
}) => {
  const words = text.split(' ');
  return /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Component, {
    className: className
  }, words.map((word, i) => /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("span", {
    key: `${word}-${i}`,
    className: `kinetic-word ${wordClassName}`,
    style: {
      ['--i']: startIndex + i
    }
  }, word, i < words.length - 1 ? ' ' : '')));
};
/* harmony default export */ const ui_KineticText = (KineticText);
;// ./node_modules/@heroicons/react/24/outline/esm/ArrowDownIcon.js

function ArrowDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
  }));
}
const ForwardRef = /*#__PURE__*/ external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.forwardRef(ArrowDownIcon);
/* harmony default export */ const esm_ArrowDownIcon = (ForwardRef);
;// ./src/components/sections/HeroSection.tsx





const HeroSection = () => {
  const lineOne = 'Websites built';
  const lineOneWords = lineOne.split(' ').length;
  return /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("section", {
    className: "relative flex min-h-[92vh] flex-col justify-center bg-transparent pt-28 pb-16 text-white sm:pt-32",
    "aria-labelledby": "hero-heading"
  }, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Container/* default */.A, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
    className: "eyebrow mb-6 kinetic-word",
    style: {
      ['--i']: 0
    }
  }, "Web Design \xB7 Hosting \xB7 Automation"), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("h1", {
    id: "hero-heading",
    className: "max-w-5xl font-heading text-display-lg font-black text-white"
  }, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(ui_KineticText, {
    text: lineOne,
    startIndex: 1
  }), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("br", null), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(ui_KineticText, {
    text: "to grow with you.",
    startIndex: 1 + lineOneWords,
    wordClassName: "text-accent-400"
  })), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
    className: "kinetic-word mt-8 max-w-xl text-lg text-gray-300 sm:text-xl",
    style: {
      ['--i']: 9
    }
  }, "GrowLab is the design, hosting, and automation team behind ambitious local businesses: one monthly plan, zero tech headaches."), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
    className: "kinetic-word mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center",
    style: {
      ['--i']: 10
    }
  }, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Button/* default */.A, {
    as: "a",
    href: "/contact",
    variant: "primary",
    size: "xl"
  }, "Book a Free Strategy Call"), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Button/* default */.A, {
    as: "a",
    href: "#work",
    variant: "ghost",
    size: "large"
  }, "See our work")), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
    className: "kinetic-word mt-4 text-sm text-gray-500",
    style: {
      ['--i']: 11
    }
  }, "No tech skills needed. Cancel anytime.")), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("a", {
    href: "#trust",
    "aria-label": "Scroll to see our clients",
    className: "scroll-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-gray-500 transition-colors hover:text-accent-300 sm:flex"
  }, "Scroll", /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(esm_ArrowDownIcon, {
    className: "h-4 w-4 animate-bounce",
    "aria-hidden": "true"
  })));
};
/* harmony default export */ const sections_HeroSection = (HeroSection);
// EXTERNAL MODULE: ./src/components/sections/StyledSection.tsx
var StyledSection = __webpack_require__(9726);
;// ./src/components/sections/Hero.tsx
const Hero=()=>/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(StyledSection/* default */.A,null,/*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(sections_HeroSection,null));/* harmony default export */ const sections_Hero = (Hero);
;// ./src/components/shared/portfolio.json
const portfolio_namespaceObject = /*#__PURE__*/JSON.parse('[{"name":"Kerr Chief","description":"Outdoor Clothing","industry":"Outdoor Apparel","focus":"A brand-forward storefront built to match the gear.","services":["Website Design","Brand Identity","Hosting"],"logo":"https://michaelnbrogan.com/Arrowhead_LGO.png","url":"https://www.kerr-chief.com/"},{"name":"Upright Medical Solutions","description":"Medical Software","industry":"Medical Software","focus":"Automated intake so the team spends less time on paperwork.","services":["Website Design","Workflow Automation","SEO"],"logo":"https://michaelnbrogan.com/Upright%20Medical%20Solutions%20Logo.png","url":"https://uprightmedicalsolutions.com/"},{"name":"VinylSwipe","description":"3D Vinyl Record Player","industry":"Interactive Product","focus":"A playful, interactive 3D record player built to be experienced, not just viewed.","services":["Web Design","Interactive 3D","Hosting"],"logo":"https://michaelnbrogan.com/vinylswipe-logosm.png","url":"https://vinylswipe.netlify.app/"},{"name":"Mckenzie Strategies","description":"Therapist","industry":"Therapy Practice","focus":"A calm, welcoming site that makes it easy to take the first step.","services":["Website Design","Branding","Hosting"],"logo":"https://assets.softr-files.com/applications/df0789aa-54b4-4d20-b138-f8c96e79952b/assets/dde35ac7-42f8-4667-8179-ed4fe3b099e2.jpeg","url":"https://www.mckenziestrategies.com/"},{"name":"Steiner Shipyard","description":"Ship Builders","industry":"Shipbuilding","focus":"An industrial-grade site as solid as what they build.","services":["Website Design","Hosting"],"logo":"https://steinershipyard.com/wp-content/uploads/2019/04/cropped-steiner-shipyard-logo-2019.png","url":"https://steinershipyard.com/"},{"name":"Alta Vida Tezcal","description":"Tequila","industry":"Spirits Brand","focus":"A bold, premium storefront built to match the bottle.","services":["Website Design","Brand Identity","Hosting"],"logo":"https://michaelnbrogan.com/all%20veda%20logo.png","url":"https://www.altavidatezcal.com/"},{"name":"Timucua Outdoors","description":"Fly Fishing","industry":"Outdoor Recreation","focus":"A rugged, story-driven site for a fly fishing outfit.","services":["Website Design","Hosting"],"logo":"https://michaelnbrogan.com/wise+timucuan+logo.png","url":""},{"name":"Trapezi Foods","description":"Greek Food","industry":"Food & Beverage","focus":"A fresh, appetite-driven storefront for a Greek food brand.","services":["Website Design","Branding","Hosting"],"logo":"https://michaelnbrogan.com/trapezifoods.jpeg","url":"https://trapezifoods.com/"},{"name":"Wax Monkey","description":"Jam Band","industry":"Music","focus":"A high-energy site built to match the live show.","services":["Website Design","Hosting"],"logo":"https://michaelnbrogan.com/wax-monkey-logo.jpg","url":"https://www.waxmonkeyband.com/"}]');
;// ./src/components/sections/LogoStrip.tsx




const projects = portfolio_namespaceObject;
const LogoStrip = () => /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(StyledSection/* default */.A, {
  id: "trust",
  className: "border-y border-white/5 py-14"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Container/* default */.A, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
  className: "eyebrow mb-8 text-center sm:text-left"
}, "Trusted by ambitious local & national businesses"), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("ul", {
  className: "grid grid-cols-3 gap-x-8 gap-y-10 sm:grid-cols-5"
}, projects.map(project => /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("li", {
  key: project.name,
  className: "flex items-center justify-center"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("img", {
  src: project.logo,
  alt: project.name,
  loading: "lazy",
  className: "h-10 w-auto max-w-[9rem] object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
}))))));
/* harmony default export */ const sections_LogoStrip = (LogoStrip);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/GlobeAltIcon.js
var GlobeAltIcon = __webpack_require__(4999);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/LifebuoyIcon.js
var LifebuoyIcon = __webpack_require__(7388);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowPathIcon.js
var ArrowPathIcon = __webpack_require__(3211);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PaintBrushIcon.js
var PaintBrushIcon = __webpack_require__(7959);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js
var ChartBarIcon = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js
var ChatBubbleLeftRightIcon = __webpack_require__(8404);
// EXTERNAL MODULE: ./src/components/ui/Reveal.tsx + 1 modules
var Reveal = __webpack_require__(374);
;// ./src/components/sections/FeatureGrid.tsx






const pillars = [{
  index: '01',
  title: 'Web Design & Build',
  description: 'Custom-designed, mobile-first websites built to convert. Live in as little as two weeks.',
  href: '/services#design',
  icon: GlobeAltIcon/* default */.A
}, {
  index: '02',
  title: 'Hosting & Care',
  description: 'Fast, secure Netlify hosting with monthly updates and backups. We own uptime end to end.',
  href: '/services#hosting',
  icon: LifebuoyIcon/* default */.A
}, {
  index: '03',
  title: 'Automation',
  description: 'Booking flows, lead intake, and follow-ups that run themselves, so nothing falls through the cracks.',
  href: '/services#automation',
  icon: ArrowPathIcon/* default */.A
}, {
  index: '04',
  title: 'Branding & Content',
  description: 'A logo, style kit, and on-brand content that make a small business look like an established one.',
  href: '/services#branding',
  icon: PaintBrushIcon/* default */.A
}, {
  index: '05',
  title: 'SEO & Local Growth',
  description: 'Google Business optimization and search-ready content that brings the right traffic in.',
  href: '/services#growth',
  icon: ChartBarIcon/* default */.A
}, {
  index: '06',
  title: 'Strategy & Support',
  description: 'A real team on call, with priority support and strategy check-ins as your plan scales with you.',
  href: '/services#support',
  icon: ChatBubbleLeftRightIcon/* default */.A
}];
const FeatureGrid = () => /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(StyledSection/* default */.A, {
  id: "features",
  className: "py-28 sm:py-32"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Container/* default */.A, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
  className: "mb-16 max-w-2xl"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
  className: "eyebrow mb-4"
}, "What We Do"), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("h2", {
  className: "text-display-sm font-heading font-black text-white"
}, "One team. Every piece of your online presence.")), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
  className: "grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
}, pillars.map(({
  index,
  title,
  description,
  href,
  icon: IconComponent
}) => /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Reveal/* default */.A, {
  key: title,
  as: "div"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link, {
  to: href,
  className: "group flex h-full flex-col bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
  className: "mb-8 flex items-center justify-between"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("span", {
  className: "font-heading text-sm font-semibold text-gray-600"
}, index), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(IconComponent, {
  className: "h-6 w-6 text-accent-400",
  "aria-hidden": "true"
})), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("h3", {
  className: "mb-2 text-xl font-semibold text-white"
}, title), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
  className: "flex-grow text-sm leading-relaxed text-gray-400"
}, description), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("span", {
  className: "mt-6 inline-flex items-center text-sm font-semibold text-accent-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
}, "Learn more \u2192")))))));
/* harmony default export */ const sections_FeatureGrid = (FeatureGrid);
// EXTERNAL MODULE: ./src/components/sections/PricingTable.tsx
var PricingTable = __webpack_require__(7980);
;// ./src/components/sections/CallToAction.tsx





const CallToAction = () => /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(StyledSection/* default */.A, {
  id: "cta",
  className: "border-t border-white/5 py-28 text-center sm:py-32"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Container/* default */.A, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Reveal/* default */.A, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
  className: "eyebrow mb-6"
}, "Let's Talk")), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Reveal/* default */.A, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("h2", {
  className: "mx-auto max-w-3xl font-heading text-display-sm font-black text-white"
}, "Ready for a website that grows with you?")), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Reveal/* default */.A, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
  className: "mx-auto mt-6 mb-10 max-w-xl text-lg text-gray-300"
}, "Book a free strategy call. We'll map out the right plan for where your business is today and where it's headed next.")), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Reveal/* default */.A, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
  className: "flex flex-col items-center justify-center gap-4 sm:flex-row"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Button/* default */.A, {
  as: "a",
  href: "/contact",
  variant: "primary",
  size: "xl"
}, "Book a Free Strategy Call"), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Button/* default */.A, {
  as: "a",
  href: "/website-plans",
  variant: "ghost",
  size: "large"
}, "Compare plans")))));
/* harmony default export */ const sections_CallToAction = (CallToAction);
;// ./node_modules/@heroicons/react/24/outline/esm/ArrowUpRightIcon.js

function ArrowUpRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
  }));
}
const ArrowUpRightIcon_ForwardRef = /*#__PURE__*/ external_C_Users_mnbro_grow_lab_node_modules_react_index_js_.forwardRef(ArrowUpRightIcon);
/* harmony default export */ const esm_ArrowUpRightIcon = (ArrowUpRightIcon_ForwardRef);
;// ./src/components/sections/Portfolio.tsx







const caseStudies = portfolio_namespaceObject;
const Portfolio = () => /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(StyledSection/* default */.A, {
  id: "work",
  className: "py-28 sm:py-32"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Container/* default */.A, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
  className: "mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
  className: "max-w-2xl"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
  className: "eyebrow mb-4"
}, "Selected Work"), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("h2", {
  className: "text-display-sm font-heading font-black text-white"
}, "Real businesses. Real launches.")), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
  className: "max-w-sm text-sm text-gray-400"
}, "A look at what we've built and the systems running behind the scenes for each one.")), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
  className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
}, caseStudies.map((project, i) => {
  const hasLink = Boolean(project.url);
  const Wrapper = hasLink ? 'a' : 'div';
  const linkProps = hasLink ? {
    href: project.url,
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};
  return /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Reveal/* default */.A, {
    key: project.name
  }, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Wrapper, Object.assign({}, linkProps, {
    className: `group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-800 p-8 transition-all duration-300 sm:p-10 ${hasLink ? 'hover:-translate-y-1 hover:border-accent-400/60 hover:bg-ink-700' : ''}`
  }), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
    className: "mb-8 flex items-start justify-between"
  }, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("span", {
    className: "font-heading text-sm font-semibold text-gray-600"
  }, "0", i + 1), hasLink ? /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(esm_ArrowUpRightIcon, {
    className: "h-5 w-5 text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-400",
    "aria-hidden": "true"
  }) : /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("span", {
    className: "text-xs text-gray-600"
  }, "Site offline")), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
    className: "mb-6 flex h-14 items-center"
  }, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("img", {
    src: project.logo,
    alt: `${project.name} logo`,
    loading: "lazy",
    className: "h-10 w-auto max-w-[10rem] rounded bg-white/90 object-contain p-1.5"
  })), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
    className: "eyebrow mb-2 text-gray-500"
  }, project.industry), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("h3", {
    className: "mb-3 text-2xl font-semibold text-white"
  }, project.name), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
    className: "mb-6 flex-grow text-base leading-relaxed text-gray-300"
  }, project.focus), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("ul", {
    className: "flex flex-wrap gap-2"
  }, project.services.map(service => /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("li", {
    key: service,
    className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
  }, service)))));
})), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("div", {
  className: "mt-16 text-center"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("p", {
  className: "mb-6 text-gray-400"
}, "Want to be our next launch?"), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Button/* default */.A, {
  as: "a",
  href: "/contact",
  variant: "secondary",
  size: "large"
}, "Start Your Project"))));
/* harmony default export */ const sections_Portfolio = (Portfolio);
// EXTERNAL MODULE: ./src/components/layout/BackgroundGlow.tsx
var BackgroundGlow = __webpack_require__(4411);
;// ./src/pages/index.tsx











const IndexPage = () => /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement((external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default()).Fragment, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Helmet.Helmet, null, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("title", null, "GrowLab | Web Design, Hosting & Automation for Growing Businesses"), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("meta", {
  name: "description",
  content: "GrowLab designs, hosts, and automates websites for ambitious small businesses: one monthly plan covering design, hosting, and growth."
}), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("meta", {
  property: "og:title",
  content: "GrowLab"
}), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("meta", {
  property: "og:description",
  content: "Websites built to grow with you. Design, hosting, and automation in one monthly plan."
})), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Header/* default */.A, null), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement("main", {
  id: "main-content",
  className: "relative text-white"
}, /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(BackgroundGlow/* default */.A, null), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(sections_Hero, null), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(sections_LogoStrip, null), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(sections_FeatureGrid, null), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(sections_Portfolio, null), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(PricingTable/* default */.A, null), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(sections_CallToAction, null)), /*#__PURE__*/external_C_Users_mnbro_grow_lab_node_modules_react_index_js_default().createElement(Footer/* default */.A, null));
/* harmony default export */ const pages = (IndexPage);

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
//# sourceMappingURL=component---src-pages-index-tsx.js.map