import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
        <div className={styles.loginContainer}>
            <div className={styles.boxContainer}>
                <div className={styles.loginBox}>
                    <h2 className={styles.h2}>Login</h2>
                    <form onSubmit={handleSubmission} className={styles.loginBoxContent}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder='Enter your email'
                                onChange={(e) =>
                                    setValues((prev) => ({ ...prev, email: e.target.value }))
                                }
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password" className={styles.label}>Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
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
                        <div className={styles.loginButtonContainer}>
                            <button type="submit" className={styles.loginButton}>Login</button>
                        </div>
                        <div className={styles.centerText}>
                            <p>Don't have an account? <Link to='/signup'>SignUp</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
