
import Main from "../pages/main"
import About from "../pages/about"
import News from "../pages/news"

/* 系统管理 */
import Menu from "../pages/system/menu_message"
import User from "../pages/system/user_message"


const routes = [
    { path: '/index', component: Main, exact: false },
    { path: '/about', component: About, exact: false },
    { path: '/news', component: News, exact: false },

    /* 系统管理 */
    { path: '/system/user_mesage', component: User, exact: false },
    { path: '/system/menu_message', component: Menu, exact: false },
]

export default routes
