<template>
  <div class="experience">
          <h4 class="text-center">Experience</h4>
          <p class="text-center">Write about your personality and experience, it reasures the customers</p>
          <hr>
          <form action="">
            <div class="form-group">
              <div class="prof-title">
                <label for="prof-title">Professional title</label>
                <input type="text" class="form-control" id="prof-title">
              </div>
              <div class="first-name">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" id="first-name">
              </div>
              <div class="last-name">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" id="last-name">
              </div>
            </div>
            <div class="form-group">
              <div class="email">
                <label for="email">E-mail address</label>
                <input type="text" class="form-control">
              </div>
              <div class="phone">
                <label for="phone">Phone number</label>
                <input type="text" class="form-control">
              </div>
            </div>

            <div class="address-saved float-right">
              <span>All changes saved</span>
              <button class="btn btn-md btn-danger save-btn">Save updates</button>
            </div>

          </form>
        </div>
</template>


<style scoped>
.prof-title {
  width: 30%;
  display: inline-block;
  margin-right: 3.5%;
}
.first-name {
  width: 30%;
  display: inline-block;
  margin-right: 3.3%;
}
.last-name {
  width: 30%;
  display: inline-block;
  margin-left: 1.6%;
}

.email {
  width: 47%;
  display: inline-block;
  margin-right: 5%;
}
.phone {
  width: 47%;
  display: inline-block;
}

.experience {
  width: 83%;
  margin: auto;
  margin-top: 80px;
  background: white;
  border-radius: 10px;
  padding-top: 50px;
  box-shadow: 1px 1px 15px rgba(71, 71, 71, 0.1),
    2px 2px 15px rgba(71, 71, 71, 0.1), -1px -1px 15px rgba(71, 71, 71, 0.1),
    -2px -2px 15px rgba(71, 71, 71, 0.1);
}

.experience h4 {
  font-weight: bold;
}

.experience p {
  font-size: 12px;
}

.experience form {
  padding: 20px 80px 130px;
}

.experience form label {
  color: #9b9b9b;
  font-size: 13px;
  margin-bottom: 2px;
}

.experience form input {
  border-radius: 3px;
  height: 35px;
  font-size: 13px;
  padding-left: 20px;
}

.experience form .form-control:focus {
  border-color: #777;
  box-shadow: 0 0 0 0;
}

.address-saved {
  margin-top: 30px;
  margin-right: 3px;
}

.save-btn {
  font-size: 11px;
  padding: 9px 30px;
  border-radius: 3px;
  background: #df0019;
}

.address-saved span {
  font-size: 11px;
  margin-right: 10px;
}
</style>
