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
const style = { background: "#0092ff", padding: "8px 0" };
const Demo = () => {
  return (
    <>
      <Space>
        <Button type="primary">Button</Button>
        <Upload>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button>Confirm</Button>
        </Popconfirm>
      </Space>
    </>
  );
};

export default Demo;
