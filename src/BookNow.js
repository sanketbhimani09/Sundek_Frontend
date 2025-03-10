import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './colorlib-regform-5/css/main.css';
import Swal from 'sweetalert2';

const BookNow = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ fullName: "", mobileNo: "", pincode: "", capacity: 100, quantity: 1, city: "", state: "", orderDate: new Date().toISOString().split('T')[0], address: "" });
    const apiUrl = "https://sundek-backend.onrender.com/BookNow";

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === "fullName" || name === "city" || name === "state") {
            newValue = value.replace(/[^a-zA-Z\s]/g, "");
        } else if (name === "mobileNo") {
            newValue = value.replace(/\D/g, "").slice(0, 10);
        } else if (name === "pincode") {
            newValue = value.replace(/\D/g, "").slice(0, 6);
        } else if (name === "quantity") {
            newValue = Math.max(1, parseInt(value));
        } else if (name === "orderDate") {
            const today = new Date().toISOString().split('T')[0];
            if (value !== today) {
                return;
            }
        }

        setData(data2 => ({ ...data2, [name]: newValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.fullName || !data.mobileNo || !data.city || !data.state || !data.pincode || !data.quantity || !data.orderDate || !data.address) {
            return Swal.fire({
                title: "Validation Error",
                text: "Please fill out all fields.",
                icon: "error"
            });
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, submit it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(apiUrl, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    });
                    if (response.ok) {
                        Swal.fire({
                            title: "Submitted!",
                            text: "Your data has been submitted.",
                            icon: "success"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                setData({ fullName: "", mobileNo: "", pincode: "", capacity: 100, quantity: 1, city: "", state: "", orderDate: new Date().toISOString().split('T')[0], address: "" });
                                navigate("/");
                            }
                        });
                    } else {
                        console.error("Error occurred while adding data:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error occurred while adding data:", error.message);
                }
            }
        });
    };

    return (
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50 bookbg">
            <div className="wrapper wrapper--w790">
                <div className="card card-5">
                    <div className="card-heading">
                        <h2 className="title">Solar Booking Form</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row m-b-55">
                                <div className="name">Full-Name</div>
                                <div className="value">
                                    <div className="row row-space">
                                        <div className="col">
                                            <div className="input-group-desc">
                                                <input className="input--style-5" type="text" name="fullName" value={data.fullName} onChange={handleChange} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">MobileNo</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="text" name="mobileNo" value={data.mobileNo} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row m-b-55">
                                <div className="name">Location</div>
                                <div className="value">
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group-desc">
                                                <input className="input--style-5" type="text" name="city" value={data.city} onChange={handleChange} required />
                                                <label className="label--desc">City</label>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group-desc">
                                                <input className="input--style-5" type="text" name="state" value={data.state} onChange={handleChange} required />
                                                <label className="label--desc">State</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">Pincode</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="text" name="pincode" value={data.pincode} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row m-b-55">
                                <div className="name">Details</div>
                                <div className="value">
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group-desc">
                                                <div className="rs-select2 js-select-simple select--no-search">
                                                    <select name="capacity" value={data.capacity} onChange={handleChange} required>
                                                        <option value="">Choose Capacity</option>
                                                        <option value="100">100 Liters</option>
                                                        <option value="150">150 Liters</option>
                                                        <option value="200">200 Liters</option>
                                                        <option value="250">250 Liters</option>
                                                        <option value="300">300 Liters</option>
                                                        <option value="500">500 Liters</option>
                                                    </select>
                                                    <div className="select-dropdown"></div>
                                                </div>
                                                <label className="label--desc">Capacity</label>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group-desc">
                                                <input className="input--style-5" type="number" name="quantity" value={data.quantity} onChange={handleChange} required />
                                                <label className="label--desc">Quantity</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">Order Date</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="date" name="orderDate" value={data.orderDate} onChange={handleChange} min={new Date().toISOString().split('T')[0]} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="name">Address</div>
                                <div className="value">
                                    <div className="input-group">
                                        <textarea className="input--style-5" name="address" style={{ width: "800px" }} value={data.address} onChange={handleChange} required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button className="btn btn--radius-2 btn--red " type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;
