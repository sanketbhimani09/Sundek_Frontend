import React from 'react';
import './Body.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className="hero" id="mybody">
            <div className="container">
                <div className="row justify-content-center" style={{ minHeight: '80vh' }}>
                    <div className="col-lg-5  col-sm-12 col-md-12  d-flex align-items-center d-block">
                        <div className="intro-excerpt text-center">
                            <h1>Welcome to<span className="d-block">Sundek</span><span className="d-block">Solar Water Heater</span></h1>
                            <p className="mb-1">Let's the sun pay your energy bills.</p>
                            <p className="mb-4">Chase Away the Cold with Solar Gold - Efficient Solar Water Heating at Your Fingertips!</p>
                            <p>
                                <a href="#" className="btn btn-secondary me-3" id='explore' style={{ color: 'white' }}>
                                    <Link to='/BookNow' style={{ color: 'white', textDecoration: 'none' }}>
                                        Book Now
                                    </Link>
                                </a>
                                <a href="#" className="btn btn-secondary me-2" id='explore' >
                                    <Link to='/AboutUs' style={{ color: 'white', textDecoration: 'none' }}>
                                        Explore
                                    </Link>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center" id='slideshow'>
                        <div className="slider">
                            <div className="slide"><p></p></div>
                            <div className="slide"><p></p></div>
                            <div className="slide"><p></p></div>
                            <div className="slide"><p></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;