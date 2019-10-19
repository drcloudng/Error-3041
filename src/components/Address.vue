<template>
  <div class="address">
          <h4 class="text-center">Address</h4>
          <p class="text-center">Don't worry, your contact details are save</p>
          <hr>
          <form action="">
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" class="form-control">
            </div>
            <div class="city">
              <label for="city">City</label>
              <input type="text" class="form-control" id="city">
            </div>
            <div class="state">
              <label for="state">State</label>
              <input type="text" class="form-control" id="state">
            </div>
            <div class="country">
              <label for="country">Country</label>
              <input type="text" class="form-control" id="country">
            </div>

            <div class="address-saved float-right">
              <span>Address saved</span>
              <button class="btn btn-md btn-danger save-btn">Save updates</button>
            </div>

          </form>
        </div>
</template>

<style scoped>
/* address content begins */
.city {
  width: 30%;
  display: inline-block;
  margin-right: 3.5%;
}
.state {
  width: 30%;
  display: inline-block;
  margin-right: 3.3%;
}
.country {
  width: 30%;
  display: inline-block;
  margin-left: 1.6%;
}

.address {
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

.address h4 {
  font-weight: bold;
}

.address p {
  font-size: 12px;
}

.address form {
  padding: 20px 80px 130px;
}

.address form label {
  color: #9b9b9b;
  font-size: 13px;
  margin-bottom: 2px;
}

.address form input {
  border-radius: 3px;
  height: 35px;
  font-size: 13px;
  padding-left: 20px;
}

.address form .form-control:focus {
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
