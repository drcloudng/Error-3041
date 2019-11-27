<template>
  <div class="main-chat-full">
    <div @click="$emit('setSideInfo', 1)" class="chat-nav">
      <div class="chat-img">
        <img v-if="userToDisplay.profileImage != ''" :src="userToDisplay.profileImage" alt="msg-img" class="chat-img">
         <img v-else src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="chat-img">
      </div> 
      <h6>{{`${userToDisplay.FirstName} ${userToDisplay.LastName}`}}</h6>
      <ul>
        <li>a</li>
        <li><img src="../assets/match.png" width="15px" alt=""></li>
        <li>a</li>
      </ul>
    </div>
    <div class="main-chat-content">
      <div class="mesgs">
        <div v-for="message in messageList" :key="message.messageID">
          <div v-if="message.recipientID == currentId" class="incoming-msg">
            <div class="recieved-msg">
              <p class="recieved-msg-text msg-text mb-0">
                {{message.messageText}}<span class="text-time">{{message.messageTime}}</span>
              </p>
            </div>
          </div>
          <div v-else class="outgoing-msg">
            <div class="sent-msg">
              <p class="sent-msg-text msg-text mb-0">
                {{message.messageText}} <span class="text-time mb-0">{{message.messageTime}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="type-msg-box">
          <input v-model="messageBody" @keyup.enter="sendChat" type="text" class="write-msg form-control" placeholder="Type a message">
      </div>
    </div>
  </div>
</template>
<script>
export default { 
    props: [
      'messages',
      'currentUserOnChat',
      'currentId'
    ],
    data() {
        return {
            userToDisplay: this.currentUserOnChat,
            messageList: this.messages,
            messageBody:""
        }
    }, 
    watch: {
      messages: function(newMessages) {
        this.messageList = newMessages
      },
      currentUserOnChat: function(newUser) {
        this.userToDisplay = newUser
      }
    },
    methods: {
      sendThreadid (chatThreadId, FirstName, LastName) {
        this.$emit('clicked', {chatThreadId, FirstName, LastName})
      },
      sendChat () {
        let messageContent = {
          "messageDate":"Saturday 28:09:2019",
          "messageID":new Date().getTime(),
          "messageSender":this.currentId,
          "messageText":this.messageBody,
          "messageTime":"06:08",
          "recieverType":"Patient",
          "recipientID":this.userToDisplay.userId,
          "senderName": "Test User",
          "type":"TEXT"
        }
        console.log(messageContent)
        db.collection(`ChatMessage/${this.userToDisplay.chatThreadId}/Message`).add(messageContent)
        .then(refDoc => {
          console.log(refDoc)
        })
        .catch(error => {
          console.error(error)
        })
        this.messageBody = "";
      }
    }
}
</script>
<style scoped>
.main-chat-full {
  height: 91.5vh;
  background: url("../assets/chat_bg.png");
  background-repeat: repeat-x repeat-y;
  position: relative;
}
.chat-nav {
  background: white;
  padding: 9px 22px;
  border-bottom: 1px solid rgba(71, 71, 71, 0.171);
  height: 51px;
}
.chat-nav h6 {
  display: inline;
  font-weight: bold;
  font-size: 16px;
}
.chat-nav ul {
  display: inline;
  margin-left: 40%;
  padding-left: 0;
}
.chat-nav ul li {
  display: inline-block;
  list-style: none;
  margin-right: 25px;
}

.chat-img {
  width: 33px;
  height: 33px;
  border-radius: 100%;
  margin-right: 10px;
  background: #777;
  display: inline-block;
  object-fit: cover;
}
.mesgs {
  padding: 10px 10%;
  overflow: auto;
  height: 700px;
}
.incoming-msg,
.outgoing-msg {
  margin-bottom: 3px;
}
.outgoing-msg {
  overflow: hidden;
}
.recieved-msg {
  display: inline-block;
  max-width: 59%;
}
.recieved-msg .recieved-msg-text {
  background: #eaeaea;
  padding: 8px 25px 8px 8px;
  border-radius: 4px;
}

.sent-msg {
  max-width: 59%;
  float: right;
}
.sent-msg .sent-msg-text {
  background: #ffe2e6;
  padding: 8px 25px 8px 8px;
  border-radius: 4px;
  max-width: 100%;
}
.msg-text {
  font-size: 13.3px;
}
.text-time {
  font-size: 11px;
  color: #9b9b9b;
  display: inline-block;
  margin-left: 5px;
}
.type-msg-box {
  border-top: 1px solid #df0019;
  background: #fff;
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 1px;
}
.write-msg {
  height: inherit;
  border: 0;
  vertical-align: center;
  font-size: 13.3px;
}
.form-control.write-msg:focus {
  outline: 0;
  box-shadow: none;
  border: 0;
}
</style>
