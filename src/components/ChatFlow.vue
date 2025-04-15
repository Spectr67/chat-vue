<script>
export default {
  props: ['messages', 'currentNickName'],
}
</script>

<template>
  <div class="left">
    <div class="wrap-chat-flow">
      <div class="chat-flow" spellcheck="false">
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
