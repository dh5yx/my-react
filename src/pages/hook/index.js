import React, { useState, useEffect } from 'react';
import useTest from "./test"

function Example() {
    const [count, setCount] = useState(0);
    const [userInfo, setUserInfo] = useState({ name: 'deng', age: '20' });

    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;

        return () => {    //组件渲染后实现各种不同的副作用。有些副作用可能需要清除，所以需要返回一个函数：
        };
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>{userInfo.name}</p>
            <span>{userInfo.age}</span>

            {useTest(-1)}
            {useTest(+1)}
        </div>
    );
}

export default Example