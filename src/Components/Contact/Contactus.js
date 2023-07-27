import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addContactToDatabase } from "../../firebase";
import styles from "./Contactus.module.scss";
import Navbar from "../Navbar/Nav";
import Foot from "../Footer/Foot";
function Contactus() {
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { name, email, subject, message } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            toast.error("Please provide a value in each input field");
        } else {
            addContactToDatabase({
                name: name,
                email: email,
                subject: subject,
                message: message,
            });
            setState({ name: "", email: "", subject: "", message: "" });
            toast.success("Form Submitted Successfully");
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <>
            <Navbar />
            <section className={styles.contactSection}>
                <div className="container">
                    <ToastContainer position="top-center" />
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className={styles.wrapper}>
                                <div className="row no-gutters">
                                    <div className="col-md-6">
                                        <div className={`${styles.contactWrap} w-100 p-lg-5 p-4`}>
                                            <h3 className="mb-4">Send us a message</h3>
                                            <form
                                                id="contactForm"
                                                className={styles.contactForm}
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className={`${styles.formControl} form-group`}>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="name"
                                                                placeholder="Name"
                                                                onChange={handleInputChange}
                                                                value={name}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`${styles.formControl} form-group`}>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                placeholder="Email"
                                                                onChange={handleInputChange}
                                                                value={email}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`${styles.formControl} form-group`}>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="subject"
                                                                placeholder="Subject"
                                                                onChange={handleInputChange}
                                                                value={subject}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`${styles.formControl} form-group`}>
                                                            <textarea
                                                                type="text"
                                                                className={`form-control ${styles.textareaFormControl}`}
                                                                name="message"
                                                                placeholder="Message"
                                                                cols="30"
                                                                rows="6"
                                                                onChange={handleInputChange}
                                                                value={message}
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={`${styles.formControl} form-group`}>
                                                            <input
                                                                type="submit"
                                                                value="Send Message"
                                                                className={`btn btn-primary ${styles.btnPrimary}`}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-stretch">
                                        <div className={`${styles.infoWrap} w-100 p-lg-5 p-4 img`}>
                                            <h3>Contact us</h3>
                                            <p className="mb-4">
                                                We welcome your suggestions 😊
                                            </p>

                                            <div className={`${styles.dBox} w-100 d-flex align-items-center`}>
                                                <div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
                                                    <span className="fa fa-phone"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p>
                                                        <span>Phone:</span>
                                                        <a href="tel://123456789">+91 6307098663</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={`${styles.dBox} w-100 d-flex align-items-center`}>
                                                <div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
                                                    <span className="fa fa-paper-plane"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p>
                                                        <span>Email:</span>
                                                        <a href="mailto:info@yoursite.com">
                                                            info@yoursite.com
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={`${styles.dBox} w-100 d-flex align-items-center`}>
                                                <div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
                                                    <span className="fa fa-globe"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p>
                                                        <span>Website:</span>
                                                        <a href="/">yoursite.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Foot />
        </>
    );
}

export default Contactus;
