import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SignUp.css'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
    const navigate = 

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("Your two password does not match")
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least six digit")
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form action="">
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                </div>
                <div className="input-field">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                </div>
                <p style={{ color: "red" }}>{error}</p>
                <input onClick={handleCreateUser} className='form-submit' type="submit" value="Sign Up" />
            </form>
            <p>All ready have an account? <Link className='form-link' to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;