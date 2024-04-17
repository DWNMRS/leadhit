<template>
  <TheContainer>
    <AppAnalytics />
  </TheContainer>
</template>

<script>
import { defineComponent } from 'vue'
import TheContainer from '@/components/TheContainer.vue'
import AppAnalytics from '@/components/AppAnalytics.vue';


export default defineComponent({
  name: 'PageAuth',
  components: {
    TheContainer,
    AppAnalytics,
  }
})
</script>