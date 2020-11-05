import loadable from '../utils/loadable'
const Main = loadable(() => import(/* webpackChunkName: 'Main' */ '../pages/main/main'))
const About = loadable(() => import(/* webpackChunkName: 'About' */ '../pages/about'))
const News = loadable(() => import(/* webpackChunkName: 'News' */ '../pages/news'))


/* 系统管理 */
const Menu = loadable(() => import(/* webpackChunkName: 'Menu' */ '../pages/system/menu_message'))
const NowUser = loadable(() => import(/* webpackChunkName: 'NowUser' */ '../pages/system/now_user'))
const HistoryUser = loadable(() => import(/* webpackChunkName: 'HistoryUser' */ '../pages/system/history_user'))

const From = loadable(() => import(/* webpackChunkName: 'from' */ '../pages/form/form'))


const routes = [
    { path: '/index', component: Main, exact: false },
    { path: '/about', component: About, exact: false },
    { path: '/news', component: News, exact: false },
    { path: '/form', component: From, exact: false },

    /* 系统管理 */
    { path: '/system/user/history', component: HistoryUser, exact: false },
    { path: '/system/user/now', component: NowUser, exact: false },
    { path: '/system/menu', component: Menu, exact: false },
    { path: '/system/menu2', component: Menu, exact: false },
]

export default routes
