import{I as m,b as u}from"./markup-CCDrUf0E.js";function f({tone:s,heading:l,text:c,primary:i,secondary:n,imageUrl:e,imageAlt:d,imagePosition:p,tilted:g}){return`
<section class="${["wp-block-solid-feature-card",s==="teal"&&"is-tone-teal",e&&p==="left"&&"is-image-left",e&&g&&"is-tilted",!e&&"has-no-image"].filter(Boolean).join(" ")}">
    <div class="wp-block-solid-feature-card__content">
        <h2 class="wp-block-heading">${l}</h2>
        <p>${c}</p>
        ${u([i&&{label:i,style:s==="teal"?"accent":"fill"},n&&{label:n,style:"outline"}].filter(Boolean))}
    </div>
    ${e?`<figure class="wp-block-solid-feature-card__media"><img src="${e}" alt="${d}"></figure>`:""}
</section>`}const b={title:"Blocks/Feature Card",tags:["autodocs"],render:f,parameters:{docs:{description:{component:"`solid/feature-card`: card with text and buttons beside a preview image (Year in Review). **Mist** (light) by default; **Teal** (dark) is the homepage version, with a yellow offset frame behind the image. Image can sit left or right and is slightly tilted by default; it straightens on hover unless the visitor prefers reduced motion. Stacks on mobile."}}},argTypes:{tone:{control:"inline-radio",options:["mist","teal"]},imagePosition:{control:"inline-radio",options:["right","left"]}},args:{tone:"mist",heading:"2025 Year In Review",text:"In 2025, we deepened our impact by <strong>strengthening the systems that translate skills into opportunity</strong>. Through expanded partnerships, platform enhancements, and a continued focus on real-world application, SOLID advanced how military experience is recognized and connected to education and workforce pathways.",primary:"Download our Year in Review",secondary:"See the highlights",imageUrl:m.yearInReview,imageAlt:"Cover page of the SOLID 2025 Year in Review report",imagePosition:"right",tilted:!0}},t={},a={args:{tone:"teal",tilted:!1}},r={args:{imagePosition:"left"}},o={args:{imageUrl:""}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'teal',
    tilted: false
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    imagePosition: 'left'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: ''
  }
}`,...o.parameters?.docs?.source}}};const v=["Default","Teal","ImageLeft","NoImage"];export{t as Default,r as ImageLeft,o as NoImage,a as Teal,v as __namedExportsOrder,b as default};
