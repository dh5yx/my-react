import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Switch, Route, HashRouter, Link, BrowserRouter } from 'react-router-dom'
import Header from "../../components/header"
import "./index.css"
import routes from "../../routes/routes"
import menuList from "../../routes/menus"
export default class home extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: false,
            menu: menuList,
            rootSubmenuKeys: [],
            selectedKeys: [],
            openKeys: [],
        }
    }
    componentDidMount() {
        if (!localStorage.getItem('token')) {
            this.props.history.push('/login')
        } else {
            this.setState({ rootSubmenuKeys: this.state.menu.map(v => v.path) })
            let { pathname } = this.props.location
            this.setState({
                selectedKeys: [pathname],
                openKeys: this.getOpenKeys(pathname)
            })
        }

    }
    componentDidUpdate() {
        if (!localStorage.getItem('token')) {
            this.props.history.push('/login')
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
        this.props.history.push(v.key)
        this.setState({
            selectedKeys: [v.key]
        })
    }
    // 菜单展开回调
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };


    /* slide的响应式断电处触发 */
    onBreakpoint = (val) => {
        this.setState({ collapsed: val })
    }

    render() {
        let { pathname } = this.props.location
        return (
            <>
                <Layout style={{ height: "100vh" }} >

                    <Layout.Sider onBreakpoint={this.onBreakpoint} onCollapse={this.onCollapse} breakpoint="lg" trigger={null} collapsible collapsed={this.state.collapsed} style={{ backgroundColor: 'teal' }}>

                        <Menu onOpenChange={this.onOpenChange} openKeys={this.state.openKeys} selectedKeys={pathname} onClick={this.menuClick} theme="light" mode="inline" defaultSelectedKeys={["1"]} style={{ backgroundColor: 'teal', color: '#fff', borderColor: 'teal' }}>
                            {this.renderMenu(this.state.menu)}
                        </Menu>

                    </Layout.Sider>


                    <Layout className="site-layout">
                        <Layout.Header className="site-layout-background" style={{ padding: 0, border: '1px solid red', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                            <Header collapsed={this.state.collapsed} show={this.toggle} ></Header>
                        </Layout.Header>

                        <Layout.Content
                            className="site-layout-background"
                            style={{ border: '1px solid red', margin: '40px 20px 20px' }}
                        >
                            <Switch>
                                {routes.map(v => {
                                    return <Route key={v.path} component={v.component} path={v.path} exact={v.exact}></Route>
                                })}
                            </Switch>

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
