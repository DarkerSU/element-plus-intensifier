import Theme from 'vitepress/dist/client/theme-default/index';
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import './styles/vars.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('demo-preview', AntDesignContainer)
  }
  // Layout() {
  //   return h(Theme.Layout, null, {
  //     'home-features-after': () => h(HomeSponsors),
  //     'aside-ads-before': () => h(AsideSponsors),
  //   })
  // },
  // enhanceApp({ app }) {
  //   app.component('SvgImage', SvgImage)
  // },
}