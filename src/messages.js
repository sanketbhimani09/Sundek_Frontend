import React, { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const Messages = () => {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState([]);
    const [replyEmail, setReplyEmail] = useState("");
    const form = useRef();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("http://localhost:3030/messages")
            .then((res) => res.json())
            .then((data) => setMessage(data));
    }, [message]);

    const handleCancel = async (msgId, event) => {
        try {
            await fetch(`http://localhost:3030/messages/${msgId}`, {
                method: "DELETE",
            });
            event.preventDefault();
            event.stopPropagation();
            setMessage(message.filter((msg) => msg._id !== msgId));
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };

    const handleReply = (email) => {
        setReplyEmail(email);
        setShowModal(true);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const recipientEmail = form.current['from_email'].value;
        emailjs
            .sendForm('service_os6m8hm', 'template_m2hbnl4', form.current, {
                to_email: recipientEmail,
                publicKey: 'MPv6PTXPqY7aJQp4M',
            })
            .then(
                async () => {
                    console.log('SUCCESS!');
                    await Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setShowModal(false);
                    form.current.reset();
                    await window.location.reload();
                    navigate('/Messages');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="container">
            <div className="row">
                {message.map((msg) => (
                    <div className='col-lg-3 col-md-4 col-sm-6' style={{ marginTop: "25px", marginBottom: "32px" }} key={msg._id}>
                        <div className="main3">
                            <ul className="cards3">
                                <li className="cards_item3">
                                    <div className="msgcard3">
                                        <div className="card_content3" style={{ fontFamily: "Comic Sans MS" }}>
                                            <h2 className="card_title3">Name:{msg.name}</h2>
                                            <div className="card_text3" style={{ fontSize: "15px", paddingBottom: "3px" }}>
                                                <p>Email: {msg.email}</p>
                                                <br />
                                                <p>Message:{msg.message}</p>
                                            </div>
                                            <br />
                                            <div>
                                                <button style={{ paddingBottom: "1px", border: "2px solid red", borderRadius: "5px" }} onClick={(event) => handleCancel(msg._id, event)}>delete</button>

                                                <button style={{ paddingBottom: "1px", marginLeft: "10px", border: "2px solid green", borderRadius: "5px" }} type="button" className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleReply(msg.email)}>
                                                    reply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            
            
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Reply to User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form ref={form}>
                                <label>Name</label>
                                <input type="text" name="from_name" style={{ border: "1px solid black" }} />
                                <label>Email</label>
                                <input type="email" name="from_email" style={{ border: "1px solid black" }} defaultValue={replyEmail} />
                                <label>Message</label><br />
                                <textarea name="message" cols={62} rows={10} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={sendEmail}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
