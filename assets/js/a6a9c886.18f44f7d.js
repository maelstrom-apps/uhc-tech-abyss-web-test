"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[7826],{50500:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>g,toc:()=>b});var t=a(7896),l=a(31461),o=(a(2784),a(3905)),r=["components"],s={id:"toggle-tabs",category:"Forms",title:"ToggleTabs",description:"Combines radio buttons and tabs to give multiple options as one element.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3697%3A25496",pagination_prev:"web/ui/toggle-switch",pagination_next:"web/ui/box"},i=void 0,g={unversionedId:"web/ui/toggle-tabs",id:"web/ui/toggle-tabs",isDocsHomePage:!1,title:"ToggleTabs",description:"Combines radio buttons and tabs to give multiple options as one element.",source:"@site/docs/web/ui/ToggleTabs.md",sourceDirName:"web/ui",slug:"/web/ui/toggle-tabs",permalink:"/web/ui/toggle-tabs",tags:[],version:"current",frontMatter:{id:"toggle-tabs",category:"Forms",title:"ToggleTabs",description:"Combines radio buttons and tabs to give multiple options as one element.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3697%3A25496",pagination_prev:"web/ui/toggle-switch",pagination_next:"web/ui/box"},sidebar:"docs",previous:{title:"ToggleSwitch",permalink:"/web/ui/toggle-switch"},next:{title:"Box",permalink:"/web/ui/box"}},b=[{value:"Usage",id:"usage",children:[],level:2},{value:"useForm (Recommended)",id:"useform-recommended",children:[],level:2},{value:"useState",id:"usestate",children:[],level:2},{value:"Label and Subtext",id:"label-and-subtext",children:[],level:2},{value:"Error Message",id:"error-message",children:[],level:2},{value:"Descriptors Display",id:"descriptors-display",children:[],level:2},{value:"Border Radius",id:"border-radius",children:[],level:2},{value:"Disabled",id:"disabled",children:[],level:2},{value:"Display",id:"display",children:[],level:2}],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)}},d=u("Tab"),p=u("ExitLink"),T={toc:b};function c(e){var n=e.components,a=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},T,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d,{label:"Overview",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ToggleTabs } from '@abyss/web/ui/ToggleTabs';\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'ToggleTabs',\n  inputs: [\n    {\n      prop: 'label',\n      type: 'string',\n    },\n    {\n      prop: 'errorMessage',\n      type: 'string',\n    },\n    {\n      prop: 'subText',\n      type: 'string',\n    },\n    {\n      prop: 'borderRadius',\n      type: 'size',\n    },\n    {\n      prop: 'display',\n      type: 'select',\n      options: [\n        { label: 'column', value: 'column' },\n        { label: 'row', value: 'row' },\n      ],\n    },\n    {\n      prop: 'hideLabel',\n      type: 'boolean',\n    },\n    {\n      prop: 'fullWidth',\n      type: 'boolean'\n    },\n  ]\n}\n\n() => {\n  const [toggleValue, setToggleValue] = useState('low-d');\n\n  console.log('toggleValue', toggleValue);\n\n  return (\n    <ToggleTabs\n      label=\"ToggleTabs Sandbox\"\n      onChange={(e) => setToggleValue(e.target.value)}\n      value={toggleValue}\n      subText=\"This is subtext\"\n    >\n      <ToggleTabs.Tab label=\"Low-Deductible\" value=\"low-d\" />\n      <ToggleTabs.Tab label=\"Bind\" value=\"bind\" />\n      <ToggleTabs.Tab label=\"Balanced\" value=\"bal\" />\n      <ToggleTabs.Tab label=\"Low-Premium\" value=\"low-p\" />\n      <ToggleTabs.Tab label=\"Full-Coverage\" value=\"full\" />\n      <ToggleTabs.Tab label=\"No Coverage\" value=\"none\" />\n    </ToggleTabs>\n  );\n};\n")),(0,o.kt)("h2",{id:"useform-recommended"},"useForm (Recommended)"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook lets the DOM handle form data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      \'toggle-form\': \'two\',\n    },\n  });\n  const onSubmit = (data) => {\n    console.log(\'submitted\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <ToggleTabs\n        label="ToggleTabs useForm"\n        model="toggle-form"\n        validators={{ required: true }}\n      >\n        <ToggleTabs.Tab label="One" value="one" />\n        <ToggleTabs.Tab\n          label={<IconMaterial icon="home" />}\n          value="two"\n          ariaLabel="home"\n        />\n        <ToggleTabs.Tab label="Three" value="three" />\n        <ToggleTabs.Tab label="Four" value="four" />\n      </ToggleTabs>\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,o.kt)("h2",{id:"usestate"},"useState"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," hook gets values from the component state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [toggleValue, setToggleValue] = useState(\'one\');\n\n  console.log(\'toggleValue\', toggleValue);\n\n  return (\n    <ToggleTabs\n      label="ToggleTabs useState"\n      onChange={(e) => setToggleValue(e.target.value)}\n      value={toggleValue}\n    >\n      <ToggleTabs.Tab label="One" value="one" />\n      <ToggleTabs.Tab\n        label={<IconMaterial icon="home" />}\n        value="two"\n        ariaLabel="home"\n      />\n      <ToggleTabs.Tab label="Three" value="three" />\n      <ToggleTabs.Tab label="Four" value="four" />\n    </ToggleTabs>\n  );\n};\n')),(0,o.kt)("h2",{id:"label-and-subtext"},"Label and Subtext"),(0,o.kt)("p",null,"Label is required, but subtext is not. Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," prop to change the displayed label for the group. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"hideLabel")," to visibly hide label but retain accessibility. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"subText")," prop to display helpful text below the tabs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <ToggleTabs\n        label="Label and Subtext"\n        subText="Subtext"\n        model="label-visible-1"\n      >\n        <ToggleTabs.Tab label="One" value="one" />\n        <ToggleTabs.Tab label="Two" value="two" />\n      </ToggleTabs>\n      <ToggleTabs label="Label only" model="label-visible-2">\n        <ToggleTabs.Tab label="One" value="one" />\n        <ToggleTabs.Tab label="Two" value="two" />\n      </ToggleTabs>\n      <ToggleTabs\n        label="Hidden Label"\n        hideLabel\n        subText="Subtext only"\n        model="label-hidden"\n      >\n        <ToggleTabs.Tab label="One" value="one" />\n        <ToggleTabs.Tab label="Two" value="two" />\n      </ToggleTabs>\n    </FormProvider>\n  );\n};\n')),(0,o.kt)("h2",{id:"error-message"},"Error Message"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"errorMessage")," prop to display a custom error message below the tabs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [toggleValue, setToggleValue] = useState(\'\');\n\n  return (\n    <ToggleTabs\n      label="Error Message"\n      value={toggleValue}\n      onChange={(e) => setToggleValue(e.target.value)}\n      errorMessage="Error Message"\n    >\n      <ToggleTabs.Tab label="One" value="one" />\n      <ToggleTabs.Tab label="Two" value="two" />\n      <ToggleTabs.Tab label="Three" value="three" />\n    </ToggleTabs>\n  );\n};\n')),(0,o.kt)("h2",{id:"descriptors-display"},"Descriptors Display"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"descriptorsDisplay")," prop to set the orientation of the error message and subtext descriptor content. Available variants include 'column' and 'row'. The default is set to 'row'."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"form-provider#descriptors-display"},"FormProvider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"descriptorsDisplay")," to set the descriptors orientation across an entire form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [toggleValue, setToggleValue] = useState(\'\');\n\n  return (\n    <ToggleTabs\n      value={toggleValue}\n      onChange={(e) => setToggleValue(e.target.value)}\n      label="Descriptors Display"\n      subText="Subtext Message"\n      errorMessage="Error Message"\n      descriptorsDisplay="column"\n    >\n      <ToggleTabs.Tab label="One" value="one" />\n      <ToggleTabs.Tab label="Two" value="two" />\n      <ToggleTabs.Tab label="Three" value="three" />\n    </ToggleTabs>\n  );\n};\n')),(0,o.kt)("h2",{id:"border-radius"},"Border Radius"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"borderRadius")," prop to set to set the border radius of the container, as well as the selected tab. There are three preset values you can use, ",(0,o.kt)("inlineCode",{parentName:"p"},"$sm"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$md"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"$lg"),", or you can input a custom value. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"$md"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [toggleValue1, setToggleValue1] = useState(\'one\');\n  const [toggleValue2, setToggleValue2] = useState(\'one\');\n  const [toggleValue3, setToggleValue3] = useState(\'one\');\n\n  return (\n    <React.Fragment>\n      <ToggleTabs\n        label="Small Border Radius"\n        onChange={(e) => setToggleValue1(e.target.value)}\n        value={toggleValue1}\n        borderRadius="$sm"\n      >\n        <ToggleTabs.Tab label="One" value="one" />\n        <ToggleTabs.Tab label="Tab Number Two" value="two" />\n        <ToggleTabs.Tab label="Three" value="three" />\n      </ToggleTabs>\n      <ToggleTabs\n        label="Medium Border Radius - Default"\n        onChange={(e) => setToggleValue2(e.target.value)}\n        value={toggleValue2}\n      >\n        <ToggleTabs.Tab label="One" value="one" />\n        <ToggleTabs.Tab label="Tab Number Two" value="two" />\n        <ToggleTabs.Tab label="Three" value="three" />\n      </ToggleTabs>\n      <ToggleTabs\n        label="Large Border Radius"\n        onChange={(e) => setToggleValue3(e.target.value)}\n        value={toggleValue3}\n        borderRadius="$lg"\n      >\n        <ToggleTabs.Tab label="One" value="one" />\n        <ToggleTabs.Tab label="Tab Number Two" value="two" />\n        <ToggleTabs.Tab label="Three" value="three" />\n      </ToggleTabs>\n    </React.Fragment>\n  );\n};\n')),(0,o.kt)("h2",{id:"disabled"},"Disabled"),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"isDisabled")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to disable all tabs in the group. Individual tabs can be disabled by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"isDisabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in their respective ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleTabs.Tab")," instead of the outer component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({});\n\n  return (\n    <FormProvider state={form}>\n      <ToggleTabs isDisabled label="All Tabs Disabled" model="disabled">\n        <ToggleTabs.Tab value="dogs" label="Disabled 1" />\n        <ToggleTabs.Tab value="cats" label="Disabled 2" />\n        <ToggleTabs.Tab value="cats1" label="Disabled 3" />\n        <ToggleTabs.Tab value="cats2" label="Disabled 4" />\n      </ToggleTabs>\n\n      <ToggleTabs label="Individual Tabs Disabled" model="disabled2">\n        <ToggleTabs.Tab value="dogs" label="Disabled 1" isDisabled />\n        <ToggleTabs.Tab value="cats" label="Enabled 1" />\n        <ToggleTabs.Tab value="cats1" label="Disabled 2" isDisabled />\n        <ToggleTabs.Tab value="cats2" label="Enabled 2" />\n      </ToggleTabs>\n    </FormProvider>\n  );\n};\n')),(0,o.kt)("h2",{id:"display"},"Display"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"display")," prop to set the direction in which the tabs appear. The default is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'row'"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <ToggleTabs label="ToggleTabs Column" model="column" display="column">\n        <ToggleTabs.Tab label="Column A" value="A" />\n        <ToggleTabs.Tab label="Column B" value="B" />\n      </ToggleTabs>\n      <ToggleTabs label="ToggleTabs Row" model="row">\n        <ToggleTabs.Tab label="Row A" value="A" />\n        <ToggleTabs.Tab label="Row B" value="B" />\n      </ToggleTabs>\n    </FormProvider>\n  );\n};\n'))),(0,o.kt)(d,{label:"Integration",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={ToggleTabs}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the ToggleTabs component',\n    },\n    {\n      name: 'label',\n      type: 'string',\n      description: 'Set the label of the ToggleTabs',\n    },\n    {\n      name: 'value',\n      type: 'string',\n      description: 'Value that is selected',\n    },\n    {\n      name: 'model',\n      type: 'string',\n      description: 'Unique identifier used for FormProvider',\n    },\n    {\n      name: 'errorMessage',\n      type: 'string',\n      description: 'Set the error message',\n    },\n    {\n      name: 'validators',\n      type: 'shape',\n      description: 'Rules for validation',\n    },\n    {\n      name: 'display',\n      type: \"'row' | 'column'\",\n      description: 'Set the direction in which the tabs are displayed',\n    },\n    {\n      name: 'borderRadius',\n      type: 'number | string',\n      description:\n        \"Set the border radius of the container and the selected tab's background\",\n    },\n    {\n      name: 'borderRadiuses',\n      type: 'object',\n      description: 'Set border radius options',\n    },\n    {\n      name: 'fullWidth',\n      type: 'boolean',\n      description:\n        'Flag to make the tabs take up the full width of the container',\n    },\n    {\n      name: 'hideLabel',\n      type: 'boolean',\n      description: 'Flag to hide label',\n    },\n    {\n      name: 'isDisabled',\n      type: 'boolean',\n      description: 'Flag to disable all tabs',\n    },\n    {\n      name: 'onChange',\n      type: 'function',\n      description: 'Callback fired when the value changes',\n    },\n    {\n      name: 'onFocus',\n      type: 'function',\n      description: 'Callback fired when the component is focused',\n    },\n    {\n      name: 'onBlur',\n      type: 'function',\n      description: 'Callback fired when the component is unfocused',\n    },\n    {\n      name: 'subText',\n      type: 'string',\n      description: 'Set the subtext of the ToggleTabs',\n    },\n    {\n      name: 'descriptorsDisplay',\n      type: '\"row\" | \"column\"',\n      description:\n        'Set the orientation of descriptor content located below the ToggleTabs',\n    },\n  ]}\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={ToggleTabs.Tab}\n  rows={[\n    {\n      name: 'checked',\n      type: 'boolean',\n      description: 'Flag to see if tab is checked',\n    },\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The element the tab wraps',\n    },\n    {\n      name: 'isDisabled',\n      type: 'boolean',\n      description: 'Flag to see if tab is disabled',\n    },\n    {\n      name: 'label',\n      type: 'string',\n      description: 'Set the label of tab',\n    },\n    {\n      name: 'value',\n      type: 'string',\n      description: 'Value of the tab',\n    },\n    {\n      name: 'ariaLabel',\n      type: 'string',\n      description: `'aria-label' for Tab with abbreviated word or icons`,\n    },\n  ]}\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={ToggleTabs}\n  rows={[\n    {\n      name: 'toggle-tabs-root',\n      description: 'ToggleTabs root element',\n    },\n    {\n      name: 'toggle-tabs-label',\n      description: 'ToggleTabs label',\n    },\n    {\n      name: 'toggle-tabs-container',\n      description: 'ToggleTabs container',\n    },\n    {\n      name: 'toggle-tabs-selected-background',\n      description: 'Background that appears on the selected tab',\n    },\n    {\n      name: 'toggle-tabs-descriptors',\n      description: 'ToggleTabs descriptors',\n    },\n  ]}\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={ToggleTabs.Tab}\n  rows={[\n    {\n      name: 'tab-root',\n      description: 'Tab Root',\n    },\n    {\n      name: 'tab',\n      description: 'Tab',\n    },\n    {\n      name: 'tab-label',\n      description: 'Tab Label',\n    },\n  ]}\n/>\n"))),(0,o.kt)(d,{label:"Accessibility",mdxType:"Tab"},(0,o.kt)("p",null,"ToggleTabs at its core functions like a Radio Group."),(0,o.kt)("p",null,"A radio group is a set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time. Some implementations may initialize the set with all buttons in the unchecked state in order to force the user to check one of the buttons before moving past a certain point in the workflow."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ariaLabel")," prop in ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleTabs.Tab"),' when using abbreviated words or icons. This will include an "aria-label" for screen readers.'),(0,o.kt)("p",null,"Adheres to the ",(0,o.kt)(p,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#toggletabs",mdxType:"ExitLink"}," WAI-ARIA design pattern"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [toggleValue, setToggleValue] = useState(\'one\');\n\n  return (\n    <ToggleTabs\n      label="Accessibility Practice"\n      onChange={(e) => setToggleValue(e.target.value)}\n      value={toggleValue}\n      subText="Utilize the Keyboard Interaction table below to test the components accessibility."\n    >\n      <ToggleTabs.Tab label="One" value="one" />\n      <ToggleTabs.Tab label="Two" value="two" />\n      <ToggleTabs.Tab label="Three" value="three" />\n      <ToggleTabs.Tab label="Four" value="four" />\n    </ToggleTabs>\n  );\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Tab',\n      description:\n        'Moves focus to either the checked radio item or the first radio item in the group.',\n    },\n    {\n      name: 'Space',\n      description: 'When focus is on an unchecked radio item, checks it.',\n    },\n    {\n      name: 'Enter',\n      description: 'When focus is on an unchecked radio item, checks it.',\n    },\n    {\n      name: 'Arrow Down',\n      description: 'Moves focus to the next radio item in the group.',\n    },\n    {\n      name: 'Arrow Right',\n      description: 'Moves focus to the next radio item in the group.',\n    },\n    {\n      name: 'Arrow Up',\n      description: 'Moves focus to the previous radio item in the group.',\n    },\n    {\n      name: 'Arrow Left',\n      description: 'Moves focus to the previous radio item in the group.',\n    },\n  ]}\n/>\n"))))}c.isMDXComponent=!0},3905:(e,n,a)=>{a.d(n,{Zo:()=>b,kt:()=>p});var t=a(2784);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),g=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},b=function(e){var n=g(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=g(a),p=l,T=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return a?t.createElement(T,r(r({ref:n},b),{},{components:a})):t.createElement(T,r({ref:n},b))}));function p(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var g=2;g<o;g++)r[g]=a[g];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);