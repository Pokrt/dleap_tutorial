import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    sitemap: {
        hostname: 'https://dleap-tutorial.onrender.com/'
    },
    title: "HCL Domino Leap Tutorial",
    description: "Tutorial for HCL Domino Leap",
    lastUpdated: true,

    markdown: {
        theme: {light: 'light-plus', dark: 'night-owl'}
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        editLink: {
            pattern: 'https://github.com/Pokrt/dleap_tutorial/blob/main/:path'
        },
         search: {
             provider: 'local'
        },
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
                text: 'I. Domino Leap Basics',
                collapsed: false,
                items: [
                    {text: 'Hello world', link: '/basics/hello_world'},
                    {text: 'Data Storage', link: '/basics/data-storage'},
                ]
            }, {
                text: 'II. No-code development',
                collapsed: false,

                items: [
                    {text: 'Application Roles', link: '/basics/roles'},
                    {text: 'User Permissions', link: '/basics/permissions'},
                    {text: 'Workflow - Stages & Actions', link: '/basics/stages'},
                    {text: 'Item Visibility', link: '/basics/visibility_item'},
                    {text: 'Page Visibility', link: '/basics/visibility_page'},
                    {text: 'Item Locking', link: '/basics/locking'},

                    {text: 'MVC model', link: '/intermediate/mvc'},
                    {text: 'Objects', link: '/intermediate/business_object'},
                    {text: 'Input items', link: '/intermediate/input_items'},
                    {text: 'Display items', link: '/intermediate/display_items'},
                    {text: 'Navigation', link: '/intermediate/navigation'},
                    {text: 'Multi-page Forms', link: '/intermediate/multi_page_forms'},
                    {text: 'Formulas', link: '/intermediate/formulas'},
                    {text: 'Rules', link: '/intermediate/rules'},
                    {text: 'Visual Appearance', link: '/intermediate/css_styling'},
                    {text: 'Application Pages', link: '/intermediate/app_pages'},
                    {text: 'Multi-form apps', link: '/intermediate/multi_form_apps'},
                    {text: 'Service calls', link: '/intermediate/services'},
                ]
            }, {
                text: 'III. Low-code basics',
                collapsed: false,

                items: [
                    {
                        text: 'JavaScript Essentials',
                        link: '/low-code-basics/javascript_fundamentals/', collapsed: true,
                        items: [
                            {text: 'Variables', link: 'low-code-basics/javascript_fundamentals/variables'},
                            {text: 'Console', link: 'low-code-basics/javascript_fundamentals/console'},
                            {text: 'Comparing', link: 'low-code-basics/javascript_fundamentals/comparing'},
                            {text: 'Branching and loops', link: 'low-code-basics/javascript_fundamentals/branching'},
                            {text: 'Strings', link: 'low-code-basics/javascript_fundamentals/string'},
                            {text: 'Objects', link: 'low-code-basics/javascript_fundamentals/objects'},
                            {text: 'Object references',link: 'low-code-basics/javascript_fundamentals/object_referencing'},
                        ],
                    },
                    {
                        text: 'JavaScript in Domino Leap', link: '/low-code-basics/js_in_dleap/',
                        items: [
                            {text: 'Interface and data objects',link: 'low-code-basics/js_in_dleap/objects'},
                            {text: 'Events',link: 'low-code-basics/js_in_dleap/running_js',},

                            {text: 'Working with items',link: 'low-code-basics/js_in_dleap/items.md',},
                            {text: 'Item-specific examples',link: 'low-code-basics/js_in_dleap/todo',},
                            {text: 'Working with Buttons',link: 'low-code-basics/js_in_dleap/todo',},
                            {text: 'Working with Pages',link: 'low-code-basics/js_in_dleap/todo',},
                            {text: 'Submitting Forms',link: 'low-code-basics/js_in_dleap/todo',},
                            {text: 'Show&hide items',link: 'low-code-basics/js_in_dleap/todo',},

                            {text: 'External JS files', link: 'low-code-basics/js_in_dleap/external_js'},
                            {text: 'JavaScript security', link: 'low-code-basics/js_in_dleap/security'},
                            {text: 'Service calls', link: 'low-code-basics/js_in_dleap/services_js'},
                        ],
                    },
                    {
                        text: "Advanced flow control", link: "/low-code-basics/application_flow/",
                        items: [
                            {text: "Form input validation", link: "low-code-basics/application_flow/Input_validation"},
                            {text: "Inactive timeout", link: "low-code-basics/application_flow/inactive_timeout"},
                            {
                                text: "Redirecting user upon submit",
                                link: "low-code-basics/application_flow/submission_redirect"
                            },
                        ]
                    },
                    {text: "Best practices", link: "low-code-basics/best_practices"}
                ]
            },
            {
                text: 'IV. Object References',
                collapsed: false,

                items:
                    [
                        {
                            text: 'Interface Objects', link: 'object_reference/application',
                            collapsed: false,

                            items:
                                [
                                    {text: 'Application Object', link: 'object_reference/application'},
                                    {text: 'Form Object', link: 'object_reference/Form'},
                                    {text: 'Page Object', link: 'object_reference/page'},
                                    {text: 'AppPage Object', link: 'object_reference/appPage'},
                                    {
                                        text: 'Item Objects',
                                        collapsed: true,
                                        items: [
                                            {text: 'Layout', items: [
                                                {text: 'Section', link: 'object_reference/section'},
                                                {text: 'Folder Tab', link: 'object_reference/tabFolderTab'},
                                                    {text: 'Tabbed folder', link: 'object_reference/tabFolder'},
                                                ]
                                            },
                                            {text: 'Display', items: [
                                                {text: 'Data Grid', link: 'object_reference/dataGrid'},
                                                {text: 'Text', link: 'object_reference/richText'},
                                                {text: 'Image', link: 'object_reference/image'},
                                                {text: 'Line', link: 'object_reference/horizontalLine'},
                                                {text: 'HTML Fragment', link: 'object_reference/htmlArea'},
                                                {text: 'Media', link: 'object_reference/media'},
                                                ]
                                            },
                                            {text: 'Action', items: [
                                                {text: 'Button', link: 'object_reference/button'},
                                                {text: 'Web link', link: 'object_reference/staticWebLink'},
                                                {text: 'Page Navigation', link: 'object_reference/pageNavigator'},
                                                ]
                                            },
                                            {text: 'Entry', items: [
                                                {text: 'Single Line', link: 'object_reference/text'},
                                                {text: 'Paragraph Text', link: 'object_reference/textArea'},
                                                {text: 'Rich text', link: 'object_reference/richTextArea'},
                                                {text: 'Name Picker', link: 'object_reference/name'},
                                                {text: 'Email', link: 'object_reference/email'},
                                                {text: 'Number', link: 'object_reference/number'},
                                                {text: 'Currency', link: 'object_reference/currency'},
                                                {text: 'Website', link: 'object_reference/weblink'},
                                                {text: 'Password', link: 'object_reference/password'},
                                                ]
                                            },
                                            {text: 'Calendar', items: [
                                                {text: 'Date', link: 'object_reference/date'},
                                                {text: 'Time', link: 'object_reference/time'},
                                                {text: 'Timestamp', link: 'object_reference/timeStamp'},
                                                ]
                                            },
                                            {text: 'Selection', items: [
                                                {text: 'Checkbox', link: 'object_reference/checkbox'},
                                                {text: 'Dropdown', link: 'object_reference/dropdown'},
                                                {text: 'Select One', link: 'object_reference/radioGroup'},
                                                {text: 'Select Many', link: 'object_reference/checkGroup'},
                                                {text: 'Survey Question', link: 'object_reference/surveyQuestion'},
                                                {text: 'Number Slider', link: 'object_reference/horizontalSlider'},
                                                {text: 'Survey', link: 'object_reference/survey'},
                                                ]
                                            },
                                            {text: 'File', items: [
                                                {text: 'Attachment', link: 'object_reference/Attachment'},
                                                {text: 'Table', link: 'object_reference/table'},
                                                ]
                                            },

                                        ]
                                    },
                                ],
                        },

                        {
                            text: 'Data Object', link:
                                '/object_reference/data_objects/data_objects', items: [
                                {text: "Business Object", link: "/object_reference/data_objects/BO"},
                                {text: "Business Object Attribute", link: "/object_reference/data_objects/BOA"},
                                {text: "Business Object List", link: "/object_reference/data_objects/BOL"},

                            ]
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
                text: 'V. Advanced techniques',
                collapsed: false,
                items:
                    [
                        {text: 'Working with attachments',},
                        {text: 'Using Regular Expressions for Item Validation',},
                        {text: "Global Variables and Special Functions", link: "/advanced/glob_var_special_func"},
                        {text: 'Printing forms',link: 'todo',},
                        {text: 'Producing QR codes',link: 'todo',},
                        {text: 'Producing PDF files',link: 'todo',},
                    ],
            },

        ]
    },

    socialLinks: [
        {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]

})
