var Jt=t=>{throw TypeError(t)};var $e=(t,e,n)=>e.has(t)||Jt("Cannot "+n);var A=(t,e,n)=>($e(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Jt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{aH as It,aM as De,$ as C,aG as Fe}from"./CnU13vv8.js";import{b as O,a as N}from"./EAGwJHYH.js";import{o as Xt}from"./BQw-YAmt.js";const V=[];function Nt(t,e=It){let n=null;const r=new Set;function a(o){if(De(t,o)&&(t=o,n)){const c=!V.length;for(const l of r)l[1](),V.push(l,t);if(c){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function s(o){a(o(t))}function i(o,c=It){const l=[o,c];return r.add(l),r.size===1&&(n=e(a,s)||It),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}new URL("sveltekit-internal://");function Ve(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Be(t){return t.split("%25").map(decodeURI).join("%25")}function qe(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Ut({href:t}){return t.split("#")[0]}function Ge(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}const Me="/__data.json",He=".html__data.json";function Ke(t){return t.endsWith(".html")?t.replace(/\.html$/,He):t.replace(/\/$/,"")+Me}function We(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Ye(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const ze=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&W.delete(jt(t)),ze(t,e));const W=new Map;function Je(t,e){const n=jt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ye(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function Xe(t,e,n){if(W.size>0){const r=jt(t,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(e,n)}function jt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${We(...a)}"]`}return r}const Ze=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Qe(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${en(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Lt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Lt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Ze.exec(c),[,u,y,h,m]=d;return e.push({name:h,matcher:m,optional:!!u,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Lt(c)}).join("")}).join("")}/?$`),params:e}}function tn(t){return!/^\([^)]+\)$/.test(t)}function en(t){return t.slice(1).split("/").filter(tn)}function nn(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=e[o+1],u=a[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Lt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function rn({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:u,params:y}=Qe(o),h={id:o,exec:m=>{const f=u.exec(m);if(f)return nn(f,y,r)},errors:[1,...d||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return h.errors.length=h.layouts.length=Math.max(h.errors.length,h.layouts.length),h});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function he(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Zt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var ie;const x=((ie=globalThis.__sveltekit_eentnc)==null?void 0:ie.base)??"";var ce;const an=((ce=globalThis.__sveltekit_eentnc)==null?void 0:ce.assets)??x,on="1738349929873",de="sveltekit:snapshot",pe="sveltekit:scroll",ge="sveltekit:states",sn="sveltekit:pageurl",q="sveltekit:history",J="sveltekit:navigation",ut={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ft=location.origin;function me(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function $t(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Qt={...ut,"":ut.hover};function ye(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function _e(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ye(t)}}function Pt(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||bt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ft&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ht(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),e===null&&(e=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=ye(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Qt[r??"off"],preload_data:Qt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function te(t){const e=Nt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const we={v:()=>{}};function cn(){const{set:t,subscribe:e}=Nt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${an}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==on;return i&&(t(!0),we.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function bt(t,e,n){return t.origin!==ft||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function ee(t){const e=fn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const ln="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function fn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=ln.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const un=-1,hn=-2,dn=-3,pn=-4,gn=-5,mn=-6;function yn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===un)return;if(s===dn)return NaN;if(s===pn)return 1/0;if(s===gn)return-1/0;if(s===mn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let h=1;h<o.length;h+=1)d.add(a(o[h]));break;case"Map":const u=new Map;r[s]=u;for(let h=1;h<o.length;h+=2)u.set(a(o[h]),a(o[h+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let h=1;h<o.length;h+=2)y[o[h]]=a(o[h+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const h=globalThis[c],m=o[1],f=ee(m),g=new h(f);r[s]=g;break}case"ArrayBuffer":{const h=o[1],m=ee(h);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==hn&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const ve=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ve];const _n=new Set([...ve]);[..._n];function wn(t){return t.filter(e=>e!=null)}class At{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Dt{constructor(e,n){this.status=e,this.location=n}}class Ft extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const vn="x-sveltekit-invalidated",bn="x-sveltekit-trailing-slash";function dt(t){return t instanceof At||t instanceof Ft?t.status:500}function An(t){return t instanceof Ft?t.text:"Internal Error"}let U,X,Tt;const Sn=Xt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Xt.toString());var tt,et,nt,rt,at,ot,st,it,le,ct,fe,lt,ue;Sn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Tt={current:!1}):(U=new(le=class{constructor(){P(this,tt,O({}));P(this,et,O(null));P(this,nt,O(null));P(this,rt,O({}));P(this,at,O({id:null}));P(this,ot,O({}));P(this,st,O(-1));P(this,it,O(new URL("https://example.com")))}get data(){return C(A(this,tt))}set data(e){N(A(this,tt),e)}get form(){return C(A(this,et))}set form(e){N(A(this,et),e)}get error(){return C(A(this,nt))}set error(e){N(A(this,nt),e)}get params(){return C(A(this,rt))}set params(e){N(A(this,rt),e)}get route(){return C(A(this,at))}set route(e){N(A(this,at),e)}get state(){return C(A(this,ot))}set state(e){N(A(this,ot),e)}get status(){return C(A(this,st))}set status(e){N(A(this,st),e)}get url(){return C(A(this,it))}set url(e){N(A(this,it),e)}},tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,le),X=new(fe=class{constructor(){P(this,ct,O(null))}get current(){return C(A(this,ct))}set current(e){N(A(this,ct),e)}},ct=new WeakMap,fe),Tt=new(ue=class{constructor(){P(this,lt,O(!1))}get current(){return C(A(this,lt))}set current(e){N(A(this,lt),e)}},lt=new WeakMap,ue),we.v=()=>Tt.current=!0);function kn(t){Object.assign(U,t)}const En=new Set(["icon","shortcut icon","apple-touch-icon"]),F=he(pe)??{},Z=he(de)??{},$={url:te({}),page:te({}),navigating:Nt(null),updated:cn()};function Vt(t){F[t]=$t()}function Rn(t,e){let n=t+1;for(;F[n];)delete F[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function M(t){return location.href=t.href,new Promise(()=>{})}async function be(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function ne(){}let St,Ct,pt,j,Ot,S;const gt=[],mt=[];let L=null;const Ae=new Set,In=new Set,Y=new Set;let w={branch:[],error:null,url:null},Bt=!1,yt=!1,re=!0,Q=!1,H=!1,Se=!1,qt=!1,ke,I,T,_t;const z=new Set;async function Hn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),S=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),St=rn(t),j=document.documentElement,Ot=e,Ct=t.nodes[0],pt=t.nodes[1],Ct(),pt(),I=(i=history.state)==null?void 0:i[q],T=(o=history.state)==null?void 0:o[J],I||(I=T=Date.now(),history.replaceState({...history.state,[q]:I,[J]:T},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await jn(Ot,n):Cn(S.hash?je(new URL(location.href)):location.href,{replaceState:!0}),Nn()}function Un(){gt.length=0,qt=!1}function Ee(t){mt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=mt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Re(t){var e;(e=Z[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=mt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ae(){Vt(I),Zt(pe,F),Ee(T),Zt(de,Z)}async function Gt(t,e,n,r){return K({type:"goto",url:me(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(qt=!0),e.invalidate&&e.invalidate.forEach(On)}})}async function Ln(t){if(t.id!==(L==null?void 0:L.id)){const e={};z.add(e),L={id:t.id,token:e,promise:Ue({...t,preload:e}).then(n=>(z.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function xt(t){const e=Le(t);if(!e)return;const n=St.find(r=>r.exec(Te(e)));n&&await Promise.all([...n.layouts,n.leaf].map(r=>r==null?void 0:r[1]()))}function Ie(t,e,n){var s;w=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,t.props.page),ke=new S.root({target:e,props:{...t.props,stores:$,components:mt},hydrate:n,sync:!1}),Re(T);const a={from:null,to:{params:w.params,route:{id:((s=w.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),yt=!0}function wt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const h of n)(h==null?void 0:h.slash)!==void 0&&(o=h.slash);t.pathname=Ve(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:wn(n).map(h=>h.node.component),page:Wt(U)}};i!==void 0&&(c.props.form=i);let l={},d=!U,u=0;for(let h=0;h<Math.max(n.length,w.branch.length);h+=1){const m=n[h],f=w.branch[h];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${u}`]=l),u+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==U.form||d)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:U.data}),c}async function Mt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var d,u,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let h=function(...f){for(const g of f){const{href:_}=new URL(g,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(f,g)=>(o&&(c.route=!0),f[g])}),params:new Proxy(r,{get:(f,g)=>(o&&c.params.add(g),f[g])}),data:(s==null?void 0:s.data)??null,url:Ge(n,()=>{o&&(c.url=!0)},f=>{o&&c.search_params.add(f)},S.hash),async fetch(f,g){let _;f instanceof Request?(_=f.url,g={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...g}):_=f;const R=new URL(_,n);return o&&h(R.href),R.origin===n.origin&&(_=R.href.slice(n.origin.length)),yt?Xe(_,R.href,g):Je(_,g)},setHeaders:()=>{},depends:h,parent(){return o&&(c.parent=!0),e()},untrack(f){o=!1;try{return f()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function oe(t,e,n,r,a,s){if(qt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==w.params[i])return!0;for(const i of a.dependencies)if(gt.some(o=>o(new URL(i))))return!0;return!1}function Ht(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Tn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function se({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Wt(U),constructors:[]}}}async function Ue({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return z.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const u=w.url?t!==vt(w.url):!1,y=w.route?a.id!==w.route.id:!1,h=Tn(w.url,n);let m=!1;const f=l.map((p,v)=>{var D;const k=w.branch[v],E=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||oe(m,y,u,h,(D=k.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(f.some(Boolean)){try{d=await Ce(n,f)}catch(p){const v=await G(p,{url:n,params:r,route:{id:t}});return z.has(s)?se({error:v,url:n,params:r,route:a}):kt({status:dt(p),error:v,url:n,route:a})}if(d.type==="redirect")return d}const g=d==null?void 0:d.nodes;let _=!1;const R=l.map(async(p,v)=>{var Et;if(!p)return;const k=w.branch[v],E=g==null?void 0:g[v];if((!E||E.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!oe(_,y,u,h,(Et=k.universal)==null?void 0:Et.uses,r))return k;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Mt({loader:p[1],url:n,params:r,route:a,parent:async()=>{var zt;const Yt={};for(let Rt=0;Rt<v;Rt+=1)Object.assign(Yt,(zt=await R[Rt])==null?void 0:zt.data);return Yt},server_data_node:Ht(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of R)p.catch(()=>{});const b=[];for(let p=0;p<l.length;p+=1)if(l[p])try{b.push(await R[p])}catch(v){if(v instanceof Dt)return{type:"redirect",location:v.location};if(z.has(s))return se({error:await G(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let k=dt(v),E;if(g!=null&&g.includes(v))k=v.status??k,E=v.error;else if(v instanceof At)E=v.body;else{if(await $.updated.check())return await be(),await M(n);E=await G(v,{params:r,url:n,route:{id:a.id}})}const D=await xn(p,b,i);return D?wt({url:n,params:r,branch:b.slice(0,D.idx).concat(D.node),status:k,error:E,route:a}):await Pe(n,{id:a.id},E,k)}else b.push(void 0);return wt({url:n,params:r,branch:b,status:200,error:null,route:a,form:e?void 0:null})}async function xn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function kt({status:t,error:e,url:n,route:r}){const a={};let s=null;if(S.server_loads[0]===0)try{const o=await Ce(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ft||n.pathname!==location.pathname||Bt)&&await M(n)}try{const o=await Mt({loader:Ct,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ht(s)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return wt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof Dt)return Gt(new URL(o.location,location.href),{},0);throw o}}function Le(t){let e;try{if(e=S.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);S.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}function Kt(t,e){if(!t||bt(t,x,S.hash))return;const n=Le(t);if(!n)return;const r=Te(n);for(const a of St){const s=a.exec(r);if(s)return{id:vt(t),invalidating:e,route:a,params:qe(s),url:t}}}function Te(t){return Be(S.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function vt(t){return(S.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function xe({url:t,type:e,intent:n,delta:r}){let a=!1;const s=Ne(w,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Q||Ae.forEach(o=>o(i)),a?null:s}async function K({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=ne,block:d=ne}){const u=Kt(e,!1),y=xe({url:e,type:t,delta:n==null?void 0:n.delta,intent:u});if(!y){d();return}const h=I,m=T;l(),Q=!0,yt&&$.navigating.set(X.current=y.navigation),_t=c;let f=u&&await Ue(u);if(!f){if(bt(e,x,S.hash))return await M(e);f=await Pe(e,{id:null},await G(new Ft(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(u==null?void 0:u.url)||e,_t!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(o>=20)f=await kt({status:500,error:await G(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Gt(new URL(f.location,e).href,{},o+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await be(),await M(e));if(Un(),Vt(h),Ee(m),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const b=s?0:1,p={[q]:I+=b,[J]:T+=b,[ge]:i};(s?history.replaceState:history.pushState).call(history,p,"",e),s||Rn(I,T)}if(L=null,f.props.page.state=i,yt){w=f.state,f.props.page&&(f.props.page.url=e);const b=(await Promise.all(Array.from(In,p=>p(y.navigation)))).filter(p=>typeof p=="function");if(b.length>0){let p=function(){b.forEach(v=>{Y.delete(v)})};b.push(p),b.forEach(v=>{Y.add(v)})}ke.$set(f.props),kn(f.props.page),Se=!0}else Ie(f,Ot,!1);const{activeElement:g}=document;await Fe();const _=n?n.scroll:a?$t():null;if(re){const b=e.hash&&document.getElementById(decodeURIComponent(S.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));_?scrollTo(_.x,_.y):b?b.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==g&&document.activeElement!==document.body;!r&&!R&&$n(),re=!0,f.props.page&&Object.assign(U,f.props.page),Q=!1,t==="popstate"&&Re(T),y.fulfil(void 0),Y.forEach(b=>b(y.navigation)),$.navigating.set(X.current=null)}async function Pe(t,e,n,r){return t.origin===ft&&t.pathname===location.pathname&&!Bt?await kt({status:r,error:n,url:t,route:e}):await M(t)}function Pn(){let t;j.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(s){s.defaultPrevented||r(s.composedPath()[0],1)}j.addEventListener("mousedown",e),j.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(xt(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=_e(s,j);if(!o)return;const{url:c,external:l,download:d}=Pt(o,x,S.hash);if(l||d)return;const u=ht(o),y=c&&vt(w.url)===vt(c);if(!u.reload&&!y)if(i<=u.preload_data){const h=Kt(c,!1);h&&Ln(h)}else i<=u.preload_code&&xt(c)}function a(){n.disconnect();for(const s of j.querySelectorAll("a")){const{url:i,external:o,download:c}=Pt(s,x,S.hash);if(o||c)continue;const l=ht(s);l.reload||(l.preload_code===ut.viewport&&n.observe(s),l.preload_code===ut.eager&&xt(i))}}Y.add(a),a()}function G(t,e){if(t instanceof At)return t.body;const n=dt(t),r=An(t);return S.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Cn(t,e={}){return t=new URL(me(t)),t.origin!==ft?Promise.reject(new Error("goto: invalid URL")):Gt(t,e,0)}function On(t){if(typeof t=="function")gt.push(t);else{const{href:e}=new URL(t,location.href);gt.push(n=>n.href===e)}}function Nn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ae(),!Q){const a=Ne(w,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ae.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ae()}),(e=navigator.connection)!=null&&e.saveData||Pn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=_e(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Pt(r,x,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ht(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[d,u]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=d===Ut(location);if(s||c.reload&&(!y||!u)){xe({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(u!==void 0&&y){const[,h]=w.url.href.split("#");if(h===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(H=!0,Vt(I),t(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(h=>{requestAnimationFrame(()=>{setTimeout(h,0)}),setTimeout(h,100)}),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(bt(o,x,!1))return;const c=n.target,l=ht(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&d.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),K({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(_t={},a===I)return;const s=F[a],i=n.state[ge]??{},o=new URL(n.state[sn]??location.href),c=n.state[J],l=w.url?Ut(location)===Ut(w.url):!1;if(c===T&&(Se||l)){i!==U.state&&(U.state=i),t(o),F[I]=$t(),s&&scrollTo(s.x,s.y),I=a;return}const u=a-I;await K({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{I=a,T=c},block:()=>{history.go(-u)},nav_token:_t})}else if(!H){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[q]:++I,[J]:T},"",location.href)):S.hash&&w.url.hash===location.hash&&K({type:"goto",url:je(w.url)})});for(const n of document.querySelectorAll("link"))En.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function t(n){w.url=U.url=n,$.page.set(Wt(U)),$.page.notify()}}async function jn(t,{status:e=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Bt=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Kt(c,!1)||{});let l,d=!0;try{const u=r.map(async(m,f)=>{const g=i[f];return g!=null&&g.uses&&(g.uses=Oe(g.uses)),Mt({loader:S.nodes[m],url:c,params:a,route:s,parent:async()=>{const _={};for(let R=0;R<f;R+=1)Object.assign(_,(await u[R]).data);return _},server_data_node:Ht(g)})}),y=await Promise.all(u),h=St.find(({id:m})=>m===s.id);if(h){const m=h.layouts;for(let f=0;f<m.length;f++)m[f]||y.splice(f,0,void 0)}l=wt({url:c,params:a,branch:y,status:e,error:n,form:o,route:h??null})}catch(u){if(u instanceof Dt){await M(new URL(u.location,location.href));return}l=await kt({status:dt(u),error:await G(u,{url:c,params:a,route:s}),url:c,route:s}),t.textContent="",d=!1}l.props.page&&(l.props.page.state={}),Ie(l,t,d)}async function Ce(t,e){var s;const n=new URL(t);n.pathname=Ke(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(bn,"1"),n.searchParams.append(vn,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new At(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function d(h){return yn(h,{...S.decoders,Promise:m=>new Promise((f,g)=>{o.set(m,{fulfil:f,reject:g})})})}let u="";for(;;){const{done:h,value:m}=await c.read();if(h&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const f=u.indexOf(`
`);if(f===-1)break;const g=JSON.parse(u.slice(0,f));if(u=u.slice(f+1),g.type==="redirect")return i(g);if(g.type==="data")(y=g.nodes)==null||y.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=Oe(_.uses),_.data=d(_.data))}),i(g);else if(g.type==="chunk"){const{id:_,data:R,error:b}=g,p=o.get(_);o.delete(_),b?p.reject(d(b)):p.fulfil(d(R))}}}})}function Oe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function $n(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ne(t,e,n,r){var c,l;let a,s;const i=new Promise((d,u)=>{a=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Wt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function je(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Hn as a,U as p,$ as s,Tt as u};
