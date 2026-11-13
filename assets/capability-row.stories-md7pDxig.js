const l=`<!-- @license lucide-static v0.460.0 - ISC -->
<svg
  class="lucide lucide-badge-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  <path d="m9 12 2 2 4-4" />
</svg>
`,c=`<!-- @license lucide-static v0.460.0 - ISC -->
<svg
  class="lucide lucide-sparkles"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  <path d="M20 3v4" />
  <path d="M22 5h-4" />
  <path d="M4 17v2" />
  <path d="M5 18H3" />
</svg>
`,d=`<!-- @license lucide-static v0.460.0 - ISC -->
<svg
  class="lucide lucide-layers"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
</svg>
`,p=`<!-- @license lucide-static v0.460.0 - ISC -->
<svg
  class="lucide lucide-compass"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
  <circle cx="12" cy="12" r="10" />
</svg>
`,h=`<!-- @license lucide-static v0.460.0 - ISC -->
<svg
  class="lucide lucide-scale"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
  <path d="M7 21h10" />
  <path d="M12 3v18" />
  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
</svg>
`,w=`<!-- @license lucide-static v0.460.0 - ISC -->
<svg
  class="lucide lucide-arrow-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
</svg>
`,s={skills:l,ai:c,product:d,navigation:p,policy:h},t=({icon:i,title:a,description:r})=>`
<div class="wp-block-solid-capability-row">
    <a class="wp-block-solid-capability-row__link" href="#">
        <span class="wp-block-solid-capability-row__icon" aria-hidden="true">${s[i]}</span>
        <h3 class="wp-block-solid-capability-row__title">${a}</h3>
        <p class="wp-block-solid-capability-row__description">${r}</p>
        <span class="wp-block-solid-capability-row__arrow" aria-hidden="true">${w}</span>
    </a>
</div>`,o=[{icon:"skills",title:"Skills Intelligence",description:"Turning learning and experience into trusted workforce intelligence."},{icon:"ai",title:"Applied AI &amp; Data Innovation",description:"Using AI and data to enhance expertise, accelerate analysis, and scale impact."},{icon:"product",title:"Product, Engineering, &amp; Technical Solutions",description:"Turning workforce intelligence into secure, scalable, human-centered technology."},{icon:"policy",title:"Policy, Standards, &amp; Workforce Analysis",description:"Translating policy, standards, and evidence into practical workforce strategies."}],g={title:"Blocks/Capability Row",tags:["autodocs"],parameters:{docs:{description:{component:"`solid/capability-row`: one row of the Our Capabilities list. The whole row is a link. **Hover it, or Tab to it**, to see the teal state with the yellow arrow. On phones the description moves below the title."}}},argTypes:{icon:{control:"select",options:Object.keys(s)}},args:o[0],render:i=>`<div class="is-style-panel">${t(i)}</div>`},n={},e={render:()=>`
<div class="is-style-panel">
    <h2 style="margin:0 0 var(--wp--preset--spacing--40)">Our capabilities</h2>
    <div style="display:grid;gap:0.75rem">${o.map(t).join("")}</div>
</div>`};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="is-style-panel">
    <h2 style="margin:0 0 var(--wp--preset--spacing--40)">Our capabilities</h2>
    <div style="display:grid;gap:0.75rem">\${CAPABILITIES.map(row).join('')}</div>
</div>\`
}`,...e.parameters?.docs?.source}}};const u=["Default","List"];export{n as Default,e as List,u as __namedExportsOrder,g as default};
