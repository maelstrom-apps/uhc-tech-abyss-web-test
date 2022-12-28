"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[3835],{30876:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?i.createElement(g,s(s({ref:n},c),{},{components:t})):i.createElement(g,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},66693:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i,r=t(7896),a=t(31461),s=(t(67294),t(30876)),o=["components"],l={id:"about",slug:"/about",title:"About Abyss",pagination_prev:"overview/overview",pagination_next:"overview/releases"},d=void 0,c={unversionedId:"overview/about",id:"overview/about",isDocsHomePage:!1,title:"About Abyss",description:"What is Abyss?",source:"@site/docs/overview/about.md",sourceDirName:"overview",slug:"/about",permalink:"/about",tags:[],version:"current",frontMatter:{id:"about",slug:"/about",title:"About Abyss",pagination_prev:"overview/overview",pagination_next:"overview/releases"},sidebar:"docs",previous:{title:"Overview",permalink:"/overview"},next:{title:"Releases",permalink:"/releases"}},u=[{value:"What is Abyss?",id:"what-is-abyss",children:[],level:2},{value:"How Abyss works",id:"how-abyss-works",children:[],level:2},{value:"We support adoption",id:"we-support-adoption",children:[{value:"We host working sessions and meetups.",id:"we-host-working-sessions-and-meetups",children:[],level:5},{value:"Our components and elements are regularly maintained.",id:"our-components-and-elements-are-regularly-maintained",children:[],level:5},{value:"We provide support for our users.",id:"we-provide-support-for-our-users",children:[],level:5}],level:2},{value:"Guiding Principles",id:"guiding-principles",children:[],level:2},{value:"We maintain assets",id:"we-maintain-assets",children:[{value:"Overview",id:"overview",children:[],level:5},{value:"Component Library",id:"component-library",children:[],level:5},{value:"Design Kit",id:"design-kit",children:[],level:5},{value:"Brand",id:"brand",children:[],level:5}],level:2},{value:"The Abyss Team",id:"the-abyss-team",children:[],level:2}],p=(i="ExitLink",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),m={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-abyss"},"What is Abyss?"),(0,s.kt)("p",null,"Abyss is a design system containing a Design Kit and a Component Library, all published on this Abyss documentation site. The design system includes a number of pre-built, reusable assets including components, hooks and theming guidelines that allow our users to build and maintain products faster. By opting into Abyss, product teams minimize time spent designing and building, letting them focus on addressing specific client use cases."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"() => {\n  const src = utils.useBaseUrl('/img/graphics/whatis.svg');\n  return (\n    <Box color=\"none\" style={{ borderRadius: '5px' }} padding=\"$xl\">\n      <img src={src} />\n    </Box>\n  );\n};\n")),(0,s.kt)("h2",{id:"how-abyss-works"},"How Abyss works"),(0,s.kt)("p",null,"This diagram showcases the five-step workflow the Abyss team works through to create and develop reusable UI components. A Design System contains reusable UI components that helps teams build complex, durable and accessible user interfaces across projects. Since both designers and developers contribute to Abyss, the design system serves as a single source of truth across the organization's common components."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"() => {\n  const src = utils.useBaseUrl('/img/graphics/workflow.svg');\n  return (\n    <Box color=\"none\" style={{ borderRadius: '5px' }} padding=\"$xl\">\n      <img src={src} />\n    </Box>\n  );\n};\n")),(0,s.kt)("h2",{id:"we-support-adoption"},"We support adoption"),(0,s.kt)("h5",{id:"we-host-working-sessions-and-meetups"},"We host working sessions and meetups."),(0,s.kt)("p",null,"The Abyss team hosts regular working sessions for designers and developers to interact with the design system, ask questions and collaborate on changing elements."),(0,s.kt)("h5",{id:"our-components-and-elements-are-regularly-maintained"},"Our components and elements are regularly maintained."),(0,s.kt)("p",null,"The Abyss team creates, supports and maintains our elements, and offers triage support for our user base. Teams can use these well-defined elements, and keep up with changes in our Release notes."),(0,s.kt)("h5",{id:"we-provide-support-for-our-users"},"We provide support for our users."),(0,s.kt)("p",null,"The Abyss team engages with our users primarily through our ",(0,s.kt)("a",{parentName:"p",href:"/contact-us"},"Contact Us")," form. A member of the Abyss team responds to all issues, and when a member of your team joins the Abyss Admiral team, they'll be able to contribute. On an ad hoc basis, there are also tutorials and onboarding sessions available for new users."),(0,s.kt)("h2",{id:"guiding-principles"},"Guiding Principles"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"() => {\n  const guidingList = [\n    {\n      id: 1,\n      icon: 'chat',\n      title: 'Abyss puts the user first.',\n      description:\n        'A dedicated design team keeps our end users front of mind through usability testing and peer reviews.',\n    },\n    {\n      id: 2,\n      icon: 'network',\n      title: 'Abyss is flexible.',\n      description:\n        'Abyss enables teams to leverage reusable and customizable backend components, keeping their products lean and easy to maintain.',\n    },\n    {\n      id: 3,\n      icon: 'care',\n      title: 'Abyss is inclusive.',\n      description:\n        'Users of all abilities can use Abyss components once they are reviewed from a design and development standard, following WCAG guidelines and A11y best practices.',\n    },\n    {\n      id: 4,\n      icon: 'bar_chart',\n      title: 'Abyss builds consistency.',\n      description:\n        'As more teams adopt the use of Abyss, the use of repeatable patterns and functionality create a friendly and familiar experience for our end users.',\n    },\n  ];\n  return (\n    <Grid columns={2}>\n      {guidingList.map((item, index) => {\n        return (\n          <Grid.Col key={index} span={1}>\n            <Box color=\"$white\" padding=\"$xs\">\n              <Card.Section>\n                <IconBrand\n                  brand=\"uhc\"\n                  color=\"$primary1\"\n                  icon={item.icon}\n                  size={50}\n                />\n              </Card.Section>\n\n              <Heading\n                offset={3}\n                size=\"$lg\"\n                fontWeight=\"bold\"\n                textAlign=\"center\"\n              >\n                {item.title}\n              </Heading>\n              <Card.Section style={{ textAlign: 'center' }}>\n                <Text size=\"$md\">{item.description}</Text>\n              </Card.Section>\n            </Box>\n          </Grid.Col>\n        );\n      })}\n    </Grid>\n  );\n};\n")),(0,s.kt)("h2",{id:"we-maintain-assets"},"We maintain assets"),(0,s.kt)("h5",{id:"overview"},"Overview"),(0,s.kt)("p",null,"At its core, Abyss contains elements, components and patterns for how to design and build with them. Beyond this core is a distributed ecosystem of sites that adopt and utilize the Abyss design system within our organization and among our partners."),(0,s.kt)("h5",{id:"component-library"},"Component Library"),(0,s.kt)("p",null,"Abyss supports React-based code implementation. The library is continually evolving and adapting to our clients needs, so learn more about how you can contact us for questions, and requests. If you're a developer, learn about installing and implementing Abyss in our ",(0,s.kt)("a",{parentName:"p",href:"/developers/getting-started"},"Developer Toolkit"),"."),(0,s.kt)("h5",{id:"design-kit"},"Design Kit"),(0,s.kt)("p",null,"We maintain the ",(0,s.kt)(p,{href:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1",mdxType:"ExitLink"},"Abyss Design Kit")," on ",(0,s.kt)(p,{href:"https://www.figma.com/",mdxType:"ExitLink"},"Figma")," containing Abyss components, and design patterns, foundations and guidelines. As an internal UHG employee, you have access to all Abyss Design Kit assets and can pull them directly into your products."),(0,s.kt)("h5",{id:"brand"},"Brand"),(0,s.kt)("p",null,"The brand guidance begins with the foundations in the Brand Center - ",(0,s.kt)(p,{href:"https://brand.uhc.com/",mdxType:"ExitLink"},"UHC"),"/",(0,s.kt)(p,{href:"https://brand.optum.com/",mdxType:"ExitLink"},"Optum")," brand. For questions regarding branding, reach out to the brand team at: ",(0,s.kt)("a",{parentName:"p",href:"mailto:brand.team@uhc.com"},"brand.team@uhc.com")," or ",(0,s.kt)("a",{parentName:"p",href:"mailto:optumbrand@optum.com"},"optumbrand@optum.com"),"."),(0,s.kt)("h2",{id:"the-abyss-team"},"The Abyss Team"),(0,s.kt)("p",null,"To contact the team for support and questions, check out our ",(0,s.kt)("a",{parentName:"p",href:"/contact-us"},"Contact Us")," page."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"() => {\n  const teamList = [\n    {\n      image: 'surendra-bandi.jpg',\n      name: 'Surendra Bandi',\n      title: 'Principal Engineer',\n    },\n    {\n      image: 'john-hollow.jpg',\n      name: 'John Hollow',\n      title: 'Lead Architect',\n    },\n    {\n      image: 'bradley-hennen.jpg',\n      name: 'Bradley Hennen',\n      title: 'Lead Engineer',\n    },\n    {\n      image: 'denys-zayets.jpg',\n      name: 'Denys Zayets',\n      title: 'Lead UX Designer',\n    },\n    {\n      image: 'becca-jackelen.jpg',\n      name: 'Becca Hanson Jackelen',\n      title: 'Sr Product Manager',\n    },\n    {\n      image: 'matt-miller.jpg',\n      name: 'Matt Miller',\n      title: 'Product Delivery Manager',\n    },\n    {\n      image: 'paul-oxborrow.jpg',\n      name: 'Paul Oxborrow',\n      title: 'Prin A11y Engineer',\n    },\n    {\n      image: 'megan-posusta.jpg',\n      name: 'Megan Posusta',\n      title: 'Product Manager',\n    },\n    {\n      image: 'eliana-betancur.jpg',\n      name: 'Eliana Betancur',\n      title: 'UX Engineer',\n    },\n    {\n      image: 'jess-wolff.jpg',\n      name: 'Jessica Wolff',\n      title: 'UX Engineer',\n    },\n    {\n      image: 'tony-braasch.jpg',\n      name: 'Tony Braasch',\n      title: 'Frontend Engineer',\n    },\n    {\n      image: 'scott-houser.jpg',\n      name: 'Scott Houser',\n      title: 'Frontend Engineer',\n    },\n    {\n      image: '',\n      name: 'Sharan Kandagatla',\n      title: 'Frontend Engineer',\n    },\n  ];\n\n  return (\n    <Flex justify=\"flex-start\" alignItems=\"stretch\" alignContent=\"center\">\n      {teamList.map((item) => {\n        const path = item.image ? `img/team/${item.image}` : `img/logo.png`;\n        const src = utils.useBaseUrl(path);\n\n        return (\n          <Card\n            key={item.name}\n            css={{\n              marginRight: '$md',\n              marginBottom: '$md',\n              marginTop: '$lg',\n              justifyContent: 'center',\n              display: 'flex',\n              flexDirection: 'row',\n              justifyContent: 'center',\n              alignItems: 'center',\n              padding: '$sm',\n            }}\n          >\n            <Layout.Group>\n              <img\n                src={src}\n                style={{\n                  width: '50px',\n                  borderRadius: '100%',\n                  margin: '0 auto',\n                }}\n              />\n              <div>\n                <Label size=\"$md\">{item.name}</Label>\n                <Text>{item.title}</Text>\n              </div>\n            </Layout.Group>\n          </Card>\n        );\n      })}\n      <Popover\n        title=\"Previous contributors\"\n        content={\n          <ul>\n            <li>- Andy Li</li>\n            <li>- Anees Azeez</li>\n            <li>- Benson Nyakango</li>\n            <li>- Bishesh Karki</li>\n            <li>- Brandon Schenck</li>\n            <li>- Lindsay Thron</li>\n            <li>- Michael McGillicuddy</li>\n            <li>- Nicki Rios</li>\n            <li>- Oscar Palomino</li>\n            <li>- Shilpa Asranna</li>\n            <li>- Teja Kankanala</li>\n            <li>- Xander Nelson</li>\n          </ul>\n        }\n        position=\"right\"\n        showClose={false}\n      >\n        <Card\n          css={{\n            'abyss-card-root': {\n              marginBottom: '$md',\n              marginTop: '$lg',\n              justifyContent: 'center',\n              display: 'flex',\n              flexDirection: 'row',\n              justifyContent: 'center',\n              alignItems: 'center',\n              padding: '$lg',\n            },\n          }}\n        >\n          <Label size=\"md\">+ more</Label>\n        </Card>\n      </Popover>\n    </Flex>\n  );\n};\n")))}g.isMDXComponent=!0}}]);