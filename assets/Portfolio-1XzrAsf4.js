import{j as e,r as l}from"./index-vkwnNdUE.js";import{M as c}from"./Modal-nMzucP2V.js";import{C as p}from"./Cta-PPk4IeDl.js";import{C as a}from"./Carousel-jFbaSi17.js";import"./Button-0TIBYM0-.js";import"./CloseButton-xJfhfT9a.js";import"./divWithClassName-T4vshgNC.js";import"./LogoPochi-uDiG7Q72.js";import"./ElementChildren-By1JTq0h.js";const x="Pochitama.dev se destaca por comprender y respetar las necesidades de nuestros clientes, priorizando la colaboración y comunicación para entregar soluciones personalizadas que superan expectativas. Nuestros valores se centran en exceder los deseos de los clientes con resultados excepcionales.",j="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",u="¿consideraste expandir tu negocio a través de una aplicación?",h="En Pochitama, no solo desarrollamos aplicaciones, creamos conexiones significativas entre tu marca y tus usuarios, generando lealtad y compromiso.";function f({show:i,data:s}){const t=r=>{r.stopPropagation()};return e.jsx(c,{show:i,centered:!0,size:"xl",onClick:t,children:e.jsxs(c.Body,{className:"d-flex flex-column p-0",children:[e.jsx("div",{className:"",style:{background:`url(${s?s.img:"/src/assets/images/exampleProyect.webp"})`,width:"100%",minHeight:"45vh",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}),e.jsxs("div",{className:"modal_rectangule",children:[e.jsx("div",{style:{width:"60%"},children:e.jsx("label",{className:"modal_rectangule_title",children:"Desarrollo de Pagina Web"})}),e.jsx("div",{className:"modal_logo"})]}),e.jsx("div",{style:{width:"100%",padding:"5px ",marginTop:"50px"},children:e.jsx("div",{children:e.jsx("label",{className:"modal_label",children:s?s.description:j})})}),e.jsx("div",{className:"d-flex justify-content-center",style:{marginTop:"50px"},children:e.jsx("button",{className:"modal_button",children:e.jsx("label",{className:"modal_button_label",children:"Contrata este servicio"})})})]})})}function o({proyectName:i,position:s,link:t}){const[r,n]=l.useState(!1),d=()=>{n(!r)},m=()=>{t?window.open(t,"_blank"):d()};return e.jsxs("div",{className:`porfolio-proyect-box ${s}`,onClick:m,children:[e.jsx("div",{className:"portfolio-pildora",children:e.jsx("label",{className:"portfolio-label",children:i})}),r===!0&&e.jsx(f,{show:r})]})}const E=()=>{const[i,s]=l.useState(window.innerWidth);return l.useEffect(()=>{const t=()=>{s(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),e.jsxs("div",{children:[e.jsx(p,{title:u,subtitle:h}),e.jsxs("div",{className:"container-fluid portfolio-container",children:[e.jsxs("div",{className:"row pt-10",children:[e.jsx("div",{className:"col-2"}),e.jsxs("div",{className:"col-8",children:[e.jsxs("div",{className:"d-flex flex-row justify-content-center align-items-center mb-4",children:[e.jsx("div",{className:"portfolio-hr"}),e.jsx("h2",{className:"portfolio-title",children:" Proyectos Destacados"}),e.jsx("div",{className:"portfolio-hr"})]}),e.jsx("div",{className:"portfolio-text-box",children:e.jsx("p",{className:"portfolio-p",children:x})})]}),e.jsx("div",{className:"col-2"})]}),e.jsxs("div",{className:"row pt-8",children:[e.jsx("div",{className:"col-1"}),i>1e3?e.jsxs("div",{className:"col-10 d-flex flex-row justify-content-center",children:[e.jsx(o,{proyectName:"Proyecto",position:"impar"}),e.jsx(o,{proyectName:"Proyecto",position:"par"}),e.jsx(o,{proyectName:"Proyecto",position:"impar"}),e.jsx(o,{proyectName:"Proyecto",position:"par"})]}):e.jsx("div",{className:"col-10 d-flex flex-row justify-content-center align-items-center",children:e.jsxs(a,{style:{width:"100%",display:"flex",justifyContent:"center"},children:[e.jsx(a.Item,{children:e.jsx(o,{proyectName:"Proyecto",position:"carousel"})},1),e.jsx(a.Item,{children:e.jsx(o,{proyectName:"Proyecto",position:"carousel"})},2),e.jsx(a.Item,{children:e.jsx(o,{proyectName:"Proyecto",position:"carousel"})},3),e.jsx(a.Item,{children:e.jsx(o,{proyectName:"Proyecto",position:"carousel"})},4)]})}),e.jsx("div",{className:"col-1"})]})]})]})};export{E as default};
