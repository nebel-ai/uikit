import{s as j,p as o,i as H,a as I,t as O,b as T,c as W}from"./props-6KxnH9Mq.js";import{p as q,l as p,b as D,r as m,d as F,e as y,m as b,f as g,h as f}from"./effects-Dwao4s9z.js";let G=!1;function J(e,t,a){a=a==null?null:a+"";var s=e.__attributes??(e.__attributes={});s[t]!==(s[t]=a)&&(a===null?e.removeAttribute(t):e.setAttribute(t,a))}function K(e,t){var a=e.__className,s=M(t);(a!==s||G)&&(t==null?e.removeAttribute("class"):j(e,s),e.__className=s)}function M(e){return e??""}var Q=O('<button type="button"> </button>');function E(e,t){q(t,!1);const a=b(),s=b();let d=o(t,"primary",0,!0),u=o(t,"backgroundColor",8,()=>{}),L=o(t,"size",0,"medium"),N=o(t,"label",0,"");p(()=>f(d()),()=>{g(a,d()?"storybook-button--primary":"storybook-button--secondary")}),p(()=>f(u()),()=>{g(s,u()?`background-color: ${u()}`:"")}),D(),H();var r=Q();m(()=>K(r,["storybook-button",`storybook-button--${L()}`,y(a)].join(" ")));var P=W(r);m(()=>{J(r,"style",y(s)),T(P,N())}),I(e,r),F()}E.__docgen={version:3,name:"Button.svelte",data:[{keywords:[],visibility:"public",description:"Is this the principal call to action on the page?",name:"primary",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[],visibility:"public",description:"What background color to use",name:"backgroundColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"How large should the button be?",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{keywords:[],visibility:"public",description:"Button contents",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const X={title:"Example/Button",component:E,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},size:{control:{type:"select"},options:["small","medium","large"]}}},n={args:{primary:!0,label:"Button"}},l={args:{label:"Button"}},i={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}};var _,k,B;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var h,v,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var z,S,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,A,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(V=(A=c.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};const Y=["Primary","Secondary","Large","Small"];export{i as Large,n as Primary,l as Secondary,c as Small,Y as __namedExportsOrder,X as default};
