"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[551],{93822:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>g,toc:()=>p});var a,i=t(7896),s=t(31461),o=(t(2784),t(3905)),l=["components"],r={id:"loading-overlay",category:"Overlay",title:"LoadingOverlay",description:"Focuses the user's attention on one task or piece of information",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=641%3A11885",pagination_prev:"web/ui/fullscreen",pagination_next:"web/ui/loading-spinner"},d=void 0,g={unversionedId:"web/ui/loading-overlay",id:"web/ui/loading-overlay",isDocsHomePage:!1,title:"LoadingOverlay",description:"Focuses the user's attention on one task or piece of information",source:"@site/docs/web/ui/LoadingOverlay.md",sourceDirName:"web/ui",slug:"/web/ui/loading-overlay",permalink:"/web/ui/loading-overlay",tags:[],version:"current",frontMatter:{id:"loading-overlay",category:"Overlay",title:"LoadingOverlay",description:"Focuses the user's attention on one task or piece of information",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=641%3A11885",pagination_prev:"web/ui/fullscreen",pagination_next:"web/ui/loading-spinner"},sidebar:"docs",previous:{title:"Fullscreen",permalink:"/web/ui/fullscreen"},next:{title:"LoadingSpinner",permalink:"/web/ui/loading-spinner"}},p=[{value:"Usage",id:"usage",children:[{value:"useOverlay",id:"useoverlay",children:[],level:3},{value:"useState",id:"usestate",children:[],level:3}],level:2},{value:"Loading Title",id:"loading-title",children:[],level:2},{value:"Loading Message",id:"loading-message",children:[],level:2},{value:"Loading Icon",id:"loading-icon",children:[],level:2},{value:"Status Title",id:"status-title",children:[],level:2},{value:"Status Message",id:"status-message",children:[],level:2},{value:"Status Icon",id:"status-icon",children:[],level:2},{value:"isDismissable",id:"isdismissable",children:[],level:2},{value:"isOpen",id:"isopen",children:[],level:2},{value:"isLoading",id:"isloading",children:[],level:2},{value:"onClose",id:"onclose",children:[],level:2}],c=(a="Tab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),u={toc:p};function h(e){var n=e.components,t=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(c,{label:"Overview",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { LoadingOverlay } from '@abyss/web/ui/LoadingOverlay';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'LoadingOverlay',\n  inputs: [\n    {\n      prop: 'loadingTitle',\n      type: 'string',\n    },\n    {\n      prop: 'loadingMessage',\n      type: 'string',\n    },\n    {\n      prop: 'statusTitle',\n      type: 'string',\n    },\n    {\n      prop: 'statusMessage',\n      type: 'string',\n    },\n    {\n      prop: 'statusIcon',\n      type: 'select',\n      options: [\n        { label: 'success', value: 'success' },\n        { label: 'error', value: 'error' },\n        { label: 'warning', value: 'warning' },\n        { label: 'info', value: 'info' },\n      ],\n    },\n    {\n      prop: 'width',\n      type: 'size',\n    },\n    { prop: 'hideIcon', type: 'boolean' },\n    {\n      prop: 'isDismissable',\n      type: 'boolean',\n    },\n  ],\n}\n\n() => {\n  const [isLoading, setLoading] = useState(false);\n  const [isOpen, setIsOpen] = useState(false);\n\n  const { setCountdownTime } = useCountdown({\n    onCompleted: () => {\n      setLoading(false);\n      setIsOpen(true);\n    }\n  });\n\n  const triggerLoading = () => {\n    setLoading(true);\n    setCountdownTime(3 * 1000);\n  };\n\n  const handleClose = () => {\n    setIsOpen(false)\n  };\n\n  return (\n    <LoadingOverlay\n      loadingTitle=\"Please Wait\"\n      loadingMessage=\"Retrieving Information.\"\n      ariaLoadingLabel=\"Example loading aria label\"\n      statusTitle=\"Status update\"\n      statusMessage=\"Sample message...\"\n      isLoading={isLoading}\n      isOpen={isOpen}\n      isDismissable\n      onClose={handleClose}\n    >\n      <Card css={{\n        'abyss-card-root': {\n          height: 300,\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          backgroundColor: '$gray4',\n        },\n      }}>\n        <Button onClick={triggerLoading}>\n          Open LoadingOverlay\n        </Button>\n      </Card>\n    </LoadingOverlay>\n  );\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"There are two main states to LoadingOverlay, the loading state and the loaded state:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the loading state (when ",(0,o.kt)("inlineCode",{parentName:"li"},"isLoading")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"), a loading spinner will appear on the left, and the ",(0,o.kt)("inlineCode",{parentName:"li"},"loadingTitle")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"loadingMessage")," props will be used as the text next to it."),(0,o.kt)("li",{parentName:"ul"},"Once loading has completed (when ",(0,o.kt)("inlineCode",{parentName:"li"},"isLoading")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"), the display changes: the ",(0,o.kt)("inlineCode",{parentName:"li"},"statusIcon")," prop is used to create an icon on the left to reflect the application state after the load (ex. an error icon if something went wrong, or a success icon if data was submitted), and the ",(0,o.kt)("inlineCode",{parentName:"li"},"statusTitle")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"statusMessage")," props will be used as the text next to it. In this state, the overlay can be closed when the ",(0,o.kt)("inlineCode",{parentName:"li"},"isDismissable")," prop is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,o.kt)("h3",{id:"useoverlay"},"useOverlay"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"/web/hooks/use-overlay"},"useOverlay")," hook allows you to open the overlay and pass data into it. See the ",(0,o.kt)("a",{parentName:"p",href:"/web/hooks/use-overlay"},"hook documentation")," for more information on its usage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const loadingOverlay = useOverlay('useOverlay-loading');\n  const state = loadingOverlay.getState();\n\n  return (\n    <React.Fragment>\n      <Layout.Group alignItems=\"center\" grow>\n        <Button\n          onClick={() =>\n            loadingOverlay.open({\n              isLoading: true,\n              loadingTitle: 'Example Loading Title',\n              ariaLoadingLabel: 'Example loading aria label',\n              loadingMessage: 'Example loading message',\n            })\n          }\n        >\n          Open Overlay - Loading\n        </Button>\n\n        <Button\n          onClick={() =>\n            loadingOverlay.open({\n              isLoading: false,\n              statusTitle: 'Example Status Title',\n              statusMessage: 'Example status message',\n              statusIcon: 'info',\n            })\n          }\n        >\n          Open Overlay - Not Loading\n        </Button>\n\n        <Button onClick={() => loadingOverlay.close()}>Close Overlay</Button>\n      </Layout.Group>\n\n      <pre style={{ marginTop: 20 }}>\n        Overlay State: {JSON.stringify(state, null, 2)}\n      </pre>\n\n      <br />\n\n      <LoadingOverlay width={400} model=\"useOverlay-loading\">\n        <Card\n          css={{\n            'abyss-card-root': {\n              height: 100,\n              display: 'flex',\n              backgroundColor: '$gray4',\n            },\n          }}\n        >\n          <p>Loading Title: {state.data && state.data.loadingTitle}</p>\n        </Card>\n        <Card\n          css={{\n            'abyss-card-root': {\n              height: 100,\n              display: 'flex',\n              backgroundColor: '$gray4',\n            },\n          }}\n        >\n          <p>Status Title: {state.data && state.data.statusTitle}</p>\n        </Card>\n      </LoadingOverlay>\n    </React.Fragment>\n  );\n};\n")),(0,o.kt)("h3",{id:"usestate"},"useState"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," hook to set the open and loading states of the loading overlay."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [isLoading, setLoading] = useState(false);\n\n  const { setCountdownTime, formattedTime } = useCountdown({\n    onCompleted: () => {\n      setLoading(false);\n    },\n  });\n\n  const triggerLoading = () => {\n    setLoading(true);\n    setCountdownTime(3 * 1000);\n  };\n\n  return (\n    <LoadingOverlay\n      loadingTitle=\"This is the loadingTitle prop.\"\n      loadingMessage={`This overlay will close itself in ${formattedTime}`}\n      statusTitle=\"This is the statusTitle prop.\"\n      statusMessage=\"This is the statusMessage prop.\"\n      ariaLoadingLabel=\"This is the ariaLoadingLabel prop.\"\n      isLoading={isLoading}\n      isDismissable\n    >\n      <Card\n        css={{\n          'abyss-card-root': {\n            height: 250,\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: '$gray4',\n          },\n        }}\n      >\n        <Button onClick={triggerLoading}>Open LoadingOverlay</Button>\n      </Card>\n    </LoadingOverlay>\n  );\n};\n")),(0,o.kt)("h2",{id:"loading-title"},"Loading Title"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"loadingTitle")," prop to set the title of the loading overlay when it is in the loading state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LoadingOverlay loadingTitle=\"Custom Title Here\" isLoading>\n  <Card\n    css={{\n      'abyss-card-root': {\n        height: 250,\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        backgroundColor: '$gray4',\n      },\n    }}\n  />\n</LoadingOverlay>\n")),(0,o.kt)("h2",{id:"loading-message"},"Loading Message"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"loadingMessage")," prop to set the description of the loading overlay when it is in the loading state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  return (\n    <LoadingOverlay\n      loadingTitle=\"Loading...\"\n      loadingMessage=\"Custom Description Here\"\n      ariaLoadingLabel=\"Custom loading label\"\n      isLoading\n    >\n      <Card\n        css={{\n          'abyss-card-root': {\n            height: 250,\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: '$gray4',\n          },\n        }}\n      />\n    </LoadingOverlay>\n  );\n};\n")),(0,o.kt)("h2",{id:"loading-icon"},"Loading Icon"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"loadingIcon")," prop to set an icon to be displayed inside of the loading spinner."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  return (\n    <LoadingOverlay\n      loadingTitle="Loading Icon Example"\n      loadingMessage="The icon appears inside of the loading spinner"\n      ariaLoadingLabel="Loading aria label"\n      isLoading\n      loadingIcon={\n        <IconMaterial color="$primary1" icon="upload_file" size="35px" />\n      }\n    >\n      <Card\n        css={{\n          \'abyss-card-root\': {\n            height: 250,\n            display: \'flex\',\n            justifyContent: \'center\',\n            alignItems: \'center\',\n            backgroundColor: \'$gray4\',\n          },\n        }}\n      />\n    </LoadingOverlay>\n  );\n};\n')),(0,o.kt)("h2",{id:"status-title"},"Status Title"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"statusTitle")," prop to set the title of the loading overlay when loading has completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LoadingOverlay isOpen statusTitle=\"This is the statusTitle prop.\">\n  <Card\n    css={{\n      'abyss-card-root': {\n        height: 250,\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        backgroundColor: '$gray4',\n      },\n    }}\n  />\n</LoadingOverlay>\n")),(0,o.kt)("h2",{id:"status-message"},"Status Message"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"statusMessage")," prop to set the description of the loading overlay when loading has completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LoadingOverlay\n  isOpen\n  statusTitle=\"Loading Complete...\"\n  statusMessage=\"This is the statusMessage prop.\"\n>\n  <Card\n    css={{\n      'abyss-card-root': {\n        height: 250,\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        backgroundColor: '$gray4',\n      },\n    }}\n  />\n</LoadingOverlay>\n")),(0,o.kt)("h2",{id:"status-icon"},"Status Icon"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"statusIcon")," prop to set the icon that will be displayed when loading has completed. Possible options are ",(0,o.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warning"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),". The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),". You can hide the icon with the ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIcon")," prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [isOpen, setIsOpen] = useState();\n  const [statusIcon, setStatusIcon] = useState();\n\n  const handleClick = (statusIcon) => {\n    setStatusIcon(statusIcon);\n    setIsOpen(true);\n  };\n\n  return (\n    <LoadingOverlay\n      isOpen={isOpen}\n      statusIcon={statusIcon}\n      statusTitle=\"Status Icon Example\"\n      statusMessage=\"Your message goes here\"\n      isDismissable\n      onClose={() => setIsOpen(false)}\n    >\n      <Card\n        css={{\n          'abyss-card-root': {\n            height: 250,\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: '$gray4',\n          },\n        }}\n      >\n        <Layout.Group>\n          <Button onClick={() => handleClick('info')}>Info</Button>\n          <Button onClick={() => handleClick('success')}>Success</Button>\n          <Button onClick={() => handleClick('warning')}>Warning</Button>\n          <Button onClick={() => handleClick('error')}>Error</Button>\n        </Layout.Group>\n      </Card>\n    </LoadingOverlay>\n  );\n};\n")),(0,o.kt)("h2",{id:"isdismissable"},"isDismissable"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"isDismissable")," prop to whether the overlay can be closed after loading is complete. Use this prop with the ",(0,o.kt)("a",{parentName:"p",href:"#usestate"},"useState")," hook if there are situations where the user can take another action after dismissing the overlay. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". You may want to set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in cases such as when a widget fails to load and cannot be used. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [isOpen, setIsOpen] = useState(true);\n\n  return (\n    <React.Fragment>\n      <LoadingOverlay\n        statusIcon=\"error\"\n        statusTitle=\"Non-Dismissable Overlay\"\n        statusMessage=\"This error message cannot be dismissed.\"\n        isOpen\n      >\n        <Card\n          css={{\n            'abyss-card-root': {\n              height: 200,\n              backgroundColor: '$gray4',\n            },\n          }}\n        />\n      </LoadingOverlay>\n      <LoadingOverlay\n        statusIcon=\"error\"\n        statusTitle=\"Dismissable Overlay\"\n        statusMessage=\"This error message can be dismissed.\"\n        onClose={() => setIsOpen(false)}\n        isOpen={isOpen}\n        isDismissable\n      >\n        <Card\n          css={{\n            'abyss-card-root': {\n              height: 200,\n              display: 'flex',\n              justifyContent: 'center',\n              alignItems: 'center',\n              backgroundColor: '$gray4',\n            },\n          }}\n        >\n          <Button onClick={() => setIsOpen(true)}>Reopen Overlay</Button>\n        </Card>\n      </LoadingOverlay>\n    </React.Fragment>\n  );\n};\n")),(0,o.kt)("h2",{id:"isopen"},"isOpen"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"isOpen")," prop to set whether the overlay is open or not. Use this prop with the ",(0,o.kt)("a",{parentName:"p",href:"#usestate"},"useState")," hook to change the overlay between open and closed. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  return (\n    <React.Fragment>\n      <LoadingOverlay statusTitle=\"isOpen set to true\" isOpen>\n        <Card\n          css={{\n            'abyss-card-root': {\n              height: 250,\n              display: 'flex',\n              justifyContent: 'center',\n              alignItems: 'center',\n              backgroundColor: '$gray4',\n            },\n          }}\n        >\n          <Text>\n            This text will be covered by the overlay when isOpen is set to true.\n          </Text>\n        </Card>\n      </LoadingOverlay>\n      <LoadingOverlay loadingTitle=\"isOpen set to true\">\n        <Card\n          css={{\n            'abyss-card-root': {\n              height: 150,\n              display: 'flex',\n              justifyContent: 'center',\n              alignItems: 'center',\n              backgroundColor: '$gray4',\n            },\n          }}\n        >\n          <Text>\n            isOpen is set to false, so the overlay will not be displayed\n          </Text>\n        </Card>\n      </LoadingOverlay>\n    </React.Fragment>\n  );\n};\n")),(0,o.kt)("h2",{id:"isloading"},"isLoading"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading")," prop to set whether the overlay is loading or not. Use this prop with the ",(0,o.kt)("a",{parentName:"p",href:"#usestate"},"useState")," hook to set the loading state based on the status of the rest of your application. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  return (\n    <React.Fragment>\n      <LoadingOverlay loadingTitle=\"isLoading is set to true\" isLoading>\n        <Card\n          css={{\n            'abyss-card-root': {\n              height: 250,\n              backgroundColor: '$gray4',\n            },\n          }}\n        ></Card>\n      </LoadingOverlay>\n      <LoadingOverlay loadingTitle=\"isOpen set to true\">\n        <Card\n          css={{\n            'abyss-card-root': {\n              height: 150,\n              display: 'flex',\n              justifyContent: 'center',\n              alignItems: 'center',\n              backgroundColor: '$gray4',\n            },\n          }}\n        >\n          <Text>\n            isLoading is set to false, so the overlay will not be displayed\n          </Text>\n        </Card>\n      </LoadingOverlay>\n    </React.Fragment>\n  );\n};\n")),(0,o.kt)("h2",{id:"onclose"},"onClose"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"onClose")," prop to set a function that will be executed when the loading overlay is closed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [isOpen, setIsOpen] = useState(true);\n\n  const handleClose = () => {\n    setIsOpen(false);\n    console.log('Loading overlay closed!');\n  };\n\n  return (\n    <LoadingOverlay\n      statusTitle=\"onClose Example\"\n      statusMessage=\"A message will be logged to the console when this overlay is closed.\"\n      isLoading={false}\n      isOpen={isOpen}\n      onClose={handleClose}\n      isDismissable\n    >\n      <Card\n        css={{\n          'abyss-card-root': {\n            height: 200,\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: '$gray4',\n          },\n        }}\n      >\n        <Button onClick={() => setIsOpen(true)}>Reopen Overlay</Button>\n      </Card>\n    </LoadingOverlay>\n  );\n};\n"))),(0,o.kt)(c,{label:"Integration",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={LoadingOverlay}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode | function',\n      description:\n        'The contents that the LoadingOverlay will appear over when it is open',\n    },\n    {\n      name: 'model',\n      type: 'string',\n      description: 'Unique identifier used with useOverlay hook',\n    },\n    {\n      name: 'loadingTitle',\n      type: 'string',\n      description:\n        'Set the title that will display when the overlay is in the loading state ($isLoading is set to true)',\n    },\n    {\n      name: 'loadingMessage',\n      type: 'string',\n      description:\n        'Set the message that will display under the title when the overlay is in the loading state ($isLoading is set to true)',\n    },\n    {\n      name: 'statusTitle',\n      type: 'string',\n      description:\n        'Set the title that will display when loading is complete ($isLoading is set to false)',\n    },\n    {\n      name: 'statusMessage',\n      type: 'string',\n      description:\n        'Set the message that will display under the title when loading is complete ($isLoading is set to false)',\n    },\n    {\n      name: 'ariaLoadingLabel',\n      type: 'string',\n      description:\n        'Accessibility prop to label the loading spinner according to what it is loading',\n    },\n    {\n      name: 'statusIcon',\n      type: \"'info' | 'success' | 'error' | 'warning'\",\n      description:\n        'Set the icon that will be displayed when loading is complete ($isLoading is set to false)',\n    },\n    {\n      name: 'isOpen',\n      type: 'boolean',\n      description: 'Flag to check if the overlay is opened',\n    },\n    {\n      name: 'isLoading',\n      type: 'boolean',\n      description: 'Flag to check if the overlay is loading',\n    },\n    {\n      name: 'onClose',\n      type: 'function',\n      description: 'Callback fired every time the overlay is closed',\n    },\n    {\n      name: 'loadingIcon',\n      type: 'ReactNode',\n      description: 'Icon that will be displayed inside of the loading spinner',\n    },\n    {\n      name: 'width',\n      type: 'string | number',\n      description: 'The width of the loading dialog',\n    },\n    {\n      name: 'isDismissable',\n      type: 'boolean',\n      description: 'Flag to set whether or not the overlay is dismisable',\n    },\n    {\n      name: 'hideIcon',\n      type: 'boolean',\n      description: 'Flag to set whether or not to show the status icon',\n    },\n  ]}\n/>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={LoadingOverlay}\n  rows={[\n    {\n      name: 'loading-overlay-root',\n      description: 'Root element',\n    },\n    {\n      name: 'loading-overlay-overlay',\n      description: 'Overlay',\n    },\n    {\n      name: 'loading-overlay-dialog',\n      description: 'Dialog',\n    },\n    {\n      name: 'loading-overlay-close-button',\n      description: 'Close button',\n    },\n    {\n      name: 'loading-overlay-close-icon',\n      description: 'Close icon',\n    },\n    {\n      name: 'loading-overlay-loading-body',\n      description: 'Body container when loading',\n    },\n    {\n      name: 'loading-overlay-status-icon-wrapper',\n      description: 'Wrapper for status icon',\n    },\n    {\n      name: 'loading-overlay-loading-content',\n      description: 'Title and message displayed when loading',\n    },\n    {\n      name: 'loading-overlay-loading-title',\n      description: 'Title when loading',\n    },\n    {\n      name: 'loading-overlay-loading-message',\n      description: 'Message when loading',\n    },\n    {\n      name: 'loading-overlay-status-body',\n      description: 'Body container when loaded',\n    },\n    {\n      name: 'loading-overlay-status-content',\n      description: 'Title and message displayed when loaded',\n    },\n    {\n      name: 'loading-overlay-status-title',\n      description: 'Title when loaded',\n    },\n    {\n      name: 'loading-overlay-status-message',\n      description: 'Message when loaded',\n    },\n  ]}\n/>\n"))),(0,o.kt)(c,{label:"Accessibility",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [isOpen, setIsOpen] = useState(false);\n  const [isLoading, setLoading] = useState(true);\n\n  const { setCountdownTime, formattedTime } = useCountdown({\n    onCompleted: () => {\n      setLoading(false);\n      setIsOpen(true);\n    },\n  });\n\n  const triggerLoading = () => {\n    setLoading(true);\n    setCountdownTime(3 * 1000);\n  };\n\n  return (\n    <LoadingOverlay\n      loadingTitle=\"This is the loadingTitle prop.\"\n      loadingMessage=\"This is the loadingMessage prop.\"\n      statusTitle=\"This is the statusTitle prop.\"\n      statusMessage=\"This is the statusMessage prop.\"\n      ariaLoadingLabel=\"This is the ariaLoadingLabel prop.\"\n      onClose={() => setIsOpen(false)}\n      isOpen={isOpen}\n      isLoading={isLoading}\n      isDismissable\n    >\n      <Card\n        css={{\n          'abyss-card-root': {\n            height: 250,\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: '$gray4',\n          },\n        }}\n      >\n        <Button onClick={triggerLoading}>Open LoadingOverlay</Button>\n      </Card>\n    </LoadingOverlay>\n  );\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Tab',\n      description:\n        'Moves focus to the next interactive element within the dialog.  Once the last interactive element in the dialog is reached, pressing Tab again moves focus to the first interactive element within the dialog.',\n    },\n    {\n      name: 'Shift + Tab',\n      description:\n        'Moves focus to the previous interactive element within the dialog.  Once the first interactive element in the dialog is reached, pressing Shift + Tab again moves focus to the last interactive element within the dialog.',\n    },\n  ]}\n/>\n"))))}h.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>u});var a=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),d=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=d(e.components);return a.createElement(r.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=d(t),u=i,h=c["".concat(r,".").concat(u)]||c[u]||p[u]||s;return t?a.createElement(h,o(o({ref:n},g),{},{components:t})):a.createElement(h,o({ref:n},g))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=c;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<s;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);