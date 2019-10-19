<template>
        <div class="password">
          <h4 class="text-center">Change Password</h4>
          <p class="text-center">Your password should not be easy and common</p>
          <hr>
          <form action="">
            <div class="form-group">
              <div class="old-password">
                <label for="email">Old password</label>
                <input type="password" class="form-control">
              </div>
              <div class="new-password">
                <label for="new-password">New password</label>
                <input type="password" class="form-control">
              </div>
            </div>

            <div class="address-saved float-right">
              <span>All changes saved</span>
              <button class="btn btn-md btn-danger save-btn">Change password</button>
            </div>

          </form>
        </div>
</template>

<style scoped>
.old-password {
  width: 47%;
  display: inline-block;
  margin-right: 5%;
}
.new-password {
  width: 47%;
  display: inline-block;
}

.password {
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

.password h4 {
  font-weight: bold;
}

.password p {
  font-size: 12px;
}

.password form {
  padding: 20px 80px 130px;
}

.password form label {
  color: #9b9b9b;
  font-size: 13px;
  margin-bottom: 2px;
}

.password form input {
  border-radius: 3px;
  height: 35px;
  font-size: 13px;
  padding-left: 20px;
}

.password form .form-control:focus {
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
