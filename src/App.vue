<template>
  <navbar :userState="userState"/>
  <router-view @user="userInfo" :userState="userState" />
</template>

<script>
import navbar from "@/components/navBar.vue";
import { toHandlers } from "vue";

export default {
  components: { navbar },
  data() {
    return {
      userState: null,
    };
  },
  methods: {
    userInfo(user) {
      this.userState = user;
      console.log(this.userState);
    },
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    this.userState = user;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
