import Vue from "vue";
import Vuelidate from "vuelidate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faFileCode } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

library.add(faUser, faFileCode);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
