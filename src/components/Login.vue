<script>
export default {
  data() {
    return {
      nickname: '',
    }
  },

  emits: ['login'],

  methods: {
    handleClickLogin() {
      if (this.nickname) {
        this.$emit('login', this.nickname)
        this.nickname = ''
      }
    },
  },
}
</script>

<template>
  <div class="slide-modal flex f_centered">
    <div class="wrap-enter-form">
      <label for="input_nickname">Ваш никнейм:</label>
      <input
        v-model="nickname"
        type="text"
        id="input_nickname"
        spellcheck="false"
        autocomplete="off"
        required
      />
      <div class="wrap-enter-button">
        <label @click="handleClickLogin" for="chk_sm" id="btn_enter">
          Войти в чат
        </label>
      </div>
    </div>
  </div>
</template>
