<template>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center p-3 p-md-0">
      <div class="col-md-4 bg-light border rounded p-4">
        <div
          class="alert alert-success d-flex justify-content-between"
          role="alert"
          v-if="accountCreated"
        >
          <span
            >Account created successfully
            <router-link :to="{ name: 'login' }">login</router-link></span
          >
          <button class="btn-close" data-bs-dismiss="alert"></button>
        </div>
        <div class="text-start">
          <h5>Create new account</h5>
        </div>
        <form class="form text-start" @submit.prevent="createAccount">
          <div class="form-floating mt-2">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="email"
              required
            />
            <label>Email</label>
            <p class="errors" v-if="emailError" style="font-size: 12px">
              <span class="text-danger" v-if="!email.includes('@')" >email format is not correct e.g. username@mail.com</span>
            </p>
          </div>
          <div class="form-floating mt-2">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
              required
            />
            <label>Password</label>
            <p class="errors" v-if="passwordError" style="font-size: 12px">
              <span class="text-danger" v-if="password.length < 8">password length must be at least 8 chars</span>
            </p>
          </div>
          <div class="form-floating mt-2">
            <input
              type="password"
              class="form-control"
              placeholder="Confirm password"
              v-model="passwordConfirm"
              required
            />
            <label>Confirm password</label>
            <p class="errors" v-if="passwordConfirmError" style="font-size: 12px">
              <p class="text-danger" v-if="password !== passwordConfirm"> password does not match</p>
            </p>
          </div>
          <div class="form-floating mt-2">
            <select name="" id="" class="form-select" v-model="country" required>
              <option value="country" selected>Country</option>
              <option value="eg">Egypt</option>
              <option value="om">Oman</option>
            </select>
            <label>Country</label>
            <p class="errors" v-if="countryError" style="font-size: 12px">
              <p class="text-danger" v-if="country !== 'country'">choose a country</p>
            </p>
          </div>
          <div class="terms mt-2">
            <input
              type="checkbox"
              class="form-check-input me-2"
              v-model="terms"
              id="terms"
            />
            <label for="terms">terms and conditions</label>
          </div>
          <div class="container p-0 mt-2">
            <button class="btn btn-secondary me-2" type="submit">create account</button>
            <router-link
              :to="{ name: 'login' }"
              class="btn btn-outline-secondary"
              >login</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
  <p class="text-muted text-center mt-2">
    create an account and get 20% off on your next booking order! <br />
    <span>&copy; copyrights reversed for Hotels app</span>
  </p>
</template>

<script>
export default {
  data() {
    return {
      users: JSON.parse(localStorage.getItem('users')) || [],
      email: "",
      password: "",
      passwordConfirm: "",
      terms: null,
      accountCreated: false,

      emailError: false,
      passwordError: false,
      passwordConfirmError: false,
      countryError: false,
    };
  },
  methods: {
    checkEmailValidation() {
      this.email.includes('@') ?
      this.emailError = false : 
      this.emailError = true
    },
    checkPasswordValidation() {
      this.password.length > 8 ?
      this.passwordError = false :
      this.passwordError = true
      console.log(this.passwordError)
    },
    checkPasswordConfirmValidation() {
      this.password === this.passwordConfirm ?
      this.passwordConfirmError = false :
      this.passwordConfirmError = true
    },
    checkCountryValidation() {
      this.country && this.country !== 'country' ?
      this.countryError = false :
      this.countryError = true
    },
    createAccount() {
      this.checkEmailValidation()
      this.checkPasswordValidation()
      this.checkPasswordConfirmValidation()
      this.checkCountryValidation()

      if(this.emailError || this.passwordError || this.passwordConfirmError || this.countryError || !terms) return
      const user = {email: this.email, password: this.password, country: this.country, terms: this.terms}
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
      this.accountCreated = true
    }
  }
};
</script>

<style></style>
