"use strict";(self.webpackChunkcomputershopperu=self.webpackChunkcomputershopperu||[]).push([[4409],{28104:(Ee,M,t)=>{t.r(M),t.d(M,{default:()=>oe});var e=t(67294),i=t(57993),d=t(86706),T=t(36364),B=t(29728),h=t(11047),H=t(77197),p=t(75515),N=t(85018),y=t(41054),P=t(36968),U=t.n(P),J=t(86896),Q=t(88767),G=t(16550),$=t(92686),K=t(79194),b=t(75021),I=t(11984),g=t(43390),c=t(38705),q=t(68997),_=t(85230),l=t(86978),ee=t(52258),L=t(3848),te=t(66578);function se(){const{workflowId:u}=(0,G.UO)(),ne=(0,d.v9)(T._),{formatMessage:n}=(0,J.Z)(),E=(0,d.I0)(),{put:ae}=(0,i.kY)(),{formatAPIError:le}=(0,i.So)(),A=(0,i.lm)(),{isLoading:D,meta:m,workflows:k,status:W,refetch:re}=(0,ee.n)(),{collectionTypes:ie,singleTypes:ce,isLoading:fe}=(0,$.G)(),{status:de,clientState:{currentWorkflow:{data:a,isDirty:ge,hasDeletedServerStages:O}}}=(0,d.v9)(s=>s?.[l.sN]??L.E),{allowedActions:{canDelete:ue,canUpdate:S}}=(0,i.ss)(ne.settings["review-workflows"]),[w,v]=e.useState({}),{getFeature:me,isLoading:R}=(0,b.q)(),[x,f]=e.useState(!1),[we,F]=e.useState(null),V=k.find(s=>s.id===parseInt(u,10)),Z=k.filter(s=>s.id!==parseInt(u,10)).flatMap(s=>s.contentTypes),{mutateAsync:ve,isLoading:j}=(0,Q.useMutation)(async({workflow:s})=>{const{data:{data:o}}=await ae(`/admin/review-workflows/workflows/${s.id}`,{data:s});return o},{onSuccess(){A({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),he=async s=>{F(null);try{return await ve({workflow:s})}catch(o){return o.response.data?.error?.name==="ValidationError"&&o.response.data?.error?.details?.errors?.length>0&&F(o.response.data?.error?.details?.errors.reduce((Y,z)=>(U()(Y,z.path,z.message),Y),{})),A({type:"warning",message:le(o)}),null}},X=async()=>{await he(a),await re(),v({})},pe=async()=>{await X()},ye=()=>{v({})},C=(0,y.TA)({enableReinitialize:!0,initialErrors:we,initialValues:a,async onSubmit(){const s=a.contentTypes.some(o=>Z.includes(o));r?.[l.Ef]&&m?.workflowCount>parseInt(r[l.Ef],10)?f("workflow"):r?.[l._X]&&a.stages.length>parseInt(r[l._X],10)?f("stage"):O||s?(O&&v(o=>({...o,hasDeletedServerStages:!0})),s&&v(o=>({...o,hasReassignedContentTypes:!0}))):X()},validate(s){return(0,te.V)({values:s,formatMessage:n})}});(0,K.v)(l.sN,L.I);const r=me("review-workflows");return e.useEffect(()=>(E((0,I.fC)({status:W,data:V})),()=>{E((0,I.Js)())}),[W,V,E]),e.useEffect(()=>{!D&&!R&&(r?.[l.Ef]&&m?.workflowCount>parseInt(r[l.Ef],10)?f("workflow"):r?.[l._X]&&a.stages.length>parseInt(r[l._X],10)&&f("stage"))},[a.stages.length,R,D,r,m?.workflowCount,m.workflowsTotal]),e.createElement(e.Fragment,null,e.createElement(g.lx,null),e.createElement(y.Hy,{value:C},e.createElement(y.l0,{onSubmit:C.handleSubmit},e.createElement(g.h4,{navigationAction:e.createElement(g.eJ,{href:"/settings/review-workflows"}),primaryAction:S&&e.createElement(B.z,{startIcon:e.createElement(N.Z,null),type:"submit",size:"M",disabled:!ge,loading:!Object.keys(w).length>0&&j},n({id:"global.save",defaultMessage:"Save"})),subtitle:a.stages.length>0&&n({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:a.stages.length}),title:a.name}),e.createElement(g.fC,null,fe||de==="loading"?e.createElement(h.k,{justifyContent:"center"},e.createElement(H.a,null,n({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"}))):e.createElement(h.k,{alignItems:"stretch",direction:"column",gap:7},e.createElement(_.Y,{canUpdate:S,contentTypes:{collectionTypes:ie,singleTypes:ce},currentWorkflow:a,workflows:k}),e.createElement(q.U,{canDelete:ue,canUpdate:S,stages:C.values?.stages}))))),e.createElement(i.QH.Root,{isConfirmButtonLoading:j,isOpen:Object.keys(w).length>0,onToggleDialog:ye,onConfirm:pe},e.createElement(i.QH.Body,null,e.createElement(h.k,{direction:"column",gap:5},w.hasDeletedServerStages&&e.createElement(p.Z,{textAlign:"center",variant:"omega"},n({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})),w.hasReassignedContentTypes&&e.createElement(p.Z,{textAlign:"center",variant:"omega"},n({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:Z.filter(s=>a.contentTypes.includes(s)).length})),e.createElement(p.Z,{textAlign:"center",variant:"omega"},n({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"}))))),e.createElement(c.fC,{isOpen:x==="workflow",onClose:()=>f(!1)},e.createElement(c.Dx,null,n({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(c.uT,null,n({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(c.fC,{isOpen:x==="stage",onClose:()=>f(!1)},e.createElement(c.Dx,null,n({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(c.uT,null,n({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function oe(){const u=(0,d.v9)(T._);return e.createElement(i.O4,{permissions:u.settings["review-workflows"].main},e.createElement(se,null))}}}]);
