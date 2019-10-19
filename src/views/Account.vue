<template>
<div>
  <Navbar/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 sidebar">
        <div class="sidebar-content">
          <ul class="pt-4">
            <li  @click="chaneTab(0)" :class="{attached: sidebar == 0}">General settings</li>
            <li @click="chaneTab(1)" :class="{attached: sidebar == 1}">Experience</li>
            <li @click="chaneTab(2)" :class="{attached: sidebar == 2}">Address</li>
            <li @click="chaneTab(3)" :class="{attached: sidebar == 3}">Password</li>
          </ul> 
          <p>
            <span>Terms + Conditions</span>
            <span class="ml-3 mr-3">Privacy</span>
          </p>
        </div>
        
      </div>
      <div v-if="sidebar == 0" class="col-md-9">
        <GeneralSettings />
      </div>
      <div v-else-if="sidebar == 1" class="col-md-9">
        <Experience />
      </div>
      <div v-else-if="sidebar == 2" class="col-md-9">
        <Address />
      </div>
      <div v-else-if="sidebar == 3" class="col-md-9">
        <Password />
      </div>
    </div>
  </div>
</div>
  
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import GeneralSettings from "@/components/GeneralSettings.vue";
import Experience from "@/components/Experience.vue";
import Address from "@/components/Address.vue";
import Password from "@/components/Password.vue";
export default {
  components: {
    Navbar,
    GeneralSettings,
    Experience,
    Address,
    Password
  },
  data() {
    return {
      sidebar: 0
    };
  },
  methods: {
    chaneTab(tab) {
      this.sidebar = tab;
    }
  }
};
</script>


<style scoped>
.container-fluid {
  background-color: #f8f8f8;
}
.sidebar {
  padding: 0;
}
.sidebar-content {
  background: white;
  width: 300px;
  padding: 0;
  box-shadow: 0px 1px 15px rgba(71, 71, 71, 0.1),
    0px 2px 15px rgba(71, 71, 71, 0.1);
}

.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar ul li {
  padding: 13px 0px 13px 100px;
}

li:first-of-type {
  margin-top: 40px;
}

.sidebar ul li:hover {
  background: #4a4a4a;
  transition: 0.25s ease-out;
  cursor: pointer;
  color: white;
}

.sidebar p {
  font-size: 13px;
  margin-left: 100px;
}

.attached {
  background: #4a4a4a;
  color: white;
}
</style>

