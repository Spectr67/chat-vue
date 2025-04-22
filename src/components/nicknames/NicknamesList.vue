<script>
export default {
  props: ['nicknames', 'currentNickname'],

  emits: ['ping'],
}
</script>

<template>
  <div class="right">
    <div class="nickname-list" v-for="nickname of nicknames" :key="nickname">
      <div
        class="wrap-span"
        :class="{ highlight: nickname === currentNickname }"
        @click="$emit('ping', nickname)"
      >
        <span>{{ nickname }} </span>
      </div>
    </div>
  </div>
</template>

<style>
.highlight {
  border: 1px solid #333;
  padding: 4px;
  border-radius: 5px;
  background-color: #f0f0f0;
}
</style>
