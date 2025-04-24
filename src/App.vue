<script>
import NicknameSubmitter from './components/nicknames/NicknameSubmitter.vue'
import NicknamesList from './components/nicknames/NicknamesList.vue'
import MessagesList from './components/messages/MessagesList.vue'
import MessageSubmitter from './components/messages/MessageSubmitter.vue'
import UiHeader from './ui/UiHeader.vue'

export default {
  components: {
    NicknameSubmitter,
    NicknamesList,
    MessageSubmitter,
    MessagesList,
    UiHeader,
  },

  data() {
    return {
      nextId: 1,
      messages: [],
      nicknames: [],
      currentNickname: '',
      pingingNickname: '',
    }
  },

  watch: {
    currentNickname(newValue) {
      if (this.nicknames.includes(newValue)) return
      this.nicknames.push(newValue)
      this.messages.push({
        id: this.nextId++,
        author: 'system',
        text: `${newValue} вошел(ла) в чат.`,
      })
    },

    nicknames: {
      deep: true,
      handler(newValue) {
        console.log(newValue)
      },
    },
  },
}
</script>

<template>
  {{ currentNickname }}
  {{ messages }}
  {{ pingingNickname }}
  <div class="main flex f_centered light">
    <div class="chat">
      <UiHeader @click="nicknames.push('yo!')" />

      <div class="content flex f_tile">
        <MessagesList
          :messages="messages"
          :current-nickname="currentNickname"
        />

        <NicknamesList
          :current-nickname="currentNickname"
          :nicknames="nicknames"
          @ping="pingingNickname = $event"
          @changeCurrentnickname="this.currentNickname = $event"
        />
      </div>

      <MessageSubmitter
        :current-nickname="currentNickname"
        :pinging-nickname="pingingNickname"
        @message-submitted="messages.push($event)"
        @reset-pinging-nickname="pingingNickname = ''"
      />

      <NicknameSubmitter @nickname-submitted="currentNickname = $event" />
    </div>
  </div>
</template>
