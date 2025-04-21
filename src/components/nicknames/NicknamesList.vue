<script>
export default {
  props: ['nicknames', 'currentNickName'],

  emits: ['ping'],

  methods: {
    highlightNickname(nickname) {
      return nickname === this.currentNickname ? 'highlight' : ''
    },
  },
}
</script>

<template>
  <div class="right">
    <div
      class="nickname-list"
      v-for="(nickname, index) in nicknames"
      :key="index"
    >
      <div
        class="wrap-span"
        @click="$emit('ping', nickname)"
        :class="highlightNickname(nickname)"
      >
        <span>{{ nickname }}</span>
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
