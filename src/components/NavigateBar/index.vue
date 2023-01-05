<template>
  <div class="nav-bar-container">
    <!-- Use Vue-Router -->
    <!-- <router-link to="/demo/page1"  
      :class="[curTheme == 0 ? 'nav-item' : 'nav-item2',
      activeTab == 'p1' ? (curTheme == 0 ? 'active' : 'active2') : '']">
      <div @click="handleToggle('p1')">
        {{ $t('demo.nav.p1.title') }}
      </div>
    </router-link>
    <router-link to="/demo/page2" 
      :class="[curTheme == 0 ? 'nav-item' : 'nav-item2',
      activeTab == 'p2' ? (curTheme == 0 ? 'active' : 'active2') : '']">
      <div @click="handleToggle('p2')">
        {{ $t('demo.nav.p2.title') }}
      </div>
    </router-link>
    <router-link to="/demo/page3" 
      :class="[curTheme == 0 ? 'nav-item' : 'nav-item2',
      activeTab == 'p3' ? (curTheme == 0 ? 'active' : 'active2') : '']">
      <div @click="handleToggle('p3')">
        {{ $t('demo.nav.p3.title') }}
      </div>
    </router-link>
    <router-link to="/demo/page4" 
      :class="[curTheme == 0 ? 'nav-item' : 'nav-item2',
      activeTab == 'p4' ? (curTheme == 0 ? 'active' : 'active2') : '']">
      <div @click="handleToggle('p4')">
        {{ $t('demo.nav.p4.title') }}
      </div>
    </router-link> -->

    <!-- Use v-if and data sharing -->
    <div 
      @click="handleToggle('p1')"
      :class="[curTheme == 0 ? 'nav-item' : 'nav-item2',
      activeTab == 'p1' ? (curTheme == 0 ? 'active' : 'active2') : '']">
        {{ $t('demo.nav.p1.title') }}
    </div>
    <div 
      @click="handleToggle('p2')"
      :class="[curTheme == 0 ? 'nav-item' : 'nav-item2',
      activeTab == 'p2' ? (curTheme == 0 ? 'active' : 'active2') : '']">
        {{ $t('demo.nav.p2.title') }}
    </div>
    <div 
      @click="handleToggle('p3')"
      :class="[curTheme == 0 ? 'nav-item' : 'nav-item2',
      activeTab == 'p3' ? (curTheme == 0 ? 'active' : 'active2') : '']">
        {{ $t('demo.nav.p3.title') }}
    </div>
    <div 
      @click="handleToggle('p4')"
      :class="[curTheme == 0 ? 'nav-item' : 'nav-item2',
      activeTab == 'p4' ? (curTheme == 0 ? 'active' : 'active2') : '']">
        {{ $t('demo.nav.p4.title') }}
    </div>
  </div>
</template>

<script>
import bus from '@/components/SharingBus'

export default {
  name: 'nav-bar-container',
  data() {
    return {
      curTheme: 0,
      activeTab: 'p1'
    }
  },
  created() {
    bus.$on('shareTheme', val => {
      // console.log(`Brother[NavigateBar] recived value of theme from Brother[TopComp]: ${val}`)
      this.curTheme = val
    })
  },
  methods: {
    handleToggle(curTab) {
      this.activeTab = curTab
      // share the value with Father(App)
      this.$emit('tabChange', curTab)
    }
  }
}
</script>

<style scoped>
.nav-bar-container {
  width: auto;
  display: flex;
  background: rgb(207, 207, 207);
}

.nav-item {
  text-decoration: none;
  color: rgb(18, 121, 106);
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  font-size: 25px;
}
.nav-item:hover {
  background-color: rgb(35, 145, 122);
  color: yellow;
  font-size: 30px;
  border-bottom: 4px yellow solid;
}

/* another nav-item style (black) */
.nav-item2 {
  text-decoration: none;
  color: #fff;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  font-size: 25px;
}
.nav-item2:hover {
  background-color: #000;
  color: #fff;
  font-size: 30px;
  border-bottom: 4px #9f9f9f solid;
}

.active {
  background-color: rgb(35, 145, 122);
  color: yellow;
  font-size: 30px;
  border-bottom: 4px yellow solid;
}
.active2 {
  background-color: #000;
  color: #fff;
  font-size: 30px;
  border-bottom: 4px #9f9f9f solid;
}
</style>