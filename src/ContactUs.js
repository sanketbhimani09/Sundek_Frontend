import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const apiUrl = "http://localhost:3030/send-message";
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate name (only alphabets)
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(formData.name.trim())) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Name',
                text: 'Please enter a valid name (only alphabets and spaces are allowed)',
            });
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address',
            });
            return;
        }

        // Fetch API to send message
        fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your message has been sent",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/ContactUs");
        });

        // Reset form data
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <div className='container'>
                <br />
                <br />
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col' style={{ fontSize: "30px", alignItems: "center", fontWeight: "bolder", fontFamily: "cursive", marginLeft: "100px", marginBottom: "20px" }}>Let's talk about<br />everything!</div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <img src='https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg' alt='error' height={440} />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-container1" style={{ height: "550px" }}>
                            <form onSubmit={handleSubmit} className="myform2">
                                <div className="input-container1">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className="forinput"
                                    />
                                </div>
                                <div className="input-container1">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                        className="forinput"
                                    />
                                </div>
                                <div className="input-container1">
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        required
                                        className="forinput textarea"
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-btn2" style={{ marginTop: "26px" }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div class="row">
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-map-marker "></span>
                            </div>
                            <div class="text">
                                <p><span></span>  Plot NO.2,Near Aditya Motors,HAPA,Jamnagar-361005</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-phone"></span>
                            </div>
                            <div class="text">
                                <p><span>Phone:</span>
                                    <a href="tel://1234567920">+91 8200639080</a><br />
                                    <a href="tel://1234567920">+91 8200622698</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-paper-plane"></span>
                            </div>
                            <div class="text">
                                <p><span>Email:</span> <a href="">gujaratpipe2012@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-globe"></span>
                            </div>
                            <div class="text">
                                <p><span>Website:</span> <a href="#">www.sundeksolar.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className='row'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.64386591273274!2d70.1188373396611!3d22.476128161642478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576a6955555555%3A0x770e55d6637512b9!2sUma%20Solar%20Industries!5e1!3m2!1sen!2sin!4v1710511354539!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: '0' }} // Use a JavaScript object for styles
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <br />
            </div>
        </>
    );
};

export default ContactUs;
