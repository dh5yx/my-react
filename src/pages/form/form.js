import React, { Component } from "react";
import {
  Button,
  Divider,
} from "antd";
import { changeUserInfo } from "../../store/action"
import { connect } from "react-redux"
const style = { background: "#0092ff", padding: "8px 0" };
class Demo extends Component {
  constructor() {
    super()
    this.myRef = React.createRef();
    this.state = {
      inputValue:'123'
    }
  }
  logref = () => {
    console.log(this.myRef.current.value)
  }
  changeUserInfo = () => {
    this.props.dispatch(changeUserInfo({ name: '憨憨', age: 18, sex: 'girl' }))
  }
  render() {
    let { name, age, sex, comName, adress, personNum } = this.props
    return (
      <>
        <Button type='primary'>获取redux里userInfo数据</Button> 姓名:{name} 年龄:{age} 性别:{sex}
        <Button onClick={this.changeUserInfo}>改变redux里userInfo数据</Button>
        <Divider type='horizontal' />
        <Button>获取redux里componyInfo数据</Button>公司名字:{comName} 公司地址:{adress} 公司规模:{personNum}人
        <Divider type='horizontal' />

        <input type="text" defaultValue={this.state.inputValue} />

      </>
    );
  }
};

const getStore = function ({ userReducer, componyReducer }) {
  return {
    name: userReducer.name,
    age: userReducer.age,
    sex: userReducer.sex,
    comName: componyReducer.name,
    adress: componyReducer.adress,
    personNum: componyReducer.personNum,
  }
}

export default connect(getStore)(Demo);
