import React, { Component } from "react";
import { connect } from "react-redux"
import { Form, Input, Button, message, notification } from "antd";
import {
  UserOutlined,
  LockOutlined,
  AliwangwangFilled,
} from "@ant-design/icons";
import "./index.scss";

import { login } from "../../store/action"
class logon extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }
  onFinish = async (values) => {
    this.setState({ loading: true })
    // let data = await user.login()
    // this.setState({ loading: false })
    // message.success('登陆成功')
    // this.props.dispatch({ type: 'login', token: data.token })
    // this.props.history.replace("/index")

    this.props.dispatch(login(values, this.props.history))


  };
  componentDidMount() {
    notification.open({
      bottom: 100,
      message: '欢迎使用后台管理平台',
      duration: null,
      description: '账号  密码随意'
    })

  }
  componentWillUnmount() {
    notification.destroy()
  }
  render() {
    return (
      <div className="login-box">
        <div className="login-form-box">
          <h1 style={{ textAlign: "center" }}>后台管理系统</h1>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={this.onFinish}
            colon={false}
          >
            <Form.Item
              label='用户名'
              initialValue={this.props.name}
              name="username"
              rules={[{ required: true, message: "请输入用户名!" }]}

            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              label='年龄'
              name="password"
              initialValue={this.props.age}
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                danger
                icon={<AliwangwangFilled spin />}
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
                loading={this.state.loading}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
function getstore({ userReducer }) {
  return {
    name: userReducer.name,
    age: userReducer.age
  }
}
export default connect(getstore)(logon)
