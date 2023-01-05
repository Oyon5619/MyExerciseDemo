<!-- 顶部内容 -->
<template>
  <div :class="[curTheme == 0 ? 'top-comp' : 'top-comp2']">
    <div :class="[curTheme == 0 ? 'title' : 'title2']">
      {{ $t('demo.title') }}
    </div>
    <div class="toggle-lang-select">
      <LangToggleSelect/>
    </div>
    <div class="toggle-theme-btn">
      <ThemeToggleBtn @themeChange="getCurTheme"/>
    </div>
  </div>
</template>

<script>
import ThemeToggleBtn from '@/components/ThemeToggleBtn'
import LangToggleSelect from '@/components/LangToggleSelect'
import bus from '@/components/SharingBus'

export default {
  name: 'top-comp',
  components: {
    ThemeToggleBtn,
    LangToggleSelect
  },
  data() {
    return {
      curTheme: 0
    }
  },
  methods: {
    getCurTheme(val) {
      console.log(`Father[TopComp] receive value of theme from Son[ThemeToggleBtn]: ${val}`)
      this.curTheme = val
      bus.$emit('shareTheme', val) // 将这个值共享给兄弟组件 Sharing the val with brother components
    }
  }
}
</script>

<style scoped>
.top-comp {
  width: 100%;
  height: 75px;
  background: linear-gradient(#0aafa7, #095337)
}
.top-comp2 {
  width: 100%;
  height: 75px;
  background: linear-gradient(#9f8f8f, #5f7f7f)
}

.title {
  color: rgb(255, 255, 255);
  font-weight: bolder;
  font-size: 30px;
  margin-top: 18px;
  margin-left: 40%;
  float: left;
}
.title2 {
  color: rgb(0, 0, 0);
  font-weight: bolder;
  font-size: 30px;
  margin-top: 18px;
  margin-left: 40%;
  float: left;
}

.toggle-theme-btn {
  margin-top: 18px;
  margin-right: 1%;
  float: right;
}

.toggle-lang-select {
  margin-top: 25px;
  margin-right: 10px;
  float: right;
}
</style>