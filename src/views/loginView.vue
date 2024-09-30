<template>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center p-3 p-md-0">
      <div class="col-md-4 bg-light border rounded p-4">
        <div
          class="alert d-flex justify-content-between"
          :class="{
            'alert-success': loginStatus === 'success',
            'alert-danger': loginStatus === 'danger',
          }"
          role="alert"
          v-if="ShowLoginStatus"
        >
          <span>{{ loginStatusText }}</span>
          <button class="btn-close" data-bs-dismiss="alert"></button>
        </div>
        <div class="text-start" v-if="!authentication">
          <h5>Login to your account</h5>
        </div>
        <form
          class="form text-start"
          v-if="!authentication"
          @submit.prevent="checkAccountValidation"
        >
          <div class="form-floating mt-2">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="email"
            />
            <label>Email</label>
          </div>
          <div class="form-floating mt-2">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
            <label>Password</label>
          </div>
          <div class="container p-0 mt-2">
            <button class="btn btn-secondary me-2" type="submit">login</button>
            <router-link
              :to="{ name: 'create-account' }"
              class="btn btn-outline-secondary"
              >create account</router-link
            >
          </div>
        </form>
        <div v-else>
          <router-link :to="{ name: 'hotels' }">Browse Hotels</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",

      authentication: false,
      currentUser: JSON.parse(localStorage.getItem("user")) || null,

      ShowLoginStatus: false,
      loginStatus: "",
      loginStatusText: "",
    };
  },
  methods: {
    checkAccountValidation() {
      const users = JSON.parse(localStorage.getItem("users"));
      users.forEach((currentUser) => {
        if (
          currentUser.email === this.email &&
          currentUser.password === this.password
        ) {
          this.authentication = true;
          this.loginStatus = "success";
          this.loginStatusText = "logged in successfully";
          this.currentUser = { email: this.email, password: this.password };
          localStorage.setItem("user", JSON.stringify(this.currentUser));
          this.$emit('user', this.currentUser);
        }
      });

      if (!this.authentication) {
        this.loginStatus = "danger";
        this.loginStatusText = "wrong email or password";
      }

      this.ShowLoginStatus = true;
    },
  },
};
</script>

<style></style>
