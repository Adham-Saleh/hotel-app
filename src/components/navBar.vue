<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-md">
      <a class="navbar-brand" href="#">Hotel app</a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse text-start"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'hotels' }"
              class="nav-link"
              aria-current="page"
              >Hotels</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <div
          class="navbar-nav d-md-flex text-start w-100 justify-content-end"
          v-if="!userState"
        >
          <li class="nav-link">
            <router-link
              :to="{ name: 'login' }"
              href="#"
              class="btn btn-sm btn-success"
              >login</router-link
            >
          </li>
          <li class="nav-link">
            <router-link
              :to="{ name: 'create-account' }"
              href="#"
              class="btn btn-sm btn-outline-success"
              >create account</router-link
            >
          </li>
        </div>
        <div
          class="navbar-nav d-md-flex text-start w-100 justify-content-end"
          v-else
        >
          <li class="nav-link">
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <i class="bi bi-person-circle"></i>
              {{ userState.email }}
              </button>
              <ul class="dropdown-menu dropdown-menu-light">
                <li><a class="dropdown-item" href="#">
                  <i class="bi bi-person"></i>
                  Profile
                </a></li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="bi bi-bookmark"></i>
                    Favorates
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="bi bi-receipt"></i>
                    Your bookings
                  </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="btn btn-danger btn-sm ms-2" @click="logout" href="#">
                    <i class="bi bi-box-arrow-left"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["userState"],
  methods: {
    logout() {
      localStorage.removeItem("user");
      location.reload();
    }
  }
};
</script>

<style></style>
