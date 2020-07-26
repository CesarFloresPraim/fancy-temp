import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../views/Dashboard";
import Profile from "../views/Profile";
import Charts from "../views/Charts";
import Notifications from "../views/Notifications";

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: "/dashboard",
            name: "Home",
            component: Dashboard,
        },
        {
            path: "/",
            name: "Dashboard",
            component: Dashboard,
        },
        {
            path: "/profile",
            name: "Profile",
            component: Profile,
            //meta: {
                //requiresAuth: true,
            //},
        },
        {
            path: "/charts",
            name: "Charts",
            component: Charts,
        },
        {
            path: "/notifications",
            name: "Notifications",
            component: Notifications,
        },
        {
            path: '*',
            redirect: '/' }
    ],
});
export default router;
