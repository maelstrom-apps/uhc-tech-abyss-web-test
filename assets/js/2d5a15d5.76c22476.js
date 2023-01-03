"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[5465],{56556:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=o(7896),i=o(31461),a=(o(2784),o(3905)),r=["components"],l={id:"tooltip",category:"Overlay",title:"Tooltip",description:"A contextual text bubble that displays a description for an element that appears on pointer hover or keyboard focus.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=12502%3A49489",pagination_prev:"web/ui/popover",pagination_next:"web/ui/form-provider"},p=void 0,s={unversionedId:"web/ui/tooltip",id:"web/ui/tooltip",isDocsHomePage:!1,title:"Tooltip",description:"A contextual text bubble that displays a description for an element that appears on pointer hover or keyboard focus.",source:"@site/docs/web/ui/Tooltip.md",sourceDirName:"web/ui",slug:"/web/ui/tooltip",permalink:"/web/ui/tooltip",tags:[],version:"current",frontMatter:{id:"tooltip",category:"Overlay",title:"Tooltip",description:"A contextual text bubble that displays a description for an element that appears on pointer hover or keyboard focus.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=12502%3A49489",pagination_prev:"web/ui/popover",pagination_next:"web/ui/form-provider"},sidebar:"docs",previous:{title:"Popover",permalink:"/web/ui/popover"},next:{title:"FormProvider",permalink:"/web/ui/form-provider"}},u=[{value:"Content",id:"content",children:[],level:2},{value:"asChild",id:"aschild",children:[],level:2},{value:"Position",id:"position",children:[],level:2},{value:"Position Offset",id:"position-offset",children:[],level:2},{value:"Align",id:"align",children:[],level:2},{value:"Delay Duration",id:"delay-duration",children:[],level:2},{value:"Show/Hide Arrow",id:"showhide-arrow",children:[],level:2},{value:"When should I use a tooltip vs a popover?",id:"when-should-i-use-a-tooltip-vs-a-popover",children:[{value:"Purpose of Content",id:"purpose-of-content",children:[],level:3},{value:"Size of Content",id:"size-of-content",children:[],level:3},{value:"Interactions",id:"interactions",children:[],level:3},{value:"Conclusion",id:"conclusion",children:[],level:3}],level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},c=d("Tab"),m=d("ExitLink"),h={toc:u};function f(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{label:"Overview",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Tooltip } from '@abyss/web/ui/Tooltip';\n")),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Tooltip',\n  inputs: [\n    {\n      prop: 'content',\n      type: 'string',\n      defaultValue: 'When should I use a tooltip vs a popover?',\n    },\n    {\n      prop: 'children',\n      type: 'node',\n    },\n    {\n      prop: 'position',\n      type: 'select',\n      options: [\n        { label: 'top', value: 'top' },\n        { label: 'bottom', value: 'bottom' },\n        { label: 'left', value: 'left' },\n        { label: 'right', value: 'right' },\n      ],\n    },\n    {\n      prop: 'positionOffset',\n      type: 'number',\n    },\n    {\n      prop: 'align',\n      type: 'select',\n      options: [\n        { label: 'start', value: 'start' },\n        { label: 'center', value: 'center' },\n        { label: 'end', value: 'end' },\n      ],\n    },\n    {\n      prop: 'delayDuration',\n      type: 'number'\n    },\n    {\n      prop: 'hideArrow',\n      type: 'boolean',\n    },\n    {\n      prop: 'asChild',\n      type: 'boolean',\n    },\n  ],\n}\n\n<Tooltip>\n  <Button aria-label=\"Tooltip information\" rounded>\n    <IconMaterial icon=\"question_mark\" color=\"$white\" />\n  </Button>\n</Tooltip>\n\n")),(0,a.kt)("h2",{id:"content"},"Content"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," prop to insert a text description that appears on pointer hover or keyboard focus."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group grow>\n  <Tooltip content="Use this button to save information in your profile, after that you will be able to access it any time and share it via email.">\n    <Button>Save to profile</Button>\n  </Tooltip>\n  <Tooltip content="Click to view more options">\n    <Button aria-label="More options" rounded>\n      <IconMaterial icon="more_vert" color="$primary2" />\n    </Button>\n  </Tooltip>\n  <Tooltip content="Customize user settings">\n    <Button after={<IconMaterial icon="settings" color="$primary2" />}>\n      Settings\n    </Button>\n  </Tooltip>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"aschild"},"asChild"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"asChild")," prop will merge the original component props with the props of the supplied element/component and change the underlying DOM node. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Set ",(0,a.kt)("inlineCode",{parentName:"p"},"asChild")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to render tooltip on static elements."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group grow>\n  <Tooltip content="Tooltip on dynamic element.">\n    <Button>Hover me!</Button>\n  </Tooltip>\n  <Tooltip content="Tooltip on static element." asChild={false}>\n    Hover me!\n  </Tooltip>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"position"},"Position"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," prop to change the position of the tooltip. Options include ",(0,a.kt)("inlineCode",{parentName:"p"},"'left'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'right'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'top'"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"'bottom'"),". The default position is ",(0,a.kt)("inlineCode",{parentName:"p"},"'bottom'"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group grow>\n  <Tooltip content="Bottom" position="bottom">\n    <Button aria-label="Keyboard arrow down" rounded>\n      <IconMaterial icon="keyboard_arrow_down" color="$primary2" />\n    </Button>\n  </Tooltip>\n  <Tooltip content="Left" position="left">\n    <Button aria-label="Keyboard arrow left" rounded>\n      <IconMaterial icon="keyboard_arrow_left" color="$primary2" />\n    </Button>\n  </Tooltip>\n  <Tooltip content="Top" position="top">\n    <Button aria-label="Keyboard arrow up" rounded>\n      <IconMaterial icon="keyboard_arrow_up" color="$primary2" />\n    </Button>\n  </Tooltip>\n  <Tooltip content="Right" position="right">\n    <Button aria-label="Keyboard arrow right" rounded>\n      <IconMaterial icon="keyboard_arrow_right" color="$primary2" />\n    </Button>\n  </Tooltip>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"position-offset"},"Position Offset"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"positionOffset")," prop to change the offset position of the popover. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"4"),". Maximum ",(0,a.kt)("inlineCode",{parentName:"p"},"positionOffset")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"16"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group grow>\n  <Tooltip content="Offset: 4" positionOffset={4}>\n    <Button>Offset: 4</Button>\n  </Tooltip>\n  <Tooltip content="Offset: 8" positionOffset={8}>\n    <Button>Offset: 8</Button>\n  </Tooltip>\n  <Tooltip content="Offset: 16" positionOffset={16}>\n    <Button>Offset: 16</Button>\n  </Tooltip>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"align"},"Align"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"align")," prop to set the side of the anchor to render against when open. Options include ",(0,a.kt)("inlineCode",{parentName:"p"},"'start'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'center'"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"'end'"),". The default alignment is ",(0,a.kt)("inlineCode",{parentName:"p"},"center"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group grow>\n  <Tooltip content="Align: Start" align="start">\n    <Button>Start</Button>\n  </Tooltip>\n  <Tooltip content="Align: Center" align="center">\n    <Button>Center</Button>\n  </Tooltip>\n  <Tooltip content="Align: End" align="end">\n    <Button>End</Button>\n  </Tooltip>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"delay-duration"},"Delay Duration"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"delayDuration")," prop to control the time it takes for the tooltip to open. The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"300")," milliseconds. Setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"delayDuration")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," will render tooltip instantly. Maximum ",(0,a.kt)("inlineCode",{parentName:"p"},"delayDuration")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"700")," milliseconds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group grow>\n  <Tooltip content="Delay: 0" delayDuration={0}>\n    <Button aria-label="Tooltip deplay 0ms" rounded>\n      <IconMaterial icon="timer" color="$primary2" />\n    </Button>\n  </Tooltip>\n  <Tooltip content="Delay: 300" delayDuration={300}>\n    <Button aria-label="Tooltip deplay 300ms" rounded>\n      <IconMaterial icon="timer" color="$primary2" />\n    </Button>\n  </Tooltip>\n  <Tooltip content="Delay: 700" delayDuration={700}>\n    <Button aria-label="Tooltip deplay 700ms" rounded>\n      <IconMaterial icon="timer" color="$primary2" />\n    </Button>\n  </Tooltip>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"showhide-arrow"},"Show/Hide Arrow"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"hideArrow")," prop to hide an arrow element rendered alongside the tooltip. The default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". This can be used to help visually link the tooltip with the the content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group grow>\n  <Tooltip content="Hide Arrow" hideArrow positionOffset={8}>\n    <Button>Hide Arrow</Button>\n  </Tooltip>\n  <Tooltip content="Show Arrow">\n    <Button>Show Arrow</Button>\n  </Tooltip>\n</Layout.Group>\n')),(0,a.kt)("h2",{id:"when-should-i-use-a-tooltip-vs-a-popover"},"When should I use a tooltip vs a popover?"),(0,a.kt)("p",null,"Glad you asked! There are several considerations when deciding between a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip")," or a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover"),":"),(0,a.kt)("h3",{id:"purpose-of-content"},"Purpose of Content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip")," is a hint or a tip about what an interactive element does. ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltips")," are meant to help clarify or provide supplementary instruction for an element on hover or upon receiving focus. They should not be used to add additional content nor include interactive elements such as links. ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltips")," should not receive mouse or keyboard focus.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover")," should be used to provide additional content to static text, such as definitions of words, informational blurbs, or additional product details. They can receive focus and can contain links and other interactive elements."))),(0,a.kt)("h3",{id:"size-of-content"},"Size of Content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Since ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltips"),' are only meant to tell the purpose of an element they should be short and to the point, for example: "Click X to do X" or "User post count".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popovers"),", on the other hand, can be much more verbose, they can include a heading,\xa0lines of text in the body, links, etc."))),(0,a.kt)("h3",{id:"interactions"},"Interactions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltips")," should only be visible on mouse hover or upon receiving focus.\xa0For this\xa0reason, if you need to be able to read the content while interacting with other parts of the page then a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip"),' will not work. They should be dismissible using the "escape" key. They should be used on interactive elements where a mouse click or keyboard activation would otherwise trigger the elements primary function.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popovers")," must be triggered to appear, whether via mouse click or via keyboard navigation. They must be dismissible, whether by clicking on other parts of the page, clicking the ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover")," target, or a specific close button/icon (depending on implementation). For this reason,\xa0you can set up a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover")," to allow you to interact with other elements on the page while still being able to read its\xa0content. On top of this, since ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popovers")," will remain open when mousing out of their target, you can add additional buttons or interactions within them."))),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"If you want to give a short hint\xa0or supplemental instructions for an interactive element (such as a submit button), use a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip"),"."),(0,a.kt)("p",null,"If you want to add additional content to a static element that might include headings, body text, links, etc, and you need the content to remain open even after mousing away or the element losing focus, then use a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover"),"."),(0,a.kt)("p",null,"It should be noted that any vital information users need to complete an action or make a decision should be displayed directly in the page text or button label, rather than a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip")," or a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover"),".\xa0Critical information hidden in a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/tooltip"},"Tooltip")," or a ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/popover"},"Popover")," might not be discovered by all users and could create accessibility issues.")),(0,a.kt)(c,{label:"Integration",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Tooltip}\n  rows={[\n    {\n      name: 'content',\n      type: 'string',\n      description:\n        'Conceptual text that appears on pointer hover or keyboard focus.',\n    },\n    {\n      name: 'position',\n      type: '\"top\" | \"bottom\" | \"left\" | \"right\" ',\n      description: 'Sets the position of the tooltip from the trigger',\n    },\n    {\n      name: 'positionOffset',\n      type: 'number',\n      description: 'Sets the distance in pixels from the trigger',\n    },\n    {\n      name: 'align',\n      type: '\"start\" | \"center\" | \"end\"',\n      description: 'Sets the alignment against the trigger',\n    },\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The children element of the tooltip',\n    },\n    {\n      name: 'asChild',\n      type: 'boolean',\n      description:\n        'Sets the component to the HTML tag or custom component of the only child.',\n    },\n    {\n      name: 'delayDuration',\n      type: 'number',\n      description: 'Sets the time it takes for tooltip to open',\n    },\n    {\n      name: 'hideArrow',\n      type: 'boolean',\n      description: 'Flag to show/hide arrow rendered alongside tooltip',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Tooltip}\n  rows={[\n    {\n      name: 'tooltip-root',\n      description: 'Tooltip root element',\n    },\n    {\n      name: 'tooltip-trigger',\n      description: 'Tooltip trigger element',\n    },\n    {\n      name: 'tooltip-content',\n      description: 'Tooltip content element',\n    },\n  ]}\n/>\n"))),(0,a.kt)(c,{label:"Accessibility",mdxType:"Tab"},(0,a.kt)("p",null,"Tooltips provide contextual information about an element when that owning element receives focus or is hovered over, but is otherwise not visible on the page. While a tooltip can be placed on any content, they generally are tips for tools or controls, such as providing additional content for icons that have brief labels (or no labels at all, which is not accessible!). Instead of using tooltips and hiding important information, consider writing clear, succinct, always visible descriptions. If you have space, don't use tooltips. Just provide clear labels and sufficient body text. Please visit this ",(0,a.kt)(m,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role",mdxType:"ExitLink"},"link")," to read more on accessibility."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Group>\n  <Tooltip content="Contact Us">\n    <Button aria-label="Contact Us" rounded>\n      <IconMaterial icon="speaker_notes" color="$primary2" />\n    </Button>\n  </Tooltip>\n</Layout.Group>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Tab',\n      description: 'Opens/closes the tooltip without delay.',\n    },\n    {\n      name: 'Escape',\n      description: 'If open, closes the tooltip without delay.',\n    },\n  ]}\n/>\n"))))}f.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(2784);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(o),m=i,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return o?n.createElement(h,r(r({ref:t},u),{},{components:o})):n.createElement(h,r({ref:t},u))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"}}]);