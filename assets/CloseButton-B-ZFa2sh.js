import{t as N,T as b,i as w,d as c,E as x,q as y,P as p}from"./Button-h7SKzuDi.js";import{r as o,j as f}from"./index-vfStjfDb.js";const C={[x]:"show",[y]:"show"},d=o.forwardRef(({className:t,children:s,transitionClasses:r={},onEnter:e,...n},m)=>{const u={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...n},E=o.useCallback((a,l)=>{N(a),e==null||e(a,l)},[e]);return f.jsx(b,{ref:m,addEndListener:w,...u,onEnter:E,childRef:s.ref,children:(a,l)=>o.cloneElement(s,{...l,className:c("fade",t,s.props.className,C[a],r[a])})})});d.displayName="Fade";const j=d,R={"aria-label":p.string,onClick:p.func,variant:p.oneOf(["white"])},i=o.forwardRef(({className:t,variant:s,"aria-label":r="Close",...e},n)=>f.jsx("button",{ref:n,type:"button",className:c("btn-close",s&&`btn-close-${s}`,t),"aria-label":r,...e}));i.displayName="CloseButton";i.propTypes=R;const B=i;export{B as C,j as F};