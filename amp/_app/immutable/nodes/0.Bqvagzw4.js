import"../chunks/CWj6FrbW.js";import{a4 as L,a5 as z,a6 as X,T as P,b as Q,h as Y,a as K,f as V,g as j,a1 as ct,ad as vt,ac as lt,s as ut,K as dt,_ as Z,E as tt,ar as R,as as pt,at as mt,ah as ht,v as _t,au as gt,av as wt,aj as kt,l as O,m as B,t as S,i as at,ao as yt,A as Tt,an as Et,B as At,x as v,n as k,k as rt,j as U,aq as I,aw as bt}from"../chunks/DWVG1tFR.js";import{d as G,e as Nt,f as Ct,t as F,a as E,c as Rt,g as Mt,s as Ot}from"../chunks/CEgak1TE.js";import{i as x}from"../chunks/BlpF4adK.js";import{s as T,P as et,B as D,T as Bt,D as Ft}from"../chunks/BbM973y4.js";import{a as It}from"../chunks/j60myHFz.js";import{p as C}from"../chunks/Bzo83ke4.js";import{p as it}from"../chunks/DSbYc_jE.js";function St(a){var t=X,r=P;L(null),z(null);try{return a()}finally{L(t),z(r)}}function $t(a,t,r,e,s){var n=a,f="",m;Q(()=>{if(f===(f=t()??"")){Y&&K();return}m!==void 0&&(Z(m),m=void 0),f!==""&&(m=V(()=>{if(Y){j.data;for(var o=K(),i=o;o!==null&&(o.nodeType!==8||o.data!=="");)i=o,o=ct(o);if(o===null)throw vt(),lt;G(j,i),n=ut(o);return}var h=f+"",u=Nt(h);G(dt(u),u.lastChild),n.before(u)}))})}function xt(a,t,...r){var e=a,s=R,n;Q(()=>{s!==(s=t())&&(n&&(Z(n),n=null),n=V(()=>s(e,...r)))},tt),Y&&(e=j)}const Lt=()=>performance.now(),y={tick:a=>requestAnimationFrame(a),now:()=>Lt(),tasks:new Set};function nt(){const a=y.now();y.tasks.forEach(t=>{t.c(a)||(y.tasks.delete(t),t.f())}),y.tasks.size!==0&&y.tick(nt)}function zt(a){let t;return y.tasks.size===0&&y.tick(nt),{promise:new Promise(r=>{y.tasks.add(t={c:a,f:r})}),abort(){y.tasks.delete(t)}}}function J(a,t){St(()=>{a.dispatchEvent(new CustomEvent(t))})}function Dt(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function W(a){const t={},r=a.split(";");for(const e of r){const[s,n]=e.split(":");if(!s||n===void 0)break;const f=Dt(s.trim());t[f]=n.trim()}return t}const Pt=a=>a;function Yt(a,t,r,e){var s=(a&gt)!==0,n="in",f,m=t.inert,o=t.style.overflow,i,h;function u(){var p=X,w=P;L(null),z(null);try{return f??(f=r()(t,(e==null?void 0:e())??{},{direction:n}))}finally{L(p),z(w)}}var _={is_global:s,in(){t.inert=m,i==null||i.abort(),J(t,"introstart"),i=st(t,u(),h,1,()=>{J(t,"introend"),i==null||i.abort(),i=f=void 0,t.style.overflow=o})},out(p){{p==null||p(),f=void 0;return}},stop:()=>{i==null||i.abort()}},d=P;if((d.transitions??(d.transitions=[])).push(_),Ct){var c=s;if(!c){for(var l=d.parent;l&&(l.f&tt)!==0;)for(;(l=l.parent)&&(l.f&pt)===0;);c=!l||(l.f&mt)!==0}c&&ht(()=>{_t(()=>_.in())})}}function st(a,t,r,e,s){if(wt(t)){var n,f=!1;return kt(()=>{if(!f){var l=t({direction:"in"});n=st(a,l,r,e,s)}}),{abort:()=>{f=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(!(t!=null&&t.duration))return s(),{abort:R,deactivate:R,reset:R,t:()=>e};const{delay:m=0,css:o,tick:i,easing:h=Pt}=t;var u=[];if(i&&i(0,1),o){var _=W(o(0,1));u.push(_,_)}var d=()=>1-e,c=a.animate(u,{duration:m});return c.onfinish=()=>{var l=1-e,p=e-l,w=t.duration*Math.abs(p),A=[];if(w>0){var b=!1;if(o)for(var g=Math.ceil(w/16.666666666666668),N=0;N<=g;N+=1){var q=l+p*h(N/g),H=W(o(q,1-q));A.push(H),b||(b=H.overflow==="hidden")}b&&(a.style.overflow="hidden"),d=()=>{var $=c.currentTime;return l+p*h($/w)},i&&zt(()=>{if(c.playState!=="running")return!1;var $=d();return i($,1-$),!0})}c=a.animate(A,{duration:w,fill:"forwards"}),c.onfinish=()=>{d=()=>e,i==null||i(e,1-e),s()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=R)},deactivate:()=>{s=R},reset:()=>{},t:()=>d()}}function jt(a,{speed:t=1}={}){const r=a.textContent;if(!(a.childNodes.length===1&&a.childNodes[0].nodeType===Node.TEXT_NODE&&r!==null))throw new Error("This transition only works on elements with a single text node child");return{duration:r.length/(t*.01),tick(n){const f=Math.trunc(r.length*n);delete a.dataset.hidden,a.textContent=r.slice(0,f)}}}var qt=F('<nav class="nav"><a class="nav__link" aria-label="К содержанию" title="К содержанию"><svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M11.8 16.4 22 8.8l-9-4.6-11 6.7v3l9.8 5.8L22 12.2v-.4l-10.2 7.6-9.4-5.7v-2.6l9.4 5.3z"></path></svg></a></nav>');function ot(a,t){let r=it(t,"isAmp",3,!1);var e=qt(),s=O(e);B(e),S(()=>T(s,"href",`/kldabt${(r()?"/amp":"")??""}/soderzhanie`)),E(a,e)}var Ht=F('<h1 class="hero__title"><span></span></h1>'),Kt=F('<section class="hero"><!> <!></section>');function Ut(a,t){at(t,!0);let r=it(t,"isAmp",3,!1),e=yt(Tt(r()));Et(function(){At(e,!0)});var s=Kt(),n=O(s);{var f=o=>{var i=Ht(),h=O(i);h.textContent=et,B(i),S(()=>T(h,"data-hidden",r()?void 0:"")),Yt(1,h,()=>jt),E(o,i)};x(n,o=>{v(e)&&o(f)})}var m=k(n,2);ot(m,{get isAmp(){return r()}}),B(s),E(a,s),rt()}function Gt(a){return a.replace(/\t|\n+|<!--.*?-->/g,"")}const ft=99782506;let M;function Jt(a){Wt(),M&&M(ft,"hit",a)}function Wt(){M||(M=(window||{}).ym,M&&M(ft,"init",{accurateTrackBounce:!0,clickmap:!0,defer:!0,trackLinks:!0,webvisor:!0}))}var Xt=F('<link rel="amphtml">'),Qt=F('<meta name="description"> <link rel="canonical"> <meta property="og:title"> <meta property="og:description"> <meta property="og:url"> <!>',1),Vt=F('<main class="main"><section class="main__section"><h1> </h1> <!> <!></section> <!></main>');function oa(a,t){at(t,!0);let r=I(()=>C.params.id?`/${C.params.id}`:C.route.id.replace("/amp","")),e=I(()=>Bt[`${v(r)}`]||""),s=I(()=>Ft[`${v(r)}`]||`Современная бытовая сказка о деде Андрее и бабке Тане «${v(e)}».`),n=I(()=>C.params.id?C.data[v(r)]:""),f=I(()=>!!C.data.isAmp);It(function(){Jt()});var m=Rt();Mt(u=>{var _=Qt(),d=U(_),c=k(d,2),l=k(c,2),p=k(l,2),w=k(p,2),A=k(w,2);{var b=g=>{var N=Xt();S(()=>T(N,"href",`${D}/amp${v(r)??""}`)),E(g,N)};x(A,g=>{v(f)||g(b)})}S(g=>{bt.title=g,T(d,"content",v(s)),T(c,"href",`${D}${v(r)??""}`),T(l,"content",v(e)),T(p,"content",v(s)),T(w,"content",`${D}${v(r)??""}`)},[()=>[et,v(e)].join(". ")]),E(u,_)});var o=U(m);{var i=u=>{var _=Vt(),d=O(_),c=O(d),l=O(c,!0);B(c);var p=k(c,2);$t(p,()=>Gt(v(n)));var w=k(p,2);xt(w,()=>t.children),B(d);var A=k(d,2);{var b=g=>{ot(g,{get isAmp(){return v(f)}})};x(A,g=>{v(r)!=="/soderzhanie"&&g(b)})}B(_),S(()=>Ot(l,v(e))),E(u,_)},h=u=>{Ut(u,{get isAmp(){return v(f)}})};x(o,u=>{v(e)?u(i):u(h,!1)})}E(a,m),rt()}export{oa as component};
