<template>
  <!-- 主题切换按钮 -->
  <!-- theme toggle button -->
  <div class="theme-toggle-btn">
    <div class="switch">
      <div class="switch-bg" :class="[theme == 1 ? 'switch-bg-on' : '']">
        <div class="switch-btn" :class="[theme == 1 ? 'switch-btn-on' : '']" @click="toggleTheme"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'theme-toggle-btn',
  data() {
    return {
      // theme == 0 <=> Default Theme
      // theme == 1 <=> Black Theme
      theme: 0
    }
  },
  methods: {
    toggleTheme() {
      this.theme = !this.theme
      // 子 -> 父
      // Son -> Father
      this.$emit('themeChange', this.theme)
    }
  }
}
</script>

<style scoped>
.switch {
  width: 4rem;
  height: 2rem;
  background: #efefef;
  border-radius: 50px;
  position: relative;
  border: 4px solid rgb(147, 147, 147);
}

.switch-btn {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 4px solid #66787a;
  position: absolute;
  top: -4px;
  left: -4px;
  background: #ffffff;
  transition: left .5s;
  -webkit-transition: left .5s; /* Chrome and Safari */
}

.switch-bg {
  background-color: #2b2929;
  width: 2rem;
  height: 2rem;
  top: -2px;
  border-radius: 50px;
  transition: width .5s;
  -webkit-transition: width .5s;
}

.switch-btn-on {
  left: 2rem;
}
.switch-bg-on {
  width: 4rem
}
</style>