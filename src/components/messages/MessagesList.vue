<script>
import MessageItem from './MessageItem.vue'

export default {
  components: { MessageItem },

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
          container.scroll({ top: 1000000000, behavior: 'smooth' })
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
        <MessageItem
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
        />
      </div>
    </div>
  </div>
</template>
