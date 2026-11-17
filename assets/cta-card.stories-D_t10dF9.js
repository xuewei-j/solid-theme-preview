import{I as s,b as p}from"./markup-CCDrUf0E.js";const i=({heading:o,text:l,actions:d,tone:m,imageUrl:r})=>`
<div class="wp-block-solid-cta-card is-tone-${m}${r?" has-image":""}">
    ${r?`<img class="wp-block-solid-cta-card__image" src="${r}" alt=""><div class="wp-block-solid-cta-card__overlay" aria-hidden="true"></div>`:""}
    <div class="wp-block-solid-cta-card__content">
        <h2 class="wp-block-heading">${o}</h2>
        <p>${l}</p>
        ${p(d)}
    </div>
</div>`,n={heading:"Work With SOLID",text:"SOLID has long-established expertise in occupational analysis, especially as it relates to civilian credentialing and military service members. Let us leverage that expertise for you.",actions:[{label:"How to work with us",style:"fill"}]},c={heading:"Join Our Team",text:"If you’re looking for challenging and rewarding work in a fun and nurturing environment, where you can make an impactful contribution, you’re in the right place.",actions:[{label:"Meet our team",style:"accent"},{label:"SOLID careers",style:"light"}]},g={title:"Blocks/CTA Card",tags:["autodocs"],parameters:{docs:{description:{component:"`solid/cta-card`: call-to-action card. **Teal** (dark, Accent + Light buttons) or **Mist** (light, Fill button), with an optional decorative photo under an overlay in the card color so text stays readable. Buttons pin to the bottom, so two cards in a Columns block line up. Content saved with the old navy tones migrates automatically in the editor."}}},argTypes:{tone:{control:"inline-radio",options:["teal","mist"]}},args:{...n,tone:"mist",imageUrl:""},render:o=>`<div style="max-width:560px">${i(o)}</div>`},e={},a={args:{...c,tone:"teal",imageUrl:s.team}},t={render:()=>`
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:var(--wp--preset--spacing--40)">
    ${i({...n,tone:"mist"})}
    ${i({...c,tone:"teal",imageUrl:s.team})}
</div>`};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...JOIN,
    tone: 'teal',
    imageUrl: IMAGES.team
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:var(--wp--preset--spacing--40)">
    \${card({
    ...WORK_WITH,
    tone: 'mist'
  })}
    \${card({
    ...JOIN,
    tone: 'teal',
    imageUrl: IMAGES.team
  })}
</div>\`
}`,...t.parameters?.docs?.source}}};const h=["WorkWithSolid","JoinOurTeamWithPhoto","Pair"];export{a as JoinOurTeamWithPhoto,t as Pair,e as WorkWithSolid,h as __namedExportsOrder,g as default};
