const m=window.matchMedia("(prefers-reduced-motion: reduce)");function p(t,o,e){t.dataset.state=e?"playing":"paused",t.querySelector(".wp-block-solid-hero__toggle-label").textContent=e?"Pause background video":"Play background video",e?o.play().catch(()=>p(t,o,!1)):o.pause()}function h(t=document){t.querySelectorAll(".wp-block-solid-hero").forEach(o=>{const e=o.querySelector(".wp-block-solid-hero__video"),r=o.querySelector(".wp-block-solid-hero__toggle");!e||!r||(r.addEventListener("click",()=>p(r,e,r.dataset.state!=="playing")),p(r,e,!m.matches))})}h();const b=""+new URL("hero-workshop-ai-94pVAPfE.jpg",import.meta.url).href,v="https://solidinfodesign.com/wp-content/uploads/2021/02/SOLID-Site-Video-Home-v1.mp4";function w({heading:t,text:o,buttonLabel:e,buttonStyle:r,videoUrl:s,posterUrl:a,overlay:g,align:u}){const d=document.createElement("div");return d.innerHTML=`
<section class="wp-block-solid-hero${u?` align${u}`:""}" style="--solid-hero-overlay:${g/100}">
    ${s?`<video class="wp-block-solid-hero__video" src="${s}"${a?` poster="${a}"`:""} muted loop playsinline preload="metadata" aria-hidden="true"></video>`:""}
    ${!s&&a?`<img class="wp-block-solid-hero__image" src="${a}" alt="">`:""}
    <div class="wp-block-solid-hero__overlay" aria-hidden="true"></div>
    <div class="wp-block-solid-hero__content">
        <h1 class="wp-block-heading">${t}</h1>
        <p>${o}</p>
        ${e?`<div class="wp-block-buttons"><div class="wp-block-button is-style-${r}"><a class="wp-block-button__link wp-element-button" href="#">${e}</a></div></div>`:""}
    </div>
    ${s?'<button type="button" class="wp-block-solid-hero__toggle" data-state="paused"><span class="wp-block-solid-hero__toggle-icon" aria-hidden="true"></span><span class="wp-block-solid-hero__toggle-label">Play background video</span></button>':""}
</section>`,h(d),d}const k={title:"Blocks/Hero",tags:["autodocs"],render:w,parameters:{docs:{description:{component:"Page-top hero (`solid/hero`). Background video is muted, loops, never autoplays for visitors who prefer reduced motion, and always has a pause control (WCAG 2.2.2). Heading, text and buttons are regular core blocks that editors can change."}}},argTypes:{overlay:{control:{type:"range",min:0,max:90,step:5},description:"Teal overlay strength (%)"},buttonStyle:{control:"inline-radio",options:["accent","fill"]},align:{control:"inline-radio",options:["","wide","full"]},videoUrl:{control:"text"},posterUrl:{control:"text"}},args:{heading:"We are SOLID",text:"Strengthening our nation’s workforce by expanding pathways and increasing recognition of skills and abilities.",buttonLabel:"Work with us",buttonStyle:"accent",videoUrl:"",posterUrl:b,overlay:85,align:"wide"}},n={},i={args:{videoUrl:v},parameters:{docs:{description:{story:"Uses the current homepage video from the live site (~31 MB) to demonstrate the pause control."}}}},l={args:{align:"full"}},c={args:{buttonLabel:""}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    videoUrl: SOLID_VIDEO
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses the current homepage video from the live site (~31 MB) to demonstrate the pause control.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'full'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    buttonLabel: ''
  }
}`,...c.parameters?.docs?.source}}};const _=["Default","WithVideo","FullWidth","NoButton"];export{n as Default,l as FullWidth,c as NoButton,i as WithVideo,_ as __namedExportsOrder,k as default};
