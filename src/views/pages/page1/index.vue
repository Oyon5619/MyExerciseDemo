<template>
  <div class="page1-container">
    <p>{{ $t('demo.nav.p1.content') }}</p>
  </div>
</template>

<script>
export default {
  name: 'page1-conatiner',
  props: ['theme']
}
</script>

<style>
p {
  text-align: center;
  padding-top: 15%;
  color: rgb(29, 219, 248);
  font-size: 25px;
  font-weight: bold;
}
</style>