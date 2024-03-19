import{r as n,n as $e,o as De,u as F,j as o,d as j,p as Me,q as Ae,s as ae,t as Le,T as Oe,v as _e}from"./index-6Nqm4FLH.js";import{u as Xe,f as He,m as oe,A as le}from"./ElementChildren-ZfYaThT0.js";function Pe(r,s){const l=n.useRef(!0);n.useEffect(()=>{if(l.current){l.current=!1;return}return r()},s)}const W=2**31-1;function ie(r,s,l){const c=l-Date.now();r.current=c<=W?setTimeout(s,c):setTimeout(()=>ie(r,s,l),W)}function Ue(){const r=$e(),s=n.useRef();return De(()=>clearTimeout(s.current)),n.useMemo(()=>{const l=()=>clearTimeout(s.current);function c(h,i=0){r()&&(l(),i<=W?s.current=setTimeout(h,i):ie(s,h,Date.now()+i))}return{set:c,clear:l}},[])}const ce=n.forwardRef(({className:r,bsPrefix:s,as:l="div",...c},h)=>(s=F(s,"carousel-caption"),o.jsx(l,{ref:h,className:j(r,s),...c})));ce.displayName="CarouselCaption";const We=ce,ue=n.forwardRef(({as:r="div",bsPrefix:s,className:l,...c},h)=>{const i=j(l,F(s,"carousel-item"));return o.jsx(r,{ref:h,...c,className:i})});ue.displayName="CarouselItem";const Fe=ue,Ke=40;function Be(r){if(!r||!r.style||!r.parentNode||!r.parentNode.style)return!1;const s=getComputedStyle(r);return s.display!=="none"&&s.visibility!=="hidden"&&getComputedStyle(r.parentNode).display!=="none"}const de=n.forwardRef(({defaultActiveIndex:r=0,...s},l)=>{const{as:c="div",bsPrefix:h,slide:i=!0,fade:fe=!1,controls:me=!0,indicators:$=!0,indicatorLabels:D=[],activeIndex:p,onSelect:v,onSlide:S,onSlid:T,interval:y=5e3,keyboard:K=!0,onKeyDown:M,pause:N="hover",onMouseOver:A,onMouseOut:L,wrap:I=!0,touch:B=!0,onTouchStart:O,onTouchMove:_,onTouchEnd:X,prevIcon:he=o.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:V="Previous",nextIcon:pe=o.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:q="Next",variant:Y,className:ve,children:H,...Ce}=Xe({defaultActiveIndex:r,...s},{activeIndex:"onSelect"}),f=F(h,"carousel"),R=Me(),b=n.useRef(null),[z,G]=n.useState("next"),[xe,k]=n.useState(!1),[E,J]=n.useState(!1),[a,Ne]=n.useState(p||0);n.useEffect(()=>{!E&&p!==a&&(b.current?G(b.current):G((p||0)>a?"next":"prev"),i&&J(!0),Ne(p||0))},[p,E,a,i]),n.useEffect(()=>{b.current&&(b.current=null)});let C=0,Q;He(H,(e,t)=>{++C,t===p&&(Q=e.props.interval)});const Z=Ae(Q),u=n.useCallback(e=>{if(E)return;let t=a-1;if(t<0){if(!I)return;t=C-1}b.current="prev",v==null||v(t,e)},[E,a,v,I,C]),d=ae(e=>{if(E)return;let t=a+1;if(t>=C){if(!I)return;t=0}b.current="next",v==null||v(t,e)}),P=n.useRef();n.useImperativeHandle(l,()=>({element:P.current,prev:u,next:d}));const ee=ae(()=>{!document.hidden&&Be(P.current)&&(R?u():d())}),x=z==="next"?"start":"end";Pe(()=>{i||(S==null||S(a,x),T==null||T(a,x))},[a]);const Re=`${f}-item-${z}`,be=`${f}-item-${x}`,Ee=n.useCallback(e=>{Le(e),S==null||S(a,x)},[S,a,x]),Se=n.useCallback(()=>{J(!1),T==null||T(a,x)},[T,a,x]),Te=n.useCallback(e=>{if(K&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),R?d(e):u(e);return;case"ArrowRight":e.preventDefault(),R?u(e):d(e);return}M==null||M(e)},[K,M,u,d,R]),ye=n.useCallback(e=>{N==="hover"&&k(!0),A==null||A(e)},[N,A]),Ie=n.useCallback(e=>{k(!1),L==null||L(e)},[L]),ne=n.useRef(0),w=n.useRef(0),te=Ue(),ge=n.useCallback(e=>{ne.current=e.touches[0].clientX,w.current=0,N==="hover"&&k(!0),O==null||O(e)},[N,O]),je=n.useCallback(e=>{e.touches&&e.touches.length>1?w.current=0:w.current=e.touches[0].clientX-ne.current,_==null||_(e)},[_]),ke=n.useCallback(e=>{if(B){const t=w.current;Math.abs(t)>Ke&&(t>0?u(e):d(e))}N==="hover"&&te.set(()=>{k(!1)},y||void 0),X==null||X(e)},[B,N,u,d,te,y,X]),se=y!=null&&!xe&&!E,U=n.useRef();n.useEffect(()=>{var e,t;if(!se)return;const m=R?u:d;return U.current=window.setInterval(document.visibilityState?ee:m,(e=(t=Z.current)!=null?t:y)!=null?e:void 0),()=>{U.current!==null&&clearInterval(U.current)}},[se,u,d,Z,y,ee,R]);const re=n.useMemo(()=>$&&Array.from({length:C},(e,t)=>m=>{v==null||v(t,m)}),[$,C,v]);return o.jsxs(c,{ref:P,...Ce,onKeyDown:Te,onMouseOver:ye,onMouseOut:Ie,onTouchStart:ge,onTouchMove:je,onTouchEnd:ke,className:j(ve,f,i&&"slide",fe&&`${f}-fade`,Y&&`${f}-${Y}`),children:[$&&o.jsx("div",{className:`${f}-indicators`,children:oe(H,(e,t)=>o.jsx("button",{type:"button","data-bs-target":"","aria-label":D!=null&&D.length?D[t]:`Slide ${t+1}`,className:t===a?"active":void 0,onClick:re?re[t]:void 0,"aria-current":t===a},t))}),o.jsx("div",{className:`${f}-inner`,children:oe(H,(e,t)=>{const m=t===a;return i?o.jsx(Oe,{in:m,onEnter:m?Ee:void 0,onEntered:m?Se:void 0,addEndListener:_e,children:(g,we)=>n.cloneElement(e,{...we,className:j(e.props.className,m&&g!=="entered"&&Re,(g==="entered"||g==="exiting")&&"active",(g==="entering"||g==="exiting")&&be)})}):n.cloneElement(e,{className:j(e.props.className,m&&"active")})})}),me&&o.jsxs(o.Fragment,{children:[(I||p!==0)&&o.jsxs(le,{className:`${f}-control-prev`,onClick:u,children:[he,V&&o.jsx("span",{className:"visually-hidden",children:V})]}),(I||p!==C-1)&&o.jsxs(le,{className:`${f}-control-next`,onClick:d,children:[pe,q&&o.jsx("span",{className:"visually-hidden",children:q})]})]})]})});de.displayName="Carousel";const Ye=Object.assign(de,{Caption:We,Item:Fe});export{Ye as C};
