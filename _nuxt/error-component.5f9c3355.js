import{_ as o}from"./entry.bd5fb27e.js";import{E as n,M as _,R as f,a4 as E,a5 as g,A as r}from"./runtime-core.esm-bundler.9c14be38.js";import"./query.6a3ed619.js";import"./_plugin-vue_export-helper.c27b6911.js";const k={__name:"nuxt-error-page",props:{error:Object},setup(t){(t.error.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const s=Number(t.error.statusCode||500),a=s===404,c=t.error.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.error.message||t.error.toString(),u=void 0,m=n(()=>o(()=>import("./error-404.798f4355.js"),["./error-404.798f4355.js","./query.6a3ed619.js","./runtime-core.esm-bundler.9c14be38.js","./entry.bd5fb27e.js","./_plugin-vue_export-helper.c27b6911.js","./entry.d14bf226.css","./error-404.23f2309d.css"],import.meta.url).then(e=>e.default||e)),l=n(()=>o(()=>import("./error-500.02d19027.js"),["./error-500.02d19027.js","./entry.bd5fb27e.js","./runtime-core.esm-bundler.9c14be38.js","./query.6a3ed619.js","./_plugin-vue_export-helper.c27b6911.js","./entry.d14bf226.css","./error-500.aa16ed4d.css"],import.meta.url).then(e=>e.default||e)),d=a?m:l;return(e,p)=>(_(),f(r(d),E(g({statusCode:r(s),statusMessage:r(c),description:r(i),stack:r(u)})),null,16))}},A=k;export{A as default};