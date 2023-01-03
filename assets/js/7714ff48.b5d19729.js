"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[7759],{88151:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a,r=t(7896),o=t(31461),i=(t(2784),t(3905)),l=["components"],s={id:"card",category:"Content",title:"Card",description:"A single or multi-section container used to display content related to a single subject.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1181",pagination_prev:"web/ui/accordion",pagination_next:"web/ui/carousel"},c=void 0,d={unversionedId:"web/ui/card",id:"web/ui/card",isDocsHomePage:!1,title:"Card",description:"A single or multi-section container used to display content related to a single subject.",source:"@site/docs/web/ui/Card.md",sourceDirName:"web/ui",slug:"/web/ui/card",permalink:"/web/ui/card",tags:[],version:"current",frontMatter:{id:"card",category:"Content",title:"Card",description:"A single or multi-section container used to display content related to a single subject.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1181",pagination_prev:"web/ui/accordion",pagination_next:"web/ui/carousel"},sidebar:"docs",previous:{title:"Accordion",permalink:"/web/ui/accordion"},next:{title:"Carousel",permalink:"/web/ui/carousel"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Section",id:"section",children:[],level:2},{value:"Size",id:"size",children:[],level:2},{value:"Collapse",id:"collapse",children:[],level:2},{value:"Inner Card",id:"inner-card",children:[],level:2},{value:"Sticky",id:"sticky",children:[],level:2},{value:"Custom Examples",id:"custom-examples",children:[],level:2}],u=(a="Tab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:p};function g(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(u,{label:"Overview",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Card } from '@abyss/web/ui/Card';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Card',\n  inputs: [\n    {\n      prop: 'header',\n      type: 'string',\n    },\n    {\n      prop: 'size',\n      type: 'select',\n      options: [\n        { label: 'medium', value: 'medium' },\n        { label: 'small', value: 'small' },\n      ],\n    },\n    {\n      prop: 'collapse',\n      type: 'boolean',\n    },\n  ]\n}\n\n<Card header=\"Hello Title\">\n  <Card.Section>\n    Hello section\n  </Card.Section>\n</Card>\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Box color="$white">\n    <Label>Here\'s a base card container</Label>\n    <Text>Wrapping any component</Text>\n  </Box>\n</Card>\n')),(0,i.kt)("h2",{id:"section"},"Section"),(0,i.kt)("p",null,"Card can be implemented with any combination of sections."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  return (\n    <Card header="Hello title">\n      <Card.Section>Hello section</Card.Section>\n      <Card.Section>Hello section</Card.Section>\n    </Card>\n  );\n};\n')),(0,i.kt)("h2",{id:"size"},"Size"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," property to make the card size smaller, The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"medium"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  return (\n    <Layout.Group>\n      <Card header="Medium Size Card">\n        <Card.Section>\n          A card can be used to display content related to a single subject. The\n          content can consist of multiple elements of varying types and sizes.\n        </Card.Section>\n      </Card>\n      <Card size="small" header="Small Size Card">\n        <Card.Section>\n          A card can be used to display content related to a single subject. The\n          content can consist of multiple elements of varying types and sizes.\n        </Card.Section>\n      </Card>\n    </Layout.Group>\n  );\n};\n')),(0,i.kt)("h2",{id:"collapse"},"Collapse"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"collapse")," prop to make card component collapsible. The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  return (\n    <Card header="Card Collapse" collapse>\n      <Card.Section>\n        A card can be used to display content related to a single subject. The\n        content can consist of multiple elements of varying types and sizes.\n      </Card.Section>\n    </Card>\n  );\n};\n')),(0,i.kt)("h2",{id:"inner-card"},"Inner Card"),(0,i.kt)("p",null,"Cards can be nesting within one another to further break down the content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  return (\n    <Card header=\"Standard Card\">\n      <Card.Section>\n        <Card\n          header=\"Inner Card\"\n          css={{\n            'abyss-card-title': {\n              minHeight: 60,\n              color: '$gray9',\n              fontSize: '$sm',\n            },\n          }}\n        >\n          <Card.Section\n            css={{ 'abyss-card-section': { color: '$gray9', fontSize: '$sm' } }}\n          >\n            A card can be used to display content related to a single subject.\n            The content can consist of multiple elements of varying types and\n            sizes.\n          </Card.Section>\n        </Card>\n        <Card\n          header=\"Inner Card\"\n          css={{\n            'abyss-card-title': {\n              minHeight: 60,\n              color: '$gray9',\n              fontSize: '$sm',\n            },\n          }}\n        >\n          <Card.Section\n            css={{ 'abyss-card-section': { color: '$gray9', fontSize: '$sm' } }}\n          >\n            A card can be used to display content related to a single subject.\n            The content can consist of multiple elements of varying types and\n            sizes.\n          </Card.Section>\n        </Card>\n      </Card.Section>\n    </Card>\n  );\n};\n")),(0,i.kt)("h2",{id:"sticky"},"Sticky"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"FloatingSection")," component to create a sticky section. Sticky sections will not work when ",(0,i.kt)("inlineCode",{parentName:"p"},"collapse")," is active."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const menuItems = [\n    {\n      title: 'New Window',\n      onClick: () => {\n        console.log('Clicked New Window!');\n      },\n    },\n    {\n      title: 'Open New Tab',\n      onClick: () => {\n        console.log('Open New Tab!');\n      },\n    },\n    {\n      title: 'Save As...',\n      onClick: () => {\n        console.log('Save As...');\n      },\n      icon: <IconMaterial icon=\"save\" />,\n    },\n  ];\n  const form = useForm({});\n\n  const onSubmit = (data) => {\n    console.log('data', data);\n  };\n\n  const options = [\n    { value: 'react', label: 'React' },\n    { value: 'ng', label: 'Angular' },\n    { value: 'svelte', label: 'Svelte' },\n    { value: 'vue', label: 'Vue' },\n    { value: 'alpine', label: 'Alpine' },\n    { value: 'ember', label: 'Ember' },\n    { value: 'stimulus', label: 'Stimulus' },\n    { value: 'preact', label: 'Preact' },\n  ];\n\n  const Header = (\n    <div\n      style={{\n        width: '100%',\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'space-between',\n      }}\n    >\n      Fill Out Form\n      <DropdownMenu\n        hideLabel\n        after={<IconMaterial icon=\"more_vert\" />}\n        menuItems={menuItems}\n      />\n    </div>\n  );\n\n  return (\n    <Card header={Header}>\n      <Card.Section>\n        <FormProvider state={form} onSubmit={onSubmit} highlighted>\n          <Layout.Stack alignItems=\"left\" grow>\n            <SelectInput\n              label=\"Select List Usage\"\n              model=\"selectlist\"\n              placeholder=\"Select List Form Provider\"\n              options={options}\n              validators={{ required: true }}\n            />\n            <SelectInputMulti\n              label=\"Your favorite framework/library\"\n              placeholder=\"Pick one\"\n              model=\"frameworks\"\n              isSearchable\n              options={options}\n              validators={{ required: true }}\n            />\n            <DateInput model=\"test-date\" validators={{ required: true }} />\n            <TextInput\n              label=\"TextInput Form\"\n              placeholder=\"Form\"\n              model=\"textForm\"\n              isClearable\n              validators={{ required: true }}\n            />\n            <DateInputRange\n              model=\"test-form-date\"\n              validators={{ required: true }}\n            />\n            <TextInputArea\n              label=\"TextInputArea\"\n              model=\"textAreaForm\"\n              validators={{ required: true }}\n            />\n          </Layout.Stack>\n        </FormProvider>\n      </Card.Section>\n      <FloatingSection\n        css={{\n          'abyss-floating-section-root': {\n            minHeight: '72px',\n            display: 'flex',\n            alignItems: 'center',\n            padding: '$md',\n            justifyContent: 'space-around',\n          },\n        }}\n      >\n        <DropdownMenu\n          hideLabel\n          after={<IconMaterial icon=\"more_horiz\" />}\n          menuItems={menuItems}\n        />\n        <Divider orientation=\"vertical\" height={40} color=\"$gray3\" />\n        <Link\n          onClick={() => {\n            console.log('Delete Section!');\n          }}\n        >\n          <IconMaterial icon=\"delete_forever\" />\n        </Link>\n        <Divider orientation=\"vertical\" height={40} color=\"$gray3\" />\n        <Button\n          onClick={() => {\n            form.reset();\n          }}\n        >\n          Reset\n        </Button>\n      </FloatingSection>\n    </Card>\n  );\n};\n")),(0,i.kt)("h2",{id:"custom-examples"},"Custom Examples"),(0,i.kt)("p",null,"Customize a card by adding components inside of a section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  return (\n    <Card collapse header="Word of the Day">\n      <Card.Section>\n        <IconMaterial icon="home" size={48} />\n        <Heading size="lg" fontWeight="bold">\n          be-nev-o-lent\n        </Heading>\n        <Text>Adjective</Text>\n        <br />\n        <Text size="sm">well meaning and kindly. "a benevolent smile"</Text>\n      </Card.Section>\n      <Card.Section>\n        <Link>Learn More</Link>\n      </Card.Section>\n    </Card>\n  );\n};\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  return (\n    <Card\n      css={{\n        \'abyss-card-root\': {\n          width: \'max-content\',\n        },\n      }}\n    >\n      <Card.Section\n        css={{\n          \'abyss-card-section\': {\n            padding: \'0px\',\n          },\n        }}\n      >\n        <Box\n          height="300px"\n          width="342px"\n          padding="0px"\n          css={{\n            \'abyss-box-root\': {\n              backgroundImage: `url(${utils.useBaseUrl(\n                \'img/graphics/card-image-example.png\'\n              )})`,\n              backgroundRepeat: \'no-repeat\',\n              backgroundSize: \'cover\',\n            },\n          }}\n        />\n      </Card.Section>\n      <Card.Section>\n        <Layout.Group space={20}>\n          <IconMaterial icon="star" size={75} />\n          <Layout.Stack alignItems="left">\n            <Text size="md" fontWeight="$semibold">\n              Card Title\n            </Text>\n            <Text size="sm" fontWeight="$normal" color="$gray7">\n              Card Description\n            </Text>\n          </Layout.Stack>\n        </Layout.Group>\n      </Card.Section>\n      <Card.Section\n        css={{\n          \'abyss-card-section\': { padding: \'$sm 0\' },\n        }}\n      >\n        <Layout.Group\n          css={{\n            \'abyss-layout-group\': {\n              justifyContent: \'space-evenly\',\n            },\n          }}\n        >\n          <Link\n            onClick={() => {\n              console.log(\'Bookmark Section!\');\n            }}\n          >\n            <IconMaterial icon="bookmark" />\n          </Link>\n          <Divider\n            orientation="vertical"\n            height={40}\n            color="$gray3"\n            margin="0"\n          />\n          <Link\n            onClick={() => {\n              console.log(\'Delete Section!\');\n            }}\n          >\n            <IconMaterial icon="delete_forever" />\n          </Link>\n          <Divider\n            orientation="vertical"\n            height={40}\n            color="$gray3"\n            margin="0"\n          />\n          <Link\n            onClick={() => {\n              console.log(\'Edit Section!\');\n            }}\n          >\n            <IconMaterial icon="edit" />\n          </Link>\n        </Layout.Group>\n      </Card.Section>\n    </Card>\n  );\n};\n'))),(0,i.kt)(u,{label:"Integration",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Card}\n  rows={[\n    {\n      name: 'fullHeight',\n      type: 'boolean',\n      description: 'Flag to set card to full height',\n    },\n    {\n      name: 'header',\n      type: 'String | ReactNode',\n      description: 'Header of card component',\n    },\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'Text for the main card component',\n    },\n    {\n      name: 'size',\n      type: \"'medium' | 'small'\",\n      description: 'Size of card component',\n    },\n    {\n      name: 'collapse',\n      type: 'boolean',\n      description: 'To make card collapsible',\n    },\n    {\n      name: 'defaultIsOpen',\n      type: 'boolean',\n      description:\n        'Set the default state of collapse isOpen when collapse is active',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Card.Section}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the Card component',\n    },\n    {\n      name: 'backgroundColor',\n      type: 'string',\n      description: 'Set the background color of the card',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Card.Header}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the Card component',\n    },\n    {\n      name: 'fullHeight',\n      type: 'boolean',\n      description: 'Flag to set card to full height',\n    },\n    {\n      name: 'color',\n      type: 'string',\n      description: 'Set the color of the card content',\n    },\n    {\n      name: 'backgroundColor',\n      type: 'string',\n      description: 'Set the background color of the card',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Card}\n  rows={[\n    {\n      name: 'card-root',\n      description: 'Card root element',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Card.Section}\n  rows={[\n    {\n      name: 'card-section',\n      description: 'Card body element',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Card.Header}\n  rows={[\n    {\n      name: 'card-title',\n      description: 'Card header element',\n    },\n    {\n      name: 'card-collapse-button-container',\n      description: 'Card collapse button container',\n    },\n    {\n      name: 'card-collapse-button',\n      description: 'Card collapse button',\n    },\n    {\n      name: 'card-collapse-button-icon',\n      description: 'Card collapse button icon',\n    },\n  ]}\n/>\n"))))}g.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);