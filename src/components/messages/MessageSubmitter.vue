<script>
import checkWord from '@/functions/checkWord'

export default {
  props: ['currentNickname', 'pingingNickname'],

  emits: ['message-submitted', 'reset-pinging-nickname'],

  data() {
    return {
      messageText: '',
      lastMessageText: '',
    }
  },

  computed: {
    dog() {
      return this.pingingNickname ? '@' : ''
    },
  },

  methods: {
    handleSendMessage() {
      if (this.messageText) {
        if (checkWord(this.messageText)) {
          alert('banned world!')
          this.messageText = ''
          return
        }
        if (this.messageText === this.lastMessageText) {
          return
        }
        const message = {
          author: this.currentNickname,
          text: `${this.dog}${this.pingingNickname} ${this.messageText}`,
        }
        this.$emit('message-submitted', message)
        this.$emit('reset-pinging-nickname')
        this.lastMessageText = this.messageText
        this.messageText = ''

        this.scrollToBottom()
      }
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer
        if (container) {
          container.scrollTop = container.scrollHeight
        }
      })
    },
  },
}
</script>

<template>
  <div class="footer">
    <div class="wrap-send-message flex f_tile">
      <span type="text" spellcheck="false" id="input_pinging">{{
        dog + pingingNickname
      }}</span>

      <input
        :value="messageText"
        @input="messageText = $event.target.value"
        @keydown.backspace="messageText || $emit('reset-pinging-nickname')"
        @keydown.enter="handleSendMessage"
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
