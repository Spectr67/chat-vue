<script>
export default {
  props: ['messages'],

  watch: {
    messages: {
      deep: true,
      handler() {
        this.scrollToBottom()
      },
    },
  },

  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer
        if (container) {
          container.scroll({ top: 1000000, behavior: 'smooth' })
        }
      })
    },
  },
}
</script>

<template>
  <div class="left">
    <div class="wrap-chat-flow">
      <div class="chat-flow" spellcheck="false" ref="messagesContainer">
        <template v-for="(message, index) in messages" :key="index">
          <span class="msg-line">
            <b>[{{ message.author }}]:</b> {{ message.text }}
          </span>
          <br />
        </template>
      </div>
    </div>
  </div>
</template>
