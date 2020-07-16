import React, { Component } from 'react'
import './Logo.css'
import { Link, Redirect } from 'react-router-dom'
class First extends Component {
    state = {
        redirect: false
    }
    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 2500)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return (
            this.state.redirect
                ? <Redirect to="/sign" />
                : <div>
                    <div className='body'>
                        <div className='content-box'>
                            <img src='logo.jpg' alt='logo' />
                            <h1> Smart Charging Station powered by GATS </h1>
                        </div>
                    </div>
                </div>
        )
    }
}

export default First
