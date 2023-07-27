import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from '../Components/Login/Login.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, updateUserDB } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import Login from '../Components/Login/Login';

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
        <div className={styles.loginContainer}>
            <h2 className={styles.h2}>Sign-Up</h2>
            <form onSubmit={handleSubmission}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name:</label>
                    <input type="text" id="name" name="name" required
                        placeholder='Enter your name'
                        onChange={(e) =>
                            setValues((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email:</label>
                    <input type="email" id="email" name="email" required
                        placeholder='Enter your email'
                        onChange={(e) =>
                            setValues((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password:</label>
                    <input type="password" id="password" name="password" required
                        placeholder='Enter your password'
                        onChange={(e) =>
                            setValues((prev) => ({ ...prev, password: e.target.value }))
                        }
                        className={styles.input}
                    />
                </div>
                <div>
                    <p>{errorMsg}</p>
                </div>
                <button type="submit" className={styles.loginButton}>Sign-Up</button>
                <div>
                    <p>Already Registered? <a href='/login'>Login</a></p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;