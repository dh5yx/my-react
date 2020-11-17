import React, { Component } from 'react'
import Test from "./Test"
import FancyButton from "./FancyButton"
import("./Test").then(res => {
    console.log(res.b);
})
const left = <div style={{ width: '100px' }}>左</div>
const right = <div style={{ width: '200px' }}>右</div>
const el = <div style={{ flex: 1 }}>20</div>

function fn(ref) {
    console.log(ref);
}

const ref = React.createRef();

const news = function () {
    return (
        <div>
            新闻
            <Test left={left} right={right}>
                {el}
            </Test>
            <FancyButton ref={ref}>Click me!</FancyButton>;
            <button onClick={() => fn(ref)}>点我</button>
        </div>
    )
}



// 你可以直接获取 DOM button 的 ref：


export default news