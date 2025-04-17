<script>
export default {
  props: ['currentNickname', 'pingingNickname'],

  emits: ['message-submitted'],

  data() {
    return {
      messageText: '',
    }
  },

  methods: {
    handleSendMessage() {
      if (this.messageText) {
        const message = {
          author: this.currentNickname,
          text: `@${this.pingingNickname} ${this.messageText}`,
        }
        this.$emit('message-submitted', message)
        this.messageText = ''
      }
    },
  },
}
</script>

<template>
  <div class="footer">
    <div class="wrap-send-message flex f_tile">
      <input
        :value="`@${pingingNickname} ${messageText}`"
        @input="messageText = $event.target.value"
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
