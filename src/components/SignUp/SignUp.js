import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form action="">
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <input className='form-submit' type="submit" value="Sign Up" />
            </form>
            <p>New to Ema-John? <Link className='form-link' to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;