import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.config.productionTip = false;

// Initalize Netlify Idenity

netlifyIdentityWidget.init();



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");