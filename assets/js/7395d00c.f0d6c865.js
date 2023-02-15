"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[5597],{30727:(n,e,i)=>{i.r(e),i.d(e,{contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var o,t=i(7896),r=i(31461),a=(i(2784),i(3905)),s=["components"],d={id:"grid",category:"Layout",title:"Grid",description:"Provides a brief message about the app processes.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A327",pagination_prev:"web/ui/floating-section",pagination_next:"web/ui/layout"},l=void 0,p={unversionedId:"web/ui/grid",id:"web/ui/grid",isDocsHomePage:!1,title:"Grid",description:"Provides a brief message about the app processes.",source:"@site/docs/web/ui/Grid.md",sourceDirName:"web/ui",slug:"/web/ui/grid",permalink:"/web/ui/grid",tags:[],version:"current",frontMatter:{id:"grid",category:"Layout",title:"Grid",description:"Provides a brief message about the app processes.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A327",pagination_prev:"web/ui/floating-section",pagination_next:"web/ui/layout"},sidebar:"docs",previous:{title:"FloatingSection",permalink:"/web/ui/floating-section"},next:{title:"Layout",permalink:"/web/ui/layout"}},c=[{value:"Live Example",id:"live-example",children:[],level:2},{value:"Unresponsive (colspan)",id:"unresponsive-colspan",children:[],level:2},{value:"Unresponsive (percent)",id:"unresponsive-percent",children:[],level:2},{value:"Responsive (colspan)",id:"responsive-colspan",children:[],level:2},{value:"Responsive (percent)",id:"responsive-percent",children:[],level:2}],g=(o="Tab",function(n){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}),m={toc:c};function u(n){var e=n.components,i=(0,r.Z)(n,s);return(0,a.kt)("wrapper",(0,t.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(g,{label:"Overview",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Grid } from '@abyss/web/ui/Grid';\n")),(0,a.kt)("h2",{id:"live-example"},"Live Example"),(0,a.kt)("p",null,"Resizing the width of the screen changes the column width, making Grid responsive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Grid>\n  <Grid.Col span={{ xs: 9, md: 9, lg: 6, xl: 6 }}>\n    <Heading>Better Data With Seamless Integrations</Heading>\n    <Text>\n      Find, Integrate and Manage your United Healthcare APIs all in one place.\n      Save time and money by getting more useful information on your United\n      Healthcare members integrated with your current workflows.\n    </Text>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 3, md: 3, lg: 6, xl: 6 }}></Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 6, xl: 6 }}>\n    <Card>\n      <Card.Section>\n        <IconBrand color="$primary1" icon="desktop" size={48} />\n        <Heading offset={2} size="lg" fontWeight="bold">\n          Admin\n        </Heading>\n        <Text size="$sm">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n          eiusmod tempor incididunt\u2026\n        </Text>\n      </Card.Section>\n      <Card.Section>\n        <Link href="/developers/getting-started">Link Button</Link>\n      </Card.Section>\n    </Card>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 6, xl: 6 }}>\n    <Card>\n      <Card.Section>\n        <IconBrand color="$primary1" icon="bar_chart" size={48} />\n        <Heading offset={2} size="lg" fontWeight="bold">\n          Analytics\n        </Heading>\n        <Text size="$sm">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n          eiusmod tempor incididunt\u2026\n        </Text>\n      </Card.Section>\n      <Card.Section>\n        <Link href="/developers/getting-started">Link Button</Link>\n      </Card.Section>\n    </Card>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 6, xl: 6 }}>\n    <Card>\n      <Card.Section>\n        <IconBrand color="$primary1" icon="heart" size={48} />\n        <Heading offset={2} size="lg" fontWeight="bold">\n          Clinical\n        </Heading>\n        <Text size="$sm">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n          eiusmod tempor incididunt\u2026\n        </Text>\n      </Card.Section>\n      <Card.Section>\n        <Link href="/developers/getting-started">Link Button</Link>\n      </Card.Section>\n    </Card>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 6, xl: 6 }}>\n    <Card>\n      <Card.Section>\n        <IconBrand color="$primary1" icon="piggy_bank" size={48} />\n        <Heading offset={2} size="lg" fontWeight="bold">\n          Financial\n        </Heading>\n        <Text size="$sm">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n          eiusmod tempor incididunt\u2026\n        </Text>\n      </Card.Section>\n      <Card.Section>\n        <Link href="/developers/getting-started">Link Button</Link>\n      </Card.Section>\n    </Card>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 12, lg: 12, xl: 12 }}>\n    <Heading>Newest API\'s</Heading>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 6, xl: 6 }}>\n    <Card>\n      <Card.Section>\n        <Heading offset={2} size="lg" fontWeight="bold">\n          Claims\n        </Heading>\n        <Text>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n          eiusmod tempor incididunt\u2026\n        </Text>\n      </Card.Section>\n      <Card.Section>\n        <Link href="/developers/getting-started">Link Button</Link>\n      </Card.Section>\n    </Card>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 6, xl: 6 }}>\n    <Card>\n      <Card.Section>\n        <Heading offset={2} size="lg" fontWeight="bold">\n          Services\n        </Heading>\n        <Text>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n          eiusmod tempor incididunt\u2026\n        </Text>\n      </Card.Section>\n      <Card.Section>\n        <Link href="/developers/getting-started">Link Button</Link>\n      </Card.Section>\n    </Card>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("h2",{id:"unresponsive-colspan"},"Unresponsive (colspan)"),(0,a.kt)("p",null,"Regardless of viewport width, the span will remain the same for these columns. Change the span by using ","[column spans]"," of the parent container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Grid>\n  <Grid.Col span={12}>\n    <Box color="$tint3">\n      <Heading offset={5}>12</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={3}>\n    <Box color="$tint3">\n      <Heading offset={5}>3</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={3}>\n    <Box color="$tint3">\n      <Heading offset={5}>3</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={3}>\n    <Box color="$tint3">\n      <Heading offset={5}>3</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={3}>\n    <Box color="$tint3">\n      <Heading offset={5}>3</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={6}>\n    <Box color="$tint3">\n      <Heading offset={5}>6</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={6}>\n    <Box color="$tint3">\n      <Heading offset={5}>6</Heading>\n    </Box>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("h2",{id:"unresponsive-percent"},"Unresponsive (percent)"),(0,a.kt)("p",null,"Regardless of viewport width, the span will remain the same for these columns. Change the span by using percentages of the parent container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Grid>\n  <Grid.Col span="100%">\n    <Box color="$tint3">\n      <Heading offset={5}>100%</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span="33%">\n    <Box color="$tint3">\n      <Heading offset={5}>33%</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span="33%">\n    <Box color="$tint3">\n      <Heading offset={5}>33%</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span="33%">\n    <Box color="$tint3">\n      <Heading offset={5}>33%</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span="20%">\n    <Box color="$tint3">\n      <Heading offset={5}>20%</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span="20%">\n    <Box color="$tint3">\n      <Heading offset={5}>20%</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span="20%">\n    <Box color="$tint3">\n      <Heading offset={5}>20%</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span="20%">\n    <Box color="$tint3">\n      <Heading offset={5}>20%</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span="20%">\n    <Box color="$tint3">\n      <Heading offset={5}>20%</Heading>\n    </Box>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("h2",{id:"responsive-colspan"},"Responsive (colspan)"),(0,a.kt)("p",null,"At each breakpoint, these columns will resize the span based on colspan. Breakpoints are ",(0,a.kt)("inlineCode",{parentName:"p"},"xs, sm, md, lg, and xl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Grid>\n  <Grid.Col span={{ xs: 12, md: 6 }}>\n    <Box color="$tint3">\n      <Heading offset={5}>Responsive</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6 }}>\n    <Box color="$tint3">\n      <Heading offset={5}>Responsive</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 3, xl: 3 }}>\n    <Box color="$tint3">\n      <Text>Responsive</Text>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 3, xl: 3 }}>\n    <Box color="$tint3">\n      <Text>Responsive</Text>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 3, xl: 3 }}>\n    <Box color="$tint3">\n      <Text>Responsive</Text>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: 12, md: 6, lg: 3, xl: 3 }}>\n    <Box color="$tint3">\n      <Text>Responsive</Text>\n    </Box>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("h2",{id:"responsive-percent"},"Responsive (percent)"),(0,a.kt)("p",null,"At each breakpoint, these columns will resize the span based on percentage of the parent container. Breakpoints are ",(0,a.kt)("inlineCode",{parentName:"p"},"xs, sm, md, lg, and xl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Grid>\n  <Grid.Col span={{ xs: '100%', md: '50%' }}>\n    <Box color=\"$tint3\">\n      <Heading offset={5}>Responsive</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: '100%', md: '50%' }}>\n    <Box color=\"$tint3\">\n      <Heading offset={5}>Responsive</Heading>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: '100%', md: '50%', lg: '25%', xl: '33%' }}>\n    <Box color=\"$tint3\">\n      <Text>Responsive</Text>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: '100%', md: '50%', lg: '25%', xl: '33%' }}>\n    <Box color=\"$tint3\">\n      <Text>Responsive</Text>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: '100%', md: '50%', lg: '25%', xl: '33%' }}>\n    <Box color=\"$tint3\">\n      <Text>Responsive</Text>\n    </Box>\n  </Grid.Col>\n  <Grid.Col span={{ xs: '100%', md: '50%', lg: '25%', xl: '33%' }}>\n    <Box color=\"$tint3\">\n      <Text>Responsive</Text>\n    </Box>\n  </Grid.Col>\n</Grid>\n"))),(0,a.kt)(g,{label:"Integration",mdxType:"Tab"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Grid}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the grid component',\n    },\n    {\n      name: 'columns',\n      type: 'number',\n      description:\n        'XL and L are 12-column, MD is 9-column, SM is 6-column and XS is 4-column.',\n    },\n    {\n      name: 'space',\n      type: 'number | shape',\n      description: 'Automatically updates based on screen size.',\n    },\n    {\n      name: 'align',\n      type: 'string',\n      description: '',\n    },\n    {\n      name: 'justify',\n      type: 'string',\n      description: '',\n    },\n    {\n      name: 'span',\n      type: 'number | string | shape',\n      description: 'Handles the span size of the grid',\n    },\n    {\n      name: 'noWrap',\n      type: 'boolean',\n      default: 'false',\n      description: 'turns wrap on and off',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Grid.Col}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the grid col component',\n    },\n    {\n      name: 'span',\n      type: 'number | string | shape',\n      description: 'Handles the span size of the column',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Grid}\n  rows={[\n    {\n      name: 'grid',\n      description: 'Grid root element',\n    },\n  ]}\n/>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Grid.Col}\n  rows={[\n    {\n      name: 'grid-col',\n      description: 'Grid column element',\n    },\n  ]}\n/>\n"))))}u.isMDXComponent=!0},3905:(n,e,i)=>{i.d(e,{Zo:()=>p,kt:()=>m});var o=i(2784);function t(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function r(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,o)}return i}function a(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){t(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function s(n,e){if(null==n)return{};var i,o,t=function(n,e){if(null==n)return{};var i,o,t={},r=Object.keys(n);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||(t[i]=n[i]);return t}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}var d=o.createContext({}),l=function(n){var e=o.useContext(d),i=e;return n&&(i="function"==typeof n?n(e):a(a({},e),n)),i},p=function(n){var e=l(n.components);return o.createElement(d.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(n,e){var i=n.components,t=n.mdxType,r=n.originalType,d=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),g=l(i),m=t,u=g["".concat(d,".").concat(m)]||g[m]||c[m]||r;return i?o.createElement(u,a(a({ref:e},p),{},{components:i})):o.createElement(u,a({ref:e},p))}));function m(n,e){var i=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var r=i.length,a=new Array(r);a[0]=g;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s.mdxType="string"==typeof n?n:t,a[1]=s;for(var l=2;l<r;l++)a[l]=i[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}g.displayName="MDXCreateElement"}}]);