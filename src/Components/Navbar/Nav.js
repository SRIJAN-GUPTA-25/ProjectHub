import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoImage from './logo2.png';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link to="/" className={styles.logo}>
                    <img src={logoImage} alt="ProjectHub Logo" className={styles.logoImage} />
                </Link>
                <ul className={styles.navLinks}>
                    <li className={styles.navLinkItem}>
                        <Link to="/" className={styles.navLink}>Home</Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to="/about" className={styles.navLink}>About Us</Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to="/contact" className={styles.navLink}>Contact Us</Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to="/ask" className={styles.navLink}>Ask</Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to="/blog" className={styles.navLink}>Blog</Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to="/discuss" className={styles.navLink}>Discuss</Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to="/account" className={styles.navLink}>Account</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.loginSignupLinks}>
                <Link to="/login" className={`${styles.navLink} ${styles.loginLink}`}>
                    Login
                </Link>
                <Link to="/signup" className={`${styles.navLink} ${styles.signupLink}`}>
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
