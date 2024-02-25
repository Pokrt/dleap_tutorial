import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HCL Domino Leap Tutorial",
  description: "Tutorial for HCL Domino Leap",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'Basics',
        items: [
          { text: 'Hello world', link: '/basics/hello_world' },
          { text: 'Roles', link: '/basics/roles' },
          { text: 'Data Storage', link: '/basics/data-storage' },
          { text: 'Permissions', link: '/basics/permissions' },
          { text: 'Workflow Stages', link: '/basics/stages' },
          { text: 'Visibility', link: '/basics/visibility' },
          { text: 'Locking', link: '/basics/locking' },
        ]
      }, {
        text: 'Intermediate (no-code)',
        items: [
          { text: 'Business object', link: '/intermediate/business_object' },
          { text: 'Service calls', link: '/intermediate/services' },
          { text: 'CSS styling', link: '/intermediate/css_styling' },
          { text: 'Formulas', link: '/intermediate/formulas' },
          { text: 'Rules', link: '/intermediate/rules' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
