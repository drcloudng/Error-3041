<template>
  <div>
    <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-sm-12 sidebar">
          <MessangerSidebar />
        </div>
        <div class="col-sm-12 main-chat" :class="[sideInfo > 0 ? 'col-md-6' : 'col-md-9']">
          <MainChat @setSideInfo="setSideInfo" />
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
import firebase from "firebase";
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
      myChatThread: {}
    };
  },
  methods: {
    setSideInfo(e) {
      this.sideInfo = e;
    }
    /* fetchUserChat (){
      db.collection('UserChats')
    } */
  },
  created() {
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
