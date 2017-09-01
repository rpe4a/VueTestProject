/*import 'bootstrap-sass/assets/javascripts/bootstrap.js';*/
import "./css/_site.scss";
import Vue from "vue";
import App from "./App.vue";
import routes from "./routes";
import VueRouter from "vue-router";

Vue.use(VueRouter);

new Vue({
    el: "#app",
    router: routes,
    render: h => h(App)
});