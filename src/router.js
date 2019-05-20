import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import SignIn from "./views/SignInFlow/SignIn.vue";
import Request from "./views/SignInFlow/Request.vue";
import Recover from "./views/SignInFlow/Recover.vue";
import Team from "./views/Team";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/team",
            name: "team",
            component: Team
        },
        {
            path: "/signin",
            name: "signin",
            component: SignIn
        },
        {
            path: "/request",
            name: "request",
            component: Request
        },
        {
            path: "/recover",
            name: "recover",
            component: Recover
        }
    ]
});