import{S,i as H,s as L,k as h,a as V,q,l as _,m as E,c as x,r as C,h as d,n,b as A,C as g,u as F,A as j,G as D,L as P,f as I,d as R,t as T,H as U,v as X,w as Y,x as z,y as J,g as K}from"../../chunks/index-ced44c5b.js";function N(c){let e,t,l;return{c(){e=h("div"),t=h("img"),this.h()},l(a){e=_(a,"DIV",{class:!0});var i=E(e);t=_(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(d),this.h()},h(){n(t,"class","grid place-items-center"),D(t.src,l=c[3])||n(t,"src",l),n(t,"alt",c[0]),n(e,"class","flex")},m(a,i){A(a,e,i),g(e,t)},p(a,i){i&8&&!D(t.src,l=a[3])&&n(t,"src",l),i&1&&n(t,"alt",a[0])},d(a){a&&d(e)}}}function O(c){let e,t,l;return{c(){e=h("div"),t=h("iframe"),this.h()},l(a){e=_(a,"DIV",{class:!0});var i=E(e);t=_(i,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),E(t).forEach(d),i.forEach(d),this.h()},h(){n(t,"class","w-full h-full"),D(t.src,l=c[2])||n(t,"src",l),n(t,"title","YouTube video player"),n(t,"frameborder","0"),n(t,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),t.allowFullscreen=!0,n(e,"class","flex-grow")},m(a,i){A(a,e,i),g(e,t)},p(a,i){i&4&&!D(t.src,l=a[2])&&n(t,"src",l)},d(a){a&&d(e)}}}function Q(c){let e,t,l,a,i,p,f,b;function y(r,v){return r[3]==null?O:N}let w=y(c),m=w(c);return{c(){e=h("a"),m.c(),t=V(),l=h("div"),a=h("div"),i=q(c[0]),p=V(),f=h("div"),b=q(c[1]),this.h()},l(r){e=_(r,"A",{href:!0,class:!0});var v=E(e);m.l(v),t=x(v),l=_(v,"DIV",{class:!0});var s=E(l);a=_(s,"DIV",{class:!0});var u=E(a);i=C(u,c[0]),u.forEach(d),p=x(s),f=_(s,"DIV",{class:!0});var o=E(f);b=C(o,c[1]),o.forEach(d),s.forEach(d),v.forEach(d),this.h()},h(){n(a,"class","text-xl pl-4 pt-4 text-gray-800 dark:text-gray-100"),n(f,"class","text-sm text-gray-500 dark:text-gray-300 pl-4 pb-4"),n(l,"class","bg-gray-100 dark:bg-gray-600"),n(e,"href",c[2]),n(e,"class","rounded-2xl sm:h-72 shadow-2xl flex flex-col overflow-hidden lg\\:w-96 justify-end")},m(r,v){A(r,e,v),m.m(e,null),g(e,t),g(e,l),g(l,a),g(a,i),g(l,p),g(l,f),g(f,b)},p(r,[v]){w===(w=y(r))&&m?m.p(r,v):(m.d(1),m=w(r),m&&(m.c(),m.m(e,t))),v&1&&F(i,r[0]),v&2&&F(b,r[1]),v&4&&n(e,"href",r[2])},i:j,o:j,d(r){r&&d(e),m.d()}}}function W(c,e,t){let{title:l,description:a,ytlink:i,thumbnail:p}=e;return c.$$set=f=>{"title"in f&&t(0,l=f.title),"description"in f&&t(1,a=f.description),"ytlink"in f&&t(2,i=f.ytlink),"thumbnail"in f&&t(3,p=f.thumbnail)},[l,a,i,p]}class Z extends S{constructor(e){super(),H(this,e,W,Q,L,{title:0,description:1,ytlink:2,thumbnail:3})}}function B(c,e,t){const l=c.slice();return l[1]=e[t],l}function G(c){let e,t;return e=new Z({props:{title:c[1].title,description:c[1].description,ytlink:c[1].url,thumbnail:c[1].thumbnail}}),{c(){X(e.$$.fragment)},l(l){Y(e.$$.fragment,l)},m(l,a){z(e,l,a),t=!0},p(l,a){const i={};a&1&&(i.title=l[1].title),a&1&&(i.description=l[1].description),a&1&&(i.ytlink=l[1].url),a&1&&(i.thumbnail=l[1].thumbnail),e.$set(i)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){J(e,l)}}}function $(c){let e,t,l,a,i,p,f,b,y,w,m=c[0].data.videos,r=[];for(let s=0;s<m.length;s+=1)r[s]=G(B(c,m,s));const v=s=>T(r[s],1,1,()=>{r[s]=null});return{c(){e=h("meta"),t=h("meta"),l=h("meta"),a=h("meta"),i=h("meta"),p=h("meta"),f=V(),b=h("div"),y=h("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){const u=P('[data-svelte="svelte-citjlj"]',document.head);e=_(u,"META",{charset:!0}),t=_(u,"META",{"http-equiv":!0,content:!0}),l=_(u,"META",{name:!0,content:!0}),a=_(u,"META",{name:!0,content:!0}),i=_(u,"META",{name:!0,content:!0}),p=_(u,"META",{name:!0,content:!0}),u.forEach(d),f=x(s),b=_(s,"DIV",{class:!0});var o=E(b);y=_(o,"DIV",{id:!0,class:!0});var k=E(y);for(let M=0;M<r.length;M+=1)r[M].l(k);k.forEach(d),o.forEach(d),this.h()},h(){n(e,"charset","utf-8"),n(t,"http-equiv","X-UA-Compatible"),n(t,"content","IE=edge"),n(l,"name","theme-color"),n(l,"content","#BFDBFE"),document.title="7393 website",n(a,"name","description"),n(a,"content","website go brrrr"),n(i,"name","viewport"),n(i,"content","width=device-width, initial-scale=1"),n(p,"name","twitter:widgets:border-color"),n(p,"content","#55acee"),n(y,"id","feed"),n(y,"class","flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3 space-y-2 lg:space-y-0 "),n(b,"class","px-4 sm:px-0 pt-4 sm:mx-6 w-full")},m(s,u){g(document.head,e),g(document.head,t),g(document.head,l),g(document.head,a),g(document.head,i),g(document.head,p),A(s,f,u),A(s,b,u),g(b,y);for(let o=0;o<r.length;o+=1)r[o].m(y,null);w=!0},p(s,[u]){if(u&1){m=s[0].data.videos;let o;for(o=0;o<m.length;o+=1){const k=B(s,m,o);r[o]?(r[o].p(k,u),I(r[o],1)):(r[o]=G(k),r[o].c(),I(r[o],1),r[o].m(y,null))}for(K(),o=m.length;o<r.length;o+=1)v(o);R()}},i(s){if(!w){for(let u=0;u<m.length;u+=1)I(r[u]);w=!0}},o(s){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)T(r[u]);w=!1},d(s){d(e),d(t),d(l),d(a),d(i),d(p),s&&d(f),s&&d(b),U(r,s)}}}function ee(c,e,t){let{data:l}=e;return c.$$set=a=>{"data"in a&&t(0,l=a.data)},[l]}class le extends S{constructor(e){super(),H(this,e,ee,$,L,{data:0})}}export{le as default};