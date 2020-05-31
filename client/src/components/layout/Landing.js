import React, { Component } from 'react'
import {Link} from "react-router-dom";
class Landing extends Component {
    render() {
        return (
            <div className="landing">
              <header>
                <Link className="logo" to="/">
                    <h1>
                     <strong>DIGITAL</strong>BANK
                    </h1>
                    </Link>
                    <button className="form-register-button">
                        <Link to="/register">Sign up</Link>
                        </button> 
                        <button className="form-login-button">
                            <Link to="/login">Login</Link>
                            </button> 
                </header>  
            </div>
        );
    }
}
export default Landing;