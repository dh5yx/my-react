import React, { Component } from 'react'
import CustomBreadcrumb from '../components/CustomBreadcrumb'

// <Mouse> 组件封装了我们需要的行为...
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/* ...但我们如何渲染 <p> 以外的东西? */}
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <CustomBreadcrumb arr={['关于']} />
                <Mouse />
            </>
        );
    }
}
export default MouseTracker
