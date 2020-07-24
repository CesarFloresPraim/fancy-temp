import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Charts from "../components/Charts";
import Notifications from "../components/Notifications";

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
        }
    ],
});
export default router;
