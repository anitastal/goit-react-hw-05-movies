"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{728:function(t,r,e){e.d(r,{DI:function(){return f},G2:function(){return p},Hg:function(){return s},Ue:function(){return o},YJ:function(){return i}});var n=e(861),a=e(757),u=e.n(a),c=e(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e3af40ecaabe4a8543be52bceceba996"}}),s=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("/search/movie",{params:r});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},459:function(t,r,e){e.r(r),e.d(r,{default:function(){return d}});var n=e(861),a=e(885),u=e(757),c=e.n(u),s=e(728),i=e(791),o=e(739),p="Cast_text__jl3u+",f="Cast_item__vxHbm",v="Cast_list__oOD41",m=e(184),d=function(){var t=(0,i.useState)(),r=(0,a.Z)(t,2),e=r[0],u=r[1],d=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.G2)(d);case 2:r=t.sent,u(r.cast);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[d]),(0,m.jsx)(m.Fragment,{children:e&&(0,m.jsx)("ul",{className:v,children:null===e||void 0===e?void 0:e.map((function(t){var r=t.id,e=t.profile_path,n=t.name;return(0,m.jsxs)("li",{className:f,children:[(0,m.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg",alt:n,width:"60"}),(0,m.jsx)("p",{className:p,children:n})]},r)}))})})}}}]);
//# sourceMappingURL=459.c3527f6d.chunk.js.map