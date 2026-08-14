
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-blog-index-tsx": preferDefault(require("C:\\Users\\mnbro\\grow-lab\\src\\pages\\blog\\index.tsx")),
  "component---src-pages-contact-tsx": preferDefault(require("C:\\Users\\mnbro\\grow-lab\\src\\pages\\contact.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("C:\\Users\\mnbro\\grow-lab\\src\\pages\\index.tsx")),
  "component---src-pages-services-tsx": preferDefault(require("C:\\Users\\mnbro\\grow-lab\\src\\pages\\services.tsx")),
  "component---src-pages-website-plans-tsx": preferDefault(require("C:\\Users\\mnbro\\grow-lab\\src\\pages\\website-plans.tsx")),
  "component---src-templates-blog-post-tsx": preferDefault(require("C:\\Users\\mnbro\\grow-lab\\src\\templates\\blog-post.tsx"))
}

