<script>
export default {
  props: ['nickNameTo'],

  emits: ['send-message'],

  data() {
    return {
      message: '',
    }
  },

  methods: {
    handleSendMessage() {
      console.log(this.message)
      if (this.message) {
        this.$emit('send-message', this.message)
        this.message = ''
      }
    },
  },
}
</script>

<template>
  <div class="footer">
    <div class="wrap-send-message flex f_tile">
      <input
        value="{{ nickNameTo }}"
        v-model="message"
        type="text"
        spellcheck="false"
        id="input_msg"
      />
      <input
        @click="handleSendMessage"
        type="submit"
        value="&ldca;"
        id="btn_send_msg"
      />
    </div>
  </div>
</template>
