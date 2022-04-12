import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if (user) {
        navigate('/');
    }

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>LogIn</h2>
            <form>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                </div>
                <p style={{ color: "red" }}>{error?.message}</p>
                {
                    loading && <p>Loading....</p>
                }
                <input onClick={handleSignIn} className='form-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-John? <Link className='form-link' to='/signup'>Create an Account</Link></p>
        </div>
    );
};

export default Login;