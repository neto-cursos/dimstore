"use strict";(self.webpackChunkcomputershopperu=self.webpackChunkcomputershopperu||[]).push([[3467],{49699:(L,M,e)=>{e.d(M,{Z:()=>E});var t=e(27279),y=e(42925),c=e(33110),i=e(6854),s=e(47560),a=e(8766),d=e(97367),g=e(70627),n=e.n(g),u=e(61020),m=e(82132),l=e(92807);const o=({onRegenerate:P,idToRegenerate:R,backUrl:h,onError:Z})=>{const{formatMessage:r}=(0,u.Z)(),[K,S]=(0,t.useState)(!1),{regenerateData:U,isLoadingConfirmation:x}=(0,l.rW)(h,R,P,Z),C=async()=>{U(),S(!1)};return t.createElement(t.Fragment,null,t.createElement(i.z,{startIcon:t.createElement(m.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>S(!0),name:"regenerate"},r({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(s.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(m.Z,null),isConfirmButtonLoading:x,isOpen:K,onToggleDialog:()=>S(!1),onConfirm:C,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};o.defaultProps={onRegenerate(){},onError:void 0},o.propTypes={onRegenerate:n().func,idToRegenerate:n().oneOfType([n().number,n().string]).isRequired,backUrl:n().string.isRequired,onError:n().func};const f=o,T=({title:P,token:R,setToken:h,canEditInputs:Z,canRegenerate:r,isSubmitting:K,backUrl:S,regenerateUrl:U,onErrorRegenerate:x})=>{const{formatMessage:C}=(0,u.Z)(),z=H=>{h({...R,accessKey:H})};return t.createElement(y.T,{title:R?.name||C(P),primaryAction:Z?t.createElement(c.k,{gap:2},r&&R?.id&&t.createElement(f,{backUrl:U,onRegenerate:z,idToRegenerate:R?.id,onError:x}),t.createElement(i.z,{disabled:K,loading:K,startIcon:t.createElement(a.Z,null),type:"submit",size:"S"},C({id:"global.save",defaultMessage:"Save"}))):r&&R?.id&&t.createElement(f,{onRegenerate:z,idToRegenerate:R?.id,backUrl:U}),navigationAction:t.createElement(s.rU,{startIcon:t.createElement(d.Z,null),to:S},C({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};T.propTypes={token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().oneOfType([n().number,n().string]),name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),canEditInputs:n().bool.isRequired,canRegenerate:n().bool.isRequired,setToken:n().func.isRequired,isSubmitting:n().bool.isRequired,backUrl:n().string.isRequired,title:n().shape({id:n().string,label:n().string}).isRequired,regenerateUrl:n().string.isRequired,onErrorRegenerate:n().func},T.defaultProps={token:void 0,onErrorRegenerate:void 0};const E=T},89982:(L,M,e)=>{e.d(M,{Z:()=>u});var t=e(27279),y=e(5007),c=e(551),i=e(19915),s=e(70627),a=e.n(s),d=e(61020),g=e(51352);const n=({token:m,errors:l,values:o,onChange:f,isCreating:T})=>{const{formatMessage:E}=(0,d.Z)();return t.createElement(t.Fragment,null,t.createElement(y.P,{name:"lifespan",label:E({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:o.lifespan!==null?o.lifespan:"0",error:l.lifespan?E(l.lifespan?.id?l.lifespan:{id:l.lifespan,defaultMessage:l.lifespan}):null,onChange:P=>{f({target:{name:"lifespan",value:P}})},required:!0,disabled:!T,placeholder:"Select"},t.createElement(c.W,{value:"604800000"},E({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(c.W,{value:"2592000000"},E({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(c.W,{value:"7776000000"},E({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(c.W,{value:"0"},E({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(i.Z,{variant:"pi",textColor:"neutral600"},!T&&`${E({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,g.IX)(m?.createdAt,parseInt(o.lifespan,10))}`))};n.propTypes={errors:a().shape({lifespan:a().string}),onChange:a().func.isRequired,values:a().shape({lifespan:a().oneOfType([a().number,a().string])}).isRequired,isCreating:a().bool.isRequired,token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().string,name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string})},n.defaultProps={errors:{},token:{}};const u=n},81384:(L,M,e)=>{e.d(M,{Z:()=>u});var t=e(27279),y=e(77216),c=e(47560),i=e(19329),s=e(52565),a=e(70627),d=e.n(a),g=e(61020);const n=({token:m,tokenType:l})=>{const{formatMessage:o}=(0,g.Z)(),f=(0,c.lm)(),{trackUsage:T}=(0,c.rS)(),{copy:E}=(0,c.VP)(),P=R=>async()=>{await E(R)&&(T("didCopyTokenKey",{tokenType:l}),f({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(c.Y_,{endAction:m&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(y.h,{label:o({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:P(m),noBorder:!0,icon:t.createElement(i.Z,null),style:{padding:0,height:"1rem"}})),title:m||o({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:o(m?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(s.Z,null),iconBackground:"neutral100"})};n.defaultProps={token:null},n.propTypes={token:d().string,tokenType:d().string.isRequired};const u=n},37651:(L,M,e)=>{e.d(M,{Z:()=>d});var t=e(27279),y=e(60910),c=e(70627),i=e.n(c),s=e(61020);const a=({errors:g,values:n,onChange:u,canEditInputs:m})=>{const{formatMessage:l}=(0,s.Z)();return t.createElement(y.g,{label:l({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:g.description?l(g.description?.id?g.description:{id:g.description,defaultMessage:g.description}):null,onChange:u,disabled:!m},n.description)};a.propTypes={errors:i().shape({description:i().string}),onChange:i().func.isRequired,canEditInputs:i().bool.isRequired,values:i().shape({description:i().string}).isRequired},a.defaultProps={errors:{}};const d=a},72028:(L,M,e)=>{e.d(M,{Z:()=>d});var t=e(27279),y=e(54095),c=e(70627),i=e.n(c),s=e(61020);const a=({errors:g,values:n,onChange:u,canEditInputs:m})=>{const{formatMessage:l}=(0,s.Z)();return t.createElement(y.o,{name:"name",error:g.name?l(g.name?.id?g.name:{id:g.name,defaultMessage:g.name}):null,label:l({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:u,value:n.name,disabled:!m,required:!0})};a.propTypes={errors:i().shape({name:i().string}),onChange:i().func.isRequired,canEditInputs:i().bool.isRequired,values:i().shape({name:i().string}).isRequired},a.defaultProps={errors:{}};const d=a},32381:(L,M,e)=>{e.d(M,{Z:()=>g});var t=e(27279),y=e(5007),c=e(551),i=e(70627),s=e.n(i),a=e(61020);const d=({name:n,errors:u,values:m,onChange:l,canEditInputs:o,options:f,label:T})=>{const{formatMessage:E}=(0,a.Z)();return t.createElement(y.P,{name:n,label:E({id:T.id,defaultMessage:T.defaultMessage}),value:m&&m[n],error:u[n]?E(u[n]?.id?u[n]:{id:u[n],defaultMessage:u[n]}):null,onChange:l,placeholder:"Select",required:!0,disabled:!o},f&&f.map(({value:P,label:R})=>t.createElement(c.W,{key:P,value:P},E(R))))};d.propTypes={name:s().string,options:s().arrayOf(s().shape({label:s().shape({id:s().string,defaultMessage:s().string}),value:s().string})),errors:s().shape({type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({type:s().string}).isRequired,label:s().shape({id:s().string,defaultMessage:s().string}).isRequired},d.defaultProps={name:"type",errors:{},options:[]};const g=d},81966:(L,M,e)=>{e.d(M,{Z:()=>t,f:()=>y});const t="api-token",y="transfer-token"},51352:(L,M,e)=>{e.d(M,{IX:()=>s,fK:()=>n,mk:()=>m});var t=e(84260),y=e(1851),c=e(90765);const s=(l,o,f="en")=>{if(o&&typeof o=="number"){const T=o/24/60/60/1e3;return(0,t.Z)((0,y.Z)(new Date(l),T),"PPP",{locale:c[f]})}return"Unlimited"};var a=e(47560),d=e(47853);const n=d.Ry().shape({name:d.Z_(a.I0.string).max(100).required(a.I0.required),type:d.Z_(a.I0.string).oneOf(["read-only","full-access","custom"]).required(a.I0.required),description:d.Z_().nullable(),lifespan:d.Rx().integer().min(0).nullable().defined(a.I0.required)}),m=l=>{const o={allActionsIds:[],permissions:[]};return o.permissions=Object.keys(l).map(f=>({apiId:f,label:f.split("::")[1],controllers:Object.keys(l[f].controllers).map(T=>({controller:T,actions:l[f].controllers[T].map(E=>{const P=`${f}.${T}.${E}`;return f.includes("api::")&&o.allActionsIds.push(P),{action:E,actionId:P}}).flat()})).flat()})),o}},43467:(L,M,e)=>{e.d(M,{Z:()=>ne});var t=e(27279),y=e(65e3),c=e(35750),i=e(33110),s=e(47560),a=e(71563),d=e(61020),g=e(40464),n=e(49402),u=e(51447),m=e(96854),l=e(36364),o=e(81966),f=e(49699),T=e(81384),E=e(68263),P=e(19915),R=e(86049),h=e(25667),Z=e(70627),r=e.n(Z),K=e(89982),S=e(37651),U=e(72028),x=e(32381);const C=({errors:A,onChange:I,canEditInputs:W,isCreating:D,values:B,transferToken:v})=>{const{formatMessage:F}=(0,d.Z)(),G=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return t.createElement(E.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(P.Z,{variant:"delta",as:"h2"},F({id:"global.details",defaultMessage:"Details"})),t.createElement(R.r,{gap:5},t.createElement(h.P,{key:"name",col:6,xs:12},t.createElement(U.Z,{errors:A,values:B,canEditInputs:W,onChange:I})),t.createElement(h.P,{key:"description",col:6,xs:12},t.createElement(S.Z,{errors:A,values:B,canEditInputs:W,onChange:I})),t.createElement(h.P,{key:"lifespan",col:6,xs:12},t.createElement(K.Z,{isCreating:D,errors:A,values:B,onChange:I,token:v})),t.createElement(h.P,{key:"permissions",col:6,xs:12},t.createElement(x.Z,{name:"permissions",values:B,errors:A,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:V=>{I({target:{name:"permissions",value:V}})},options:G,canEditInputs:W})))))};C.propTypes={errors:r().shape({name:r().string,description:r().string,lifespan:r().string,type:r().string}),onChange:r().func.isRequired,canEditInputs:r().bool.isRequired,values:r().shape({name:r().string,description:r().string,lifespan:r().oneOfType([r().number,r().string]),type:r().string}).isRequired,isCreating:r().bool.isRequired,transferToken:r().shape({id:r().oneOfType([r().number,r().string]),type:r().string,lifespan:r().string,name:r().string,accessKey:r().string,permissions:r().array,description:r().string,createdAt:r().string})},C.defaultProps={errors:{},transferToken:{}};const z=C;var H=e(42925),b=e(6854),q=e(8766);const j=({transferTokenName:A})=>{const{formatMessage:I}=(0,d.Z)();return(0,s.go)(),t.createElement(y.o,{"aria-busy":"true"},t.createElement(s.SL,{name:"Transfer Tokens"}),t.createElement(H.T,{primaryAction:t.createElement(b.z,{disabled:!0,startIcon:t.createElement(q.Z,null),type:"button",size:"L"},I({id:"global.save",defaultMessage:"Save"})),title:A||I({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),t.createElement(c.D,null,t.createElement(s.dO,null)))};j.defaultProps={transferTokenName:null},j.propTypes={transferTokenName:r().string};const w=j;var N=e(47853);const ee=N.Ry().shape({name:N.Z_(s.I0.string).max(100).required(s.I0.required),description:N.Z_().nullable(),lifespan:N.Rx().integer().min(0).nullable().defined(s.I0.required),permissions:N.Z_(s.I0.string).required(s.I0.required)}),te="Name already taken",ne=()=>{(0,s.go)();const{formatMessage:A}=(0,d.Z)(),{lockApp:I,unlockApp:W}=(0,s.o1)(),D=(0,s.lm)(),B=(0,u.k6)(),[v,F]=(0,t.useState)(B.location.state?.transferToken.accessKey?{...B.location.state.transferToken}:null),{trackUsage:G}=(0,s.rS)(),V=(0,t.useRef)(G),{setCurrentStep:se}=(0,s.c1)(),ae=(0,n.v9)(l._),{allowedActions:{canCreate:re,canUpdate:oe,canRegenerate:ie}}=(0,s.ss)(ae.settings["transfer-tokens"]),{params:{id:X}}=(0,u.$B)("/settings/transfer-tokens/:id"),{get:le,post:de,put:ce}=(0,s.kY)(),O=X==="create",{formatAPIError:J}=(0,s.So)();(0,t.useEffect)(()=>{V.current(O?"didAddTokenFromList":"didEditTokenFromList",{tokenType:o.f})},[O]);const{status:ge}=(0,g.useQuery)(["transfer-token",X],async()=>{const{data:{data:p}}=await le(`/admin/transfer/tokens/${X}`);return F({...p}),p},{enabled:!O&&!v,onError(p){p.response.data.error.details?.code==="INVALID_TOKEN_SALT"?D({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):D({type:"warning",message:J(p)})}}),pe=async(p,$)=>{V.current(O?"willCreateToken":"willEditToken",{tokenType:o.f}),I();const Q=p.lifespan&&parseInt(p.lifespan,10)&&p.lifespan!=="0"?parseInt(p.lifespan,10):null,Y=p.permissions.split("-");try{const{data:{data:k}}=O?await de("/admin/transfer/tokens",{...p,lifespan:Q,permissions:Y}):await ce(`/admin/transfer/tokens/${X}`,{name:p.name,description:p.description,permissions:Y});W(),O&&(B.replace(`/settings/transfer-tokens/${k.id}`,{transferToken:k}),se("transferTokens.success")),F({...k}),D({type:"success",message:A(O?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),V.current(O?"didCreateToken":"didEditToken",{type:v?.permissions,tokenType:o.f})}catch(k){const me=(0,m.Iz)(k.response.data);$.setErrors(me),k?.response?.data?.error?.message===te?D({type:"warning",message:k.response.data.message||"notification.error.tokennamenotunique"}):k?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?D({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):D({type:"warning",message:k?.response?.data?.message||"notification.error"}),W()}},_=oe&&!O||re&&O;if(!O&&!v&&ge!=="success")return t.createElement(w,{transferTokenName:v?.name});const ue=p=>{p?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?D({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):D({type:"warning",message:J(p)})};return t.createElement(y.o,null,t.createElement(s.SL,{name:"Transfer Tokens"}),t.createElement(a.J9,{validationSchema:ee,validateOnChange:!1,initialValues:{name:v?.name||"",description:v?.description||"",lifespan:v?.lifespan?v.lifespan.toString():v?.lifespan,permissions:v?.permissions.join("-")},enableReinitialize:!0,onSubmit:(p,$)=>pe(p,$)},({errors:p,handleChange:$,isSubmitting:Q,values:Y})=>t.createElement(s.l0,null,t.createElement(f.Z,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"},token:v,setToken:F,canEditInputs:_,canRegenerate:ie,isSubmitting:Q,regenerateUrl:"/admin/transfer/tokens/",onErrorRegenerate:ue}),t.createElement(c.D,null,t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(v?.name)&&t.createElement(T.Z,{token:v?.accessKey,tokenType:o.f}),t.createElement(z,{errors:p,onChange:$,canEditInputs:_,isCreating:O,values:Y,transferToken:v}))))))}}}]);
