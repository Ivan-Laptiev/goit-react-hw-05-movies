"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{961:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(885),c=t(791),a=t(470),s=t(731),i=t(619),u=t(184);function o(){var e=(0,c.useState)(),n=(0,r.Z)(e,2),t=n[0],o=n[1],p=(0,a.UO)().movieId;return(0,c.useEffect)((function(){p&&(0,i.TP)(p).then((function(e){o(e)}))}),[p]),(0,u.jsx)(u.Fragment,{children:t&&(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)(s.OL,{to:"/",children:[" ","Go back"]}),(0,u.jsx)("div",{children:(0,u.jsx)("img",{width:"230",src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.original_title})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:t.title||t.name}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Release date:"})," ",t.release_date]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"User Score:"})," ",t.vote_average]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Genres:"})," ",t.genres.map((function(e){return e.name})).join(" / ")]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Runtime:"})," ",t.runtime," min."]}),(0,u.jsx)("p",{children:(0,u.jsx)("b",{children:"Overview:"})}),(0,u.jsx)("p",{children:t.overview})]})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("nav",{children:[(0,u.jsx)("h3",{children:"Additional Information"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)(s.OL,{to:"cast",children:[" ","Cast"]}),(0,u.jsxs)(s.OL,{to:"reviews",children:[" ","Reviews"]})]})]}),(0,u.jsx)("hr",{}),(0,u.jsx)(a.j3,{context:p})]})})}},619:function(e,n,t){t.d(n,{Je:function(){return o},M1:function(){return f},TP:function(){return d},gH:function(){return l},q5:function(){return g}});var r=t(861),c=t(757),a=t.n(c),s=t(44),i="f9dd15ebb2e93eadea3d7128518367b2",u="https://api.themoviedb.org/3/";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"trending/movie/week?api_key=").concat(i,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(n,"&language='en-US'"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"movie/").concat(n,"?api_key=").concat(i,"&language='en-US'"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"movie/").concat(n,"/credits?api_key=").concat(i,"&language='en-US'"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language='en-US'"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=961.b2101071.chunk.js.map