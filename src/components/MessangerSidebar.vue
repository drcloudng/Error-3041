<template>
<div>
  <div class="input-group">
    <div class="input-group-prepend search-msg">
      <span class="input-group-text" id="basic-addon1">@</span>
    </div>
    <input type="text" class="form-control search-input" placeholder="what are you looking for" aria-label="what are you looking for"
      aria-describedby="basic-addon1">
  </div>
  <div class="sidebar-content">
          <div class="msg-info">
            <div class="msg-img">
              <img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="msg-img">
            </div>

            <div class="msg-content-info">
              <h6 class="msg-name">Ibrahim Uthman</h6>
              <p class="msg-msg">Let me know when you're availa...</p>
              <p class="msg-time">now</p>
            </div>
            <div class="msg-unread">
              <p>2</p>
            </div>
          </div>
          <div class="msg-info">
            <div class="msg-img">
              <img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="msg-img">
            </div>

            <div class="msg-content-info">
              <h6 class="msg-name">Ibrahim Uthman</h6>
              <p class="msg-msg">Let me know when you're availa...</p>
              <p class="msg-time">now</p>
            </div>
            <div class="msg-unread">
              <p>2</p>
            </div>
          </div>
          <div class="msg-info">
            <div class="msg-img">
              <img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="msg-img">
            </div>

            <div class="msg-content-info">
              <h6 class="msg-name">Ibrahim Uthman</h6>
              <p class="msg-msg">Let me know when you're availa...</p>
              <p class="msg-time">now</p>
            </div>
            <div class="msg-unread">
              <p>2</p>
            </div>
          </div>
          <div class="msg-info">
            <div class="msg-img">
              <img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="msg-img">
            </div>

            <div class="msg-content-info">
              <h6 class="msg-name">Ibrahim Uthman</h6>
              <p class="msg-msg">Let me know when you're availa...</p>
              <p class="msg-time">now</p>
            </div>
            <div class="msg-unread">
              <p>2</p>
            </div>
          </div>
          <div class="msg-info">
            <div class="msg-img">
              <img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="msg-img">
            </div>

            <div class="msg-content-info">
              <h6 class="msg-name">Ibrahim Uthman</h6>
              <p class="msg-msg">Let me know when you're availa...</p>
              <p class="msg-time">now</p>
            </div>
            <div class="msg-unread">
              <p>2</p>
            </div>
          </div>
          <div class="msg-info">
            <div class="msg-img">
              <img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="msg-img">
            </div>

            <div @click="$emit('setSideInfo', 1)" class="msg-content-info">
              <h6 class="msg-name">Ibrahim Uthman</h6>
              <p class="msg-msg">Let me know when you're availa...</p>
              <p class="msg-time">now</p>
            </div>
            <div class="msg-unread">
              <p>2</p>
            </div>
          </div>
          <div class="msg-info">
            <div class="msg-img">
              <img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="msg-img">
            </div>

            <div class="msg-content-info">
              <h6 class="msg-name">Ibrahim Uthman</h6>
              <p class="msg-msg">Let me know when you're availa...</p>
              <p class="msg-time">now</p>
            </div>
            <div class="msg-unread">
              <p>2</p>
            </div>
          </div>
          <div class="msg-info">
            <div class="msg-img">
              <img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="msg-img">
            </div>

            <div class="msg-content-info">
              <h6 class="msg-name">Ibrahim Uthman</h6>
              <p class="msg-msg">Let me know when you're availa...</p>
              <p class="msg-time">now</p>
            </div>
            <div class="msg-unread">
              <p>2</p>
            </div>
          </div>
          <div class="msg-info">
            <div class="msg-img">
              <img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="msg-img" class="msg-img">
            </div>
            <div class="msg-content-info">
              <h6 class="msg-name">Ibrahim Uthman</h6>
              <p class="msg-msg">Let me know when you're availa...</p>
              <p class="msg-time">now</p>
            </div>
            <div class="msg-unread">
              <p>2</p>
            </div>
          </div>
        </div>
</div>
  
</template>

<style scoped>
.sidebar-content {
  height: 83.8vh;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(71, 71, 71, 0.171);
  overflow: auto;
}
.input-group {
  border-right: 1px solid rgba(0, 0, 0, 0.082);
}
#basic-addon1 {
  background-color: white;
  border-right: 0px;
  border-top: 0px;
  padding-left: 20px;
  color: #9b9b9b;
  font-size: 13px;
  opacity: 0.8;
  z-index: -1;
}
.search-input {
  border-left: 0;
  border-right: 0;
  border-top: 0px;
  border-radius: 0;
  font-size: 14px;
  padding: 25px 0px;
  height: 50px;
}
.search-input:focus {
  border-top: 1px solid rgba(71, 71, 71, 0.096);
  border-bottom: 1px solid rgba(71, 71, 71, 0.089);
  box-shadow: none;
  padding: 0;
  background: #fdfdfd;
}
.search-input::placeholder {
  color: #9b9b9b;
  font-size: 13px;
  opacity: 0.8;
  font-family: muli, sans-serif;
}
.msg-info {
  border-bottom: 1px solid rgba(71, 71, 71, 0.1);
  padding: 24px 15px 22px 20px;
  position: relative;
}
.msg-img {
  width: 33px;
  height: 33px;
  border-radius: 100%;
  margin-right: 10px;
  display: inline-block;
  vertical-align: 0;
  margin-bottom: 10px;
  object-fit: cover;
}

.msg-content-info {
  display: inline-block;
}
.msg-content-info .msg-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 3px;
}

.msg-content-info .msg-msg {
  font-size: 13px;
  margin-bottom: 0px;
}

.msg-content-info .msg-time {
  font-size: 12px;
  margin-bottom: 0;
}
.msg-unread {
  font-size: 12px;
  background: #df0019;
  width: 17px;
  height: 17px;
  text-align: center;
  color: white;
  border-radius: 3px;
  position: absolute;
  top: 22px;
  right: 23px;
}
</style>

