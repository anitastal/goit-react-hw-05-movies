"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{728:function(t,e,r){r.d(e,{DI:function(){return f},G2:function(){return p},Hg:function(){return s},Ue:function(){return o},YJ:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e3af40ecaabe4a8543be52bceceba996"}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("/search/movie",{params:e});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},936:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(861),a=r(885),c=r(757),u=r.n(c),s=r(728),i=r(791),o=r(731),p="Home_homeLink__IMd6L",f="Home_homeList__kBzvV",m="Home_list__aopnc",v="Home_title__L087v",l="Home_text__YlQ2v",d=r(184),h=function(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),r=e[0],c=e[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Hg)();case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:v,children:"Trending today"}),(0,d.jsx)("ul",{className:f,children:null===r||void 0===r?void 0:r.map((function(t){var e=t.original_title,r=t.id,n=t.poster_path;return(0,d.jsxs)("li",{className:m,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"",width:"200"}),(0,d.jsx)(o.rU,{to:"movies/".concat(r),className:p,children:(0,d.jsx)("p",{className:l,children:e})})]},r)}))})]})}}}]);
//# sourceMappingURL=936.561bef1a.chunk.js.map