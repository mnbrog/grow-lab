"use strict";
exports.id = 455;
exports.ids = [455];
exports.modules = {

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

/***/ 8733:
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
/* harmony import */ var _components_shared_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4202);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4844);
/* harmony import */ var _components_layout_BackgroundGlow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4411);







const BlogPostTemplate = ({
  data
}) => {
  const post = data.markdownRemark;
  const {
    frontmatter
  } = post;
  const url = `${data.site.siteMetadata.siteUrl}${post.fields.slug}`;
  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(url);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, frontmatter.title, " | GrowLab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: post.excerpt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    id: "main-content",
    className: "relative py-28 text-white min-h-screen sm:py-36"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_BackgroundGlow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_shared_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "prose prose-invert prose-lg max-w-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "mb-10"
  }, frontmatter.featuredImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: frontmatter.featuredImage.publicURL,
    alt: frontmatter.title,
    className: "rounded-xl mb-6 w-full object-cover"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "mb-2"
  }, frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-white/60"
  }, frontmatter.date, frontmatter.author && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, " \u2022 ", frontmatter.author), post.timeToRead && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, " \u2022 ", post.timeToRead, " min read"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: post.html
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-12 rounded-2xl border border-white/10 bg-ink-800 p-8 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-4 font-semibold"
  }, "Ready to put this into practice on your own site?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    as: "a",
    href: "/website-plans",
    variant: "primary",
    size: "large"
  }, "See Website Plans")), frontmatter.faqs && frontmatter.faqs.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "my-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "mb-4 text-2xl font-bold"
  }, "FAQs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-4"
  }, frontmatter.faqs.map((faq, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("details", {
    key: idx,
    className: "rounded-xl border border-white/10 bg-ink-800 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("summary", {
    className: "cursor-pointer font-semibold"
  }, faq.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-2"
  }, faq.answer))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-12 border-t border-white/10 pt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(frontmatter.title)}&url=${encodeURIComponent(url)}`,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Share on Twitter",
    className: "rounded-full bg-ink-800 p-3 transition hover:bg-ink-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "h-5 w-5 fill-current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19.633 7.997c.013.278.013.557.013.836 0 8.5-6.473 18.303-18.303 18.303A18.223 18.223 0 010 24.385c.5.057.995.086 1.5.086 3.02 0 5.8-1.023 8.05-2.774-2.8-.057-5.173-1.9-6-4.423.4.07.8.1 1.2.1.58 0 1.14-.086 1.68-.22-2.9-.58-5.08-3.1-5.08-6.08v-.07c.85.47 1.8.75 2.8.78-1.67-1.12-2.78-3-2.78-5.15 0-1.14.3-2.18.8-3.1 3.13 3.85 7.75 6.38 12.97 6.58-.1-.47-.15-1-.15-1.5 0-3.6 2.9-6.5 6.5-6.5 1.85 0 3.5.78 4.7 2.04.5-.1.9-.3 1.3-.5-.2.5-.5.9-.9 1.2.4-.05.8-.16 1.2-.33-.3.46-.7.86-1.1 1.2z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(frontmatter.title)}`,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Share on LinkedIn",
    className: "rounded-full bg-ink-800 p-3 transition hover:bg-ink-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "h-5 w-5 fill-current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCopy,
    "aria-label": "Copy link",
    className: "rounded-full bg-ink-800 p-3 transition hover:bg-ink-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "h-5 w-5 stroke-current",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 17v1a2 2 0 002 2h5a2 2 0 002-2v-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "7",
    y: "3",
    width: "12",
    height: "15",
    rx: "2"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-16 rounded-2xl bg-ink-800 p-8 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "mb-4 text-3xl font-bold"
  }, "Ready for a website that grows with you?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    as: "a",
    href: "/contact",
    variant: "primary",
    size: "large"
  }, "Book a Free Strategy Call")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null));
};

// This query is now updated to select the 'publicURL' of the featured image
const pageQuery = "439273535";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPostTemplate);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-post-tsx.js.map