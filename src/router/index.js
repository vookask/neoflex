import { createRouter, createWebHistory } from "vue-router";
import CatalogPage from "@/pages/CatalogPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: CatalogPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/pages/CartPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
