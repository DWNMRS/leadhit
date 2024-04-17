<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
