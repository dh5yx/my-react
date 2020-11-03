import React, { Component, Suspense } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Menu, Avatar } from "antd";
import avatar from '../../img/user.jpg'
import { withRouter } from "react-router-dom"



class header extends Component {
    constructor(props) {
        super(props)
        this.handleMenuClick = (e) => {
            this.props.out()
        }
        this.menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    退出
              </Menu.Item>
            </Menu>

        );
    }

    render() {
        return (
            <Layout.Header className="site-layout-background" style={{ padding: 0, border: '1px solid red', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                {React.createElement(
                    this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                        className: "trigger",
                        onClick: this.props.show,
                    }

                )}
                <Dropdown overlay={this.menu}  >
                    <div className='ant-dropdown-link'>
                        <Avatar src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
                    </div>
                </Dropdown>
            </Layout.Header>
        )
    }
}
export default header
