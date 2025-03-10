import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import './card.css';

function Panding() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://sundek-backend.onrender.com/orderList")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleCancel = async (orderId, event) => {
    try {
      await fetch(`https://sundek-backend.onrender.com/orderList/${orderId}`, {
        method: "DELETE",
      });
      event.preventDefault();
      event.stopPropagation();
      setOrders(orders.filter((order) => order._id !== orderId));
      // Prevent navigation
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleComplete = async (order) => {
    try {
      const deleteResponse = await fetch(`https://sundek-backend.onrender.com/orderList/${order._id}`, {
        method: "DELETE",
      });

      if (!deleteResponse.ok) {
        throw new Error(`Failed to delete order: ${deleteResponse.status} ${deleteResponse.statusText}`);
      }

      const addResponse = await fetch("https://sundek-backend.onrender.com/addConform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!addResponse.ok) {
        throw new Error(`Failed to add order to conform list: ${addResponse.status} ${addResponse.statusText}`);
      }

      const responseData = await addResponse.json();
      console.log("Response from server:", responseData);

      setOrders(prevOrders => prevOrders.filter(o => o._id !== order._id));
      Swal.fire({
        title: "Order completed Successful!",
        text: "You have successfully Order complete.",
        icon: "success"
      }).then(() => {
        navigate('/')
      });
    } catch (error) {
      console.error("Error completing order:", error);
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const formattedOrders = orders.map((order) => (
    <div className="col-lg-3 col-md-4 col-sm-6 p-3" key={order._id} style={{ marginTop: "25px", marginBottom: "32px" }}>
      <div class="mycard">
        <div class="wrapper1">
          <div class="card1" style={{height:"auto",width: "220px" }}>
            <Link to={`/Admin/PandingOrders/${order._id}`} style={{ textDecoration: 'none' }}>
              <h5 className="card-title text-dark">Name: {order.fullName}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{order.city}</h6>
              <h6 className="card-subtitle mb-2 text-dark">Date:{formatDate(order.orderDate)}</h6>
              <h6 className="list-group-item text-dark">Solar Capacity:{order.capacity}</h6>
              <h6 className="list-group-item text-dark">Quantity:{order.quantity}</h6>
            </Link>
            <div className="button-wrapper">
              <button className="green-circle" onClick={() => handleComplete(order)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button className="red-circle" onClick={(event) => handleCancel(order._id, event)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{formattedOrders}</div>
    </div>
  );
}

export default Panding;
