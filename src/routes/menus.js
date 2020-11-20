import { HomeFilled, DribbbleCircleFilled, BehanceCircleFilled, SlackSquareFilled, DatabaseFilled, AndroidFilled } from "@ant-design/icons";
import React, { Component } from "react";

export default [
    { title: '首页', icon: <HomeFilled />, path: '/index', children: [] },
    { title: '关于', icon: <DribbbleCircleFilled />, path: '/about', children: [] },
    { title: '新闻', icon: <BehanceCircleFilled />, path: '/news', children: [] },
    {
        title: '表单控件', icon: <BehanceCircleFilled />, path: '/input_message', children: [
            { title: '表单', icon:'', path: '/input_message/form', children: [] }
        ]
    },
    {
        title: '系统',
        icon: <SlackSquareFilled />,
        path: '/system',
        children: [
            {
                path: '/system/user',
                title: '用户管理',
                icon: <AndroidFilled />,
                children: [
                    { title: '历史账户', icon: '', path: '/system/user/history', children: [] },
                    { title: '现有账户', icon: '', path: '/system/user/now', children: [] },
                ]
            },
            { title: '菜单管理', icon: <HomeFilled />, path: '/system/menu', children: [] },
        ]

    },
    { title: 'hook', icon: <BehanceCircleFilled />, path: '/hook', children: [] },
    { title: 'other', icon: <BehanceCircleFilled />, path: '/other', children: [] },
]