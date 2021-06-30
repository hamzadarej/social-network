import React, {Fragment} from "react";
import {FaUserAlt, FaRocketchat, FaFireAlt, } from "react-icons/fa";
import {FiCheck} from "react-icons/fi";
import { IconButton } from "@material-ui/core/";


function Login(){
    return (
        <Fragment>
            <div class="login-page-wrapper">
                <div class="login-page-logo">
                    <FaFireAlt id="tinder-icon"/>
                    <h1>Welcome to Tinder</h1>
                    <p>Please follow these house rules</p>
                </div>
                <div className="login-page-messages">
                    <h2><FiCheck className="check-icon"/> Be yourself</h2>
                    <p>Mak sure your photos, age, and bio are true to who you are.</p>
                    <h2><FiCheck className="check-icon"/> Stay Safe</h2>
                    <p>Don't be too quick to give out personal information. Date Safely</p>
                    <h2><FiCheck className="check-icon"/> Play it cool</h2>
                    <p>Respect others and treat them as you would like to be treated.</p>
                    <h2><FiCheck className="check-icon"/> Be proactive</h2>
                    <p>Always report bad behavior.</p>
                </div>
                <button className="login-page-button">
                <IconButton>
                    ENTER
                </IconButton>
                </button>
            </div>
            
        </Fragment>
    )
}

export default Login;