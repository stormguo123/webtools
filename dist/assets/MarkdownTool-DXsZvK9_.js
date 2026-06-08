import{d as i,o as m,e as c,w as e,i as n,a as s,$ as f,a0 as u,m as p,T as w,A as _,Z as h}from"./index-Y6Od9bea.js";import{_ as x}from"./ToolPanel.vue_vue_type_script_setup_true_lang-D6zsW9gR.js";import{_ as b}from"./ToolButton.vue_vue_type_script_setup_true_lang-ZjVtYS0J.js";import{_ as k}from"./SplitPane.vue_vue_type_script_setup_true_lang-Dr2XD9z2.js";import{M as g}from"./index-Do4ktST4.js";import{d as v}from"./download-pLTrBdN1.js";const y=new g({html:!1,linkify:!0,breaks:!0});function M(t){return y.render(t)}function T(t){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Markdown Export</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; line-height: 1.6; }
    pre { background: #f4f4f5; padding: 1rem; overflow-x: auto; border-radius: 0.5rem; }
    code { font-family: ui-monospace, monospace; }
  </style>
</head>
<body>${t}</body>
</html>`}const H=["innerHTML"],C=i({__name:"MarkdownTool",setup(t){const o=w(`# Hello

- item 1
- item 2

\`\`\`js
console.log(1)
\`\`\``),r=_(()=>M(o.value));function l(){v(T(r.value),"markdown-export.html","text/html;charset=utf-8")}return($,a)=>(m(),c(x,null,{toolbar:e(()=>[n(b,{variant:"secondary",class:"mb-4",onClick:l},{default:e(()=>[...a[1]||(a[1]=[p("导出 HTML",-1)])]),_:1})]),default:e(()=>[n(k,{"left-label":"Markdown","right-label":"预览"},{left:e(()=>[f(s("textarea",{"onUpdate:modelValue":a[0]||(a[0]=d=>o.value=d),rows:"16",class:"wt-textarea"},null,512),[[u,o.value]])]),right:e(()=>[s("div",{class:"min-h-[300px] rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-950 markdown-preview",innerHTML:r.value},null,8,H)]),_:1})]),_:1}))}}),I=h(C,[["__scopeId","data-v-d37736b2"]]);export{I as default};
