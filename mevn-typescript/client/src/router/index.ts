import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/tasks",
    name: "tasks",
    component: () => import("../components/TaskList.vue"),
  },
  {
    path: "/",
    alias: "/tasks/new",
    name: "task-new",
    component: () => import("../components/TaskForm.vue"),
  },
  {
    path: "/",
    alias: "/tasks/:id",
    name: "task-details",
    component: () => import("../components/TaskDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
