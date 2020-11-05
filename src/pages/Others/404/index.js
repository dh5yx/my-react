import React, { Component } from 'react'
import img404 from '../../../img/404.jpg'
export default class index extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                <img src={img404} alt='' />
            </div>
        )
    }
}
