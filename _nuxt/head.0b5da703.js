import{l as g}from"./query.d5d7469f.js";import{b as u}from"./entry.da60e72f.js";import{v as m,w as l,C as h}from"./runtime-core.esm-bundler.ac1ee3c4.js";const j=(r,p=g())=>{const f=m(r);l(()=>m(r),(t=f)=>{if(!p.path||!t)return;const e=Object.assign({},(t==null?void 0:t.head)||{}),n=e.title||(t==null?void 0:t.title);n&&(e.title=n),e.meta=[...e.meta||[]];const c=(e==null?void 0:e.description)||(t==null?void 0:t.description);c&&e.meta.filter(o=>o.name==="description").length===0&&e.meta.push({name:"description",content:c});const i=(e==null?void 0:e.image)||(t==null?void 0:t.image);if(i&&e.meta.filter(o=>o.property==="og:image").length===0&&(typeof i=="string"&&e.meta.push({property:"og:image",content:i}),typeof i=="object")){const o=["src","secure_url","type","width","height","alt"];for(const s of o)s==="src"&&i.src?e.meta.push({property:"og:image",content:i[s]}):i[s]&&e.meta.push({property:`og:image:${s}`,content:i[s]})}h(()=>u(e))},{immediate:!0})};export{j as u};
