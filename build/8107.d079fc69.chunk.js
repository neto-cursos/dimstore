"use strict";(self.webpackChunkcomputershopperu=self.webpackChunkcomputershopperu||[]).push([[8107],{21289:(I,c,t)=>{t.d(c,{I:()=>e,U:()=>n});const e="strapi_stage",n="strapi_assignee"},56996:(I,c,t)=>{t.r(c),t.d(c,{InformationBoxEE:()=>Y});var e=t(27279),n=t(47560),s=t(50236),f=t(96029),a=t(33110),d=t(68221),i=t(19915),o=t(59912),l=t(9620),v=t(61020),u=t(40464),p=t(49402),w=t(21892),C=t(54920),P=t(36364),r=t(21289);function K(){const{initialData:R,layout:{uid:M},isSingleType:k,onChange:j}=(0,n.Wq)(),Q=(0,p.v9)(P._),{formatMessage:E}=(0,v.Z)(),{formatAPIError:H}=(0,n.So)(),V=(0,n.lm)(),{put:X}=(0,n.kY)(),{allowedActions:{canReadUsers:L}}=(0,n.ss)({readUsers:Q.settings.users.read}),{users:B,isLoading:x,isError:F}=(0,C.R)({},{enabled:L}),T=R?.[r.U]??null,S=async({value:g})=>{y.mutate({entityId:R.id,assigneeId:parseInt(g,10),uid:M})},y=(0,u.useMutation)(async({entityId:g,assigneeId:z,uid:b})=>{const h=k?"single-types":"collection-types",{data:{data:W}}=await X(`/admin/content-manager/${h}/${b}/${g}/assignee`,{data:{id:z}});return j({target:{name:r.U,value:W[r.U]}},!0),W},{onSuccess(){V({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}})}});return e.createElement(f.g,{name:r.U,id:r.U},e.createElement(a.k,{direction:"column",gap:2,alignItems:"stretch"},e.createElement(d.hQ,{clearLabel:E({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:F&&L&&E({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||y.error&&H(y.error),disabled:!x&&B.length===0,name:r.U,id:r.U,value:T?T.id:null,onChange:g=>S({value:g}),onClear:()=>S({value:null}),placeholder:E({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:E({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),customizeContent:()=>e.createElement(a.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},e.createElement(i.Z,{textColor:"neutral800",ellipsis:!0},T?(0,w.Gf)(T,E):null),x||y.isLoading?e.createElement(o.a,{small:!0,style:{display:"flex"}}):null)},B.map(g=>e.createElement(l.O,{key:g.id,value:g.id,textValue:(0,w.Gf)(g,E)},(0,w.Gf)(g,E))))))}var D=t(28096),U=t(86707),$=t(75021),O=t(38705),A=t(86978),m=t(52258),N=t(5318);function Z(){const{initialData:R,layout:{uid:M},isSingleType:k,onChange:j}=(0,n.Wq)(),{put:Q}=(0,n.kY)(),{formatMessage:E}=(0,v.Z)(),{formatAPIError:H}=(0,n.So)(),V=(0,n.lm)(),{meta:X,workflows:[L],isLoading:B}=(0,m.n)({filters:{contentTypes:M}}),{getFeature:x}=(0,$.q)(),[F,T]=e.useState(!1),S=x("review-workflows"),y=R?.[r.I]??null,g=(0,u.useMutation)(async({entityId:h,stageId:W,uid:G})=>{const J=k?"single-types":"collection-types",{data:{data:q}}=await Q(`/admin/content-manager/${J}/${G}/${h}/stage`,{data:{id:W}});return j({target:{name:r.I,value:q[r.I]}},!0),q},{onSuccess(){V({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),z=async({value:h})=>{try{S?.[A.Ef]&&parseInt(S[A.Ef],10)<X.workflowCount?T("workflow"):S?.[A._X]&&parseInt(S[A._X],10)<L.stages.length?T("stage"):g.mutateAsync({entityId:R.id,stageId:h,uid:M})}catch{}},{themeColorName:b}=y?.color?(0,N.k)(y?.color):{};return e.createElement(e.Fragment,null,e.createElement(f.g,{name:r.I,id:r.I},e.createElement(a.k,{direction:"column",gap:2,alignItems:"stretch"},e.createElement(D.q4,{error:g.error&&H(g.error)||null,name:r.I,id:r.I,value:y?.id,onChange:h=>z({value:h}),label:E({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:e.createElement(a.k,{as:"span",height:2,background:y?.color,borderColor:b==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>e.createElement(a.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},e.createElement(i.Z,{textColor:"neutral800",ellipsis:!0},y?.name),B?e.createElement(o.a,{small:!0,style:{display:"flex"}}):null)},L?L.stages.map(({id:h,color:W,name:G})=>{const{themeColorName:J}=(0,N.k)(W);return e.createElement(D.ag,{key:h,startIcon:e.createElement(a.k,{height:2,background:W,borderColor:J==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:h,textValue:G},G)}):[]),e.createElement(U.c,null))),e.createElement(O.fC,{isOpen:F==="workflow",onClose:()=>T(!1)},e.createElement(O.Dx,null,E({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(O.uT,null,E({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(O.fC,{isOpen:F==="stage",onClose:()=>T(!1)},e.createElement(O.Dx,null,E({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(O.uT,null,E({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function Y(){const{isCreatingEntry:R,layout:{options:M}}=(0,n.Wq)(),k=M?.reviewWorkflows??!1;return e.createElement(s.d.Root,null,e.createElement(s.d.Title,null),k&&!R&&e.createElement(e.Fragment,null,e.createElement(Z,null),e.createElement(K,null)),e.createElement(s.d.Body,null))}},75021:(I,c,t)=>{t.d(c,{q:()=>f});var e=t(27279),n=t(47560),s=t(40464);function f({enabled:a}={enabled:!0}){const{get:d}=(0,n.kY)(),{data:i,isError:o,isLoading:l}=(0,s.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:p}}=await d("/admin/license-limit-information");return p},{enabled:a}),v=e.useMemo(()=>i??{},[i]),u=e.useCallback(p=>(v?.features??[]).find(C=>C.name===p)?.options??{},[v?.features]);return{license:v,getFeature:u,isError:o,isLoading:l}}},38705:(I,c,t)=>{t.d(c,{uT:()=>U,fC:()=>A,Dx:()=>D});var e=t(27279),n=t(19915),s=t(33110),f=t(51444),a=t(61872),d=t(68263),i=t(77216),o=t(57747),l=t(30117),v=t(70627),u=t.n(v),p=t(61020),w=t(72450);const C=t.p+"0cd5f8915b265d5b1856.png",P="limits-title",r="https://strapi.io/pricing-cloud",K="https://strapi.io/contact-sales";function D({children:m}){return e.createElement(n.Z,{variant:"alpha",id:P},m)}D.propTypes={children:u().node.isRequired};function U({children:m}){return e.createElement(n.Z,{variant:"omega"},m)}U.propTypes={children:u().node.isRequired};function $(){const{formatMessage:m}=(0,p.Z)();return e.createElement(s.k,{gap:2,paddingTop:4},e.createElement(o.Q,{variant:"default",isExternal:!0,href:r},m({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(o.Q,{variant:"tertiary",isExternal:!0,href:K},m({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const O=w.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:m})=>`-${m.spaces[7]}`};
  margin-top: ${({theme:m})=>`-${m.spaces[7]}`};
  width: 360px;
`;function A({children:m,isOpen:N,onClose:Z}){const{formatMessage:Y}=(0,p.Z)();return N?e.createElement(f.P,{labelledBy:P},e.createElement(a.f,null,e.createElement(s.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(s.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},m,e.createElement($,null)),e.createElement(s.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(O,{src:C,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(d.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(i.h,{icon:e.createElement(l.Z,null),"aria-label":Y({id:"global.close",defaultMessage:"Close"}),onClick:Z})))))):null}A.defaultProps={isOpen:!1},A.propTypes={children:u().node.isRequired,isOpen:u().bool,onClose:u().func.isRequired}},86978:(I,c,t)=>{t.d(c,{$k:()=>o,Ef:()=>w,FT:()=>u,Nj:()=>i,Ot:()=>d,VS:()=>l,_X:()=>C,gu:()=>s,lv:()=>v,qZ:()=>f,sN:()=>n,uL:()=>p,x4:()=>a});var e=t(65331);const n="settings_review-workflows",s="Settings/Review_Workflows/RESET_WORKFLOW",f="Settings/Review_Workflows/SET_WORKFLOW",a="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",d="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",i="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",o="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",l="Settings/Review_Workflows/WORKFLOW_UPDATE",v={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},u=e.W.colors.primary600,p={STAGE:"stage"},w="numberOfWorkflows",C="stagesPerWorkflow"},52258:(I,c,t)=>{t.d(c,{n:()=>s});var e=t(47560),n=t(40464);function s(f={}){const{get:a}=(0,e.kY)(),{id:d="",...i}=f,o={populate:"stages"},{data:l,isLoading:v,status:u,refetch:p}=(0,n.useQuery)(["review-workflows","workflows",d],async()=>(await a(`/admin/review-workflows/workflows/${d}`,{params:{...o,...i}})).data);let w=[];return d&&l?.data?w=[l.data]:Array.isArray(l?.data)&&(w=l.data),{meta:l?.meta??{},workflows:w,isLoading:v,status:u,refetch:p}}},5318:(I,c,t)=>{t.d(c,{k:()=>s,s:()=>f});var e=t(65331),n=t(86978);function s(a){if(!a)return null;const i=Object.entries(e.W.colors).filter(([,o])=>o.toUpperCase()===a.toUpperCase()).reduce((o,[l])=>(n.lv?.[l]&&(o=l),o),null);return i?{themeColorName:i,name:n.lv[i]}:null}function f(){return Object.entries(n.lv).map(([a,d])=>({hex:e.W.colors[a].toUpperCase(),name:d}))}}}]);
