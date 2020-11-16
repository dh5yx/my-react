import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import { QqOutlined } from "@ant-design/icons";
import "./main.scss"
export default class home extends Component {
    gotoFrom=()=>{
        this.props.history.push('/input_message/form')
    }
    render() {
        return <>
            <Row gutter={24}>
                <Col className="gutter-row" span={6}>
                    <div className="card-item">
                        <QqOutlined />
                        <div>
                            <span>999</span>
                            <div>微信</div>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="card-item">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="card-item">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="card-item">col-6</div>
                    <input onClick={this.gotoFrom} type="button" value="跳转"/>
                </Col>
            </Row>
        </>
    }
};

