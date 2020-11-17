import React, { Component, Suspense } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Menu, Avatar } from "antd";
import avatar from '../img/user.jpg'
import { withRouter } from "react-router-dom"



class header extends Component {
    constructor(props) {
        super(props)
        this.menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="logout" icon={<UserOutlined />}>退出</Menu.Item>
                <Menu.Item key="info" icon={<UserOutlined />}>个人中心</Menu.Item>
            </Menu>

        );
    }

    handleMenuClick = (e) => {
        switch (e.key) {
            case "logout":
                localStorage.clear()
                this.props.history.replace("/login")
                break;
            case "info":
                console.log('个人中心');
                break
        }
    }
    render() {
        return <>
            {React.createElement(
                this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                    className: "trigger",
                    onClick: this.props.show,
                }

            )}
            {/* { this.props.collapsed ? <MenuUnfoldOutlined onClick={this.props.show} /> : <MenuFoldOutlined onClick={this.props.show} />} */}
            <Dropdown overlay={this.menu}  >
                <div className='ant-dropdown-link'>
                    <Avatar src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
                </div>
            </Dropdown>
        </>

    }
}

export default withRouter(header)
