import"../chunks/CWj6FrbW.js";import{J as $,b as z,s as k,h as A,K as F,a as G,x as S,M as P,c as j,r as D,d as R,g as y,O as ee,e as X,f as q,p as ae,Q as w,R as B,T as O,C as re,V as L,W as ne,X as te,Y as se,Z as le,_ as fe,$ as ie,a0 as ue,a1 as ve,a2 as oe,i as J,k as K,m as I,l as M,t as de}from"../chunks/B7WR8UeV.js";import{p as pe}from"../chunks/B9fpcKC1.js";import{t as Q,a as V,s as _e}from"../chunks/L6Vh0iO6.js";import{C as ce,s as he,T as me}from"../chunks/DeHDWjZB.js";import{p as ge}from"../chunks/QrKb_9dB.js";function Ee(f,e,a,i){for(var o=[],v=e.length,t=0;t<v;t++)te(e[t].e,o,!0);var d=v>0&&o.length===0&&a!==null;if(d){var p=a.parentNode;se(p),p.append(a),i.clear(),E(f,e[0].prev,e[v-1].next)}le(o,()=>{for(var _=0;_<v;_++){var r=e[_];d||(i.delete(r.k),E(f,r.prev,r.next)),fe(r.e,!d)}})}function Te(f,e,a,i,o,v=null){var t=f,d={flags:e,items:new Map,first:null};{var p=f;t=A?k(F(p)):p.appendChild($())}A&&G();var _=null,r=!1,c=P(()=>{var n=a();return oe(n)?n:n==null?[]:B(n)});z(()=>{var n=S(c),u=n.length;if(r&&u===0)return;r=u===0;let s=!1;if(A){var x=t.data===j;x!==(u===0)&&(t=D(),k(t),R(!1),s=!0)}if(A){for(var m=null,l,h=0;h<u;h++){if(y.nodeType===8&&y.data===ee){t=y,s=!0,R(!1);break}var C=n[h],T=i(C,h);l=U(y,d,m,null,C,T,h,o,e,a),d.items.set(T,l),m=l}u>0&&k(D())}A||Ae(n,d,t,o,e,i,a),v!==null&&(u===0?_?X(_):_=q(()=>v(t)):_!==null&&ae(_,()=>{_=null})),s&&R(!0),S(c)}),A&&(t=y)}function Ae(f,e,a,i,o,v,t){var d=f.length,p=e.items,_=e.first,r=_,c,n=null,u=[],s=[],x,m,l,h;for(h=0;h<d;h+=1){if(x=f[h],m=v(x,h),l=p.get(m),l===void 0){var C=r?r.e.nodes_start:a;n=U(C,e,n,n===null?e.first:n.next,x,m,h,i,o,t),p.set(m,n),u=[],s=[],r=n.next;continue}if((l.e.f&w)!==0&&X(l.e),l!==r){if(c!==void 0&&c.has(l)){if(u.length<s.length){var T=s[0],g;n=T.prev;var H=u[0],b=u[u.length-1];for(g=0;g<u.length;g+=1)Y(u[g],T,a);for(g=0;g<s.length;g+=1)c.delete(s[g]);E(e,H.prev,b.next),E(e,n,H),E(e,b,T),r=T,n=b,h-=1,u=[],s=[]}else c.delete(l),Y(l,r,a),E(e,l.prev,l.next),E(e,l,n===null?e.first:n.next),E(e,n,l),n=l;continue}for(u=[],s=[];r!==null&&r.k!==m;)(r.e.f&w)===0&&(c??(c=new Set)).add(r),s.push(r),r=r.next;if(r===null)continue;l=r}u.push(l),n=l,r=l.next}if(r!==null||c!==void 0){for(var N=c===void 0?[]:B(c);r!==null;)(r.e.f&w)===0&&N.push(r),r=r.next;var W=N.length;if(W>0){var Z=d===0?a:null;Ee(e,N,Z,p)}}O.first=e.first&&e.first.e,O.last=n&&n.e}function U(f,e,a,i,o,v,t,d,p,_){var r=(p&ie)!==0,c=(p&ue)===0,n=r?c?re(o):L(o):o,u=(p&ne)===0?t:L(t),s={i:u,v:n,k:v,a:null,e:null,prev:a,next:i};try{return s.e=q(()=>d(f,n,u,_),A),s.e.prev=a&&a.e,s.e.next=i&&i.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),i!==null&&(i.prev=s,i.e.prev=s.e),s}finally{}}function Y(f,e,a){for(var i=f.next?f.next.e.nodes_start:a,o=e?e.e.nodes_start:a,v=f.e.nodes_start;v!==i;){var t=ve(v);o.before(v),v=t}}function E(f,e,a){e===null?f.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var xe=Q("<li><a><span> </span></a></li>"),ye=Q('<ol class="contents"></ol>');function Ce(f,e){J(e,!0);let a=ge(e,"isAmp",3,!1);var i=ye();Te(i,20,()=>ce,o=>o,(o,v)=>{var t=xe(),d=M(t),p=M(d),_=M(p,!0);I(p),I(d),I(t),de(()=>{he(d,"href",`/kldabt${a()?"/amp":""}${v??""}`),_e(_,me[v])}),V(o,t)}),I(i),V(f,i),K()}function Me(f,e){J(e,!0),Ce(f,{get isAmp(){return pe.data.isAmp}}),K()}export{Me as component};
