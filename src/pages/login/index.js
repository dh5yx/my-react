import React, { Component } from "react";
import { connect } from "react-redux"
import { Form, Input, Button, message, notification } from "antd";
import {
  UserOutlined,
  LockOutlined,
  AliwangwangFilled,
} from "@ant-design/icons";
import "./index.scss";



class logon extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }
  onFinish = (values) => {
    console.log(values)
    this.setState({ loading: true })
    localStorage.setItem("token", 'token')
    setTimeout(() => {
      this.setState({ loading: false })
      message.success('登陆成功')
      this.props.history.replace("/index")
    }, 2000);
  };
  componentDidMount() {
    notification.open({
      bottom: 100,
      message: '欢迎使用后台管理平台',
      duration: null,
      description: '账号  密码随意'
    })

    console.log(this)
  }
  componentWillUnmount() {
    notification.destroy()
    this.timer && clearTimeout(this.timer)
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
              name="username"
              rules={[{ required: true, message: "请输入用户名!" }]}
             
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
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
function getstore(store) {
  return {
    name: store.name,
    age: store.age
  }
}
export default connect(getstore)(logon)
