import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../style/landing.css"

export class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [{ name: "Musa", color: "red" }, { name: "Amier", color: "blue" }, { name: "Alaa", color: "pink" }]
        }
    }
    displayUser(user) {
        return (
            <Link className="user"
                to="catalog"
                key={user.name}
                style={{ backgroundColor: user.color }}
            >
                {user.name}


            </Link>
        )
    }
    render() {
        return (
            <div className="container-landing-page">
                <p className="header-title"> <a> how Want to Reflex Today? </a></p>
                <div className="users">
                    {this.state.users.map(u => { return this.displayUser(u) })}

                </div>
            </div>
        )
    }
}

export default Landing
