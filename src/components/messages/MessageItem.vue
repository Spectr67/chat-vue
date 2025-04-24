<script>
export default {
  props: ['message'],
}
</script>

<template>
  <div>
    <span class="msg-line">
      <b>[{{ message.author }}]:</b>
      <span>{{ message.text }}</span>
    </span>
  </div>
</template>
