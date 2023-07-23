import React from 'react';
import styles from './Aboutus.module.css';
import VLCImage from './vlc.png';
import FirefoxImage from './firefox.png';
import LinuxImage from './linux.png';
import ReactImage from './react.png';
import NodeJSImage from './Nodejs.png';
import TensorFlowImage from './Tensorflow.png';
import Navbar from '../Navbar/Nav';
import Foot from '../Footer/Foot';
const About = () => {
    return (
        <>
            <Navbar />
            <div className={styles.about}>
                <h2>About Us</h2>
                <div className={styles.description}>
                    <p>
                        Open-source development is at the heart of innovation, collaboration, and knowledge sharing.
                        It enables developers from around the world to contribute, learn, and create together.
                        At ProjectHub, we aim to empower open-source development through our comprehensive full-stack web application.
                    </p>
                </div>

                <div className={styles.projects}>
                    <h2>Great Open Source Projects</h2>
                    <div className={styles.projectCards}>
                        <div className={styles.card}>
                            <img src={VLCImage} alt="VLC Media Player" />
                            <div className={styles.cardContent}>
                                <h3>VLC Media Player</h3>
                                <p>A highly popular open-source media player known for its compatibility and features.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={FirefoxImage} alt="Mozilla Firefox" />
                            <div className={styles.cardContent}>
                                <h3>Mozilla Firefox</h3>
                                <p>An open-source web browser that prioritizes user privacy and customization.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={LinuxImage} alt="Linux" />
                            <div className={styles.cardContent}>
                                <h3>Linux</h3>
                                <p>A powerful open-source operating system used by developers and businesses worldwide.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={ReactImage} alt="React" />
                            <div className={styles.cardContent}>
                                <h3>React</h3>
                                <p>A JavaScript library for building user interfaces, widely adopted in the web development community.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={NodeJSImage} alt="Node.js" />
                            <div className={styles.cardContent}>
                                <h3>Node.js</h3>
                                <p>A powerful open-source JavaScript runtime that allows server-side execution of JavaScript code.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={TensorFlowImage} alt="TensorFlow" />
                            <div className={styles.cardContent}>
                                <h3>TensorFlow</h3>
                                <p>An open-source machine learning framework by Google for building AI and deep learning models.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.empowerment}>
                    <h2>Empowering Open Source Development</h2>
                    <p>
                        ProjectHub is more than just a platform for sharing projects. It's a community-driven space
                        where developers can collaborate, learn, and grow together. By providing a seamless interface to explore
                        and contribute to open-source projects, we aim to foster innovation and make a positive impact on the
                        world of software development.
                    </p>
                </div>
            </div>
            <Foot />
        </>
    );
};

export default About;
