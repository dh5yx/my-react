import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Divider } from "antd"

export default class other extends Component {
    render() {
        return (
            <>

                <div>
                    <Skeleton /> // 简单的单行骨架
                    <Skeleton count={5} /> // 五行加载骨架
                </div>

                <Divider />

            </>
        )
    }
}
