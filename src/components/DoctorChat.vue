<template>
  <div class="side-info-content">
    <div class="side-info-nav">
      <p @click="$emit('setSideInfo', 0)" class="nav-heading">
        <img src="../assets/back.png" alt=""> Simisola Agboola
      </p>
    </div>
    <div class="main-chat-content">
      <div class="mesgs">
        <div class="incoming-msg">
          <div class="recieved-msg">
            <p class="recieved-msg-text msg-text mb-0">
              hello<span class="text-time">2:06 PM</span>
            </p>
          </div>
        </div>
        <div class="incoming-msg">
          <div class="recieved-msg">
            <p class="recieved-msg-text msg-text mb-0">
              hello<span class="text-time">2:06 PM</span>
            </p>
          </div>
        </div>
        <div class="incoming-msg">
          <div class="recieved-msg">
            <p class="recieved-msg-text msg-text mb-0">
              hello how far na <span class="text-time">2:06 PM</span>
            </p>
          </div>
        </div>
        <div class="incoming-msg">
          <div class="recieved-msg">
            <p class="recieved-msg-text msg-text mb-0">
              How things be for your side this days <span class="text-time">2:06 PM</span>
              </p>
          </div>
        </div>
        <div class="outgoing-msg">
            <div class="sent-msg">
              <p class="sent-msg-text msg-text mb-0">
                This is crazy <span class="text-time mb-0">2:06 PM</span>
              </p>
            </div>
        </div>
        <div class="outgoing-msg">
            <div class="sent-msg">
              <p class="sent-msg-text msg-text mb-0">
                This is crazy <span class="text-time mb-0">2:06 PM</span>
              </p>
            </div>
        </div>
        <div class="outgoing-msg">
            <div class="sent-msg">
              <p class="sent-msg-text msg-text mb-0">
                This is crazy <span class="text-time mb-0">2:06 PM</span>
              </p>
            </div>
        </div>
        <div class="outgoing-msg">
          <div class="sent-msg-box">
            <div class="sent-msg">
              <p class="sent-msg-text msg-text mb-0">
                This is crazy the kinda thing ive always been want
                <span class="text-time">2:06 PM</span>
              </p> 
            </div>
          </div>
        </div>
        <div class="outgoing-msg">
          <div class="sent-msg-box">
            <div class="sent-msg">
              <p class="sent-msg-text msg-text mb-0">
                This is crazy the kinda thing ive always been wantingThis is crazy the kinda
                <span class="text-time">2:06 PM</span>
              </p> 
            </div>
          </div>
        </div>
        <div class="outgoing-msg">
          <div class="sent-msg-box">
            <div class="sent-msg">
              <p class="sent-msg-text msg-text mb-0">
                This is crazy the kinda thing ive always been wantingThis is crazy the kinda
                <span class="text-time">2:06 PM</span>
              </p> 
            </div>
          </div>
        </div>
        <div class="outgoing-msg">
          <div class="sent-msg-box">
            <div class="sent-msg">
              <p class="sent-msg-text msg-text mb-0">
                This is crazy the kinda thing ive always been wantingThis is crazy the kinda
                <span class="text-time">2:06 PM</span>
              </p> 
            </div>
          </div>
        </div>
        
      </div>
      <div class="type-msg-box">
          <input type="text" class="write-msg form-control" placeholder="Type a message">
      </div>
    </div>
  </div>
</template>

<style scoped>
.side-info-content {
  height: 91.5vh;
  border-left: 1px solid rgba(0, 0, 0, 0.171);
}
.side-info-nav {
  background: rgba(237, 237, 237, 0.6);
  padding: 14px 22px;
  border-bottom: 1px solid rgba(71, 71, 71, 0.171);
  height: 51px;
}
.side-info-nav .nav-heading {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
}
.side-info-nav .nav-heading img {
  width: 18px;
  margin-right: 30px;
}

.side-info-nav p {
  margin-bottom: 0;
}

.mesgs {
  padding: 10px 8%;
  overflow: auto;
  height: 505px;
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
  max-width: 90%;
}
.recieved-msg .recieved-msg-text {
  background: #eaeaea;
  padding: 8px 25px 8px 8px;
  border-radius: 4px;
}

.sent-msg {
  max-width: 89%;
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
  width: 99%;
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
