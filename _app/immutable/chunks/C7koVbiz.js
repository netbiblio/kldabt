var ln=Array.isArray,an=Array.prototype.indexOf,Gn=Array.from,Kn=Object.defineProperty,V=Object.getOwnPropertyDescriptor,$n=Object.getOwnPropertyDescriptors,sn=Object.prototype,un=Array.prototype,fn=Object.getPrototypeOf,Tt=Object.isExtensible;function Zn(t){return typeof t=="function"}const Wn=()=>{};function bt(t){for(var e=0;e<t.length;e++)t[e]()}const A=2,Dt=4,ut=8,wt=16,D=32,H=64,tt=128,g=256,nt=512,w=1024,b=2048,M=4096,Y=8192,ft=16384,on=32768,Nt=65536,_n=1<<19,kt=1<<20,ct=1<<21,vt=Symbol("$state"),Xn=Symbol("legacy props"),zn=Symbol("");function St(t){return t===this.v}function vn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Pt(t){return!vn(t,this.v)}function cn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function hn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function dn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function pn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function En(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function yn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const te=1,ne=2,ee=16,re=1,le=4,ae=8,se=16,ue=4,fe=1,ie=2,gn="[",mn="[!",Tn="]",Ct={},E=Symbol(),oe="http://www.w3.org/1999/xhtml";let T=null;function xt(t){T=t}function _e(t,e=!1,n){var r=T={p:T,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};bn(()=>{r.d=!0})}function ve(t){const e=T;if(e!==null){const f=e.e;if(f!==null){var n=h,r=c;e.e=null;try{for(var l=0;l<f.length;l++){var a=f[l];lt(a.effect),B(a.reaction),Gt(a.fn)}}finally{lt(n),B(r)}}T=e.p,e.m=!0}return{}}function Ft(){return!0}function q(t){if(typeof t!="object"||t===null||vt in t)return t;const e=fn(t);if(e!==sn&&e!==un)return t;var n=new Map,r=ln(t),l=N(0),a=c,f=i=>{var s=c;B(a);var u=i();return B(s),u};return r&&n.set("length",N(t.length)),new Proxy(t,{defineProperty(i,s,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&wn();var _=n.get(s);return _===void 0?(_=f(()=>N(u.value)),n.set(s,_)):k(_,f(()=>q(u.value))),!0},deleteProperty(i,s){var u=n.get(s);if(u===void 0)s in i&&n.set(s,f(()=>N(E)));else{if(r&&typeof s=="string"){var _=n.get("length"),o=Number(s);Number.isInteger(o)&&o<_.v&&k(_,o)}k(u,E),At(l)}return!0},get(i,s,u){var x;if(s===vt)return t;var _=n.get(s),o=s in i;if(_===void 0&&(!o||(x=V(i,s))!=null&&x.writable)&&(_=f(()=>N(q(o?i[s]:E))),n.set(s,_)),_!==void 0){var v=U(_);return v===E?void 0:v}return Reflect.get(i,s,u)},getOwnPropertyDescriptor(i,s){var u=Reflect.getOwnPropertyDescriptor(i,s);if(u&&"value"in u){var _=n.get(s);_&&(u.value=U(_))}else if(u===void 0){var o=n.get(s),v=o==null?void 0:o.v;if(o!==void 0&&v!==E)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return u},has(i,s){var v;if(s===vt)return!0;var u=n.get(s),_=u!==void 0&&u.v!==E||Reflect.has(i,s);if(u!==void 0||h!==null&&(!_||(v=V(i,s))!=null&&v.writable)){u===void 0&&(u=f(()=>N(_?q(i[s]):E)),n.set(s,u));var o=U(u);if(o===E)return!1}return _},set(i,s,u,_){var mt;var o=n.get(s),v=s in i;if(r&&s==="length")for(var x=u;x<o.v;x+=1){var z=n.get(x+"");z!==void 0?k(z,E):x in i&&(z=f(()=>N(E)),n.set(x+"",z))}o===void 0?(!v||(mt=V(i,s))!=null&&mt.writable)&&(o=f(()=>N(void 0)),k(o,f(()=>q(u))),n.set(s,o)):(v=o.v!==E,k(o,f(()=>q(u))));var J=Reflect.getOwnPropertyDescriptor(i,s);if(J!=null&&J.set&&J.set.call(_,u),!v){if(r&&typeof s=="string"){var gt=n.get("length"),_t=Number(s);Number.isInteger(_t)&&_t>=gt.v&&k(gt,_t+1)}At(l)}return!0},ownKeys(i){U(l);var s=Reflect.ownKeys(i).filter(o=>{var v=n.get(o);return v===void 0||v.v!==E});for(var[u,_]of n)_.v!==E&&!(u in i)&&s.push(u);return s},setPrototypeOf(){En()}})}function At(t,e=1){k(t,t.v+e)}function Et(t){var e=A|b,n=c!==null&&(c.f&A)!==0?c:null;return h===null||n!==null&&(n.f&g)!==0?e|=g:h.f|=kt,{ctx:T,deps:null,effects:null,equals:St,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function ce(t){const e=Et(t);return Jt(e),e}function he(t){const e=Et(t);return e.equals=Pt,e}function Mt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)F(e[n])}}function xn(t){for(var e=t.parent;e!==null;){if((e.f&A)===0)return e;e=e.parent}return null}function Lt(t){var e,n=h;lt(xn(t));try{Mt(t),e=en(t)}finally{lt(n)}return e}function qt(t){var e=Lt(t),n=(S||(t.f&g)!==0)&&t.deps!==null?M:w;I(t,n),t.equals(e)||(t.v=e,t.wv=tn())}const K=new Map;function Yt(t,e){var n={f:0,v:t,reactions:null,equals:St,rv:0,wv:0};return n}function N(t,e){const n=Yt(t);return Jt(n),n}function de(t,e=!1){const n=Yt(t);return e||(n.equals=Pt),n}function k(t,e,n=!1){c!==null&&!O&&Ft()&&(c.f&(A|wt))!==0&&!(p!=null&&p.includes(t))&&yn();let r=n?q(e):e;return An(t,r)}function An(t,e){if(!t.equals(e)){var n=t.v;W?K.set(t,e):K.set(t,n),t.v=e,(t.f&A)!==0&&((t.f&b)!==0&&Lt(t),I(t,(t.f&g)===0?w:M)),t.wv=tn(),Bt(t,b),h!==null&&(h.f&w)!==0&&(h.f&(D|H))===0&&(m===null?Mn([t]):m.push(t))}return e}function Bt(t,e){var n=t.reactions;if(n!==null)for(var r=n.length,l=0;l<r;l++){var a=n[l],f=a.f;(f&b)===0&&(I(a,e),(f&(w|g))!==0&&((f&A)!==0?Bt(a,M):ot(a)))}}function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function pe(t){C=t}let R;function $(t){if(t===null)throw Ht(),Ct;return R=t}function we(){return $(L(R))}function Ee(t){if(C){if(L(R)!==null)throw Ht(),Ct;R=t}}function ye(t=1){if(C){for(var e=t,n=R;e--;)n=L(n);R=n}}function ge(){for(var t=0,e=R;;){if(e.nodeType===8){var n=e.data;if(n===Tn){if(t===0)return e;t-=1}else(n===gn||n===mn)&&(t+=1)}var r=L(e);e.remove(),e=r}}var Rt,Rn,In,jt,Ut;function me(){if(Rt===void 0){Rt=window,Rn=document,In=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;jt=V(e,"firstChild").get,Ut=V(e,"nextSibling").get,Tt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Tt(n)&&(n.__t=void 0)}}function ht(t=""){return document.createTextNode(t)}function dt(t){return jt.call(t)}function L(t){return Ut.call(t)}function Te(t,e){if(!C)return dt(t);var n=dt(R);if(n===null)n=R.appendChild(ht());else if(e&&n.nodeType!==3){var r=ht();return n==null||n.before(r),$(r),r}return $(n),n}function xe(t,e){if(!C){var n=dt(t);return n instanceof Comment&&n.data===""?L(n):n}return R}function Ae(t,e=1,n=!1){let r=C?R:t;for(var l;e--;)l=r,r=L(r);if(!C)return r;var a=r==null?void 0:r.nodeType;if(n&&a!==3){var f=ht();return r===null?l==null||l.after(f):r.before(f),$(f),f}return $(r),r}function Re(t){t.textContent=""}function Vt(t){h===null&&c===null&&dn(),c!==null&&(c.f&g)!==0&&h===null&&hn(),W&&cn()}function On(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function j(t,e,n,r=!0){var l=h,a={ctx:T,deps:null,nodes_start:null,nodes_end:null,f:t|b,first:null,fn:e,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(n)try{yt(a),a.f|=on}catch(s){throw F(a),s}else e!==null&&ot(a);var f=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(kt|tt))===0;if(!f&&r&&(l!==null&&On(a,l),c!==null&&(c.f&A)!==0)){var i=c;(i.effects??(i.effects=[])).push(a)}return a}function bn(t){const e=j(ut,null,!1);return I(e,w),e.teardown=t,e}function Ie(t){Vt();var e=h!==null&&(h.f&D)!==0&&T!==null&&!T.m;if(e){var n=T;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:c})}else{var r=Gt(t);return r}}function Oe(t){return Vt(),Dn(t)}function be(t){const e=j(H,t,!0);return(n={})=>new Promise(r=>{n.outro?Sn(e,()=>{F(e),r(void 0)}):(F(e),r(void 0))})}function Gt(t){return j(Dt,t,!1)}function Dn(t){return j(ut,t,!0)}function De(t,e=[],n=Et){const r=e.map(n);return Nn(()=>t(...r.map(U)))}function Nn(t,e=0){return j(ut|wt|e,t,!0)}function Ne(t,e=!0){return j(ut|D,t,!0,e)}function Kt(t){var e=t.teardown;if(e!==null){const n=W,r=c;Ot(!0),B(null);try{e.call(null)}finally{Ot(n),B(r)}}}function $t(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&H)!==0?n.parent=null:F(n,e),n=r}}function kn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&D)===0&&F(e),e=n}}function F(t,e=!0){var n=!1;if((e||(t.f&_n)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var a=r===l?null:L(r);r.remove(),r=a}n=!0}$t(t,e&&!n),st(t,0),I(t,ft);var f=t.transitions;if(f!==null)for(const s of f)s.stop();Kt(t);var i=t.parent;i!==null&&i.first!==null&&Zt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Zt(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Sn(t,e){var n=[];Wt(t,n,!0),Pn(n,()=>{F(t),e&&e()})}function Pn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var l of t)l.out(r)}else e()}function Wt(t,e,n){if((t.f&Y)===0){if(t.f^=Y,t.transitions!==null)for(const f of t.transitions)(f.is_global||n)&&e.push(f);for(var r=t.first;r!==null;){var l=r.next,a=(r.f&Nt)!==0||(r.f&D)!==0;Wt(r,e,a?n:!1),r=l}}}function ke(t){Xt(t,!0)}function Xt(t,e){if((t.f&Y)!==0){t.f^=Y,(t.f&w)===0&&(t.f^=w),X(t)&&(I(t,b),ot(t));for(var n=t.first;n!==null;){var r=n.next,l=(n.f&Nt)!==0||(n.f&D)!==0;Xt(n,l?e:!1),n=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||e)&&a.in()}}let Z=[],pt=[];function zt(){var t=Z;Z=[],bt(t)}function Cn(){var t=pt;pt=[],bt(t)}function Se(t){Z.length===0&&queueMicrotask(zt),Z.push(t)}function It(){Z.length>0&&zt(),pt.length>0&&Cn()}let Q=!1,et=!1,rt=null,P=!1,W=!1;function Ot(t){W=t}let G=[];let c=null,O=!1;function B(t){c=t}let h=null;function lt(t){h=t}let p=null;function Fn(t){p=t}function Jt(t){c!==null&&c.f&ct&&(p===null?Fn([t]):p.push(t))}let d=null,y=0,m=null;function Mn(t){m=t}let Qt=1,at=0,S=!1;function tn(){return++Qt}function X(t){var o;var e=t.f;if((e&b)!==0)return!0;if((e&M)!==0){var n=t.deps,r=(e&g)!==0;if(n!==null){var l,a,f=(e&nt)!==0,i=r&&h!==null&&!S,s=n.length;if(f||i){var u=t,_=u.parent;for(l=0;l<s;l++)a=n[l],(f||!((o=a==null?void 0:a.reactions)!=null&&o.includes(u)))&&(a.reactions??(a.reactions=[])).push(u);f&&(u.f^=nt),i&&_!==null&&(_.f&g)===0&&(u.f^=g)}for(l=0;l<s;l++)if(a=n[l],X(a)&&qt(a),a.wv>t.wv)return!0}(!r||h!==null&&!S)&&I(t,w)}return!1}function Ln(t,e){for(var n=e;n!==null;){if((n.f&tt)!==0)try{n.fn(t);return}catch{n.f^=tt}n=n.parent}throw Q=!1,t}function qn(t){return(t.f&ft)===0&&(t.parent===null||(t.parent.f&tt)===0)}function it(t,e,n,r){if(Q){if(n===null&&(Q=!1),qn(e))throw t;return}n!==null&&(Q=!0);{Ln(t,e);return}}function nn(t,e,n=!0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l];p!=null&&p.includes(t)||((a.f&A)!==0?nn(a,e,!1):e===a&&(n?I(a,b):(a.f&w)!==0&&I(a,M),ot(a)))}}function en(t){var x;var e=d,n=y,r=m,l=c,a=S,f=p,i=T,s=O,u=t.f;d=null,y=0,m=null,S=(u&g)!==0&&(O||!P||c===null),c=(u&(D|H))===0?t:null,p=null,xt(t.ctx),O=!1,at++,t.f|=ct;try{var _=(0,t.fn)(),o=t.deps;if(d!==null){var v;if(st(t,y),o!==null&&y>0)for(o.length=y+d.length,v=0;v<d.length;v++)o[y+v]=d[v];else t.deps=o=d;if(!S)for(v=y;v<o.length;v++)((x=o[v]).reactions??(x.reactions=[])).push(t)}else o!==null&&y<o.length&&(st(t,y),o.length=y);if(Ft()&&m!==null&&!O&&o!==null&&(t.f&(A|M|b))===0)for(v=0;v<m.length;v++)nn(m[v],t);return l!==t&&(at++,m!==null&&(r===null?r=m:r.push(...m))),_}finally{d=e,y=n,m=r,c=l,S=a,p=f,xt(i),O=s,t.f^=ct}}function Yn(t,e){let n=e.reactions;if(n!==null){var r=an.call(n,t);if(r!==-1){var l=n.length-1;l===0?n=e.reactions=null:(n[r]=n[l],n.pop())}}n===null&&(e.f&A)!==0&&(d===null||!d.includes(e))&&(I(e,M),(e.f&(g|nt))===0&&(e.f^=nt),Mt(e),st(e,0))}function st(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Yn(t,n[r])}function yt(t){var e=t.f;if((e&ft)===0){I(t,w);var n=h,r=T,l=P;h=t,P=!0;try{(e&wt)!==0?kn(t):$t(t),Kt(t);var a=en(t);t.teardown=typeof a=="function"?a:null,t.wv=Qt;var f=t.deps,i}catch(s){it(s,t,n,r||t.ctx)}finally{P=l,h=n}}}function Bn(){try{pn()}catch(t){if(rt!==null)it(t,rt,null);else throw t}}function rn(){var t=P;try{var e=0;for(P=!0;G.length>0;){e++>1e3&&Bn();var n=G,r=n.length;G=[];for(var l=0;l<r;l++){var a=jn(n[l]);Hn(a)}K.clear()}}finally{et=!1,P=t,rt=null}}function Hn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(ft|Y))===0)try{X(r)&&(yt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Zt(r):r.fn=null))}catch(l){it(l,r,null,r.ctx)}}}function ot(t){et||(et=!0,queueMicrotask(rn));for(var e=rt=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(H|D))!==0){if((n&w)===0)return;e.f^=w}}G.push(e)}function jn(t){for(var e=[],n=t;n!==null;){var r=n.f,l=(r&(D|H))!==0,a=l&&(r&w)!==0;if(!a&&(r&Y)===0){if((r&Dt)!==0)e.push(n);else if(l)n.f^=w;else{var f=c;try{c=n,X(n)&&yt(n)}catch(u){it(u,n,null,n.ctx)}finally{c=f}}var i=n.first;if(i!==null){n=i;continue}}var s=n.parent;for(n=n.next;n===null&&s!==null;)n=s.next,s=s.parent}return e}function Un(t){var e;for(It();G.length>0;)et=!0,rn(),It();return e}async function Pe(){await Promise.resolve(),Un()}function U(t){var e=t.f,n=(e&A)!==0;if(c!==null&&!O){if(!(p!=null&&p.includes(t))){var r=c.deps;t.rv<at&&(t.rv=at,d===null&&r!==null&&r[y]===t?y++:d===null?d=[t]:(!S||!d.includes(t))&&d.push(t))}}else if(n&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&g)===0&&(l.f^=g)}return n&&(l=t,X(l)&&qt(l)),W&&K.has(t)?K.get(t):t.v}function Ce(t){var e=O;try{return O=!0,t()}finally{O=e}}const Vn=-7169;function I(t,e){t.f=t.f&Vn|e}export{q as $,he as A,Tn as B,Gn as C,h as D,Nt as E,de as F,Yt as G,gn as H,Y as I,ne as J,Wt as K,Re as L,Pn as M,te as N,ee as O,L as P,ln as Q,zn as R,oe as S,fn as T,E as U,$n as V,V as W,Qn as X,le as Y,Et as Z,Pt as _,we as a,k as a0,ae as a1,vt as a2,Xn as a3,se as a4,re as a5,In as a6,fe as a7,ie as a8,Kn as a9,B as aa,lt as ab,c as ac,_n as ad,me as ae,Ct as af,Ht as ag,Jn as ah,be as ai,Gt as aj,Dn as ak,Se as al,Un as am,Oe as an,N as ao,Pe as ap,ce as aq,wt as ar,on as as,ue as at,Zn as au,Rn as av,ye as aw,vn as ax,Nn as b,mn as c,pe as d,ke as e,Ne as f,R as g,C as h,_e as i,xe as j,ve as k,Te as l,Ee as m,Ae as n,Wn as o,Sn as p,F as q,ge as r,$ as s,De as t,Ie as u,T as v,Ce as w,ht as x,dt as y,U as z};
