import{i as d,t as l,q as p,s as v,v as f,x as m,l as _,y as g,p as r,z as y}from"./entry.f868cf9c.js";import{u as h}from"./asyncData.f4326c01.js";/* empty css                      *//* empty css                               *//* empty css                    */const w=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=l(i),e=p(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!e.value&&v("dd-navigation").value){const{navigation:a}=f();return{navigation:a}}const{data:o}=await h(`content-navigation-${m(e.value)}`,()=>g(e.value));return{navigation:o}},render(i){const t=_(),{navigation:e}=i,o=n=>r(y,{to:n._path},()=>n.title),a=(n,u)=>r("ul",u?{"data-level":u}:null,n.map(s=>s.children?r("li",null,[o(s),a(s.children,u+1)]):r("li",null,o(s)))),c=n=>a(n,0);return t!=null&&t.default?t.default({navigation:e,...this.$attrs}):c(e)}});export{w as default};
