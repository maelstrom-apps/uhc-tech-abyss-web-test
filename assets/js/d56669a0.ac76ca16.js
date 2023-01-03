"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[5145],{40462:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var o=t(7896),a=t(31461),i=(t(2784),t(3905)),r=["components"],l={id:"page-header",category:"Content",title:"PageHeader",description:"Used to create a page header.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=6132%3A24108",pagination_prev:"web/ui/page-footer",pagination_next:"web/ui/step-indicator"},s=void 0,d={unversionedId:"web/ui/page-header",id:"web/ui/page-header",isDocsHomePage:!1,title:"PageHeader",description:"Used to create a page header.",source:"@site/docs/web/ui/PageHeader.md",sourceDirName:"web/ui",slug:"/web/ui/page-header",permalink:"/web/ui/page-header",tags:[],version:"current",frontMatter:{id:"page-header",category:"Content",title:"PageHeader",description:"Used to create a page header.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=6132%3A24108",pagination_prev:"web/ui/page-footer",pagination_next:"web/ui/step-indicator"},sidebar:"docs",previous:{title:"PageFooter",permalink:"/web/ui/page-footer"},next:{title:"StepIndicator",permalink:"/web/ui/step-indicator"}},p=[{value:"Logo",id:"logo",children:[],level:2},{value:"Logo Redirect",id:"logo-redirect",children:[],level:2},{value:"Logo Title",id:"logo-title",children:[],level:2},{value:"Hide Logo",id:"hide-logo",children:[],level:2},{value:"Top and Bottom Menu Items",id:"top-and-bottom-menu-items",children:[{value:"Disabled NavMenu.Item",id:"disabled-navmenuitem",children:[],level:3}],level:2},{value:"Children",id:"children",children:[],level:2},{value:"Additional Drawer Content",id:"additional-drawer-content",children:[],level:2},{value:"Full Width",id:"full-width",children:[],level:2},{value:"Header.Toolbar",id:"headertoolbar",children:[{value:"Space",id:"space",children:[],level:3}],level:2},{value:"Full Page Layout",id:"full-page-layout",children:[],level:2}],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}},c=u("Tab"),m=u("FullPageLayout"),h={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(c,{label:"Overview",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { PageHeader } from '@abyss/web/ui/PageHeader';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const topMenuItems = [\n    {\n      title: \'Utility Dropdown\',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title="Test Link"\n              description={\n                \'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae lorem posuere augue volutpat tincidunt ut in odio. Sed non vehicula tellus.\'\n              }\n              href="https://abyss.uhc.com/"\n            />\n            <NavMenu.Item\n              title="Test Link 2"\n              description={\n                \'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae lorem posuere augue volutpat tincidunt ut in odio. Sed non vehicula tellus.\'\n              }\n              href="https://abyss.uhc.com/"\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n    {\n      title: \'Utility Link\',\n      href: \'https://abyss.uhc.com/\',\n    },\n    {\n      title: (\n        <Layout.Group space={0}>\n          TrackIt\n          <div\n            style={{\n              display: \'flex\',\n              justifyContent: \'center\',\n              alignItems: \'center\',\n              height: \'14px\',\n              width: \'14px\',\n              borderRadius: \'50%\',\n              border: \'solid 1px #FFAF1F\',\n              backgroundColor: \'#FEF7E5\',\n              marginLeft: \'4px\',\n              fontSize: \'10px\',\n              fontWeight: \'700\',\n              color: \'#002677\',\n            }}\n          >\n            8\n          </div>\n        </Layout.Group>\n      ),\n      href: \'#\',\n    },\n    {\n      title: (\n        <Layout.Group space={0}>\n          John\n          <div\n            style={{\n              display: \'flex\',\n              justifyContent: \'center\',\n              alignItems: \'center\',\n              height: \'14px\',\n              width: \'14px\',\n              borderRadius: \'50%\',\n              border: \'solid 1px #002677\',\n              marginLeft: \'4px\',\n              fontSize: \'10px\',\n              fontWeight: \'$bold\',\n            }}\n          >\n            <IconMaterial icon="person" size="$sm" />\n          </div>\n        </Layout.Group>\n      ),\n      href: \'#\',\n    },\n  ];\n  const bottomMenuItems = [\n    { title: \'Dashboard\', href: \'#\' },\n    {\n      title: \'Dropdown Menu\',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column title="Section Title">\n            <NavMenu.Item\n              title="HELLO"\n              href="https://abyss.uhc.com/"\n              description="CSS-in-JS with best-in-class developer experience."\n            />\n            <NavMenu.Item\n              title="GOODBYE"\n              href="https://abyss.uhc.com/"\n              description="Description goes here"\n            />\n          </NavMenu.Column>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title="Sample onClick"\n              onClick={() => console.log(\'onClick pressed\')}\n              description="A message will be logged to the console when this is clicked."\n            />\n          </NavMenu.Column>\n          <NavMenu.Column title="Other Section Title">\n            <NavMenu.Item\n              title="Colors"\n              href="#"\n              description="Description goes here"\n            />\n            <NavMenu.Item\n              title="Colors"\n              href="#"\n              description="Description goes here"\n            />\n            <NavMenu.Item\n              title="Colors"\n              href="#"\n              description="Description goes here"\n            />\n            <NavMenu.Item\n              title="Colors"\n              href="#"\n              description="Description goes here"\n            />\n            <NavMenu.Item\n              title="Colors"\n              href="#"\n              description="Description goes here"\n            />\n            <NavMenu.Item\n              title="Colors"\n              href="#"\n              description="Description goes here"\n            />\n            <NavMenu.Item\n              title="Colors"\n              href="#"\n              description="Description goes here"\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n  ];\n  return (\n    <React.Fragment>\n      <PageHeader\n        topMenuItems={topMenuItems}\n        bottomMenuItems={bottomMenuItems}\n        css={{ \'abyss-page-header-root\': { zIndex: 210 } }}\n      />\n      <Box color="$white" height="100px">\n        <Label css={{ paddingTop: \'$md\' }}>Your page content goes here</Label>\n      </Box>\n    </React.Fragment>\n  );\n};\n')),(0,i.kt)("h2",{id:"logo"},"Logo"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"logo")," prop to provide the logo that will be displayed on the far left side of the header. By default, it will show either the UHC or Optum logo, depending on the page's theme."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PageHeader logoTitle="Default Logo" />\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PageHeader\n  logo={<IconMaterial icon="anchor" size="$lg" />}\n  logoTitle="IconMaterial Logo"\n/>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PageHeader\n  logo={\n    <Brandmark\n      brand="uhc"\n      size="$sm"\n      affiliate="uhc"\n      variant="monogram"\n      color="blue"\n    />\n  }\n  logoTitle="Brandmark Logo"\n/>\n')),(0,i.kt)("h2",{id:"logo-redirect"},"Logo Redirect"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"logoRedirect")," prop to provide a link that the ",(0,i.kt)("inlineCode",{parentName:"p"},"logo")," will redirect to when clicked. In most cases, you would want this logo to redirect to your website's home page. If a value is not passed in, the logo will not redirect to anything."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PageHeader logoRedirect="https://abyss.uhc.com" logoTitle="Logo Redirect" />\n')),(0,i.kt)("h2",{id:"logo-title"},"Logo Title"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"logoTitle")," prop to specify additional detail about the title of the page. It will be displayed directly to the right of the main logo, with a vertical divider between the logo and the logo title."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PageHeader logoTitle="Logo Title" />\n')),(0,i.kt)("h2",{id:"hide-logo"},"Hide Logo"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"hideLogo")," prop to hide the logo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<PageHeader hideLogo>Header Without Logo</PageHeader>\n")),(0,i.kt)("h2",{id:"top-and-bottom-menu-items"},"Top and Bottom Menu Items"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"bottomMenuItems")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"topMenuItems")," props to create navigation bars in the header."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"bottomMenuItems")," is given, it will create a ",(0,i.kt)("a",{parentName:"li",href:"/web/ui/nav-menu"},"NavMenu")," under the header (this would be traditionally used to provide links for the distinct categories / pages within the website)."),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"topMenuItems")," is given, it will create a ",(0,i.kt)("a",{parentName:"li",href:"/web/ui/nav-menu"},"NavMenu")," at the top right of the header (this would be traditionally used for things like login / profile information and links, etc.).")),(0,i.kt)("p",null,"Both of these props require the same input structure: an array of objects with the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  title: node,\n  href: string,\n  onClick: function,\n  content: node,\n}\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Each object should have ",(0,i.kt)("strong",{parentName:"p"},"one")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"href"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," - if the object has a value for ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick"),", then in the menu it will be a link to that page, or a button, respectively; if, instead, it has ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," present, in the menu it will be a dropdown menu that, when opened, will display the objects inside ",(0,i.kt)("inlineCode",{parentName:"p"},"content"),"."),(0,i.kt)("p",null,"When the window size is too small (ex. on a phone), an expand button will appear on the left side of the header, and these two menus will appear there instead of where they normally do."),(0,i.kt)("p",null,"NOTE: both of these props leverage the ",(0,i.kt)("a",{parentName:"p",href:"/web/ui/nav-menu"},"NavMenu")," component, so view its documentation ",(0,i.kt)("a",{parentName:"p",href:"/web/ui/nav-menu"},"here")," for more details on what to pass in for it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const bottomMenuItems = [\n    {\n      title: 'Bottom Menu Items',\n      href: 'https://abyss.uhc.com',\n    },\n    {\n      title: 'Sample onClick',\n      onClick: () => console.log('onClick clicked'),\n    },\n    {\n      title: 'Sample Dropdown 2',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title=\"Info\"\n              href=\"#\"\n              description=\"This is where you can put links, etc. relevant to the dropdown's title.\"\n            />\n            <NavMenu.Item\n              title=\"Sample onClick\"\n              onClick={() => console.log('onClick pressed')}\n              description=\"A message will be logged to the console when this is clicked.\"\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n  ];\n  const topMenuItems = [\n    {\n      title: 'Top Menu Items',\n      href: 'https://abyss.uhc.com',\n    },\n    {\n      title: 'Sample Dropdown 1',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title=\"Info\"\n              href=\"#\"\n              description=\"This is where you can put links, etc. relevant to the dropdown's title.\"\n            />\n            <NavMenu.Item\n              title=\"Sample onClick\"\n              onClick={() => console.log('onClick pressed')}\n              description=\"A message will be logged to the console when this is clicked.\"\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n  ];\n  return (\n    <React.Fragment>\n      <PageHeader\n        topMenuItems={topMenuItems}\n        bottomMenuItems={bottomMenuItems}\n        css={{ 'abyss-page-header-root': { zIndex: 209 } }}\n      />\n      <Box color=\"$white\" height=\"100px\">\n        <Label css={{ padding: '$md' }}>Your page content goes here</Label>\n      </Box>\n    </React.Fragment>\n  );\n};\n")),(0,i.kt)("h3",{id:"disabled-navmenuitem"},"Disabled NavMenu.Item"),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"isDisabled")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to disable an individual NavMenu.Item."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const bottomMenuItems = [\n    {\n      title: \'Sample Dropdown 2\',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title="Info"\n              href="#"\n              description="This is where you can put links, etc. relevant to the dropdown\'s title."\n              isDisabled\n            />\n            <NavMenu.Item\n              title="Sample onClick"\n              onClick={() => console.log(\'onClick pressed\')}\n              description="A message will be logged to the console when this is clicked."\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n  ];\n  const topMenuItems = [\n    {\n      title: \'Sample Dropdown 1\',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title="Info"\n              href="#"\n              description="This is where you can put links, etc. relevant to the dropdown\'s title."\n              isDisabled\n            />\n            <NavMenu.Item\n              title="Sample onClick"\n              onClick={() => console.log(\'onClick pressed\')}\n              description="A message will be logged to the console when this is clicked."\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n  ];\n  return (\n    <React.Fragment>\n      <PageHeader\n        topMenuItems={topMenuItems}\n        bottomMenuItems={bottomMenuItems}\n        css={{ \'abyss-page-header-root\': { zIndex: 209 } }}\n      />\n      <Box color="$white" height="100px">\n        <Label css={{ padding: \'$md\' }}>Your page content goes here</Label>\n      </Box>\n    </React.Fragment>\n  );\n};\n')),(0,i.kt)("h2",{id:"children"},"Children"),(0,i.kt)("p",null,"When children are contained inside the Header component, they will be rendered on the right side of the header. If ",(0,i.kt)("inlineCode",{parentName:"p"},"topMenuItems")," is passed in as well, there will be a horizontal divider between the toolbar and the children. To use a pre-formatted design that aligns items horizontally, use the ",(0,i.kt)("a",{parentName:"p",href:"#headertoolbar"},"Header.Toolbar")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<PageHeader>\n  <Text css={{ padding: '$md' }}>Children without topMenuItems</Text>\n</PageHeader>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const topMenuItems = [\n    {\n      title: 'Sample dropdown menu',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title=\"Test Link\"\n              description={\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae lorem posuere augue volutpat tincidunt ut in odio. Sed non vehicula tellus.'\n              }\n              href=\"https://abyss.uhc.com/\"\n            />\n            <NavMenu.Item\n              title=\"Test Link 2\"\n              description={\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae lorem posuere augue volutpat tincidunt ut in odio. Sed non vehicula tellus.'\n              }\n              href=\"https://abyss.uhc.com/\"\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n    {\n      title: 'Sample link 2',\n      href: 'https://abyss.uhc.com/',\n    },\n  ];\n  return (\n    <PageHeader\n      topMenuItems={topMenuItems}\n      css={{ 'abyss-page-header-root': { zIndex: 208 } }}\n    >\n      <Text css={{ padding: '$md' }}>Children with topMenuItems</Text>\n    </PageHeader>\n  );\n};\n")),(0,i.kt)("h2",{id:"additional-drawer-content"},"Additional Drawer Content"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"extraDrawerContent")," prop to add any additional content to the top of the drawer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const bottomMenuItems = [\n    {\n      title: \'Sample Dropdown 2\',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title="Info"\n              href="#"\n              description="This is where you can put links, etc. relevant to the dropdown\'s title."\n              isDisabled\n            />\n            <NavMenu.Item\n              title="Sample onClick"\n              onClick={() => console.log(\'onClick pressed\')}\n              description="A message will be logged to the console when this is clicked."\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n  ];\n\n  const topMenuItems = [\n    {\n      title: \'Sample Dropdown 1\',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title="Info"\n              href="#"\n              description="This is where you can put links, etc. relevant to the dropdown\'s title."\n              isDisabled\n            />\n            <NavMenu.Item\n              title="Sample onClick"\n              onClick={() => console.log(\'onClick pressed\')}\n              description="A message will be logged to the console when this is clicked."\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n  ];\n\n  const modal = useOverlay(\'pageheader-model\');\n\n  const MockData = utils.useSearchInputMock();\n  const form = useForm();\n\n  const handleSearch = (data) => {\n    console.log(\'Searched\', data);\n    modal.close();\n  };\n\n  const drawerContent = (\n    <FormProvider state={form}>\n      <SearchInput\n        placeholder="Search..."\n        label="Search Site"\n        onSearch={handleSearch}\n        isClearable\n        options={MockData}\n        keys={[\'value\']}\n        model="search-input-form"\n      />\n    </FormProvider>\n  );\n\n  return (\n    <React.Fragment>\n      <PageHeader\n        extraDrawerContent={drawerContent}\n        model="pageheader-model"\n        topMenuItems={topMenuItems}\n        bottomMenuItems={bottomMenuItems}\n        css={{ \'abyss-page-header-root\': { zIndex: 209 } }}\n      />\n      <Box color="$white" height="100px">\n        <Label css={{ padding: \'$md\' }}>Your page content goes here</Label>\n      </Box>\n    </React.Fragment>\n  );\n};\n')),(0,i.kt)("h2",{id:"full-width"},"Full Width"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"fullWidth")," prop to set the width of the Header component to full screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<PageHeader fullWidth>\n  <Text css={{ padding: '$md' }}>\n    Header component will stretch to full screen.\n  </Text>\n</PageHeader>\n")),(0,i.kt)("h2",{id:"headertoolbar"},"Header.Toolbar"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Header.Toolbar")," component to render ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," in a pre-formatted layout. When using this component, its children will render horizontally on the far right of the header. You can use multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Header.Toolbar"),"s if you would like multiple lines."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<PageHeader>\n  <PageHeader.Toolbar space={10}>\n    <SelectInput\n      label=\"Profile Option 1\"\n      value=\"Test 1\"\n      options={[{ value: 'Test 1', label: 'Test 1' }]}\n    />\n    <SelectInput\n      label=\"Profile Option 2\"\n      value=\"Test 2\"\n      options={[{ value: 'Test 2', label: 'Test 2' }]}\n      css={{\n        'abyss-select-input-root': {\n          marginTop: '0 !important',\n        },\n      }}\n    />\n  </PageHeader.Toolbar>\n</PageHeader>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const topMenuItems = [\n    {\n      title: 'Sample Dropdown Menu',\n      content: (\n        <NavMenu.Columns>\n          <NavMenu.Column>\n            <NavMenu.Item\n              title=\"Test Link\"\n              description={\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae lorem posuere augue volutpat tincidunt ut in odio. Sed non vehicula tellus.'\n              }\n              href=\"https://abyss.uhc.com/\"\n            />\n            <NavMenu.Item\n              title=\"Test Link 2\"\n              description={\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae lorem posuere augue volutpat tincidunt ut in odio. Sed non vehicula tellus.'\n              }\n              href=\"https://abyss.uhc.com/\"\n            />\n          </NavMenu.Column>\n        </NavMenu.Columns>\n      ),\n    },\n    {\n      title: 'Sample Link',\n      href: 'https://abyss.uhc.com/',\n    },\n  ];\n  return (\n    <PageHeader\n      topMenuItems={topMenuItems}\n      css={{ 'abyss-page-header-root': { zIndex: 208 } }}\n    >\n      <PageHeader.Toolbar space={10}>\n        <SelectInput\n          label=\"Profile Option 1\"\n          value=\"Test 1\"\n          options={[{ value: 'Test 1', label: 'Test 1' }]}\n        />\n        <SelectInput\n          label=\"Profile Option 2\"\n          value=\"Test 2\"\n          options={[{ value: 'Test 2', label: 'Test 2' }]}\n          css={{\n            'abyss-select-input-root': {\n              marginTop: '0 !important',\n            },\n          }}\n        />\n      </PageHeader.Toolbar>\n    </PageHeader>\n  );\n};\n")),(0,i.kt)("h3",{id:"space"},"Space"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"space")," prop with ",(0,i.kt)("inlineCode",{parentName:"p"},"PageHeader.Toolbar")," to specify the amount of white space that will separate elements inside the component from each other. The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<PageHeader>\n  <PageHeader.Toolbar space={50}>\n    <SelectInput\n      label=\"Profile Option 1\"\n      value=\"Test 1\"\n      options={[{ value: 'Test 1', label: 'Test 1' }]}\n    />\n    <SelectInput\n      label=\"Profile Option 2\"\n      value=\"Test 2\"\n      options={[{ value: 'Test 2', label: 'Test 2' }]}\n      css={{\n        'abyss-select-input-root': {\n          marginTop: '0 !important',\n        },\n      }}\n    />\n  </PageHeader.Toolbar>\n</PageHeader>\n")),(0,i.kt)("h2",{id:"full-page-layout"},"Full Page Layout"),(0,i.kt)(m,{mdxType:"FullPageLayout"})),(0,i.kt)(c,{label:"Integration",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={PageHeader}\n  rows={[\n    {\n      name: 'logo',\n      type: 'ReactNode',\n      description:\n        'The logo component that will be displayed on the left side of the header.',\n    },\n    {\n      name: 'logoRedirect',\n      type: 'string',\n      description: 'A link that the logo will redirect to when clicked.',\n    },\n    {\n      name: 'logoTitle',\n      type: 'string',\n      description: 'Text that will be displayed to the right of the logo.',\n    },\n    {\n      name: 'hideLogo',\n      type: 'boolean',\n      description: 'Flag to hide the logo in the header',\n    },\n    {\n      name: 'bottomMenuItems',\n      type: 'shape',\n      description:\n        'The items that will be formatted and displayed in a navigation menu directly under the header.',\n    },\n    {\n      name: 'topMenuItems',\n      type: 'shape',\n      description:\n        'The items that will be formatted and displayed in a toolbar at the top right of the header.',\n    },\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description:\n        'The items that will be rendered on the right side of the header, under the topMenuItems bar (if it exists).',\n    },\n    {\n      name: 'fullWidth',\n      type: 'boolean',\n      description: 'Set the width of the header to full screen',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={PageHeader.Toolbar}\n  rows={[\n    {\n      name: 'space',\n      type: 'number',\n      description: 'The number of pixels of white space between each child',\n    },\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The elements that will be rendered horizontally.',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={PageHeader}\n  rows={[\n    {\n      name: 'page-header-root',\n      description: 'Header root element',\n    },\n    {\n      name: 'page-header-container',\n      description:\n        'Container for the main section of the header (everything except the bottom NavMenu)',\n    },\n    {\n      name: 'page-header-expand-button',\n      description:\n        'Button to expand the side drawer when screen size is too small',\n    },\n    {\n      name: 'page-header-logo',\n      description: 'Logo displayed on the left of the header',\n    },\n    {\n      name: 'page-header-top-nav-menu',\n      description:\n        'Container for the navigation menu at the top right of the header',\n    },\n    {\n      name: 'page-header-bottom-nav-menu',\n      description:\n        'Container for the navigation menu at the bottom of the header',\n    },\n    {\n      name: 'page-header-heading-text-container',\n      description:\n        'Container for the heading text that displays additional detail about the title of the page',\n    },\n    {\n      name: 'page-header-vertical-rule',\n      description: 'Vertical rule that divides header logo and logo title',\n    },\n    {\n      name: 'page-header-content',\n      description: 'Content for header',\n    },\n    {\n      name: 'page-header-toolbars',\n      description: 'Header toolbars',\n    },\n    {\n      name: 'page-header-horizontal-rule',\n      description: 'Horizontal rule that divides items in header toolbar',\n    },\n    {\n      name: 'page-header-drawer-horizontal-rule',\n      description: 'Horizontal rule that divides items in drawer',\n    },\n    {\n      name: 'page-header-drawer-menu-main',\n      description: 'Main header drawer menu',\n    },\n    {\n      name: 'page-header-drawer-menu-sub',\n      description: 'Sub header drawer menu',\n    },\n    {\n      name: 'page-header-drawer-menu-item',\n      description: 'Header drawer menu item',\n    },\n    {\n      name: 'page-header-drawer-menu-item-button',\n      description: 'Header drawer menu item',\n    },\n    {\n      name: 'page-header-drawer-back-button-container',\n      description: 'Container for back button in header drawer',\n    },\n    {\n      name: 'page-header-drawer-selected-menu-name',\n      description: 'Container for selected menu in header',\n    },\n    {\n      name: 'page-header-drawer-header-container',\n      description: 'Container for drawer header',\n    },\n    {\n      name: 'page-header-drawer-selection-container',\n      description: 'Container for drawer selection content',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={PageHeader.Toolbar}\n  rows={[\n    {\n      name: 'page-header-toolbar-root',\n      description: 'Toolbar root element',\n    },\n  ]}\n/>\n"))),(0,i.kt)(c,{label:"Accessibility",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Tab',\n      description: 'Moves focus to the next focusable element.',\n    },\n    {\n      name: 'Enter',\n      description:\n        'If the logo is selected, redirects to the specified link. If focus is inside the navigation menu, redirects to the link if the menu bar item is a redirect, or opens the relevant dropdown menu if the item has one.',\n    },\n    {\n      name: 'Space',\n      description:\n        'If focus on a menu bar item with a dropdown, opens the relevant dropdown menu.',\n    },\n    {\n      name: 'Left Arrow',\n      description:\n        'When focus is inside one of the navigation menus, focuses the previous menu bar item.',\n    },\n    {\n      name: 'Up Arrow',\n      description:\n        'When focus is inside one of the navigation menus, focuses the previous menu bar item.',\n    },\n    {\n      name: 'Right Arrow',\n      description:\n        'When focus is inside one of the navigation menus, focuses the next menu bar item.',\n    },\n    {\n      name: 'Down Arrow',\n      description:\n        'When focus is inside one of the navigation menus, focuses the next menu bar item.  If focus is on an open menu bar item, moves focus into its dropdown menu.',\n    },\n    {\n      name: 'Escape',\n      description:\n        'Closes open dropdown menu and moves focus to its menu bar item.',\n    },\n    {\n      name: 'Home',\n      description:\n        'If inside a navigation menu, moves focus to the first item in the menu.',\n    },\n    {\n      name: 'End',\n      description:\n        'If inside a navigation menu, moves focus to the last item in the menu.',\n    },\n  ]}\n/>\n"))))}g.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?o.createElement(h,r(r({ref:n},p),{},{components:t})):o.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);