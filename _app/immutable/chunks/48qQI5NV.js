import"./CWj6FrbW.js";import{x as P,b as Q,s as k,h as x,y as U,a as X,z as H,A as W,c as Z,r as S,d as w,g as y,B as $,e as V,f as Y,p as j,I as M,C as z,D as L,F as ee,G as O,J as ae,K as re,L as ne,M as se,q as le,N as te,O as fe,P as ie,Q as ue,i as ve,k as oe,m as I,l as R,t as de}from"./CPh_WpT7.js";import{s as _e}from"./IlsI7u-m.js";import{t as F,a as q}from"./BkV6XTLe.js";import{C as pe,s as ce,T as he}from"./BsRoP0Ba.js";import{p as me}from"./ta2iVBlo.js";function Ee(v,e,a,f){for(var o=[],u=e.length,s=0;s<u;s++)re(e[s].e,o,!0);var d=u>0&&o.length===0&&a!==null;if(d){var _=a.parentNode;ne(_),_.append(a),f.clear(),T(v,e[0].prev,e[u-1].next)}se(o,()=>{for(var p=0;p<u;p++){var r=e[p];d||(f.delete(r.k),T(v,r.prev,r.next)),le(r.e,!d)}})}function Te(v,e,a,f,o,u=null){var s=v,d={items:new Map,first:null};{var _=v;s=x?k(U(_)):_.appendChild(P())}x&&X();var p=null,r=!1,c=W(()=>{var n=a();return ue(n)?n:n==null?[]:z(n)});Q(()=>{var n=H(c),i=n.length;if(r&&i===0)return;r=i===0;let l=!1;if(x){var A=s.data===Z;A!==(i===0)&&(s=S(),k(s),w(!1),l=!0)}if(x){for(var m=null,t,h=0;h<i;h++){if(y.nodeType===8&&y.data===$){s=y,l=!0,w(!1);break}var C=n[h],g=f(C,h);t=G(y,d,m,null,C,g,h,o,e,a),d.items.set(g,t),m=t}i>0&&k(S())}x||ge(n,d,s,o,e,f,a),u!==null&&(i===0?p?V(p):p=Y(()=>u(s)):p!==null&&j(p,()=>{p=null})),l&&w(!0),H(c)}),x&&(s=y)}function ge(v,e,a,f,o,u,s){var d=v.length,_=e.items,p=e.first,r=p,c,n=null,i=[],l=[],A,m,t,h;for(h=0;h<d;h+=1){if(A=v[h],m=u(A,h),t=_.get(m),t===void 0){var C=r?r.e.nodes_start:a;n=G(C,e,n,n===null?e.first:n.next,A,m,h,f,o,s),_.set(m,n),i=[],l=[],r=n.next;continue}if((t.e.f&M)!==0&&V(t.e),t!==r){if(c!==void 0&&c.has(t)){if(i.length<l.length){var g=l[0],E;n=g.prev;var D=i[0],N=i[i.length-1];for(E=0;E<i.length;E+=1)B(i[E],g,a);for(E=0;E<l.length;E+=1)c.delete(l[E]);T(e,D.prev,N.next),T(e,n,D),T(e,N,g),r=g,n=N,h-=1,i=[],l=[]}else c.delete(t),B(t,r,a),T(e,t.prev,t.next),T(e,t,n===null?e.first:n.next),T(e,n,t),n=t;continue}for(i=[],l=[];r!==null&&r.k!==m;)(r.e.f&M)===0&&(c??(c=new Set)).add(r),l.push(r),r=r.next;if(r===null)continue;t=r}i.push(t),n=t,r=t.next}if(r!==null||c!==void 0){for(var b=c===void 0?[]:z(c);r!==null;)(r.e.f&M)===0&&b.push(r),r=r.next;var J=b.length;if(J>0){var K=d===0?a:null;Ee(e,b,K,_)}}L.first=e.first&&e.first.e,L.last=n&&n.e}function G(v,e,a,f,o,u,s,d,_,p){var r=(_&te)!==0,c=(_&fe)===0,n=r?c?ee(o):O(o):o,i=(_&ae)===0?s:O(s),l={i,v:n,k:u,a:null,e:null,prev:a,next:f};try{return l.e=Y(()=>d(v,n,i,p),x),l.e.prev=a&&a.e,l.e.next=f&&f.e,a===null?e.first=l:(a.next=l,a.e.next=l.e),f!==null&&(f.prev=l,f.e.prev=l.e),l}finally{}}function B(v,e,a){for(var f=v.next?v.next.e.nodes_start:a,o=e?e.e.nodes_start:a,u=v.e.nodes_start;u!==f;){var s=ie(u);o.before(u),u=s}}function T(v,e,a){e===null?v.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var xe=F("<li><a><span> </span></a></li>"),Ae=F('<ol class="contents"></ol>');function we(v,e){ve(e,!0);let a=me(e,"isAmp",3,!1);var f=Ae();Te(f,20,()=>pe,o=>o,(o,u)=>{var s=xe(),d=R(s),_=R(d),p=R(_,!0);I(_),I(d),I(s),de(()=>{ce(d,"href",`${(a()?"/amp":"")??""}${u??""}`),_e(p,he[u])}),q(o,s)}),I(f),q(v,f),oe()}export{we as C};
