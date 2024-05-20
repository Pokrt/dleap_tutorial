import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    sitemap: {
        hostname: 'https://dleap-tutorial.onrender.com/'
    },
    title: "HCL Domino Leap Tutorial",
    description: "Community-managed tutorial for HCL Domino Leap developers",
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
            {text: 'Tutorial', link: '/basics/introduction'},
            {text: 'Reference', link: '/object_reference/overview'},
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Pokrt/dleap_tutorial'}
        ],
        outline: [2, 4],

        sidebar: [
            {
                text: 'I. Domino Leap Basics',
                collapsed: false,
                items: [
                    {text: 'Introduction', link: '/basics/introduction'},
                    {text: 'Your First App', link: '/basics/hello_world'},
                    {text: 'Where is your Data', link: '/basics/data-storage'},
                ]
            }, {
                text: 'II. No-code Development',
                collapsed: false,

                items: [
                    {text: 'Introduction', link: '/basics/no-code-introduction'},
                    {text: 'MVC Model', link: '/intermediate/mvc'},
                    {text: 'Anatomy of Application', link: '/intermediate/business_object'},
                    {text: 'Input Items', link: '/intermediate/input_items'},
                    {text: 'Display Items', link: '/intermediate/display_items'},

                    {text: 'Application Roles', link: '/basics/roles'},
                    {text: 'User Permissions', link: '/basics/permissions'},
                    {text: 'Workflow - Stages & Actions', link: '/basics/stages'},
                    {text: 'Item Visibility', link: '/basics/visibility_item'},
                    {text: 'Page Visibility', link: '/basics/visibility_page'},
                    {text: 'Item & Page Locking', link: '/basics/locking'},

                    {text: 'Navigation', link: '/intermediate/navigation'},
                    {text: 'Multi-page Forms', link: '/intermediate/multi_page_forms'},
                    {text: 'Formulas', link: '/intermediate/formulas'},
                    {text: 'Rules', link: '/intermediate/rules'},
                    {text: 'Visual Appearance', link: '/intermediate/css_styling'},
                    {text: 'Application Pages', link: '/intermediate/app_pages'},
                    {text: 'Tables', link: '/intermediate/tables'},
                    {text: 'Service Calls', link: '/intermediate/services'},
                    {text: 'Multi-form Apps', link: '/intermediate/multi_form_apps'},
                    // {text: 'Current Limitations', link: '/intermediate/limitations'},
                    {text: 'Using JSON services', link: 'todo',},
                    {text: 'More Resources', link: '/intermediate/more-resources'},

                ]
            }, {
                text: 'III. Low-code Development',
                collapsed: false,

                items: [
                    {text: "Introduction", link: "low-code-basics/introduction"},
                    {
                        text: 'JavaScript Essentials',
                        link: '/low-code-basics/javascript_fundamentals/', collapsed: true,
                        items: [
                            {text: 'Variables', link: 'low-code-basics/javascript_fundamentals/variables'},
                            {text: 'Console', link: 'low-code-basics/javascript_fundamentals/console'},
                            {text: 'Comparing', link: 'low-code-basics/javascript_fundamentals/comparing'},
                            {text: 'Branching and Loops', link: 'low-code-basics/javascript_fundamentals/branching'},
                            {text: 'Strings', link: 'low-code-basics/javascript_fundamentals/string'},
                            {text: 'Objects', link: 'low-code-basics/javascript_fundamentals/objects'},
                            {
                                text: 'Object references',
                                link: 'low-code-basics/javascript_fundamentals/object_referencing'
                            },
                        ],
                    },
                    {
                        text: 'JavaScript in Domino Leap', link: '/low-code-basics/js_in_dleap/',
                        items: [
                            {text: 'Interface and data objects', link: 'low-code-basics/js_in_dleap/objects'},
                            {text: 'Events', link: 'low-code-basics/js_in_dleap/running_js',},

                            {text: 'Working with Items', link: 'low-code-basics/js_in_dleap/items',},
                            {
                                text: 'Item-specific examples',
                                link: 'low-code-basics/js_in_dleap/item_specific_examples',
                            },
                            {text: 'Working with Buttons', link: 'low-code-basics/js_in_dleap/buttons',},
                            {text: 'Working with Pages', link: 'low-code-basics/js_in_dleap/pages.md',},
                            {text: 'Submitting Forms', link: 'low-code-basics/js_in_dleap/forms',},
                            {text: 'Show & Hide Items', link: 'low-code-basics/js_in_dleap/show-hide',},

                            {text: 'External JS Files', link: 'low-code-basics/js_in_dleap/external_js'},
                            {text: 'JavaScript Security', link: 'low-code-basics/js_in_dleap/security'},
                            {text: 'Service Calls', link: 'low-code-basics/js_in_dleap/services_js'},
                        ],
                    },
                    {
                        text: "Advanced Flow Control", link: "/low-code-basics/application_flow/",
                        items: [
                            {text: "Form Input Validation", link: "low-code-basics/application_flow/Input_validation"},
                            {text: "Inactive Timeout", link: "low-code-basics/application_flow/inactive_timeout"},
                            {
                                text: "Redirecting User upon Submit",
                                link: "low-code-basics/application_flow/submission_redirect"
                            },
                        ]
                    },
                    // {text: "Best Practices", link: "low-code-basics/best_practices"}
                ]
            },
            {
                text: 'IV. JavaScript Reference',
                collapsed: false,

                items:
                    [
                        {text: 'Overview', link: 'object_reference/overview'},

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
                                            {
                                                text: 'Category: Layout', items: [
                                                    {text: 'Section', link: 'object_reference/section'},
                                                    {text: 'Folder Tab', link: 'object_reference/tabFolderTab'},
                                                    {text: 'Tabbed folder', link: 'object_reference/tabFolder'},
                                                ]
                                            },
                                            {
                                                text: 'Category: Display', items: [
                                                    {text: 'Data Grid', link: 'object_reference/dataGrid'},
                                                    {text: 'Text', link: 'object_reference/richText'},
                                                    {text: 'Image', link: 'object_reference/image'},
                                                    {text: 'Line', link: 'object_reference/horizontalLine'},
                                                    {text: 'HTML Fragment', link: 'object_reference/htmlArea'},
                                                    {text: 'Media', link: 'object_reference/media'},
                                                ]
                                            },
                                            {
                                                text: 'Category: Action', items: [
                                                    {text: 'Button', link: 'object_reference/button'},
                                                    {text: 'Web Link', link: 'object_reference/staticWebLink'},
                                                    {text: 'Page Navigation', link: 'object_reference/pageNavigator'},
                                                ]
                                            },
                                            {
                                                text: 'Category: Entry', items: [
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
                                            {
                                                text: 'Category: Calendar', items: [
                                                    {text: 'Date', link: 'object_reference/date'},
                                                    {text: 'Time', link: 'object_reference/time'},
                                                    {text: 'Timestamp', link: 'object_reference/timeStamp'},
                                                ]
                                            },
                                            {
                                                text: 'Category: Selection', items: [
                                                    {text: 'Checkbox', link: 'object_reference/checkbox'},
                                                    {text: 'Dropdown', link: 'object_reference/dropdown'},
                                                    {text: 'Select One', link: 'object_reference/radioGroup'},
                                                    {text: 'Select Many', link: 'object_reference/checkGroup'},
                                                    {text: 'Survey Question', link: 'object_reference/surveyQuestion'},
                                                    {text: 'Number Slider', link: 'object_reference/horizontalSlider'},
                                                    {text: 'Survey', link: 'object_reference/survey'},
                                                ]
                                            },
                                            {
                                                text: 'Category: Advanced', items: [
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
                text: 'V. Advanced Techniques',
                collapsed: false,
                items:
                    [
                        {text: 'Working with Attachments', link: 'todo'},
                        // {text: 'Using Regular Expressions for Item Validation', link: '/advanced/regex'},
                        {text: "Global Variables and Special Functions", link: "/advanced/glob_var_special_func"},
                        {text: 'Printing Forms', link: 'todo',},
                        {text: 'Producing QR codes', link: '/advanced/qr_codes',},
                        {text: 'Producing PDF files', link: 'todo',},
                    ],
            },
        ]
    },
})
