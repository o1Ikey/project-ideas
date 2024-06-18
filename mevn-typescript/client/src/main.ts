import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import ToastPlugin from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-bootstrap.css";
import "bootswatch/dist/lux/bootstrap.min.css";

const app = createApp(App);
app.use(ToastPlugin);
app.use(router);
app.mount("#app");
