import{S as F,i as T,s as V,e as p,k as E,t as G,c as v,a as y,d as m,n as x,g as X,b as i,M as j,f as q,E as f,h as B,G as I,j as Q,m as R,o as S,x as k,u as M,v as N,Q as U,w as W,N as Y,r as z}from"../chunks/vendor-41046965.js";function H(c){let r,s,e,u,h,o,d,w,_,l,g;return{c(){r=p("div"),s=p("div"),e=p("iframe"),h=E(),o=p("div"),d=p("div"),w=G(c[0]),_=E(),l=p("div"),g=G(c[1]),this.h()},l(t){r=v(t,"DIV",{class:!0});var a=y(r);s=v(a,"DIV",{class:!0});var n=y(s);e=v(n,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),y(e).forEach(m),n.forEach(m),h=x(a),o=v(a,"DIV",{class:!0});var b=y(o);d=v(b,"DIV",{class:!0});var A=y(d);w=X(A,c[0]),A.forEach(m),_=x(b),l=v(b,"DIV",{class:!0});var D=y(l);g=X(D,c[1]),D.forEach(m),b.forEach(m),a.forEach(m),this.h()},h(){i(e,"class","w-full h-full"),j(e.src,u=c[2])||i(e,"src",u),i(e,"title","YouTube video player"),i(e,"frameborder","0"),i(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),e.allowFullscreen=!0,i(s,"class","flex-grow"),i(d,"class","text-xl pl-4 pt-4 text-gray-800 dark:text-gray-100"),i(l,"class","text-sm text-gray-500 dark:text-gray-300 pl-4 pb-4"),i(o,"class","bg-gray-100 dark:bg-gray-700"),i(r,"class","rounded-2xl sm:h-72 shadow-2xl flex flex-col overflow-hidden lg\\:w-96 justify-end")},m(t,a){q(t,r,a),f(r,s),f(s,e),f(r,h),f(r,o),f(o,d),f(d,w),f(o,_),f(o,l),f(l,g)},p(t,[a]){a&4&&!j(e.src,u=t[2])&&i(e,"src",u),a&1&&B(w,t[0]),a&2&&B(g,t[1])},i:I,o:I,d(t){t&&m(r)}}}function J(c,r,s){let{title:e,description:u,ytlink:h}=r;return c.$$set=o=>{"title"in o&&s(0,e=o.title),"description"in o&&s(1,u=o.description),"ytlink"in o&&s(2,h=o.ytlink)},[e,u,h]}class L extends F{constructor(r){super();T(this,r,J,H,V,{title:0,description:1,ytlink:2})}}const O=[{title:"bruh moment",description:"pranav bad",ytlink:"https://www.youtube.com/embed/Xqx0KyGEGq0"},{title:"bruh2 moment",description:"pranav bad",ytlink:"https://www.youtube.com/embed/lXMskKTw3Bc"},{title:"bruh3 moment",description:"pranav bad",ytlink:"https://www.youtube.com/embed/Xqx0KyGEGq0"},{title:"bruh4 moment",description:"pranav gay",ytlink:"https://www.youtube.com/embed/dQw4w9WgXcQ"}];var P={bruhFeed:O};function C(c,r,s){const e=c.slice();return e[1]=r[s],e}function K(c){let r,s;return r=new L({props:{title:c[1].title,description:c[1].description,ytlink:c[1].ytlink}}),{c(){Q(r.$$.fragment)},l(e){R(r.$$.fragment,e)},m(e,u){S(r,e,u),s=!0},p:I,i(e){s||(k(r.$$.fragment,e),s=!0)},o(e){M(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Z(c){let r,s,e,u,h,o,d,w,_=c[0],l=[];for(let t=0;t<_.length;t+=1)l[t]=K(C(c,_,t));const g=t=>M(l[t],1,1,()=>{l[t]=null});return{c(){r=p("meta"),s=p("meta"),e=p("meta"),u=p("meta"),h=p("meta"),o=E(),d=p("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){const a=U('[data-svelte="svelte-11lyun7"]',document.head);r=v(a,"META",{charset:!0}),s=v(a,"META",{"http-equiv":!0,content:!0}),e=v(a,"META",{name:!0,content:!0}),u=v(a,"META",{name:!0,content:!0}),h=v(a,"META",{name:!0,content:!0}),a.forEach(m),o=x(t),d=v(t,"DIV",{id:!0,class:!0});var n=y(d);for(let b=0;b<l.length;b+=1)l[b].l(n);n.forEach(m),this.h()},h(){i(r,"charset","utf-8"),i(s,"http-equiv","X-UA-Compatible"),i(s,"content","IE=edge"),i(e,"name","theme-color"),i(e,"content","#BFDBFE"),document.title="7393 website",i(u,"name","description"),i(u,"content","website go brrrr"),i(h,"name","viewport"),i(h,"content","width=device-width, initial-scale=1"),i(d,"id","feed"),i(d,"class","flex flex-col mx-6 space-y-4 w-full")},m(t,a){f(document.head,r),f(document.head,s),f(document.head,e),f(document.head,u),f(document.head,h),q(t,o,a),q(t,d,a);for(let n=0;n<l.length;n+=1)l[n].m(d,null);w=!0},p(t,[a]){if(a&1){_=t[0];let n;for(n=0;n<_.length;n+=1){const b=C(t,_,n);l[n]?(l[n].p(b,a),k(l[n],1)):(l[n]=K(b),l[n].c(),k(l[n],1),l[n].m(d,null))}for(z(),n=_.length;n<l.length;n+=1)g(n);W()}},i(t){if(!w){for(let a=0;a<_.length;a+=1)k(l[a]);w=!0}},o(t){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)M(l[a]);w=!1},d(t){m(r),m(s),m(e),m(u),m(h),t&&m(o),t&&m(d),Y(l,t)}}}function $(c){return[P.bruhFeed]}class te extends F{constructor(r){super();T(this,r,$,Z,V,{})}}export{te as default};