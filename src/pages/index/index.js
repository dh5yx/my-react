import React, { Component } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu, Breadcrumb } from "antd";
import { HomeFilled, DribbbleCircleFilled, BehanceCircleFilled, SlackSquareFilled, DatabaseFilled, AndroidFilled } from "@ant-design/icons";
import { Switch, Route, HashRouter, Link } from 'react-router-dom'
import Header from "./header"
import "./index.css"
import routes from "../../routes/routes"
export default class home extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: false,
            menu: [
                { title: '首页', icon: <HomeFilled />, path: '/index', children: [] },
                { title: '关于', icon: <DribbbleCircleFilled />, path: '/about', children: [] },
                { title: '新闻', icon: <BehanceCircleFilled />, path: '/news', children: [] },
                {
                    title: '系统',
                    icon: <SlackSquareFilled />,
                    path: '/system',
                    children: [
                        {
                            path: '/system/user',
                            title: '用户管理',
                            icon: <AndroidFilled />,
                            children: [
                                { title: '历史账户', icon: <BehanceCircleFilled />, path: '/system/user/history', children: [] },
                                { title: '现有账户', icon: <BehanceCircleFilled />, path: '/system/user/now', children: [] },
                            ]
                        },
                        {
                            path: '/system/menu',
                            title: '菜单管理',
                            icon: <DatabaseFilled />,
                            children: []
                        },

                    ]
                },
            ],
            selectedKeys: [],
            openKeys: [],
            BreadcrumbList: null
        }
    }
    componentDidMount() {
        if (!localStorage.getItem('token')) {
            this.props.history.push('/login')
        } else {
            let { pathname } = this.props.location
            this.setState({
                selectedKeys: [pathname],
                openKeys: this.getOpenKeys(pathname)
            })
        }

    }

    // 处理 pathname
    getOpenKeys = string => {
        let newStr = '',
            newArr = [],
            arr = string.split('/').map(i => '/' + i)
        for (let i = 1; i < arr.length - 1; i++) {
            newStr += arr[i]
            newArr.push(newStr)
        }
        return newArr
    }
    /* 渲染菜单 */
    renderMenu(menu) {
        return menu.map(v => {
            return v.children.length == 0
                ? <Menu.Item key={v.path} icon={v.icon} style={{ color: '#fff' }}>
                    {v.title}
                </Menu.Item>
                : <Menu.SubMenu key={v.path} title={v.title} icon={v.icon} >
                    {this.renderMenu(v.children)}
                </Menu.SubMenu>
        })


    }
    /* 展示收起菜单 */
    toggle = () => {
        this.setState(() => {
            return { collapsed: !this.state.collapsed }
        })
    }
    /* 点击菜单回调 */
    menuClick = (v) => {
        console.log(v)
        this.props.history.push(v.key)
        this.setState({
            selectedKeys: [v.key],
            BreadcrumbList: v.keyPath
        })
    }
    // 菜单展开回调
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.openKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    /* 登出 */
    out = () => {
        localStorage.clear()
        this.props.history.replace("/login")
    }
    render() {
        const { BreadcrumbList } = this.state
        return (
            <>
                <Layout style={{ height: "100vh" }} >

                    <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ backgroundColor: 'teal' }}>

                        <Menu onOpenChange={this.onOpenChange} openKeys={this.state.openKeys} selectedKeys={this.state.selectedKeys} onClick={this.menuClick} theme="light" mode="inline" defaultSelectedKeys={["1"]} style={{ backgroundColor: 'teal', color: '#fff', borderColor: 'teal' }}>
                            {this.renderMenu(this.state.menu)}
                        </Menu>

                    </Layout.Sider>


                    <Layout className="site-layout">
                        <Header collapsed={this.state.collapsed} show={this.toggle} out={this.out}></Header>
                        <Layout.Content
                            className="site-layout-background"
                            style={{ border: '1px solid red', margin: '40px 20px 20px' }}
                        >
                            <HashRouter >
                                <Switch>
                                    {routes.map(v => {
                                        return <Route key={v.path} component={v.component} path={v.path} exact={v.exact}></Route>
                                    })}
                                </Switch>
                            </HashRouter>

                        </Layout.Content>
                        <Layout.Footer style={{ border: '1px solid red' }}>
                            footer
                        </Layout.Footer>
                    </Layout>
                </Layout>
            </>
        );
    }
}