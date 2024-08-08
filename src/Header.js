import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const adminId = localStorage.getItem('adminId');

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout it!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('adminId');
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out.",
          icon: "success"
        }).then(() => {
          navigate('/');
        });
      }
    });
  };
  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark p-0 fixed-top" id='header' aria-label="Sundek navigation bar">
      <div className="container-fluid ">
        <div className='row d-flex justify-content-between w-100'>
          <div className='col-12 col-md-2'>
            <div className="navbar-brand">
              <Link to="/">
                <img src='/images/SundekLogo.png' height={60} alt="Sundek Logo" className='' style={{ marginTop: "0px",marginLeft:"0px" }} />
              </Link>
            </div>
          </div>
          <div className='col-12 col-md'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsSundek" aria-controls="navbarsSundek" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarsSundek">
              <ul className="custom-navbar-nav navbar-nav mb-2 mb-md-0" id='menu'>
                <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === '/AboutUs' ? 'active' : ''}`}>
                  <Link to="/AboutUs" className="nav-link">
                    About us
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === '/BookNow' ? 'active' : ''}`}>
                  <Link to="/BookNow" className="nav-link">
                    Book now
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === '/MoreDetails' ? 'active' : ''}`}>
                  <Link to="/MoreDetails" className="nav-link">
                    More Details
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === '/ContactUs' ? 'active' : ''}`}>
                  <Link to="/ContactUs" className="nav-link">
                    Contact us
                  </Link>
                </li>
                {adminId ? (<li className={`nav-item ${location.pathname === '/Admin/PandingOrders' ? 'active' : ''}`}>
                  <Link to="/Admin/PandingOrders" className="nav-link">
                    Panding Orders
                  </Link>
                </li>) : ("")}
                {adminId ? (<li className={`nav-item ${location.pathname === '/Admin/Messages' ? 'active' : ''}`}>
                  <Link to="/Admin/Messages" className="nav-link">
                    Messages
                  </Link>
                </li>) : ("")}
                {adminId ? (<li className={`nav-item ${location.pathname === '/Admin/ConformOrders' ? 'active' : ''}`}>
                  <Link to="/Admin/ConformOrders" className="nav-link">
                    History
                  </Link>
                </li>) : ("")}

              </ul>

              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <li className="nav-item">
                  <div className="nav-link">
                    {adminId ? (
                      <button className="nav-link" onClick={handleLogout} style={{ background: 'none', border: 'none' }}>
                        <img src="/images/profileIcon.png" alt="User" height={40} />
                      </button>
                    ) : (
                      <Link to="/Login" className="nav-link">
                        <img src="/images/profileIcon.png" alt="User" height={40} />
                      </Link>
                    )}
                  </div>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
