import{W as B,w as L,X as Y,Y as q,z as f,Z as y,_ as D,$ as M,a0 as $,F as w,a1 as z,a2 as N,a3 as U,a4 as Z,a5 as p}from"./BrShfUgU.js";let c=!1;function C(r){var a=c;try{return c=!1,[r(),c]}finally{c=a}}function O(r){var a;return((a=r.ctx)==null?void 0:a.d)??!1}function G(r,a,l,v){var A;var h=(l&p)!==0,E=!0,d=(l&z)!==0,R=(l&Z)!==0,I=!1,t;d?[t,I]=C(()=>r[a]):t=r[a];var T=N in r||U in r,u=d&&(((A=B(r,a))==null?void 0:A.set)??(T&&a in r&&(e=>r[a]=e)))||void 0,s=v,o=!0,P=!1,m=()=>(P=!0,o&&(o=!1,R?s=L(v):s=v),s);t===void 0&&v!==void 0&&(u&&E&&Y(),t=m(),u&&u(t));var _;if(_=()=>{var e=r[a];return e===void 0?m():(o=!0,P=!1,e)},(l&q)===0)return _;if(u){var x=r.$$legacy;return function(e,i){return arguments.length>0?((!i||x||I)&&u(i?_():e),e):_()}}var S=!1,b=w(t),n=y(()=>{var e=_(),i=f(b);return S?(S=!1,i):b.v=e});return d&&f(n),h||(n.equals=D),function(e,i){if(arguments.length>0){const g=i?f(n):d?M(e):e;if(!n.equals(g)){if(S=!0,$(b,g),P&&s!==void 0&&(s=g),O(n))return e;L(()=>f(n))}return e}return O(n)?n.v:f(n)}}export{G as p};
