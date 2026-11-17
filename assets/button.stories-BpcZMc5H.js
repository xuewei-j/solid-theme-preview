import{B as i,b as a}from"./markup-CCDrUf0E.js";const l=(e,r,n)=>`<div style="padding:var(--wp--preset--spacing--50);border-radius:var(--wp--custom--radius--md);background:${e};color:${r}">${n}</div>`,p={title:"Components/Button",tags:["autodocs"],parameters:{docs:{description:{component:"Core Button block with SOLID style variations. **Fill** (default, teal) and **Outline** for light surfaces; **Accent** (yellow, ink label 8.5:1) and **Light** (white) for teal or photo surfaces. Editors pick these in the block’s Styles panel."}}},argTypes:{style:{control:"inline-radio",options:i},surface:{control:"inline-radio",options:["light","dark"]}},args:{label:"Work with us",style:"fill",surface:"light"},render:({label:e,style:r,surface:n})=>n==="dark"?l("var(--wp--preset--color--teal-900)","var(--wp--preset--color--white)",a([{label:e,style:r}])):l("var(--wp--preset--color--white)","var(--wp--preset--color--ink)",a([{label:e,style:r}]))},t={},o={render:()=>l("var(--wp--preset--color--white)","var(--wp--preset--color--ink)",a([{label:"Fill",style:"fill"},{label:"Outline",style:"outline"}]))},s={render:()=>l("var(--wp--preset--color--teal-900)","var(--wp--preset--color--white)",a([{label:"Accent",style:"accent"},{label:"Light",style:"light"},{label:"Outline",style:"outline"}]))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => surface('var(--wp--preset--color--white)', 'var(--wp--preset--color--ink)', buttons([{
    label: 'Fill',
    style: 'fill'
  }, {
    label: 'Outline',
    style: 'outline'
  }]))
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => surface('var(--wp--preset--color--teal-900)', 'var(--wp--preset--color--white)', buttons([{
    label: 'Accent',
    style: 'accent'
  }, {
    label: 'Light',
    style: 'light'
  }, {
    label: 'Outline',
    style: 'outline'
  }]))
}`,...s.parameters?.docs?.source}}};const u=["Playground","OnLight","OnDark"];export{s as OnDark,o as OnLight,t as Playground,u as __namedExportsOrder,p as default};
