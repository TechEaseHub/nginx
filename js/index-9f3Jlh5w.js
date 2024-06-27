import{_ as m,a as y,b as f,I as h,c as N,d as I,C as _,e as w}from"./checkbox-button-CY9m7N-3.js";import{R as x,m as e,j as P,W as b,e as T,k as F,B as k,p as i,x as a,X as c}from"./index-Dtf-z3wQ.js";import"./systemParams-HP1PN-yN.js";import"./button-VhzfeqBb.js";import{E as t}from"./input-DWSFYlJH.js";import{H as v}from"./index-CJLrklwC.js";import"./index-DuYjPh8z.js";import"./_plugin-vue_export-helper-5heKHmp9.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[o]="22c3638b-1a98-4b69-9c50-b7e294b79fee",r._sentryDebugIdIdentifier="sentry-dbid-22c3638b-1a98-4b69-9c50-b7e294b79fee")}catch{}})();const g=x({index:{type:e({}),label:"序号",tableProps:{type:"index",width:"55",align:"right"},render:({$index:r,crudOptions:o})=>{const{TableStore:{page:{currentPage:l,pageSize:p}}}=o,s=P(()=>(l.value-1)*p.value+1);return b("span",null,s.value+r)}},userId:{type:e({}),label:"用户ID",tableProps:{width:70,align:"right"}},userName:{type:e(t),label:"用户名",tableProps:{width:120}},password:{type:e(t),label:"用户密码"},userType:{type:e(m),label:"用户类型",componentProps:{options:[],isButton:!0}},orgId:{type:e(m),label:"组织机构ID",componentProps:{options:[],filterable:!0,remote:!0,loading:!1,loadingText:"查询中，耐心等待...",onRemoteMethod:r=>{const o=g.orgId.componentProps;o.loading=!0,v.CrudRequest({url:"/user/query",data:{orgName:r,deleteFlag:0}}).then(l=>{o.options=l.data.map(p=>({label:p.orgFullname,value:p.orgId}))}).finally(()=>{o.loading=!1})}}},orgName:{type:e(t),label:"组织名称"},realName:{type:e(t),label:"真实姓名"},email:{type:e(t),label:"Email"},phoneNumber:{type:e(t),label:"手机号码",tableProps:{minWidth:120}},sex:{type:e(m),label:"性别",componentProps:{options:[]}},birth:{type:e(t),label:"生日"},idNo:{type:e(t),label:"身份证号码"},openId:{type:e(t),label:"小程序的openid"},woaOpenid:{type:e(t),label:"公众号openid"},remark:{type:e(t),label:"备注"},photoUrlRoot:{type:e(t),label:"url根"},photoPath:{type:e(t),label:"图片路径"},operatorName:{type:e(t),label:"操作人账号"},deleteFlag:{type:e(y),label:"状态",searchDefaultValue:0,componentProps:{options:[],isButton:!0},tableProps:{width:70,align:"center"},render:({row:r})=>b(f,{size:"small",modelValue:r.deleteFlag,"onUpdate:modelValue":o=>{r.deleteFlag=o}})},createTime:{type:e(t),label:"创建时间"},updateTime:{type:e(t),label:"更新时间"}}),V={filter:["orgId","orgName","userName","userType","realName","phoneNumber","sex","deleteFlag"],editor:["userName","password","userType","orgId","orgName","realName","email","phoneNumber","sex","birth","idNo","openId","woaOpenid","remark"],column:["index","userId","userName","userType","orgId","orgName","realName","phoneNumber","sex","deleteFlag"],expand:["index","userId","userName","password","userType","orgId","orgName","realName","email","phoneNumber","sex","birth","idNo","openId","woaOpenid","remark","photoUrlRoot","photoPath","operatorName","deleteFlag","createTime","updateTime"]},n={apiConfig:{url:"user",rowKey:"userId"},source:{fields:V,columns:g},attrs:{form:{},drawer:{},table:{}},hooks:{}},d=h(n.source,n.apiConfig,n.hooks),C={id:"ElCrud",class:"rounded-10 bg-[var(--el-bg-color)] p-20"},q=T({__name:"index",setup(r){const{FormStore:{searchForm:o,editForm:l}}=d;return(p,s)=>(F(),k("div",C,[i(a(N),{modelValue:a(l),"onUpdate:modelValue":s[0]||(s[0]=u=>c(l)?l.value=u:null),"crud-options":a(d),attrs:a(n).attrs},null,8,["modelValue","crud-options","attrs"]),i(a(I),{modelValue:a(o),"onUpdate:modelValue":s[1]||(s[1]=u=>c(o)?o.value=u:null),"crud-options":a(d),attrs:a(n).attrs},null,8,["modelValue","crud-options","attrs"]),i(a(_),{"crud-options":a(d)},null,8,["crud-options"]),i(a(w),{"crud-options":a(d),attrs:a(n).attrs},null,8,["crud-options","attrs"])]))}});export{q as default};
//# sourceMappingURL=index-9f3Jlh5w.js.map
