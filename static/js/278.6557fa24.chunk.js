"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{278:function(e,t,n){n.r(t);var r=n(439),i=n(791),u=n(87),s=n(689),a=n(751),l=n(184);t.default=function(){var e,t=(0,i.useState)([]),n=(0,r.Z)(t,2),c=n[0],o=n[1],f=(0,u.lr)(""),h=(0,r.Z)(f,2),m=h[0],d=h[1],p=null!==(e=m.get("query"))&&void 0!==e?e:"",v=(0,s.TH)();(0,i.useEffect)((function(){p?(0,a.V0)(p).then((function(e){return o(e.results)})).catch((function(e){return console.log(e.message)})):o([])}),[p]);return(0,l.jsxs)("main",{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.movies.value;d(""!==t.trim()?{query:t}:{})},style:{display:"flex",gap:15},children:[(0,l.jsx)("input",{type:"text",name:"movies",defaultValue:p}),(0,l.jsx)("button",{type:"submit",children:"Go"})]}),(0,l.jsx)("ul",{children:c&&c.map((function(e){var t=e.id,n=e.original_title;return(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"".concat(t),state:{page:v},children:n})},t)}))})]})}}}]);
//# sourceMappingURL=278.6557fa24.chunk.js.map