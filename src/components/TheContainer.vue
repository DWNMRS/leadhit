<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px;
}
</style>