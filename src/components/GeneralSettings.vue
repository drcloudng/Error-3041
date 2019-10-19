<template>
  <div class="general-setting">
    <div class="prof-img mb-3">
      <!-- <img src="" alt=""> -->
    </div>
    <h4 class="text-center">ph.D Ibironke Umahi</h4>
    <p class="text-center">Change picture</p>
    <hr>
    <form action="">
      <div class="form-group">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <label for="prof-title">Professional title</label>
            <input type="text" class="form-control" id="prof-title">
          </div>
          <div class="col-md-4 col-sm-12">
            <label for="first-name">First Name</label>
            <input type="text" class="form-control" id="first-name">
          </div>
          <div class="col-md-4 col-sm-12">
            <label for="last-name">Last Name</label>
            <input type="text" class="form-control" id="last-name">
          </div>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col-md-6">
            <label for="email">E-mail address</label>
            <input type="text" class="form-control">
        </div>
        <div class="col-md-6">
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
.general-setting {
  width: 83%;
  margin: auto;
  margin-top: 50px;
  background: white;
  border-radius: 10px;
  padding-top: 50px;
  box-shadow: 1px 1px 15px rgba(94, 94, 94, 0.1),
    2px 2px 15px rgba(94, 94, 94, 0.1), -1px -1px 15px rgba(94, 94, 94, 0.1),
    -2px -2px 15px rgba(94, 94, 94, 0.1);
}

.general-setting h4 {
  font-weight: bold;
}

.general-setting p {
  font-size: 12px;
  color: #df0019;
}

.general-setting form {
  padding: 20px 80px 110px;
}

.general-setting form label {
  color: #9b9b9b;
  font-size: 13px;
  margin-bottom: 2px;
}

.general-setting form input {
  border-radius: 3px;
  height: 35px;
  font-size: 13px;
  padding-left: 20px;
}

.general-setting form .form-control:focus {
  border-color: #777;
  box-shadow: 0 0 0 0;
}

.address-saved {
  margin-top: 20px;
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

.prof-img {
  background: #777;
  width: 80px;
  height: 80px;
  margin: auto;
  border-radius: 50%;
}
</style>
