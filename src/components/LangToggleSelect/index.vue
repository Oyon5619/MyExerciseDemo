<template>
  <div class="lang-toggle-select">
    <select v-model="curLocale" placeholder="切换语言">
      <option value="zh">中文</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'lang-toggle-select',
  data() {
    return {
      curLocale: this.$i18n.locale
    }
  },
  watch: {
    // change language
    curLocale(newVal, oldVal) {
      console.log(`curLocale: ${oldVal} => ${newVal}`)
      this.$i18n.locale = newVal
    }
  }
}
</script>

<style scoped>

</style>