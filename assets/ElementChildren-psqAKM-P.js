import{_ as g,a as h}from"./useEventCallback-a3lBHgy_.js";import{r as s,j as d}from"./index-xs2K1FtB.js";import{g as j}from"./Button-rhWHzPjy.js";function v(){return v=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},v.apply(this,arguments)}function y(r){return"default"+r.charAt(0).toUpperCase()+r.substr(1)}function P(r){var e=w(r,"string");return typeof e=="symbol"?e:String(e)}function w(r,e){if(typeof r!="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var t=n.call(r,e||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function x(r,e,n){var t=s.useRef(r!==void 0),o=s.useState(e),a=o[0],i=o[1],f=r!==void 0,m=t.current;return t.current=f,!f&&m&&a!==e&&i(e),[f?r:a,s.useCallback(function(l){for(var u=arguments.length,p=new Array(u>1?u-1:0),c=1;c<u;c++)p[c-1]=arguments[c];n&&n.apply(void 0,[l].concat(p)),i(l)},[n])]}function S(r,e){return Object.keys(e).reduce(function(n,t){var o,a=n,i=a[y(t)],f=a[t],m=g(a,[y(t),t].map(P)),l=e[t],u=x(f,i,r[l]),p=u[0],c=u[1];return v({},m,(o={},o[t]=p,o[l]=c,o))},r)}const O=["onKeyDown"];function E(r,e){if(r==null)return{};var n={},t=Object.keys(r),o,a;for(a=0;a<t.length;a++)o=t[a],!(e.indexOf(o)>=0)&&(n[o]=r[o]);return n}function K(r){return!r||r.trim()==="#"}const b=s.forwardRef((r,e)=>{let{onKeyDown:n}=r,t=E(r,O);const[o]=j(Object.assign({tagName:"a"},t)),a=h(i=>{o.onKeyDown(i),n==null||n(i)});return K(t.href)||t.role==="button"?d.jsx("a",Object.assign({ref:e},t,o,{onKeyDown:a})):d.jsx("a",Object.assign({ref:e},t,{onKeyDown:n}))});b.displayName="Anchor";const _=b;function R(r,e){let n=0;return s.Children.map(r,t=>s.isValidElement(t)?e(t,n++):t)}function U(r,e){let n=0;s.Children.forEach(r,t=>{s.isValidElement(t)&&e(t,n++)})}function T(r,e){return s.Children.toArray(r).some(n=>s.isValidElement(n)&&n.type===e)}export{_ as A,U as f,T as h,R as m,S as u};
