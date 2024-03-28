// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import TableOfContents from '../../components/table.vue'
import './tailwind.postcss'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component(TableOfContents.name, TableOfContents)
  }
}