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
  },
}
</script>

<template>
  <!-- {{ currentNickname }}
  {{ messages }}
  {{ pingingNickname }} -->
  <div class="main flex f_centered light">
    <div class="chat">
      <UiHeader />

      <div class="content flex f_tile">
        <MessagesList
          :messages="messages"
          :current-nickname="currentNickname"
        />

        <NicknamesList
          :nicknames="nicknames"
          @ping="pingingNickname = $event"
          :current-nickname="currentNickname"
          @change-current-nickname="currentNickname = $event"
        />
      </div>

      <MessageSubmitter
        :current-nickname="currentNickname"
        @message-submitted="messages.push($event)"
        :pinging-nickname="pingingNickname"
        @reset-pinging-nickname="pingingNickname = $event"
      />

      <NicknameSubmitter @nickname-submitted="currentNickname = $event" />
    </div>
  </div>
</template>
