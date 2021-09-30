import React from 'react';
import Button from '../Button';
import './css/Login.css';

export default function Login() {
    return (
        <div className="form">
            <h1>Login</h1>
            <form>
                <label className="form-label">
                    <p>Username</p>
                </label>
                    <input className="form-input"
                    type="text" 
                    placeholder="Your username..." 
                    required 
                    />
                <label>
                    <p>Password</p>
                </label>
                <input className="form-input" 
                    type="password" 
                    placeholder="Password..." 
                    required  
                />
                <div className="">
                    <button className="button" type="submit">
                    Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
