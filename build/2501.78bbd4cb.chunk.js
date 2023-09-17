"use strict";(self.webpackChunkcomputershopperu=self.webpackChunkcomputershopperu||[]).push([[2501],{84409:(D,d,e)=>{e.d(d,{p:()=>o});var t=e(27279),u=e(47560),m=e(40464);const o=(l={})=>{const{get:r}=(0,u.kY)(),{data:E,isLoading:a}=(0,m.useQuery)(["ee","providers"],async()=>{const{data:p}=await r("/admin/providers");return p},l);return{providers:t.useMemo(()=>E??[],[E]),isLoading:a}}},80090:(D,d,e)=>{e.d(d,{Z:()=>M});var t=e(27279),u=e(33110),m=e(72929),o=e(19915),l=e(86049),r=e(25667),E=e(70627),a=e.n(E),h=e(61020),p=e(47533),P=e(72450);const v=P.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`,O=(0,P.ZP)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,i=({provider:n})=>t.createElement(m.u,{label:n.displayName},t.createElement(v,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`},n.icon?t.createElement("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(o.Z,null,n.displayName)));i.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const g=({providers:n,displayAllProviders:f})=>{const{formatMessage:y}=(0,h.Z)();return f?t.createElement(l.r,{gap:4},n.map(s=>t.createElement(r.P,{key:s.uid,col:4},t.createElement(i,{provider:s})))):n.length>2&&!f?t.createElement(l.r,{gap:4},n.slice(0,2).map(s=>t.createElement(r.P,{key:s.uid,col:4},t.createElement(i,{provider:s}))),t.createElement(r.P,{col:4},t.createElement(m.u,{label:y({id:"global.see-more"})},t.createElement(v,{as:p.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(O,{justifyContent:"center"},n.map(s=>t.createElement(i,{key:s.uid,provider:s})))};g.defaultProps={displayAllProviders:!0},g.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const M=g},52501:(D,d,e)=>{e.r(d),e.d(d,{FORMS:()=>s});var t=e(27279),u=e(61696),m=e(65e3),o=e(68263),l=e(19915),r=e(33110),E=e(59912),a=e(6854),h=e(47560),p=e(61020),P=e(51447),v=e(72450),O=e(68890),i=e(50745),g=e(84409),M=e(80090);const n=(0,v.ZP)(u.i)`
  flex: 1;
`,s={providers:{Component:()=>{const{push:R}=(0,P.k6)(),{formatMessage:c}=(0,p.Z)(),{isLoading:C,providers:A}=(0,g.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),L=()=>{R("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!C&&A.length===0?t.createElement(P.l_,{to:"/auth/login"}):t.createElement(i.ZP,null,t.createElement(m.o,null,t.createElement(i.bU,null,t.createElement(i.sg,null,t.createElement(O.Z,null),t.createElement(o.x,{paddingTop:6,paddingBottom:1},t.createElement(l.Z,{as:"h1",variant:"alpha"},c({id:"Auth.form.welcome.title"}))),t.createElement(o.x,{paddingBottom:7},t.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},c({id:"Auth.login.sso.subtitle"})))),t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:7},C?t.createElement(r.k,{justifyContent:"center"},t.createElement(E.a,null,c({id:"Auth.login.sso.loading"}))):t.createElement(M.Z,{providers:A}),t.createElement(r.k,null,t.createElement(n,null),t.createElement(o.x,{paddingLeft:3,paddingRight:3},t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},c({id:"or"}))),t.createElement(n,null)),t.createElement(a.z,{fullWidth:!0,size:"L",onClick:L},c({id:"Auth.form.button.login.strapi"})))),t.createElement(r.k,{justifyContent:"center"},t.createElement(o.x,{paddingTop:4},t.createElement(h.rU,{to:"/auth/forgot-password"},t.createElement(l.Z,{variant:"pi"},c({id:"Auth.link.forgot-password"})))))))},endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:""}}}}]);
