import{j as e,M as i}from"./index-vPvZpf2t.js";import{C as r}from"./Carousel-3nU_z1gF.js";const p=""+new URL("1-ZwYcnZUz.webp",import.meta.url).href,h=""+new URL("2-LfLX5McX.webp",import.meta.url).href,x=""+new URL("3-RALQRKjF.webp",import.meta.url).href,u=""+new URL("4-_06XU5Gs.webp",import.meta.url).href,g=""+new URL("5-OdmzLrxx.webp",import.meta.url).href,j=""+new URL("6-v4CUM_hT.webp",import.meta.url).href,w=({show:o,onHide:n,data:l})=>{const a=()=>{const s=l.url.startsWith("http://")||l.url.startsWith("https://")?l.url:`http://${l.url}`;window.open(s,"_blank")},m=s=>{};return console.log(l.description),e.jsx(i,{show:o,centered:!0,size:"xl",onClick:m,onHide:n,children:e.jsxs(i.Body,{className:"d-flex flex-column p-0",children:[e.jsx(r,{style:{width:"100%",display:"flex",justifyContent:"center"},children:l.images&&l.images.map((s,t)=>e.jsx(r.Item,{className:"text-center",style:{marginBottom:"50px"},children:e.jsx("img",{src:s,alt:`${l.title}-${t}`,style:{height:"400px",width:"70%",display:"inline-block",margin:"20px"},className:"mx-auto portfolio-image-modal"})},t))}),e.jsxs("div",{className:"modal_rectangule",children:[e.jsx("div",{style:{width:"60%"},children:e.jsx("label",{className:"modal_rectangule_title",children:l.title})}),e.jsx("div",{className:"modal_logo"})]}),e.jsx("div",{style:{width:"100%",padding:"5px",marginTop:"50px"},children:e.jsx("div",{className:"description-modal-portfolio",children:e.jsx("label",{className:"modal_label",children:l.description})})}),e.jsx("div",{className:"d-flex justify-content-center",style:{marginTop:"50px"},children:l.url&&e.jsx("button",{className:"modal_button",children:e.jsx("label",{className:"modal_button_label",onClick:a,children:"Visitala!"})})})]})})};export{w as M,h as a,x as b,u as c,g as d,j as e,p as i};