import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>LogIn</h2>
            <form action="">
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <input className='form-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-John? <Link className='form-link' to='/signup'>Create an Account</Link></p>
        </div>
    );
};

export default Login;