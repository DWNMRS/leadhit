<template>
  <div class="auth">
    <h1 class="auth__title">LeadHit</h1>
    <div class="auth__wrapper">
      <form class="auth__form" @submit.prevent="getMessage">
        <input class="auth__input" type="text" maxlength="24" @input="removeError" v-model="siteId">
        <button class="auth__btn" type="submit">Войти</button>
        <span :class="{ 'auth__message': true, 'auth__message--active': errorMessage }">{{ errorMessage }}</span>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex';
export default defineComponent({
  name: 'AppAuth',
  data() {
    return {
      siteId: '',
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions(['fetchMessage']),
    getMessage() {
      if (this.siteId.length === 24) {
        this.fetchMessage(this.siteId)
      } else {
        this.errorMessage = 'Ошибка: ID сайта должен содержать  24 символа'
      }
    },
    removeError() {
      this.errorMessage = ''
    }
  }
})
</script>

<style lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  &__title {
    font-size: 32px;
    font-weight: 800;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 400px;
    height: 80px;
    padding: 24px;
    border-radius: 8px;
    background-color: #0990ff;
  }

  &__input {
    width: 100%;
    height: 24px;
    border-radius: 4px;

    &-wrapper {
      width: 100%;
      position: relative;
    }
  }

  &__message {
    position: absolute;
    bottom: -44px;
    display: block;
    padding: 4px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    opacity: 0;
    height: 40px;
    width: 100%;
    background-color: #ff0000;
    color: #fff;
    font-size: 16px;
    transition: 0.2s;

    &--active {
      opacity: 1;
    }
  }

  &__btn {
    width: 100px;
    height: 24px;
    background-color: #fff;
    border: 1px solid #3cdd30;
    border-radius: 4px;
    margin-left: 8px;
    transition: 0.2s;

    &:hover {
      background-color: #3cdd30;
      color: white;
    }
  }

}
</style>