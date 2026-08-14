"use strict";
exports.id = 248;
exports.ids = [248];
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

/***/ 3514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4722);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8154);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8466);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1901);
/* harmony import */ var _components_shared_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4202);
/* harmony import */ var _components_layout_BackgroundGlow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4411);








const BlogIndex = ({
  data
}) => {
  const posts = data.allMarkdownRemark.nodes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Insights | GrowLab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: "Latest articles and insights from the GrowLab team."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    id: "main-content",
    className: "relative text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_BackgroundGlow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_shared_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    className: "py-28 sm:py-36"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-16 max-w-2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "eyebrow mb-4"
  }, "Insights"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "font-heading text-display-sm font-black text-white"
  }, "Notes on building & growing online.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
  }, posts.map(post => {
    // Use the getImage helper to prepare the image data
    const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_7__/* .getImage */ .Qp)(post.frontmatter.featuredImage);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      key: post.fields.slug,
      to: post.fields.slug,
      className: "group block h-full rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/50"
    }, image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_7__/* .GatsbyImage */ .mV, {
      image: image,
      alt: post.frontmatter.title,
      className: "mb-5 h-40 w-full rounded-lg object-cover"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mb-2 text-xs text-gray-500"
    }, post.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "mb-2 text-xl font-semibold text-white transition-colors group-hover:text-accent-300"
    }, post.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "line-clamp-3 text-sm text-gray-400"
    }, post.excerpt));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null));
};

// I've added the 'excerpt' to your query so it can be displayed in the card.
const pageQuery = "3860742303";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogIndex);

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-blog-index-tsx.js.map