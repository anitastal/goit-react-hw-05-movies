"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{728:function(e,r,t){t.d(r,{DI:function(){return d},G2:function(){return l},Hg:function(){return c},Ue:function(){return o},YJ:function(){return u}});var n=t(861),a=t(757),s=t.n(a),i=t(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e3af40ecaabe4a8543be52bceceba996"}}),c=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/search/movie",{params:r});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},135:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(885),s=t(757),i=t.n(s),c=t(791),u=t(731),o=t(739),l=t(728),d="MovieDetails_title__cUGs9",p="MovieDetails_image__c1FeV",v="MovieDetails_text__RHcc4",f="MovieDetails_titleText__61J0Y",h="MovieDetails_list__dbNMP",m=t(184),x=function(){var e,r,t,s,x,w=(0,c.useState)(null),_=(0,a.Z)(w,2),j=_[0],b=_[1],k=(0,o.UO)().movieId,g=(0,o.TH)();return(0,c.useEffect)((function(){if(k){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.YJ)(k);case 2:r=e.sent,b(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[k]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.rU,{to:null!==(e=null===(r=g.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",children:"Go back"}),(0,m.jsx)("div",{children:j&&(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{className:d,children:j.original_title}),(0,m.jsx)("h2",{children:j.release_data}),(0,m.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500".concat(j.poster_path),width:"500px",alt:"The Car"}),(0,m.jsxs)("p",{className:v,children:["User score:",j.popularity]}),(0,m.jsx)("h2",{className:f,children:"Overview "}),(0,m.jsx)("p",{className:v,children:j.overview}),(0,m.jsx)("h2",{className:f,children:"Genres"}),(0,m.jsx)("p",{className:v,children:null===j||void 0===j||null===(t=j.genres)||void 0===t?void 0:t.map((function(e){return(0,m.jsx)("li",{className:h,children:e.name},e.id)}))}),(0,m.jsx)("p",{className:v,children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{className:h,children:(0,m.jsx)(u.rU,{to:"cast",state:{from:null===g||void 0===g||null===(s=g.state)||void 0===s?void 0:s.from},children:"Cast"})}),(0,m.jsx)("li",{className:h,children:(0,m.jsx)(u.rU,{to:"reviews",state:{from:null===g||void 0===g||null===(x=g.state)||void 0===x?void 0:x.from},children:"Reviews"})})]}),(0,m.jsx)(c.Suspense,{children:(0,m.jsx)(o.j3,{})})]})})]})}}}]);
//# sourceMappingURL=135.181c0acb.chunk.js.map