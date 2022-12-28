"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[407],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49835:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var i,r=t(7896),o=t(31461),a=(t(67294),t(30876)),l=["components"],s={id:"time-input",category:"Forms",title:"TimeInput",description:"Capture time input from user.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=24077%3A99544&t=2OvT77S1GipkwVQf-1",pagination_prev:"web/ui/text-input-area",pagination_next:"web/ui/toggle-group"},p=void 0,u={unversionedId:"web/ui/time-input",id:"web/ui/time-input",isDocsHomePage:!1,title:"TimeInput",description:"Capture time input from user.",source:"@site/docs/web/ui/TimeInput.md",sourceDirName:"web/ui",slug:"/web/ui/time-input",permalink:"/web/ui/time-input",tags:[],version:"current",frontMatter:{id:"time-input",category:"Forms",title:"TimeInput",description:"Capture time input from user.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=24077%3A99544&t=2OvT77S1GipkwVQf-1",pagination_prev:"web/ui/text-input-area",pagination_next:"web/ui/toggle-group"},sidebar:"docs",previous:{title:"TextInputArea",permalink:"/web/ui/text-input-area"},next:{title:"ToggleGroup",permalink:"/web/ui/toggle-group"}},m=[{value:"useForm (Recommended)",id:"useform-recommended",children:[],level:2},{value:"useState",id:"usestate",children:[],level:2},{value:"Format",id:"format",children:[],level:2},{value:"Minutes Increment",id:"minutes-increment",children:[],level:2},{value:"Add Elements Inside Input",id:"add-elements-inside-input",children:[],level:2},{value:"Subtext",id:"subtext",children:[],level:2},{value:"Error Message",id:"error-message",children:[],level:2},{value:"Descriptors Display",id:"descriptors-display",children:[],level:2},{value:"Label",id:"label",children:[],level:2},{value:"Disabled",id:"disabled",children:[],level:2},{value:"Validation",id:"validation",children:[],level:2},{value:"Highlighted",id:"highlighted",children:[],level:2},{value:"Width",id:"width",children:[],level:2},{value:"Enable Outside Scroll",id:"enable-outside-scroll",children:[],level:2}],d=(i="Tab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),c={toc:m};function h(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(d,{label:"Overview",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { TimeInput } from '@abyss/web/ui/TimeInput';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'TimeInput',\n  inputs: [\n    {\n      prop: 'subText',\n      type: 'string',\n    },\n    {\n      prop: 'errorMessage',\n      type: 'string',\n    },\n    {\n      prop: 'hideLabel',\n      type: 'boolean',\n    },\n    {\n      prop: 'isDisabled',\n      type: 'boolean',\n    },\n    {\n      prop: 'highlighted',\n      type: 'boolean',\n      defaultValue: false,\n    },\n    {\n      prop: 'minutesIncrement',\n      type: 'string',\n    },\n        {\n      prop: 'format',\n      type: 'select',\n      options: [\n        { label: '12', value: '12' },\n        { label: '24', value: '24' },\n      ]\n    },\n  ]\n}\n\n() => {\n  const [value, setValue] = useState(null);\n\n  return (\n    <TimeInput\n      label=\"TimeInput Sandbox\"\n      value={value}\n      onChange={setValue}\n    />\n  );\n};\n")),(0,a.kt)("h2",{id:"useform-recommended"},"useForm (Recommended)"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook for handling text input lets the DOM handle form data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const form = useForm({\n    defaultValues: {\n      'time-input': '01:00',\n    },\n  });\n\n  const onSubmit = (data) => {\n    console.log('data', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <TimeInput\n        label=\"TimeInput useForm\"\n        model=\"time-input\"\n        validators={{ required: true }}\n      />\n      <Button type=\"submit\" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n")),(0,a.kt)("h2",{id:"usestate"},"useState"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook gets values from the component state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [value, setValue] = useState('13:00');\n\n  console.log('useState Value', value);\n\n  return (\n    <TimeInput label=\"TimeInput useState\" value={value} onChange={setValue} />\n  );\n};\n")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," prop to change from 12 to 24 hour time format. The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"12"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [value, setValue] = useState('13:00');\n\n  console.log('useState Value', value);\n\n  return (\n    <TimeInput\n      label=\"TimeInput Format\"\n      value={value}\n      onChange={setValue}\n      format=\"24\"\n    />\n  );\n};\n")),(0,a.kt)("h2",{id:"minutes-increment"},"Minutes Increment"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"minutesIncrement")," prop to update the minute increment options that are available for selection within the time picker. The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,a.kt)("p",null,"NOTE: this setting does not provide any validation when using the input field to enter the time value. If you'd like to add custom validation to only allow certain increments please see the Custom Validators example from the ",(0,a.kt)("a",{parentName:"p",href:"#validation"},"Validation")," section below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [value, setValue] = useState('13:00');\n\n  console.log('useState Value', value);\n\n  return (\n    <TimeInput\n      label=\"TimeInput Format\"\n      value={value}\n      onChange={setValue}\n      minutesIncrement=\"30\"\n    />\n  );\n};\n")),(0,a.kt)("h2",{id:"add-elements-inside-input"},"Add Elements Inside Input"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"inputLeftElement")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"inputRightElement")," props to add elements to the inside of the time input field. The recommended usage is for inserting icons."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"#validation"},"Validation")," section below for an example on how to incorporate with validation and display error/success states with icons."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <TimeInput\n        label="TimeInput Inside Elements"\n        model="time-input-elements"\n        validators={{ required: true }}\n        inputLeftElement={\n          <IconMaterial icon="assignment" size="18px" color="$gray6" />\n        }\n        inputRightElement={\n          <IconMaterial icon="check" size="18px" color="$success1" />\n        }\n      />\n    </FormProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"subtext"},"Subtext"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"subText")," prop to display helpful text below the time input field. By default it displays ",(0,a.kt)("inlineCode",{parentName:"p"},"Time Format: hh:mm"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = useState(null);\n\n  return (\n    <TimeInput\n      label="TimeInput SubText"\n      value={value}\n      onChange={setValue}\n      subText="Custom Sub Text"\n    />\n  );\n};\n')),(0,a.kt)("h2",{id:"error-message"},"Error Message"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"errorMessage")," prop to display a custom error message below the time input field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = useState(null);\n\n  return (\n    <TimeInput\n      label="TimeInput Error Message"\n      value={value}\n      onChange={setValue}\n      errorMessage="Custom Error Message"\n    />\n  );\n};\n')),(0,a.kt)("h2",{id:"descriptors-display"},"Descriptors Display"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"descriptorsDisplay")," prop to set the orientation of the error message and subtext descriptor content. Available variants include 'column' and 'row'. The default is set to 'row'."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"form-provider#descriptors-display"},"FormProvider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"descriptorsDisplay")," to set the descriptors orientation across an entire form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = useState(null);\n\n  return (\n    <TimeInput\n      label="TimeInput Descriptors Display"\n      value={value}\n      onChange={setValue}\n      subText="Subtext Message"\n      errorMessage="Error Message"\n      descriptorsDisplay="column"\n    />\n  );\n};\n')),(0,a.kt)("h2",{id:"label"},"Label"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," prop to display a label above the input. To hide the input label set ",(0,a.kt)("inlineCode",{parentName:"p"},"hideLabel")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <TimeInput\n        css={{ \'abyss-time-input-root\': { marginBottom: \'20px\' } }}\n        model="time-input"\n        label="TimeInput Custom Label"\n      />\n      <TimeInput\n        model="time-input-2"\n        label="TimeInput Hidden Label"\n        hideLabel\n      />\n    </FormProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"disabled"},"Disabled"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"isDisabled")," prop to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to disable the input field so users cannot enter a value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <TimeInput label="TimeInput Disabled" model="time-input" isDisabled />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"validators")," prop to set rules for the field to be valid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const form = useForm();\n\n  const { errors, isSubmitted, isSubmitSuccessful } = form.formState;\n\n  const getIconProps = useCallback(\n    (model) => {\n      if (!isSubmitted) return null;\n\n      let iconProps = {};\n\n      if (!!errors[model]) {\n        iconProps = { icon: 'error', color: '$error1', size: '18px' };\n      }\n      if (isSubmitSuccessful) {\n        iconProps = { icon: 'check', color: '$success1', size: '18px' };\n      }\n\n      return { inputRightElement: <IconMaterial {...iconProps} /> };\n    },\n    [isSubmitted, isSubmitSuccessful]\n  );\n\n  const marginBottom = {\n    'abyss-time-input-root': { marginBottom: '20px' },\n  };\n\n  const minutesIncrement = 15;\n\n  return (\n    <FormProvider state={form}>\n      <TimeInput\n        css={marginBottom}\n        label=\"Required Default Message\"\n        model=\"required\"\n        {...getIconProps('required')}\n        validators={{ required: true }}\n      />\n      <TimeInput\n        css={marginBottom}\n        label=\"Required Custom Message\"\n        model=\"custom-required\"\n        validators={{ required: 'Custom Error Message' }}\n      />\n      <TimeInput\n        label=\"Custom Validators\"\n        model=\"validate\"\n        minutesIncrement={minutesIncrement}\n        subText={`Enter in ${minutesIncrement} minute increments`}\n        validators={{\n          required: true,\n          validate: {\n            incrementAllowed: (v) => {\n              const minuteValue = dayjs(v, 'hh:mm').minute();\n              if (minuteValue % minutesIncrement === 0) return true;\n              return `Only ${minutesIncrement} minute increments are allowed`;\n            },\n          },\n        }}\n      />\n      <Button type=\"submit\" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n")),(0,a.kt)("h2",{id:"highlighted"},"Highlighted"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"highlighted")," prop to enable the background color for the input. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"FormProvider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"highlighted")," to enable the color to appear if validation is required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = useState(null);\n\n  return (\n    <TimeInput\n      label="TimeInput Highlighted"\n      value={value}\n      onChange={setValue}\n      highlighted\n    />\n  );\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit} highlighted>\n      <TimeInput\n        label="FormProvider Highlighted"\n        model="highlighted"\n        validators={{ required: true }}\n      />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"width"},"Width"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," prop to set the width of the input field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <TimeInput\n        label="Width Default"\n        model="width-1"\n        subText="Default Width"\n      />\n      <TimeInput\n        width="75%"\n        label="Width 75%"\n        model="width-2"\n        subText="Width Set To 75%"\n      />\n      <TimeInput\n        width="335px"\n        model="width-3"\n        label="Width 335px"\n        subText="Width Set To 335px"\n      />\n    </FormProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"enable-outside-scroll"},"Enable Outside Scroll"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableOutsideScroll"),"prop to",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to enable scroll outside of the time input component while the time picker is open. Default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = useState(null);\n\n  return (\n    <TimeInput\n      label="TimeInput Enable Outside Scroll"\n      value={value}\n      onChange={setValue}\n      enableOutsideScroll\n    />\n  );\n};\n'))),(0,a.kt)(d,{label:"Integration",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={TimeInput}\n  rows={[\n    {\n      name: 'format',\n      type: '\"12\" | \"24\"',\n      description: 'Sets to either 12 or 24 hour format',\n    },\n    {\n      name: 'minutesIncrement',\n      type: 'string',\n      description:\n        'Sets the minute increment of options that will available within the time picker',\n    },\n    {\n      name: 'label',\n      type: 'string',\n      description: 'Label for time input field',\n    },\n    {\n      name: 'isDisabled',\n      type: 'boolean',\n      description:\n        'Flag to enable/disable the input. If true, the input will be disabled',\n    },\n    {\n      name: 'value',\n      type: 'string | Date',\n      description:\n        'Value of the time input.  Must be a string in the format of \"hh:mm\" or a valid Date object',\n    },\n    {\n      name: 'onChange',\n      type: 'function',\n      description: 'Callback fired every time the value changes',\n    },\n    {\n      name: 'onFocus',\n      type: 'function',\n      description: 'Callback fired every time the component is focused',\n    },\n    {\n      name: 'onBlur',\n      type: 'function',\n      description: 'Callback fired every time the component is unfocused',\n    },\n    {\n      name: 'width',\n      type: 'string',\n      description: 'Width of the input field',\n    },\n    {\n      name: 'subText',\n      type: 'string',\n      description: 'Set the text displayed below the time input field',\n    },\n    {\n      name: 'errorMessage',\n      type: 'string',\n      description:\n        'Set the error message to be displayed below the time input field',\n    },\n    {\n      name: 'descriptorsDisplay',\n      type: '\"row\" | \"column\"',\n      description:\n        'Set the orientation of descriptor content located below the time input field',\n    },\n    {\n      name: 'hideLabel',\n      type: 'boolean',\n      description: 'Flag to show or hide label',\n    },\n    {\n      name: 'enableOutsideScroll',\n      type: 'boolean',\n      description: 'Flag to enable scrolling when the time picker is open',\n    },\n    {\n      name: 'inputLeftElement',\n      type: 'ReactNode',\n      description: 'Add element to left of inside time input',\n    },\n    {\n      name: 'inputRightElement',\n      type: 'ReactNode',\n      description: 'Add element to right of inside time input',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={TimeInput}\n  rows={[\n    {\n      name: 'time-input-container',\n      description: 'Container element',\n    },\n    {\n      name: 'time-input-picker-wrapper',\n      description: 'Time picker dialog wrapper',\n    },\n    {\n      name: 'time-input-root',\n      description: 'Time input root',\n    },\n    {\n      name: 'time-input-label',\n      description: 'Time input label',\n    },\n    {\n      name: 'time-input-wrapper',\n      description: 'Time input and icon wrapper',\n    },\n    {\n      name: 'time-input-left-element-wrapper',\n      description: 'Time input wrapper for left element',\n    },\n    {\n      name: 'time-input-left-element',\n      description: 'Time input content for left element',\n    },\n    {\n      name: 'time-input-right-element-wrapper',\n      description: 'Time input wrapper for right element',\n    },\n    {\n      name: 'time-input-right-element',\n      description: 'Time input content for right element',\n    },\n    {\n      name: 'time-input-input-container',\n      description: 'Time input container',\n    },\n    {\n      name: 'time-input-hour-input',\n      description: 'Hours text input',\n    },\n    {\n      name: 'time-input-minute-input',\n      description: 'Minutes text input',\n    },\n    {\n      name: 'time-input-am-pm-input',\n      description: 'AM/PM text input',\n    },\n    {\n      name: 'time-input-picker-button',\n      description: 'Time picker open button',\n    },\n    {\n      name: 'time-input-picker-button-icon',\n      description: 'Time picker open button icon',\n    },\n    {\n      name: 'time-input-descriptors',\n      description: 'Time input descriptors',\n    },\n    {\n      name: 'time-input-picker-container',\n      description: 'Time picker container',\n    },\n    {\n      name: 'time-input-picker-column-group-container',\n      description: 'Time picker column group container',\n    },\n    {\n      name: 'time-input-picker-column-container',\n      description: 'Time picker column container',\n    },\n    {\n      name: 'time-input-picker-separator',\n      description: 'Time picker colon separator',\n    },\n    {\n      name: 'time-input-picker-decrease-hours-button',\n      description: 'Time picker decrease hours button',\n    },\n    {\n      name: 'time-input-picker-increase-hours-button',\n      description: 'Time picker increase hours button',\n    },\n    {\n      name: 'time-input-picker-decrease-minutes-button',\n      description: 'Time picker decrease minutes button',\n    },\n    {\n      name: 'time-input-picker-increase-minutes-button',\n      description: 'Time picker increase minutes button',\n    },\n    {\n      name: 'time-input-picker-arrow-button',\n      description: 'Time picker arrow button',\n    },\n    {\n      name: 'time-input-picker-arrow-button-icon',\n      description: 'Time picker arrow button icon',\n    },\n    {\n      name: 'time-input-picker-hours-option-list',\n      description: 'Time picker hours option list',\n    },\n    {\n      name: 'time-input-picker-minutes-option-list',\n      description: 'Time picker minutes option list',\n    },\n    {\n      name: 'time-input-picker-option-list',\n      description: 'Time picker option list',\n    },\n    {\n      name: 'time-input-picker-option-item',\n      description: 'Time picker option list item',\n    },\n    {\n      name: 'time-input-picker-option-item-content',\n      description: 'Time picker option list item content',\n    },\n    {\n      name: 'time-input-picker-am-pm-toggle',\n      description: 'Time picker AM/PM toggle',\n    },\n    {\n      name: 'time-input-picker-am-tab',\n      description: 'Time picker AM toggle tab',\n    },\n    {\n      name: 'time-input-picker-pm-tab',\n      description: 'Time picker PM toggle tab',\n    },\n  ]}\n/>\n"))),(0,a.kt)(d,{label:"Accessibility",mdxType:"Tab"},(0,a.kt)("p",null,'The example below includes a time input field and a button that opens a time picker which implements the dialog design pattern. The dialog contains a list of hour and minute options, decrease/increase buttons and AM/PM toggle tabs that enable the user to select the desired time. Choosing from the time picker populates the time input field. When the dialog is opened, if the input field is empty, then a time of "1:00am" (12 hour format) or "00:00" (24 hour format) is set and the selected hour option is focused. Otherwise, the focus is placed on the hour option that matches the value of the time input field.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <TimeInput\n        model="time-input"\n        label="Accessibility Practice"\n        subText="Utilize the Keyboard Interaction table below to test the components accessibility."\n        validators={{ required: true }}\n      />\n    </FormProvider>\n  );\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<div style={{ marginTop: '25px' }}>\n  <Docs.AccessibilityTable\n    title=\"Choose Time Button\"\n    rows={[\n      {\n        name: 'Space',\n        description:\n          'Open the time picker dialog. Move focus to selected hour.',\n      },\n      {\n        name: 'Enter',\n        description:\n          'Open the time picker dialog. Move focus to selected hour.',\n      },\n    ]}\n  />\n</div>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  title=\"Time Picker Dialog\"\n  rows={[\n    {\n      name: 'Esc',\n      description:\n        'Closes the dialog and returns focus to the Choose Time button',\n    },\n    {\n      name: 'Tab',\n      description: 'Moves focus to next element in the dialog Tab sequence',\n    },\n    {\n      name: 'Shift + Tab',\n      description: 'Moves focus to previous element in the dialog Tab sequence',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  title=\"Time Picker Dialog: Increase/Decrease Buttons\"\n  rows={[\n    {\n      name: 'Space',\n      description:\n        'Change the hour or minute selection up or down by one option',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  title=\"Time Picker Dialog: Hour/Minutes List\"\n  rows={[\n    {\n      name: 'Enter',\n      description: 'Close the dialog, and move focus to the Choose Time button',\n    },\n    {\n      name: 'Up Arrow',\n      description:\n        'Moves focus and selection up one option from the currently selected hour or minute',\n    },\n    {\n      name: 'Down Arrow',\n      description:\n        'Moves focus and selection down one option from the currently selected hour or minute',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  title=\"Time Picker Dialog: AM/PM Toggle Tabs\"\n  rows={[\n    {\n      name: 'Enter',\n      description: 'Close the dialog, and move focus to the Choose Time button',\n    },\n    {\n      name: 'Arrow Right',\n      description: 'Moves focus and selection to the option to the right',\n    },\n    {\n      name: 'Arrow Left',\n      description: 'Moves focus and selection to the option to the left',\n    },\n  ]}\n/>\n"))))}h.isMDXComponent=!0}}]);