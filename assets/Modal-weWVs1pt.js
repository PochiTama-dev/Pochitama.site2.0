import{j as _,o as pe,s as H,h as E,k as ve,l as Te,u as A,d as M,f as Ye,r as we,m as qe,n as Je}from"./Button-h7SKzuDi.js";import{r as s,j as l,R as Qe}from"./index-vfStjfDb.js";import{u as Ze,a as Se}from"./Cta-QBb-Xk7q.js";import{C as Pe,F as je}from"./CloseButton-B-ZFa2sh.js";import{d as et}from"./divWithClassName-9vKwKM_-.js";function tt(){return s.useState(null)}function nt(e){const t=s.useRef(null);return s.useEffect(()=>{t.current=e}),t.current}const ot=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",rt=typeof document<"u",Ce=rt||ot?s.useLayoutEffect:s.useEffect;var st=Function.prototype.bind.call(Function.prototype.call,[].slice);function S(e,t){return st(e.querySelectorAll(t))}function be(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}const at="data-rr-ui-";function it(e){return`${at}${e}`}const Ae=s.createContext(_?window:void 0);Ae.Provider;function Ee(){return s.useContext(Ae)}var ee;function Ne(e){if((!ee&&ee!==0||e)&&_){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),ee=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return ee}function fe(e){e===void 0&&(e=pe());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function lt(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const xe=it("modal-open");class ct{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:o=!1}={}){this.handleContainerOverflow=n,this.isRTL=o,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return lt(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();t.style={overflow:r.style.overflow,[o]:r.style[o]},t.scrollBarWidth&&(n[o]=`${parseInt(H(r,o)||"0",10)+t.scrollBarWidth}px`),r.setAttribute(xe,""),H(r,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(xe),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const ye=ct,he=(e,t)=>_?e==null?(t||pe()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function dt(e,t){const n=Ee(),[o,r]=s.useState(()=>he(e,n==null?void 0:n.document));if(!o){const a=he(e);a&&r(a)}return s.useEffect(()=>{t&&o&&t(o)},[t,o]),s.useEffect(()=>{const a=he(e);a!==o&&r(a)},[e,o]),o}function ut({children:e,in:t,onExited:n,mountOnEnter:o,unmountOnExit:r}){const a=s.useRef(null),f=s.useRef(t),h=E(n);s.useEffect(()=>{t?f.current=!0:h(a.current)},[t,h]);const g=ve(a,e.ref),d=s.cloneElement(e,{ref:g});return t?d:r||!f.current&&o?null:d}function ft({in:e,onTransition:t}){const n=s.useRef(null),o=s.useRef(!0),r=E(t);return Ce(()=>{if(!n.current)return;let a=!1;return r({in:e,element:n.current,initial:o.current,isStale:()=>a}),()=>{a=!0}},[e,r]),Ce(()=>(o.current=!1,()=>{o.current=!0}),[]),n}function ht({children:e,in:t,onExited:n,onEntered:o,transition:r}){const[a,f]=s.useState(!t);t&&a&&f(!1);const h=ft({in:!!t,onTransition:d=>{const p=()=>{d.isStale()||(d.in?o==null||o(d.element,d.initial):(f(!0),n==null||n(d.element)))};Promise.resolve(r(d)).then(p,m=>{throw d.in||f(!0),m})}}),g=ve(h,e.ref);return a&&!t?null:s.cloneElement(e,{ref:g})}function ke(e,t,n){return e?l.jsx(e,Object.assign({},n)):t?l.jsx(ht,Object.assign({},n,{transition:t})):l.jsx(ut,Object.assign({},n))}function gt(e){return e.code==="Escape"||e.keyCode===27}const mt=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function pt(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}let ge;function vt(e){return ge||(ge=new ye({ownerDocument:e==null?void 0:e.document})),ge}function Et(e){const t=Ee(),n=e||vt(t),o=s.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:s.useCallback(r=>{o.current.dialog=r},[]),setBackdropRef:s.useCallback(r=>{o.current.backdrop=r},[])})}const Be=s.forwardRef((e,t)=>{let{show:n=!1,role:o="dialog",className:r,style:a,children:f,backdrop:h=!0,keyboard:g=!0,onBackdropClick:d,onEscapeKeyDown:p,transition:m,runTransition:C,backdropTransition:te,runBackdropTransition:K,autoFocus:ne=!0,enforceFocus:b=!0,restoreFocus:oe=!0,restoreFocusOptions:re,renderDialog:U,renderBackdrop:se=c=>l.jsx("div",Object.assign({},c)),manager:ae,container:ie,onShow:B,onHide:V=()=>{},onExit:G,onExited:D,onExiting:z,onEnter:X,onEntering:Y,onEntered:le}=e,ce=pt(e,mt);const y=Ee(),N=dt(ie),u=Et(ae),q=Ze(),F=nt(n),[T,R]=s.useState(!n),v=s.useRef(null);s.useImperativeHandle(t,()=>u,[u]),_&&!F&&n&&(v.current=fe(y==null?void 0:y.document)),n&&T&&R(!1);const J=E(()=>{if(u.add(),k.current=Te(document,"keydown",ue),x.current=Te(document,"focus",()=>setTimeout(Q),!0),B&&B(),ne){var c,P;const W=fe((c=(P=u.dialog)==null?void 0:P.ownerDocument)!=null?c:y==null?void 0:y.document);u.dialog&&W&&!be(u.dialog,W)&&(v.current=W,u.dialog.focus())}}),L=E(()=>{if(u.remove(),k.current==null||k.current(),x.current==null||x.current(),oe){var c;(c=v.current)==null||c.focus==null||c.focus(re),v.current=null}});s.useEffect(()=>{!n||!N||J()},[n,N,J]),s.useEffect(()=>{T&&L()},[T,L]),Se(()=>{L()});const Q=E(()=>{if(!b||!q()||!u.isTopModal())return;const c=fe(y==null?void 0:y.document);u.dialog&&c&&!be(u.dialog,c)&&u.dialog.focus()}),de=E(c=>{c.target===c.currentTarget&&(d==null||d(c),h===!0&&V())}),ue=E(c=>{g&&gt(c)&&u.isTopModal()&&(p==null||p(c),c.defaultPrevented||V())}),x=s.useRef(),k=s.useRef(),I=(...c)=>{R(!0),D==null||D(...c)};if(!N)return null;const Z=Object.assign({role:o,ref:u.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},ce,{style:a,className:r,tabIndex:-1});let $=U?U(Z):l.jsx("div",Object.assign({},Z,{children:s.cloneElement(f,{role:"document"})}));$=ke(m,C,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:G,onExiting:z,onExited:I,onEnter:X,onEntering:Y,onEntered:le,children:$});let w=null;return h&&(w=se({ref:u.setBackdropRef,onClick:de}),w=ke(te,K,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:w})),l.jsx(l.Fragment,{children:Qe.createPortal(l.jsxs(l.Fragment,{children:[w,$]}),N)})});Be.displayName="Modal";const yt=Object.assign(Be,{Manager:ye});function Rt(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Mt(e,t){e.classList?e.classList.add(t):Rt(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Oe(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Tt(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Oe(e.className,t):e.setAttribute("class",Oe(e.className&&e.className.baseVal||"",t))}const j={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class wt extends ye{adjustAndStore(t,n,o){const r=n.style[t];n.dataset[t]=r,H(n,{[t]:`${parseFloat(H(n,t))+o}px`})}restore(t,n){const o=n.dataset[t];o!==void 0&&(delete n.dataset[t],H(n,{[t]:o}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Mt(n,"modal-open"),!t.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";S(n,j.FIXED_CONTENT).forEach(a=>this.adjustAndStore(o,a,t.scrollBarWidth)),S(n,j.STICKY_CONTENT).forEach(a=>this.adjustAndStore(r,a,-t.scrollBarWidth)),S(n,j.NAVBAR_TOGGLER).forEach(a=>this.adjustAndStore(r,a,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Tt(n,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";S(n,j.FIXED_CONTENT).forEach(a=>this.restore(o,a)),S(n,j.STICKY_CONTENT).forEach(a=>this.restore(r,a)),S(n,j.NAVBAR_TOGGLER).forEach(a=>this.restore(r,a))}}let me;function Ct(e){return me||(me=new wt(e)),me}const De=s.forwardRef(({className:e,bsPrefix:t,as:n="div",...o},r)=>(t=A(t,"modal-body"),l.jsx(n,{ref:r,className:M(e,t),...o})));De.displayName="ModalBody";const bt=De,Nt=s.createContext({onHide(){}}),Fe=Nt,Le=s.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:o,size:r,fullscreen:a,children:f,scrollable:h,...g},d)=>{e=A(e,"modal");const p=`${e}-dialog`,m=typeof a=="string"?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return l.jsx("div",{...g,ref:d,className:M(p,t,r&&`${e}-${r}`,o&&`${p}-centered`,h&&`${p}-scrollable`,a&&m),children:l.jsx("div",{className:M(`${e}-content`,n),children:f})})});Le.displayName="ModalDialog";const Ie=Le,$e=s.forwardRef(({className:e,bsPrefix:t,as:n="div",...o},r)=>(t=A(t,"modal-footer"),l.jsx(n,{ref:r,className:M(e,t),...o})));$e.displayName="ModalFooter";const xt=$e,kt=s.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:o,children:r,...a},f)=>{const h=s.useContext(Fe),g=E(()=>{h==null||h.onHide(),o==null||o()});return l.jsxs("div",{ref:f,...a,children:[r,n&&l.jsx(Pe,{"aria-label":e,variant:t,onClick:g})]})}),Ot=kt,We=s.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:o=!1,...r},a)=>(e=A(e,"modal-header"),l.jsx(Ot,{ref:a,...r,className:M(t,e),closeLabel:n,closeButton:o})));We.displayName="ModalHeader";const St=We,jt=et("h4"),He=s.forwardRef(({className:e,bsPrefix:t,as:n=jt,...o},r)=>(t=A(t,"modal-title"),l.jsx(n,{ref:r,className:M(e,t),...o})));He.displayName="ModalTitle";const At=He;function Bt(e){return l.jsx(je,{...e,timeout:null})}function Dt(e){return l.jsx(je,{...e,timeout:null})}const _e=s.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:o,contentClassName:r,children:a,dialogAs:f=Ie,"aria-labelledby":h,"aria-describedby":g,"aria-label":d,show:p=!1,animation:m=!0,backdrop:C=!0,keyboard:te=!0,onEscapeKeyDown:K,onShow:ne,onHide:b,container:oe,autoFocus:re=!0,enforceFocus:U=!0,restoreFocus:se=!0,restoreFocusOptions:ae,onEntered:ie,onExit:B,onExiting:V,onEnter:G,onEntering:D,onExited:z,backdropClassName:X,manager:Y,...le},ce)=>{const[y,N]=s.useState({}),[u,q]=s.useState(!1),F=s.useRef(!1),T=s.useRef(!1),R=s.useRef(null),[v,J]=tt(),L=ve(ce,J),Q=E(b),de=Ye();e=A(e,"modal");const ue=s.useMemo(()=>({onHide:Q}),[Q]);function x(){return Y||Ct({isRTL:de})}function k(i){if(!_)return;const O=x().getScrollbarWidth()>0,Me=i.scrollHeight>pe(i).documentElement.clientHeight;N({paddingRight:O&&!Me?Ne():void 0,paddingLeft:!O&&Me?Ne():void 0})}const I=E(()=>{v&&k(v.dialog)});Se(()=>{we(window,"resize",I),R.current==null||R.current()});const Z=()=>{F.current=!0},$=i=>{F.current&&v&&i.target===v.dialog&&(T.current=!0),F.current=!1},w=()=>{q(!0),R.current=Je(v.dialog,()=>{q(!1)})},c=i=>{i.target===i.currentTarget&&w()},P=i=>{if(C==="static"){c(i);return}if(T.current||i.target!==i.currentTarget){T.current=!1;return}b==null||b()},W=i=>{te?K==null||K(i):(i.preventDefault(),C==="static"&&w())},Ke=(i,O)=>{i&&k(i),G==null||G(i,O)},Ue=i=>{R.current==null||R.current(),B==null||B(i)},Ve=(i,O)=>{D==null||D(i,O),qe(window,"resize",I)},Ge=i=>{i&&(i.style.display=""),z==null||z(i),we(window,"resize",I)},ze=s.useCallback(i=>l.jsx("div",{...i,className:M(`${e}-backdrop`,X,!m&&"show")}),[m,X,e]),Re={...n,...y};Re.display="block";const Xe=i=>l.jsx("div",{role:"dialog",...i,style:Re,className:M(t,e,u&&`${e}-static`,!m&&"show"),onClick:C?P:void 0,onMouseUp:$,"aria-label":d,"aria-labelledby":h,"aria-describedby":g,children:l.jsx(f,{...le,onMouseDown:Z,className:o,contentClassName:r,children:a})});return l.jsx(Fe.Provider,{value:ue,children:l.jsx(yt,{show:p,ref:L,backdrop:C,container:oe,keyboard:!0,autoFocus:re,enforceFocus:U,restoreFocus:se,restoreFocusOptions:ae,onEscapeKeyDown:W,onShow:ne,onHide:b,onEnter:Ke,onEntering:Ve,onEntered:ie,onExit:Ue,onExiting:V,onExited:Ge,manager:x(),transition:m?Bt:void 0,backdropTransition:m?Dt:void 0,renderBackdrop:ze,renderDialog:Xe})})});_e.displayName="Modal";const Ht=Object.assign(_e,{Body:bt,Header:St,Title:At,Footer:xt,Dialog:Ie,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{Ht as M};
