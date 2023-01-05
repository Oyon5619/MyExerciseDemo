<template>
  <div id="app">
    <TopComp @themeChange="getCurTheme"/>
    <NavigateBar @tabChange="getCurTab"/>

    <!-- <router-view></router-view> -->

    <Page1 v-if="curTab == 'p1'"/>
    <Page2 v-if="curTab == 'p2'"/>
    <Page3 v-if="curTab == 'p3'"/>
    <Page4 v-if="curTab == 'p4'"/>
  </div>
</template>

<script>
import TopComp from '@/components/TopComp'
import NavigateBar from '@/components/NavigateBar'
import Page1 from '@/views/pages/page1'
import Page2 from '@/views/pages/page2'
import Page3 from '@/views/pages/page3'
import Page4 from '@/views/pages/page4'

export default {
  components: {
    TopComp,
    NavigateBar,
    Page1,
    Page2,
    Page3,
    Page4
  },
  data() {
    return {
      curTab: 'p1', // p1 is default Tab
    }
  },
  methods: {
    getCurTab(val) {
      console.log(`Father[App] received current Tab from Son[NavigateBar]: ${val}`)
      this.curTab = val
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
