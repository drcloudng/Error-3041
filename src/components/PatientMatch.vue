<template>
  <div class="side-info-content">
          <div class="side-info-nav">
            <p @click="$emit('setSideInfo', 0)" class="nav-heading">
              <img src="../assets/back.png" alt="">profile
            </p>
          </div>
          <div class="patient-info">
            <div class="patient-img">

            </div>
            <h6 class="patient-name text-center">
              Ibrahim Uthman
            </h6>
            <p class="text-center online">
              online
            </p>
            <button @click.prevent="$emit('setSideInfo', 2)" class="btn btn-sm btn-block btn-success match">
              MATCH
            </button>
            <div class="row">
              <div class="col-md-6">
                <div class="customer-info">
                  <p class="customer-heading text-center">Customer since</p>
                  <hr>
                  <p class="customer-detail text-center">January 2017</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="customer-info">
                  <p class="customer-heading text-center">Subscribe status</p>
                  <hr>
                  <p class="customer-detail text-center">SUBSCRIBED</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="customer-info">
                  <p class="customer-heading text-center">Matched to</p>
                  <hr>
                  <p class="customer-detail text-center">Dr Giwa Arowolo</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="customer-info">
                  <p class="customer-heading text-center">Subcription Expires</p>
                  <hr>
                  <p class="customer-detail text-center">March 2017</p>
                </div>
              </div>
            </div>
          </div>
          <div class="patient-media">
            <p class="media">Media, Links and Docs
              <span class="">></span>
            </p>
            <p class="text-info text-center media-text">No Media, Links and Docs</p>
          </div>
        </div>
</template>

<style scoped>
.side-info-content {
  height: 91.5vh;
  border-left: 1px solid rgba(0, 0, 0, 0.171);
  background: #f3f3f3;
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
.patient-info {
  background: white;
  padding: 29px 20px 30px;
  /* border-left: 1px solid rgba(0, 0, 0, 0.171); */
}

.patient-img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: #777;
  margin: auto;
  margin-bottom: 15px;
}

.patient-name {
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

.btn.match {
  font-weight: bold;
}

.customer-info {
  border: solid 1px rgba(0, 0, 0, 0.192);
  border-radius: 4px;
  margin-top: 20px;
  padding: 8px 0;
  width: 138px;
}

.customer-heading {
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #9b9b9b;
  margin-bottom: 0;
}

.customer-info hr {
  color: #979797;
  margin: 7px 0;
}

.customer-detail {
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  margin-bottom: 0;
}
/* ========================= */
/* patient media */
.patient-media {
  background: #fff;
  margin-top: 10px;
  padding: 10px 20px 20px 10px;
  font-size: 13px;
}
.patient-media .media {
  color: #df0019;
}
.patient-media p span {
  font-size: 20px;
  color: #4a4a4a;
  margin-left: 33px;
}
</style>
