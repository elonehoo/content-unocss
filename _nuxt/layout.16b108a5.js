import{l as r,g as p,i as m,j as u,T as f}from"./entry.da60e72f.js";import{l as c}from"./query.d5d7469f.js";import{I as i,h as d,J as y,D as _,v as h}from"./runtime-core.esm-bundler.ac1ee3c4.js";import"./_plugin-vue_export-helper.c27b6911.js";const v=i({inheritAttrs:!1,props:{name:String},async setup(n,t){const e=await r[n.name]().then(a=>a.default||a);return()=>d(e,t.attrs,t.slots)}}),R=i({inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,t){const e=_("_route"),a=e===c()?p():e,o=y(()=>h(n.name)??a.meta.layout??"default");return()=>{const s=o.value&&o.value in r,l=a.meta.layoutTransition??m;return u(f,s&&l,{default:()=>u(v,s&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}});export{R as default};
