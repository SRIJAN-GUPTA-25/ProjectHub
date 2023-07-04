
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './LoginPage.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, updateUserDB } from '../firebase.js';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        if (!values.email || !values.password) {
            setErrorMsg("All fields required");
            return;
        }

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async () => {
                navigate("/");
            })
            .catch((err) => {
                setErrorMsg(err.message);
            });
    };
    const handleSubmission = (e) => {
        e.preventDefault();
        handleLogin();
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmission}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required
                        placeholder='Enter your name'
                        onChange={(e) =>
                            setValues((prev) => ({ ...prev, email: e.target.value }))
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required
                        placeholder='Enter your email'
                        onChange={(e) =>
                            setValues((prev) => ({ ...prev, password: e.target.value }))
                        }
                    />
                </div>
                <div>
                    <p>{errorMsg}</p>
                </div>
                <button type="submit" className="login-button">Login</button>
                <div>
                    <p>Don't have an account? <a href='/signup'>  SignUp</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
