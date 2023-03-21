import VueRouter from "vue-router";

import mainView from "../components/mainView.vue"
import marketDetail from "../components/marketdetail.vue"
import homePage from "../components/subComponents/home/homePage.vue"


let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}


export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'root'
        },
        {
            name: 'mainView',
            path: '/home',
            component: mainView,
            redirect: '/main',
            children: [
                {
                    name: 'homePage',
                    path: "/main",
                    component: homePage
                }
            ]
        },
        {
            name: 'marketdetail',
            path: '/detail',
            component: marketDetail
        }

    ],
    mode: 'history',
    base: process.env.BASE_URL,
})