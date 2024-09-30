<template>
  <div class="container mt-5">
    <div class="row text-start justify-content-center align-items-center">
      <div class="col-md-6 align-items-center">
        <h2>
          <p class="display-3">Hotel app</p>
          <p class="text-muted">
            We will suggest the best hotels for you. From now on you'll feel
            save white traveling
          </p>
        </h2>
        <p class="lead text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          nisi quae harum, inventore quia repudiandae minus velit explicabo
          tenetur error. Fuga at ipsa necessitatibus placeat!
        </p>
        <router-link
          :to="{ name: 'hotels' }"
          class="btn btn-secondary btn-lg mb-5"
          >Browse Now</router-link
        >
      </div>
      <div class="col-lg-5 d-none d-lg-block">
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                src="../assets/hotel-1.jpg"
                alt="hotel-1 img"
                class="img-fluid"
              />
            </div>
            <div class="col-4">
              <img
                src="../assets/hotel-2.jpg"
                alt="hotel-1 img"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="row g-5">
            <div class="col-4">
              <img
                src="../assets/hotel-3.jpg"
                alt="hotel-1 img"
                class="img-fluid mt-5"
              />
            </div>
            <div class="col">
              <img
                src="../assets/hotel-4.jpg"
                alt="hotel-1 img"
                class="img-fluid mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
