import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './LoginPage.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, updateUserDB } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const handleSignUp = () => {
        if (!values.name || !values.email || !values.password) {
            setErrorMsg("All fields are required!");
            return;
        }
        if (values.password.length < 6) {
            setErrorMsg("Password must be minimum 6 characters long");
            return;
        }
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (response) => {
                console.log(response);
                const userId = response.user.uid;
                await updateUserDB({ name: values.name, email: values.email }, userId);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    const handleSubmission = (e) => {
        e.preventDefault();
        handleSignUp();
    }
    return (
        <div className="login-container">
            <h2>Sign-Up</h2>
            <form onSubmit={handleSubmission}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required
                        placeholder='Enter your name'
                        onChange={(e) =>
                            setValues((prev) => ({ ...prev, name: e.target.value }))
                        }
                    />
                </div>
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
                <button type="submit" className="login-button">Sign-Up</button>
                <div>
                    <p>Already Registered? <a href='/login'>  Login</a></p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
