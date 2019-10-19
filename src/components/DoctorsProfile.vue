<template>
  <div class="side-info-content">
    <div class="side-info-nav">
      <p @click="$emit('setSideInfo', 0)" class="nav-heading">
        <img src="../assets/back.png" alt=""> Doctor's profile
      </p>
    </div>
    <div class="doc-info">
      <div class="doc-img">
        <p class="mb-0 text-center">SA</p>
      </div>
      <h6 class="doc-name text-center">
        Simisola Agboola
      </h6>
      <p class="text-center online">
        online
      </p>
      <button @click.prevent="$emit('matchPatient')" class="btn btn-md btn-success match">
        MATCH
      </button>
      <button @click.prevent="$emit('setSideInfo', 4)" class="btn btn-md chat float-right">
        CHAT
      </button>
      <h6 class="short-bio">Short Bio</h6>
      <p class="bio mb-0">one of the best doctors in ibadan, I am most experienced with people with depression, cardiac arrest and heart problems</p>
    </div>
    <hr class="my-0">
    <div class="specialization">
      <h6 class="mb-3">SPECIALIZATION</h6>
      <p class="mr-2">Clinic</p>
      <p class="mr-2">Sport</p>
      <p class="mr-2">Education</p>
      <p class="mr-2">Traning</p>
      <p class="mr-2">Marketing communication</p>
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
/* ========================================== */
/* patient-info */
.doc-info {
  background: white;
  padding: 29px 20px 30px;
  /* border-left: 1px solid rgba(0, 0, 0, 0.171); */
}

.doc-img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: #777;
  margin: auto;
  margin-bottom: 15px;
}

.doc-img p {
  color: #fff;
  padding-top: 26%;
  font-size: 32px;
}

.doc-name {
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.online {
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
}

.match,
.chat {
  width: 140px;
  text-align: center;
}
.match {
  background: #2fb200;
}

.chat {
  color: #2fb200;
  background: #fff;
  border: 1.5px solid #2fb200;
}

.short-bio {
  font-size: 13px;
  font-weight: bold;
  margin-top: 30px;
}
.bio {
  font-size: 13px;
}

.specialization {
  padding: 30px 20px 10px;
  background: #fff;
}
.specialization h6 {
  font-size: 12px;
  font-weight: bold;
}
.specialization p {
  font-size: 13px;
  border-radius: 16px;
  border: solid 0.5px #d3d3d3;
  padding: 5px 10px;
  display: inline-block;
}
</style>
