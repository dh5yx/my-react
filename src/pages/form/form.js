import React, { Component } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Checkbox,
  Select,
  Row,
  Col,
  Divider,
  Space,
  Popconfirm,
  Upload,
} from "antd";
import {
  StarOutlined,
  StarFilled,
  StarTwoTone,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
  LoadingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { func } from "prop-types";
import { connect } from "react-redux"
const style = { background: "#0092ff", padding: "8px 0" };
class Demo extends Component {
  constructor() {
    super()
    this.myRef = React.createRef();

  }
  logref = () => {
    console.log(this.myRef.current.value)
  }
  changeUserInfo = () => {
    console.log(this.props)
    this.props.dispatch('changeUserInfo',{name:'憨憨',age:18,sex:'girl'})
  }
  render() {
    let { name, age, sex, comName, adress, personNum } = this.props
    return (
      <>
        <Button type='primary'>获取redux里userInfo数据</Button> 姓名:{name} 年龄:{age} 性别:{sex}
        <Button  onClick={this.changeUserInfo}>改变redux里userInfo数据</Button>
        <Divider type='horizontal' />
        <Button>获取redux里componyInfo数据</Button>公司名字:{comName} 公司地址:{adress} 公司规模:{personNum}人
      </>
    );
  }
};

const getStore = function ({ userInfo, componyInfo }) {
  return {
    name: userInfo.name,
    age: userInfo.age,
    sex: userInfo.sex,
    comName: componyInfo.name,
    adress: componyInfo.adress,
    personNum: componyInfo.personNum,
  }
}

export default connect(getStore)(Demo);
