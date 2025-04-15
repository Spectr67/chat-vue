<script>
import Login from './components/Login.vue'
import NickNameList from './components/NickNameList.vue'
import ChatFlow from './components/ChatFlow.vue'
import SendMessage from './components/SendMessage.vue'
import UiHeader from './ui/UiHeader.vue'

export default {
  components: { Login, NickNameList, ChatFlow, SendMessage, UiHeader },

  data() {
    return {
      currentNickName: '',
      nickNames: [],
      messages: [],
      nicknameTo: '',
    }
  },

  methods: {
    handleLogin(nickname) {
      this.nickNames.push(nickname)
      this.currentNickName = nickname

      this.messages.push({
        author: 'system',
        text: `${nickname} вошел(ла) в чат.`,
      })
    },

    handleMessage(messageText) {
      this.messages.push({
        author: this.currentNickName,
        text: messageText,
      })
    },

    handleSendMassageTo(nickName) {
      this.nickNameTo = nickName
    },
  },
}
</script>

<template>
  {{ currentNickName }}
  {{ messages }}
  <div class="main flex f_centered light">
    <div class="chat">
      <UiHeader />

      <div class="content flex f_tile">
        <ChatFlow :messages="messages" :currentNickName="currentNickName" />
        <NickNameList
          :nickNames="nickNames"
          @sendMassageTo="handleSendMassageTo"
        />
      </div>

      <SendMessage @send-message="handleMessage" :nickNameTo="nicknameTo" />

      <input type="checkbox" id="chk_sm" />

      <Login @login="handleLogin" />
    </div>
  </div>
</template>
