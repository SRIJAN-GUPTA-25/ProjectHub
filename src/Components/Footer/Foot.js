import React from 'react';
import styles from './Footer.module.css';

const Foot = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={`${styles.footerSection} ${styles.about}`}>
                    <h2 className={styles.logo}>ProjectHub</h2>
                    <p className={styles.description}>
                        <span className={styles.whiteText}>
                            Empowering open-source development with a comprehensive full-stack web application for project exploration and seamless project sharing
                        </span>
                    </p>
                    <div className={styles.contact}>
                        <i className="fa fa-phone"></i>
                        <span>+91-6307098663</span>
                    </div>

                </div>
                <div className={`${styles.footerSection} ${styles.links}`}>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className={`${styles.footerSection} ${styles.contactForm}`}>
                    <h2>Socials</h2>
                    <ul>
                        <li>
                            <i className="fa fa-linkedin"></i>
                            <a href="https://www.linkedin.com/in/srijan-gupta-9101b520a/">LinkedIn</a>
                        </li>
                        <li>
                            <i className="fa fa-github"></i>
                            <a href="https://github.com/SRIJAN-GUPTA-25">GitHub</a>
                        </li>
                        <li>
                            <i className="fa fa-instagram"></i>
                            <a href="https://www.instagram.com/srijangupta02/">Instagram</a>
                        </li>
                        <li>
                            <i className="fa fa-twitter"></i>
                            <a href="https://twitter.com/srijan002">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                &copy; {new Date().getFullYear()} Srijan Gupta. All rights reserved.
            </div>
        </footer>
    );
};

export default Foot;
