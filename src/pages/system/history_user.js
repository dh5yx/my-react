import React, { Component } from 'react'
import CustomBreadcrumb from "../../components/CustomBreadcrumb"
const user_message = function () {
    return (
        <>
            <CustomBreadcrumb arr={[{ title: '系统管理', path: '/' }, '历史用户']} />
            历史用户
        </>
    )
}

export default user_message
