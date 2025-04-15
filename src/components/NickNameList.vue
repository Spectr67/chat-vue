<script>
export default {
  props: ['nickNames'],

  emits: ['sendMassageTo'],

  methods: {
    handleClick(nickName) {
      this.$emit('sendMassageTo', nickName)
    },
  },
}
</script>

<template>
  <div class="right">
    <div
      class="nickname-list"
      v-for="(nickName, index) in nickNames"
      :key="index"
    >
      <div class="wrap-span">
        <span>@click"sendMassageTo"{{ nickName }}</span>
      </div>
    </div>
  </div>
</template>
