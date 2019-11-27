<template>
  <div>
    <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-sm-12 sidebar">
          <MessangerSidebar @clicked="onClickChild" :users="usersForLeftSide" />
        </div>
        <div class="col-sm-12 main-chat" :class="[sideInfo > 0 ? 'col-md-6' : 'col-md-9']">
          <MainChat :currentId="this.currentUser" :messages="messages" :currentUserOnChat="this.currenntUserChat" @setSideInfo="setSideInfo" />
        </div>
          <div v-if="sideInfo === 1" class="col-md-3 col-sm-12 side-info">
          <PatientMatch @setSideInfo="setSideInfo" />
        </div>
        <div v-else-if="sideInfo === 2" class="col-md-3 col-sm-12 side-info">
          <DoctorSearch @setSideInfo="setSideInfo" />
        </div>
        <div v-else-if="sideInfo === 3" class="col-md-3 col-sm-12 side-info"> 
          <DoctorsProfile @setSideInfo="setSideInfo" />
        </div>
        <div v-else-if="sideInfo === 4" class="col-md-3 col-sm-12 side-info">
          <DoctorChat @setSideInfo="setSideInfo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MessangerSidebar from "@/components/MessangerSidebar.vue";
import MainChat from "@/components/MainChat.vue";
import PatientMatch from "@/components/PatientMatch.vue";
import DoctorSearch from "@/components/DoctorSearch.vue";
import DoctorsProfile from "@/components/DoctorsProfile.vue";
import DoctorChat from "@/components/DoctorChat.vue";
import { async } from 'q';
import firebase from 'firebase'

// const db = window.db;
export default {
  components: {
    Navbar,
    MessangerSidebar,
    MainChat,
    PatientMatch,
    DoctorSearch,
    DoctorsProfile,
    DoctorChat
  },
  data() {
    return {
      sideInfo: 0,
      myChatThread: [],
      messages: [],
      currentPairedUsersId: [],
      // currentUser: "0UiCTy8vbaYN1D8FxsuwuAgbxMg2",
      currentUser: "",
      currenntUserChat: {
        "chatThreadId": "",
        "FirstName": "",
        "LastName": "",
        "profileImage": "",
        "userId":""
      }
    };
  },
  computed: {
    usersForLeftSide:function () {
      let temp = []
      let self = this
      this.currentPairedUsersId.forEach(user => {
        db.collection("Users").doc(`${user.id}`).get()
        .then(querySnapshot => {
          let tempdata = querySnapshot.data()
          tempdata.chatThreadId = user.chatThreadId
          tempdata.userId = user.id
          temp.push(tempdata)
        })
      })
      return temp
    }
  },
  methods: {
    setSideInfo(e) {
      this.sideInfo = e;
    },
    fetchUserChat (){
      this.myChatThread.forEach(idMain => {
        db.collection("ChatThread").doc(`${idMain}`).get()
        .then( querySnapshot => {
           querySnapshot.data().members.forEach(id => {
            if(id !== this.currentUser){
              let tempData = {id: id, chatThreadId:idMain }
              this.currentPairedUsersId.push(tempData)
            }
          })
        })
      })
    },
    onClickChild (value) {
      this.currenntUserChat = value
      db.collection(`ChatMessage/${value.chatThreadId}/Message`)
      .onSnapshot(querySnapshot => {
          let allMessages = [];
          querySnapshot.forEach(doc => {
            allMessages.push(doc.data());
          });
          this.messages = allMessages;
        });
    }
  },
  mounted() {
    // firebase.auth().signOut().then(function() {
    // }).catch(function(error) {
    // });
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // console.log(user.id)
        self.currentUser = user.uid
      } else {
        // No user is signed in.
        self.$router.push('/')
      }
    });
    self.currentUser = localStorage.getItem("currentUserId")
    db.collection("UserChats").doc(self.currentUser).get()
    .then(async function(querySnapshot) {
        const currenntUserChatThreadId = querySnapshot.data()
        await Object.keys(currenntUserChatThreadId).forEach(id => {
          self.myChatThread.push(id)
        })
        self.fetchUserChat();
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    // on auth state chage
    // make request with axios to the backend;
    // if user, this.$root.authUser = user
    // this.fetchChatThread()
    // else this.$root.authUser = {} this.$router.push('/login')
  }
};
</script>

<style scoped>
.sidebar {
  padding-left: 0;
  padding-right: 0;
}

.main-chat {
  padding: 0;
}

.side-info {
  padding-left: 0;
  padding-right: 0;
}
</style>
