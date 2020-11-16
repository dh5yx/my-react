import React, { Component } from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '../components/CustomBreadcrumb'
const about = function () {
    return (
        <div>
            <CustomBreadcrumb arr={['关于']}/>
            关于
        </div>
    )
}

export default about
