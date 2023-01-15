"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[8903],{19214:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7896),r=a(31461),o=(a(2784),a(3905)),l=["components"],i={id:"use-overlay",category:"State Management",title:"useOverlay",description:"The useOverlay is a custom hook for managing overlays like modal and Drawer with ease.",pagination_prev:"web/hooks/use-form-field-Array",pagination_next:"web/hooks/use-pagination"},s=void 0,p={unversionedId:"web/hooks/use-overlay",id:"web/hooks/use-overlay",isDocsHomePage:!1,title:"useOverlay",description:"The useOverlay is a custom hook for managing overlays like modal and Drawer with ease.",source:"@site/docs/web/hooks/useOverlay.md",sourceDirName:"web/hooks",slug:"/web/hooks/use-overlay",permalink:"/web/hooks/use-overlay",tags:[],version:"current",frontMatter:{id:"use-overlay",category:"State Management",title:"useOverlay",description:"The useOverlay is a custom hook for managing overlays like modal and Drawer with ease.",pagination_prev:"web/hooks/use-form-field-Array",pagination_next:"web/hooks/use-pagination"},sidebar:"docs",previous:{title:"useFormFieldArray",permalink:"/web/hooks/use-form-field-Array"},next:{title:"usePagination",permalink:"/web/hooks/use-pagination"}},u=[{value:"Usage",id:"usage",children:[],level:2}],d={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useOverlay } from '@abyss/web/hooks/useOverlay';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const modal = useOverlay('useOverlay-modal');\n\n  const state = modal.getState();\n\n  return (\n    <>\n      <Button\n        onClick={() => modal.open({ firstName: 'John', lastName: 'Doe' })}\n      >\n        Toggle Modal\n      </Button>\n\n      <pre style={{ marginTop: 20 }}>Modal State: {JSON.stringify(state)}</pre>\n\n      <Modal title=\"Custom Title\" model=\"useOverlay-modal\">\n        <Modal.Section>\n          <p>First Name: {state.data && state.data.firstName}</p>\n          <p>Last Name: {state.data && state.data.lastName}</p>\n        </Modal.Section>\n      </Modal>\n    </>\n  );\n};\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useOverlay")," hook to handle the state of any overlay like ",(0,o.kt)("a",{parentName:"p",href:"/web/ui/modal"},"Modal")," and ",(0,o.kt)("a",{parentName:"p",href:"/web/ui/drawer"},"Drawer"),". The overlay must be passed a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"model"),". Pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," of the overlay you want to target to ",(0,o.kt)("inlineCode",{parentName:"p"},"useOverlay")," to manipulate the state of that overlay."),(0,o.kt)("p",null,"Methods returned include ",(0,o.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"close"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toggle"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"getState"),"."),(0,o.kt)("p",null,"You can pass data into ",(0,o.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"close"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"toggle")," to be injected into the modal."),(0,o.kt)("p",null,"Applications must be wrapped in an OverlayProvider. Find additional resources on our overlay provider in ",(0,o.kt)("a",{parentName:"p",href:"/web/ui/overlay-provider"},"OverlayProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<OverlayProvider>\n  <App>{children}</App>\n</OverlayProvider>\n")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(y,l(l({ref:t},u),{},{components:a})):n.createElement(y,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);