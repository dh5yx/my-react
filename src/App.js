import React, { Component, Fragment, Suspense } from "react";
import {Route, Switch, HashRouter } from "react-router-dom"
let Test = React.lazy(() => import("./test"))
const Home = React.lazy(() => import("./Home"))
// const About = React.lazy(() => import("./About"))
import About from "./About"
const Login = React.lazy(() => import("./Login"))
const Err= React.lazy(() => import("./Error"))
const name = <div>denghong</div>;
const arr = [1, 2, 3];
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: new Date().getTime(),
      inputVl: '',
      selectVl: 'lime',
      show: false
    };
  }
  componentDidMount() {
    console.log("加载");
    // this.timerId = setInterval(this.timer, 1000);
  }
  componentWillUnmount() { }
  timer = () => {
    this.setState({ num: new Date().getTime() }, () => {
      console.log("更新了");
    });
  };
  inputchange = (e) => {
    this.setState({ inputVl: e.target.value })
  }
  selectChange = (e) => {
    this.setState({ selectVl: e.target.value })
  }
  showCom = () => {
    this.setState({ show: !this.state.show }, () => {
      console.log(this.state.show)
    })
  }
  stopTimer() {
    clearInterval(this.timerId);
  };
  render() {
    let { selectVl } = this.state
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {this.state.show && <Test />}
        </Suspense>
        <button onClick={this.showCom}>显示隐藏</button>
        <div>{name}</div>
        {arr.map((v) => (
          <Fragment key={v}>
            <p >{v}</p>
            <p >{v}</p>
          </Fragment>
        ))}
        <Welcome name="Sara" />
        <span>{this.state.num}</span>
        <p>{this.props.name}</p>
        <button onClick={() => { this.stopTimer() }}>点击停止定时器</button>
        <input value={this.state.inputVl} onChange={this.inputchange}></input>
        <p>{this.state.inputVl}</p>
        <select value={this.state.selectVl} onChange={this.selectChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>
        <p>{selectVl}</p>
        <HashRouter>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Switch>
              {/* <Route path='/' exact component={Home}></Route> */}
              {/* <Route path='/login' component={Login}></Route> */}
              <Route path='/about' component={About}></Route>
              {/* <Route component={Err}></Route> */}
            </Switch>
          {/* </Suspense> */}
        </HashRouter>
      </div>
    );
  }
}
