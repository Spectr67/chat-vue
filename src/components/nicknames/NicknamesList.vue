<script>
export default {
  props: ['nicknames'],

  emits: ['ping'],
}
</script>

<template>
  <div class="right">
    <div
      class="nickname-list"
      v-for="(nickname, index) in nicknames"
      :key="index"
    >
      <div class="wrap-span" @click="$emit('ping', nickname)">
        <span>{{ nickname }}</span>
      </div>
    </div>
  </div>
</template>
