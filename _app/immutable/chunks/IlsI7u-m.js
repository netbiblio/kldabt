import{ac as B,ad as A,ae as O,Q as F,af as $,D as L,x as I,b as q,ag as Q,h as m,H as P,P as D,d as g,s as E,g as h,y as V,ah as N,ai as S,a as W,B as z,aj as G,ak as J,L as K,C as U,al as X,f as Z,i as x,v as ee,k as ae}from"./CPh_WpT7.js";import{b as re}from"./BkV6XTLe.js";const te=["touchstart","touchmove"];function ne(e){return te.includes(e)}const se=new Set,C=new Set;function b(e){var k;var a=this,t=a.ownerDocument,d=e.type,l=((k=e.composedPath)==null?void 0:k.call(e))||[],r=l[0]||e.target,u=0,y=e.__root;if(y){var c=l.indexOf(y);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var p=l.indexOf(a);if(p===-1)return;c<=p&&(u=c)}if(r=l[u]||e.target,r!==a){B(e,"currentTarget",{configurable:!0,get(){return r||t}});var T=$,o=L;A(null),O(null);try{for(var n,s=[];r!==null;){var f=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+d];if(_!=null&&(!r.disabled||e.target===r))if(F(_)){var[Y,...j]=_;Y.apply(r,[e,...j])}else _.call(r,e)}catch(w){n?s.push(w):n=w}if(e.cancelBubble||f===a||f===null)break;r=f}if(n){for(let w of s)queueMicrotask(()=>{throw w});throw n}}finally{e.__root=a,delete e.currentTarget,A(T),O(o)}}}let i;function ie(){i=void 0}function ue(e){let a=null,t=m;var d;if(m){for(a=h,i===void 0&&(i=V(document.head));i!==null&&(i.nodeType!==8||i.data!==P);)i=D(i);i===null?g(!1):i=E(D(i))}m||(d=document.head.appendChild(I()));try{q(()=>e(d),Q)}finally{t&&(g(!0),i=h,E(a))}}let H=!0;function fe(e,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function oe(e,a){return M(e,a)}function ce(e,a){N(),a.intro=a.intro??!1;const t=a.target,d=m,l=h;try{for(var r=V(t);r&&(r.nodeType!==8||r.data!==P);)r=D(r);if(!r)throw S;g(!0),E(r),W();const u=M(e,{...a,anchor:r});if(h===null||h.nodeType!==8||h.data!==z)throw G(),S;return g(!1),u}catch(u){if(u===S)return a.recover===!1&&J(),N(),K(t),g(!1),oe(e,a);throw u}finally{g(d),E(l),ie()}}const v=new Map;function M(e,{target:a,anchor:t,props:d={},events:l,context:r,intro:u=!0}){N();var y=new Set,c=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!y.has(s)){y.add(s);var f=ne(s);a.addEventListener(s,b,{passive:f});var _=v.get(s);_===void 0?(document.addEventListener(s,b,{passive:f}),v.set(s,1)):v.set(s,_+1)}}};c(U(se)),C.add(c);var p=void 0,T=X(()=>{var o=t??a.appendChild(I());return Z(()=>{if(r){x({});var n=ee;n.c=r}l&&(d.$$events=l),m&&re(o,null),H=u,p=e(o,d)||{},H=!0,m&&(L.nodes_end=h),r&&ae()}),()=>{var f;for(var n of y){a.removeEventListener(n,b);var s=v.get(n);--s===0?(document.removeEventListener(n,b),v.delete(n)):v.set(n,s)}C.delete(c),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(p,T),p}let R=new WeakMap;function _e(e,a){const t=R.get(e);return t?(R.delete(e),t(a)):Promise.resolve()}export{H as a,ue as b,ce as h,oe as m,fe as s,_e as u};
