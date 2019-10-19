<template>
  <div class="side-info-content">
    <div class="side-info-nav">
      <p @click="$emit('setSideInfo', 0)" class="nav-heading">
        <img src="../assets/back.png" alt="">Match Patient with
      </p>
    </div>
    <div class="search-doc">
      <input type="text" name="doctor" id="doc" class="form-control">
      <span class="float-right mt-2 mr-3 filter">Filter</span>
    </div>
    <div class="search-by">
      <div class="by-category mr-2">
        <label for="for">Category</label>
        <select name="category" id="category" class="form-control">
          <option value="">Cardiologist</option>
        </select>
      </div>
      <div class="by-location mr-2">
        <label for="location">Location</label>
        <select name="location" id="location" class="form-control">
          <option value="">Ibadan</option>
        </select>
      </div>
      <div class="by-experience">
        <label for="experience">Experience</label>
        <select name="experience" id="experience" class="form-control">
          <option value="">2-5 years</option>
        </select>
      </div>
    </div>
    <div class="choose-a-doc">
      <h6>CHOOSE A DOCTOR</h6>
      <div class="doc-list">
        <div @click.prevent="$emit('setSideInfo', 3)" class="doc-list-item">
          <div class="doc-img"><img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img no-img"><p class="mb-0">IO</p></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"><img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"><img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"><img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"><img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"><img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
        <div class="doc-list-item">
          <div class="doc-img"><img src="../assets/adolescence-attractive-beautiful-573299.jpg" alt="doc-img"></div>
          <span class="doc-name">Ikeena Oluwabunmi</span>
        </div>
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

.search-doc {
  padding: 15px 20px 5px;
}
#doc {
  width: 80%;
  display: inline-block;
}
.search-doc input {
  border-radius: 3px;
  height: 40px;
  font-size: 13px;
}
.search-doc input.form-control:focus {
  box-shadow: none;
  border-color: skyblue;
}
.filter {
  font-size: 13px;
  color: #df0019;
  text-decoration: underline;
}

.search-by {
  padding: 10px 20px;
}

.by-category,
.by-location,
.by-experience {
  font-size: 12px;
  width: 94px;
  display: inline-block;
}
.by-category label,
.by-location label,
.by-experience label {
  margin-bottom: 3px;
}
#category,
#location,
#experience {
  font-size: 13px;
  padding: 2px;
  height: 25px;
  border-radius: 3px;
  color: #9b9b9b;
}
#category,
#location,
#experience:focus {
  box-shadow: none;
}
.choose-a-doc {
  margin-top: 25px;
}
.choose-a-doc h6 {
  font-size: 12px;
  font-weight: bold;
  margin-left: 20px;
}

.doc-list {
  height: 330px;
  margin-top: 15px;
  border-top: solid 0.5px rgba(155, 155, 155, 0.5);
  overflow: auto;
}

.doc-list-item {
  height: 50px;
  border-bottom: solid 0.5px rgba(155, 155, 155, 0.5);
  position: relative;
}
.doc-img {
  width: 30px;
  height: 30px;
  background: brown;
  border-radius: 100%;
  display: inline-block;
  margin-top: 10px;
  margin-left: 20px;
}
.no-img p {
  color: #fff;
  padding-top: 18%;
  font-size: 15px;
  text-align: center;
}
.doc-img img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.doc-name {
  font-weight: bold;
  font-size: 13px;
  position: absolute;
  top: 31%;
  left: 20%;
}
</style>
