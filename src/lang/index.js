import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh'
import en from './en'

Vue.use(VueI18n)

const messages = {
  zh: {
    ...zh
  },
  en: {
    ...en
  }
}

// 通过 locale 选项设置页面默认的现实语言为 zh (let 'zh' become default language by 'locale' property)
const i18n = new VueI18n({
  locale: 'zh', // 通过 this.%i18n.locale 的值实现语言切换
  messages
})
export default i18n
