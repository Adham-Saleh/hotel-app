import HomeView from "@/views/HomeView.vue";
import HotelsView from "@/views/HotelsView.vue";
import LoginView from "@/views/loginView.vue";
import NotFound from "@/views/NotFound.vue";
import SignupView from "@/views/signupView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/hotels",
    name: "hotels",
    component: HotelsView,
  },
  {
    path: "/create-account",
    name: "create-account",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
