import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "HCL Domino Leap Tutorial",
    description: "Tutorial for HCL Domino Leap",
    markdown: {
        theme: {light: 'light-plus', dark: 'night-owl'}
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        outline: [2, 4],

        sidebar: [
            // {
            //     text: 'Examples',
            //     items: [
            //         {text: 'Markdown Examples', link: '/markdown-examples'},
            //         {text: 'Runtime API Examples', link: '/api-examples'},
            //     ]
            // },
            {
                text: 'Domino Leap Basics',
                items: [
                    {text: 'Hello world', link: '/basics/hello_world'},
                    {text: 'Application Roles', link: '/basics/roles'},
                    {text: 'Data Storage', link: '/basics/data-storage'},
                    {text: 'User Permissions', link: '/basics/permissions'},
                    {text: 'Workflow Stages', link: '/basics/stages'},
                    {text: 'Item Visibility in Stages', link: '/basics/visibility'},
                    {text: 'Item Locking in Stages', link: '/basics/locking'},
                ]
            }, {
                text: 'No-code development',
                items: [
                    {text: 'Business object', link: '/intermediate/business_object'},
                    {text: 'Service calls', link: '/intermediate/services'},
                    {text: 'Visual Appearance', link: '/intermediate/css_styling'},
                    {text: 'Formulas', link: '/intermediate/formulas'},
                    {text: 'Rules', link: '/intermediate/rules'},
                ]
            }, {
                text: 'Low-code basics',
                items: [
                    {
                        text: 'JavaScript Essentials',
                        items: [
                            {text: 'Variables', link: 'low-code-basics/javascript_fundamentals/variables'},
                            {text: 'Console', link: 'low-code-basics/javascript_fundamentals/console'},
                            {text: 'Comparing', link: 'low-code-basics/javascript_fundamentals/comparing'},
                            {text: 'Branching and loops', link: 'low-code-basics/javascript_fundamentals/branching'},
                            {text: 'Strings', link: 'low-code-basics/javascript_fundamentals/string'},
                            {text: 'Objects', link: 'low-code-basics/javascript_fundamentals/objects'},
                            {
                                text: 'Object referencing',
                                link: 'low-code-basics/javascript_fundamentals/object_referencing'
                            },

                        ],
                        link: 'low-code-basics/javascript_fundamentals/variables'
                    },
                    {
                        text: 'JS in Domino Leap', link: 'low-code-basics/javascript_fundamentals/editor',
                        items: [
                            {
                                text: 'Running JS in Domino Leap',
                                link: 'low-code-basics/running_js',
                            },
                            {
                                text: 'Domino Leap Objects',
                                link: 'low-code-basics/objects'
                            },
                            {text: 'Service calls in JS', link: 'low-code-basics/services_js'},
                            {text: 'External JS Files', link: 'low-code-basics/external_js'},
                        ],
                    },
                    {
                        text: "App flow control", link: "application_flow/Input_validation",
                        items: [
                            {text: "Form input validation", link: "application_flow/Input_validation"},
                            {text: "Inactive timeout", link: "application_flow/inactive_timeout"},
                            {
                                text: "Redirecting user upon submit",
                                link: "application_flow/submission_redirect"
                            },
                        ]
                    },
                    { text: "Best practices", link: "low-code-basics/best_practices"}
                ]
            },
            {
                text: 'Object Reference',
                items:
                    [
                        {
                            text: 'Interface Objects', link: 'items/application',
                            items:
                                [
                                    {text: 'Application Object', link: 'items/application'},
                                    {text: 'Form Object', link: 'items/Form'},
                                    {text: 'Page Object', link: 'items/page'},
                                    {text: 'AppPage Object', link: 'items/appPage'},
                                    {
                                        text: 'Item Objects',
                                        collapsed: true,
                                        items: [
                                            {text: 'Attachment', link: 'items/Attachment'},
                                            {text: 'Button', link: 'items/button'},
                                            {text: 'Checkbox', link: 'items/checkbox'},
                                            {text: 'Currency', link: 'items/currency'},
                                            {text: 'Date', link: 'items/date'},
                                            {text: 'Dropdown', link: 'items/dropdown'},
                                            {text: 'Email', link: 'items/email'},
                                            {text: 'Folder Tab', link: 'items/tabFolderTab'},
                                            {text: 'HTML Fragment', link: 'items/htmlArea'},
                                            {text: 'Image', link: 'items/image'},
                                            {text: 'Line', link: 'items/horizontalLine'},
                                            {text: 'Media', link: 'items/media'},
                                            {text: 'Number', link: 'items/number'},
                                            {text: 'Number Slider', link: 'items/horizontalSlider'},
                                            {text: 'Page Navigation', link: 'items/pageNavigator'},
                                            {text: 'Paragraph Text', link: 'items/textArea'},
                                            {text: 'Password', link: 'items/password'},
                                            {text: 'Section', link: 'items/section'},
                                            {text: 'Select Many', link: 'items/checkGroup'},
                                            {text: 'Select One', link: 'items/radioGroup'},
                                            {text: 'Single Line', link: 'items/text'},
                                            {text: 'Survey', link: 'items/survey'},
                                            {text: 'Survey Question', link: 'items/surveyQuestion'},
                                            {text: 'Tabbed folder', link: 'items/tabFolder'},
                                            {text: 'Table', link: 'items/table'},
                                            {text: 'Text', link: 'items/richText'},
                                            {text: 'Time', link: 'items/time'},
                                            {text: 'Timestamp', link: 'items/timeStamp'},
                                            {text: 'Web link', link: 'items/staticWebLink'},
                                            {text: 'Website', link: 'items/weblink'},
                                            {text: 'Name Picker', link: 'items/name'},
                                            {text: 'Data Grid', link: 'items/dataGrid'},
                                            {text: 'Rich text', link: 'items/richTextArea'},
                                        ]
                                    },
                                ],
                        },

                        {
                            text: 'Data Object', link:
                                'low-code-basics/data_objects', items: [{text: "BO", link: ""}]
                        }
                        ,
                        {
                            text: 'Other',
                            items: [
                                {
                                    text: 'Service', link:
                                        'low-code-basics/service_object'
                                },
                                {
                                    text: 'Action Button', link:
                                        'low-code-basics/action_button'
                                }]
                        },
                    ],
            },
            {
                text: 'Advanced techniques',
                items:
                    [

                        {
                            text: 'Working with attachments',
                        },
                        {
                            text: 'Using Regular Expressions for Item Validation',
                        }
                    ],
            },


        ]
    },

    socialLinks: [
        {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]

})
