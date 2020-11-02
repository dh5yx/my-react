import React, { Component } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu, Select } from "antd";
import { HomeFilled, MenuUnfoldOutlined, MenuFoldOutlined, DribbbleCircleFilled, BehanceCircleFilled } from "@ant-design/icons";
import "./App.css";
import { Switch, Route, Redirect, HashRouter, withRouter } from 'react-router-dom'

const { Header, Sider, Content } = Layout;
import Home from "./pages/home"
import About from "./pages/about"
import News from "./pages/news"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menu: [
        { title: '首页', icon: <HomeFilled />, path: '/' },
        { title: '关于', icon: <DribbbleCircleFilled />, path: '/about' },
        { title: '新闻', icon: <BehanceCircleFilled />, path: '/news' },
      ]
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  selectMenu(data) {
    console.log(data)
    console.log(this.props)

  }
  render() {
    return (
      <>
        <Layout style={{ height: "100vh" }} >
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ backgroundColor: 'teal' }}>
            <Menu onSelect={this.selectMenu.bind(this)} theme="light" mode="inline" defaultSelectedKeys={["1"]} style={{ backgroundColor: 'teal', color: '#fff', borderColor: 'teal' }}>
              {this.state.menu.map((v) => {
                return (
                  <Menu.Item key={v.path} icon={v.icon}>{v.title}</Menu.Item>
                )
              })}
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <HashRouter>
                <Switch>
                  <Redirect exact from="/" to="/home" ></Redirect>
                  <Route component={Home} path='/home'  ></Route>
                  <Route component={About} path='/about'></Route>
                  <Route component={News} path='/news'></Route>
                </Switch>
              </HashRouter>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default App
