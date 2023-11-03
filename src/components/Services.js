import React from 'react';
import bookapt from './images/bookappt_icon.svg'
import bookhelathcheck from './images/bookhelathcheck_icon.svg'
import consultonline from './images/consultonline_icon.svg'
import buymedicines from './images/buymedicines_icon.svg'
import finddoctor from './images/finddoctor_icon.svg'
import findhsptl from './images/findhsptl_icon.svg'
import {Link} from 'react-router-dom';
const Services = () => {

  return (
    <div className="container3 col-md-12"
      style={{ display: 'flex', width: '100%', marginTop: '30px', textAlign: 'center', justifyContent: 'space-around' }}>
      <div className="row row-col-sm-3 row-col-md-3 row-col-lg-12"
        style={{ display: 'flex', flexDirection: 'row', width: '90%', textAlign: 'center', justifyContent: 'space-around' }}>

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
  );
}

export default Services;
