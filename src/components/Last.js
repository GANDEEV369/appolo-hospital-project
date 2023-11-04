import React from 'react';
import bookapt from './images/bookappt_icon.svg'
import bookhelathcheck from './images/bookhelathcheck_icon.svg'
import consultonline from './images/consultonline_icon.svg'
import buymedicines from './images/buymedicines_icon.svg'
import finddoctor from './images/finddoctor_icon.svg'
import findhsptl from './images/findhsptl_icon.svg'
import developer from './images/me (3).jpg'
import { Link } from 'react-router-dom';
const Last = () => {
  return (
    <footer style={{ backgroundColor: '#007c9d' }}>
      <h2 style={{ textAlign: 'center', color: 'white', justifyContent: 'center' }}>
        What would you like to do today ?
      </h2>
      <div
        className="container3 col-md-12"
        style={{
          display: 'flex',
          width: '100%',
          marginTop: '30px',
          textAlign: 'center',
          justifyContent: 'space-around',
        }}
      >
        <div
          className="row row-col-sm-3 row-col-md-3 row-col-lg-12"
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '90%',
            textAlign: 'center',
            justifyContent: 'space-around',
          }}
        >
          <div className="smallbox row-col-1" id="box1" style={{ width: '200px' }}>
        <Link to="/book-appointment">
          <div
            alt="" style={{ padding: '10px' }}>
            <img src={bookapt} alt="icon" height="60px" width="60px" />
            <h6>Book Appointment</h6>
          </div>
          </Link>
        </div>

        <div className="smallbox row-col-1" id="box2" style={{ width: '200px' }}>
          <Link to="/book_health_check-up">
          <div 
            alt="" style={{ height: '100px', width: '100px' }}>
            <img src={bookhelathcheck} alt="icon" height="60px" width="60px" />
            <h6>Book Health Check-up</h6>
          </div>
          </Link>
        </div>

        <div className="smallbox row-col-1" id="box3" style={{ width: '200px' }}>
          <Link to="/consult_online">
          <div 
            alt="" style={{ height: '100px', width: '100px' }}>
            <img src={consultonline} alt="icon" height="60px" width="60px" />
            <h6>Consult Online</h6>
          </div>
          </Link>
        </div>

        <div className="smallbox row-col-1" id="box4" style={{ width: '200px' }}>
          <Link to="buy_medicine">
          <div
          
            alt="" style={{ height: '100px', width: '100px' }}>
            <img src={buymedicines} alt="icon" height="60px" width="60px" />
            <h6>Buy Medicine</h6>
          </div>
          </Link>
        </div>

        <div className="smallbox row-col-1" id="box5" style={{ width: '200px' }}>
          <Link to="find-hospital">
          <div 
            alt="" style={{ height: '100px', width: '100px' }}>
            <img src={findhsptl} alt="icon" height="60px" width="60px" />
            <h6>Find Hospital</h6>
          </div>
          </Link>
        </div>

        <div className="smallbox row-col-1" id="box6" style={{ width: '200px' }}>
          <Link to="view_health-record">
          <div 
            alt="" style={{ height: '100px', width: '100px' }}>
            <img src={finddoctor} alt="icon" height="60px" width="60px" />
            <h6>View Health Record</h6>
            
          </div>
          </Link>
        </div>
        </div>
      </div>
      <div className="container md-5">
        <div className="card md-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={developer} className="card-img img-fluid rounded-4 d-none d-sm-block" alt="Main Page Developer" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Main Page Developer</h5>
                <p className="card-text">
                  I have created the main page which provides different services. By clicking the buttons, we can redirect to the webpage required by the user.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container8">
        {/* Content for container8 */}
      </div>
    </footer>
  );
};

export default Last;
