<template>
  <nav class="navbar navbar-expand-lg navbar-light mynav">
    <div class="container">
      <a class="navbar-brand" href="#">Dr Cloud</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav-mgn nav-fntsz">
          <li class="nav-item mr-5 active">
            <a class="nav-link" href="#"><img src="../assets/group-10.png" alt="" class="nav-icons">&nbsp;&nbsp; Messanger
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active mr-5">
            <a class="nav-link " href="#"><img src="../assets/group-6_4.png" alt="" class="nav-icons">&nbsp;&nbsp;Doctor</a>
          </li>

          <li class="nav-item mr-5 active">
            <a class="nav-link " href="#"><img src="../assets/group-6_3.png" alt="" class="nav-icons">&nbsp;&nbsp;Dashboard</a>
          </li>
          <li class="nav-item mr-5 active">
            <a class="nav-link " href="#">Account</a>
          </li>
        </ul>
        <ul class="navbar-nav my-2 my-lg-0 nav-fntsz nav-user">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-bell"></i>
            </a>
          </li>
          <li @click="signOut()" class="nav-item active ">
            <!-- <span class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
                  <!-- <img id="user-img" src="imgs/adolescence-attractive-beautiful-573299.jpg" class="img-caller" alt="caller"> -->
              <span class="user-name">Logout</span>
            <!-- </span> -->

            <!-- <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="" class="dropdown-item">logout</a>
            </div> -->
          </li>
          <!-- <li @click="signOut()" class="nav-item active dropdown">
            <span class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img id="user-img" src="imgs/adolescence-attractive-beautiful-573299.jpg" class="img-caller" alt="caller">
              <span class="user-name"> Ibinronke Umahi</span>
            </span>

            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="" class="dropdown-item">logout</a>
            </div>
          </li> -->

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import firebase from 'firebase'
export default {
  beforeRouteEnter() {
    if (!this.$root.auth) {
      this.$router.push("/");
    }
  },
  methods: {
    signOut() {
       firebase.auth().signOut().then(function() {
         this.$router.push('/')
      }).catch(function(error) {
         
      });
    }
  }
};
</script>


<style scoped>
.mynav {
  background: white;
  color: black;
  box-shadow: 1px 0px 10px rgba(71, 71, 71, 0.1),
    2px 0px 10px rgba(71, 71, 71, 0.1);
  z-index: 1;
}
.nav-item{
  cursor: pointer;
}
.nav-mgn {
  margin-left: 15%;
}

.img-caller {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 8px;
}

.nav-fntsz {
  font-size: 13px;
}
.nav-icons {
  width: 13px;
}

.user-name {
  display: inline-block;
  margin-top: 5px 0;
}

.nav-user {
  margin-left: 170px;
}
.dropdown:hover {
  cursor: pointer;
}
</style>
