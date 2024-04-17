<template>
  <TheContainer>
    <AppAuth />
  </TheContainer>
</template>

<script>
import { defineComponent } from 'vue'
import TheContainer from '../components/TheContainer.vue'
import AppAuth from '../components/AppAuth.vue'

export default defineComponent({
  name: 'PageAuth',
  components: {
    TheContainer,
    AppAuth,
  }
})
</script>