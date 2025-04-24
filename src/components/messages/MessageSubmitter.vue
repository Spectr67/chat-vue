<script>
import checkWord from '@/functions/checkWord'

const nextId = () => Math.trunc(Math.random() * 1000000000)
const initMessage = () => ({
  id: nextId,
  author: '',
  text: '',
})

export default {
  props: ['currentNickname', 'pingingNickname'],

  emits: ['message-submitted', 'reset-pinging-nickname'],

  data() {
    return {
      message: initMessage(),
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

        const message = {
          author: this.currentNickname,
          text: `${this.dog}${this.pingingNickname} ${this.messageText}`,
        }
        this.$emit('message-submitted', message)
        this.$emit('reset-pinging-nickname', '')
      }
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
        v-model="message.text"
        @keydown.backspace="message.text || $emit('reset-pinging-nickname')"
        @keydown.enter="handleSendMessage"
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
