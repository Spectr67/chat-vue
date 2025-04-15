<script>
import Login from './components/Login.vue'
import NickNameList from './components/NickNameList.vue'
import ChatFlow from './components/ChatFlow.vue'
import SendMessage from './components/SendMessage.vue'

export default {
  components: { Login, NickNameList, ChatFlow, SendMessage },

  data() {
    return {
      currentNickName: '',
      nickNames: ['Dima', 'Vlad', 'Alex'],
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
      <div class="header flex f_tile">
        <div class="left flex f_centered">
          <label for="chk_sm">
            <svg width="32px" height="32px" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </label>
        </div>
        <div class="right flex f_centered">
          <div class="wrap-h">
            <h1>Интроверт чат</h1>
          </div>
        </div>
      </div>

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
