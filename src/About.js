import React, { Component, Suspense } from 'react'
const Us = React.lazy(() => import("./AboutUs"))
const News = React.lazy(() => import("./AboutNews"))
const Adress = React.lazy(() => import("./AboutAdress"))
import { HashRouter, Route, Switch, Link } from "react-router-dom"
export default class About extends Component {
    constructor() {
        super()
        this.state = {
            hash: ''
        }
    }
    componentDidMount() {
        this.setState({ hash: window.location.hash })
    }
    componentDidUpdate() {
    }
    render() {
        let { hash } = this.state
        return (
            <div style={{ border: '1px solid red' }}>
                <Link style={{ color: window.location.hash === '#/about/us' ? 'red' : '' }} to="/about/us">去我们</Link>
                <Link style={{ color: window.location.hash === '#/about/news' ? 'red' : '' }} to="/about/news">去新闻</Link>
                <Link style={{ color: window.location.hash === '#/about/adress' ? 'red' : '' }} to="/about/adress">去地址</Link>
                <HashRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path='/about/us' component={Us}></Route>
                            <Route path='/about/news' component={News}></Route>
                            <Route path='/about/adress' component={Adress}></Route>
                        </Switch>
                    </Suspense>
                </HashRouter>
            </div>
        )
    }
}

