import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="container myfot">
                    <div className="row">
                        <div className="col-md-3">
                            <a><img src="https://5.imimg.com/data5/OM/QU/MY-20936840/uma-solar-industries-120x120.jpg" alt="" className="img-fluid logo-footer" /></a>
                            <div className="footer-about">
                                <p>We have a clear long term strategy which is based on our purpose, vision, mission and values. It is the foundation which helps us successfully to share the future of our company.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="useful-link">
                                <h2>Useful Links</h2>
                                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                                <div className="use-links">
                                    <ul>
                                        <li><a><i className="fa-solid fa-angles-right"></i>
                                            <Link to={'/'}>
                                                Home
                                            </Link>
                                        </a></li>
                                        <li><a><i className="fa-solid fa-angles-right"></i>
                                            <Link to={'/AboutUs'}>
                                                About Us
                                            </Link>
                                        </a></li>
                                        <li><a><i className="fa-solid fa-angles-right"></i>
                                            <Link to={'/BookNow'}>
                                                Book Now
                                            </Link>
                                        </a></li>
                                        <li><a><i className="fa-solid fa-angles-right"></i>
                                            <Link to={'/MoreDetails'}>
                                                More Details
                                            </Link>
                                        </a></li>
                                        <li><a><i className="fa-solid fa-angles-right"></i>
                                            <Link to={'/ContactUs'}>
                                                ContactUs
                                            </Link>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="social-links">
                                <h2>Follow Us</h2>
                                <img src="./assets/images/about/home_line.png" alt="" />
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="https://www.facebook.com/jayesh.bhimani.165?mibextid=ZbWKwL"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                                        <li style={{ marginTop: "10px" }}><a href="https://www.instagram.com/subhash_bhimani?igsh=azBmZjRsOXF2YjNv"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="address">
                                <h2>Address</h2>
                                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                                <div className="address-links">
                                    <ul>
                                        <li className="address1"><i className="fa-solid fa-location-dot"></i> Plot NO.2,Near Aditya Motors,<br />HAPA,Jamnagar-361005</li>
                                        <li><a href="tel:+9190904500112"><i className="fa-solid fa-phone"></i> +91 8200639080<br />+91 8200622698</a></li>
                                        <li><a href="mailto:mail@1234567.com"><i className="fa-solid fa-envelope"></i> gujaratpipe2012@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div>
                <section id="copy-right">
                    <div className="copy-right-sec">
                        <i className="fa-solid"></i> Copyright © 2024 Uma Solar industriess. All rights reserved.
                        {/* <a href="#">lorem ispum</a> */}
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Footer;
