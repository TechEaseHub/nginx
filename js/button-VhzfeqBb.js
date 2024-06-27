import{k as K,u as A,j as M,t as G,G as V,I as O,M as R,E as z,_ as T}from"./index-DuYjPh8z.js";import{j as b,a1 as U,aS as q,r as H,a7 as J,b9 as L,b as Q,$ as W,d as X,f as N,e as _,k as d,l as y,q as h,B as I,F as Y,H as k,x as i,v as $,C,A as E,O as Z,a3 as tt,R as et,a8 as D,K as ot,aM as at}from"./index-Dtf-z3wQ.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="d84a48fd-fdcd-4365-801b-74a32913c0b4",t._sentryDebugIdIdentifier="sentry-dbid-d84a48fd-fdcd-4365-801b-74a32913c0b4")}catch{}})();const P=Symbol("buttonGroupContextKey"),nt=(t,s)=>{K({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},b(()=>t.type==="text"));const o=U(P,void 0),a=q("button"),{form:l}=A(),e=M(b(()=>o==null?void 0:o.size)),r=G(),f=H(),c=J(),g=b(()=>t.type||(o==null?void 0:o.type)||""),B=b(()=>{var n,p,v;return(v=(p=t.autoInsertSpace)!=null?p:(n=a.value)==null?void 0:n.autoInsertSpace)!=null?v:!1}),m=b(()=>t.tag==="button"?{ariaDisabled:r.value||t.loading,disabled:r.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),S=b(()=>{var n;const p=(n=c.default)==null?void 0:n.call(c);if(B.value&&(p==null?void 0:p.length)===1){const v=p[0];if((v==null?void 0:v.type)===L){const j=v.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(j.trim())}}return!1});return{_disabled:r,_size:e,_type:g,_ref:f,_props:m,shouldAddSpace:S,handleClick:n=>{t.nativeType==="reset"&&(l==null||l.resetFields()),s("click",n)}}},st=["default","primary","success","warning","info","danger","text",""],lt=["button","submit","reset"],x=Q({size:W,disabled:Boolean,type:{type:String,values:st,default:""},icon:{type:V},nativeType:{type:String,values:lt,default:"button"},loading:Boolean,loadingIcon:{type:V,default:()=>O},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:X([String,Object]),default:"button"}}),rt={click:t=>t instanceof MouseEvent};function u(t,s=20){return t.mix("#141414",s).toString()}function it(t){const s=G(),o=N("button");return b(()=>{let a={};const l=t.color;if(l){const e=new R(l),r=t.dark?e.tint(20).toString():u(e,20);if(t.plain)a=o.cssVarBlock({"bg-color":t.dark?u(e,90):e.tint(90).toString(),"text-color":l,"border-color":t.dark?u(e,50):e.tint(50).toString(),"hover-text-color":`var(${o.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":r,"active-text-color":`var(${o.cssVarName("color-white")})`,"active-border-color":r}),s.value&&(a[o.cssVarBlockName("disabled-bg-color")]=t.dark?u(e,90):e.tint(90).toString(),a[o.cssVarBlockName("disabled-text-color")]=t.dark?u(e,50):e.tint(50).toString(),a[o.cssVarBlockName("disabled-border-color")]=t.dark?u(e,80):e.tint(80).toString());else{const f=t.dark?u(e,30):e.tint(30).toString(),c=e.isDark()?`var(${o.cssVarName("color-white")})`:`var(${o.cssVarName("color-black")})`;if(a=o.cssVarBlock({"bg-color":l,"text-color":c,"border-color":l,"hover-bg-color":f,"hover-text-color":c,"hover-border-color":f,"active-bg-color":r,"active-border-color":r}),s.value){const g=t.dark?u(e,50):e.tint(50).toString();a[o.cssVarBlockName("disabled-bg-color")]=g,a[o.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${o.cssVarName("color-white")})`,a[o.cssVarBlockName("disabled-border-color")]=g}}}return a})}const ct=_({name:"ElButton"}),ut=_({...ct,props:x,emits:rt,setup(t,{expose:s,emit:o}){const a=t,l=it(a),e=N("button"),{_ref:r,_size:f,_type:c,_disabled:g,_props:B,shouldAddSpace:m,handleClick:S}=nt(a,o),w=b(()=>[e.b(),e.m(c.value),e.m(f.value),e.is("disabled",g.value),e.is("loading",a.loading),e.is("plain",a.plain),e.is("round",a.round),e.is("circle",a.circle),e.is("text",a.text),e.is("link",a.link),e.is("has-bg",a.bg)]);return s({ref:r,size:f,type:c,disabled:g,shouldAddSpace:m}),(n,p)=>(d(),y(C(n.tag),Z({ref_key:"_ref",ref:r},i(B),{class:i(w),style:i(l),onClick:i(S)}),{default:h(()=>[n.loading?(d(),I(Y,{key:0},[n.$slots.loading?k(n.$slots,"loading",{key:0}):(d(),y(i(z),{key:1,class:$(i(e).is("loading"))},{default:h(()=>[(d(),y(C(n.loadingIcon)))]),_:1},8,["class"]))],64)):n.icon||n.$slots.icon?(d(),y(i(z),{key:1},{default:h(()=>[n.icon?(d(),y(C(n.icon),{key:0})):k(n.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),n.$slots.default?(d(),I("span",{key:2,class:$({[i(e).em("text","expand")]:i(m)})},[k(n.$slots,"default")],2)):E("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var dt=T(ut,[["__file","button.vue"]]);const bt={size:x.size,type:x.type},ft=_({name:"ElButtonGroup"}),gt=_({...ft,props:bt,setup(t){const s=t;tt(P,et({size:D(s,"size"),type:D(s,"type")}));const o=N("button");return(a,l)=>(d(),I("div",{class:$(`${i(o).b("group")}`)},[k(a.$slots,"default")],2))}});var F=T(gt,[["__file","button-group.vue"]]);const yt=ot(dt,{ButtonGroup:F}),mt=at(F);export{yt as E,mt as a};
//# sourceMappingURL=button-VhzfeqBb.js.map
