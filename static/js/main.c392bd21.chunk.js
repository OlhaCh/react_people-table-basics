(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),s=c(8),a=(c(31),c(32),c(3)),r=(c(33),c(2)),j=function(){return Object(r.jsx)("h1",{className:"title",children:"Home Page"})},i=c(4),o=c(6),l=c(5),b=c(0);function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var h=c(13),x=c.n(h),O=(c(35),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),u=function(e){var t=e.person;return Object(r.jsx)(s.b,{to:"/people/".concat(t.slug),className:x()({"has-text-danger":"f"===t.sex}),children:t.name})},p=function(e){var t=e.people,c=e.isLoading,n=e.isError,s=Object(a.o)().slug,j=void 0===s?"":s,i=function(e){var c=t.find((function(t){return t.name===e}));return c?Object(r.jsx)(u,{person:c}):e||"-"};return Object(r.jsx)("div",{className:"block",children:Object(r.jsxs)("div",{className:"box table-container",children:[c&&Object(r.jsx)(O,{}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),Object(r.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]}),Object(r.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Sex"}),Object(r.jsx)("th",{children:"Born"}),Object(r.jsx)("th",{children:"Died"}),Object(r.jsx)("th",{children:"Mother"}),Object(r.jsx)("th",{children:"Father"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{className:x()({"has-background-warning":j===e.slug}),"data-cy":"person",children:[Object(r.jsx)("td",{children:Object(r.jsx)(u,{person:e})}),Object(r.jsx)("td",{children:e.sex}),Object(r.jsx)("td",{children:e.born}),Object(r.jsx)("td",{children:e.died}),Object(r.jsx)("td",{children:i(e.motherName)}),Object(r.jsx)("td",{children:i(e.fatherName)})]},e.slug)}))})]})]})})},m=function(){var e=Object(b.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(b.useState)(!0),a=Object(l.a)(s,2),j=a[0],h=a[1],x=Object(b.useState)(!1),O=Object(l.a)(x,2),u=O[0],m=O[1];return Object(b.useEffect)((function(){Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(!0);case 10:return e.prev=10,h(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[c]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)(p,{people:c,isLoading:j,isError:u})]})},f=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},v=function(e){var t=e.to,c=e.text;return Object(r.jsx)(s.b,{to:t,className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},children:c})},g=function(){return Object(r.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(v,{to:"/",text:"Home"}),Object(r.jsx)(v,{to:"/people",text:"People"})]})})})},N=function(){return Object(r.jsxs)("div",{"data-cy":"app",children:[Object(r.jsx)(g,{}),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(a.d,{children:[Object(r.jsxs)(a.b,{path:"people",children:[Object(r.jsx)(a.b,{index:!0,element:Object(r.jsx)(m,{})}),Object(r.jsx)(a.b,{path:":slug",element:Object(r.jsx)(m,{})})]}),Object(r.jsx)(a.b,{path:"/",element:Object(r.jsx)(j,{})}),Object(r.jsx)(a.b,{path:"home",element:Object(r.jsx)(a.a,{to:"/",replace:!0})}),Object(r.jsx)(a.b,{path:"*",element:Object(r.jsx)(f,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(r.jsx)(s.a,{children:Object(r.jsx)(N,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.c392bd21.chunk.js.map