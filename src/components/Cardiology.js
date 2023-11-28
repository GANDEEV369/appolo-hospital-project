import React from 'react';
import preview from '../images/apollo-removebg-preview.png'
import cardiology from './images/cardiology.jpg';
import c1 from './images/c1.png'
import Header from './Header';
import {Link} from 'react-router-dom';
const CardiologyDepartment = () => {
  const headerStyle = {
    backgroundColor: 'lightskyblue',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    marginTop:"80px"
  };

  const logoStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
  };

  const mainStyle = {
    margin: '20px',
  };

  const departmentInfoStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '20px',
    alignItems: 'center',
  };

  const departmentImgStyle = {
    maxWidth: '100%',
    borderRadius: '5px',
  };

  const doctorsSectionStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '20px',
    marginTop: '40px',
  };

  const doctorCardStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const doctorAvatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
  };

  const bookAppointmentStyle = {
    marginTop: '10px',
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '5px',
    textDecoration: 'none',
  };

  const bookAppointmentBoxStyle = {
    padding: '10px',
    borderRadius: '5px',
    display: 'inline-block',
  };

  return (
    <div>
      <Header />
      <header style={headerStyle}>
        <div className="logo" style={logoStyle}>
        <Link to="/">
            <img
              className="ml-2 mt-2"
              height="65px"
              width="60px"
              src={preview}
              alt="img not found"
            />
          </Link>
        </div>
        <h1>Cardiology Department</h1>
      </header>

      <main style={mainStyle}>
        <div className="department-info" style={departmentInfoStyle}>
          <img src={cardiology} alt="Cardiology Department" style={departmentImgStyle} />
          <div className="department-description">
            <h2>About Cardiology</h2>
            <p>
              The Cardiology Department at our hospital is dedicated to providing comprehensive care for patients with cardiovascular diseases. Our team of highly skilled cardiologists and healthcare professionals are committed to delivering the highest standard of care and utilizing advanced technologies for accurate diagnosis and treatment of heart conditions.
            </p>
            <p>
              Our services include:
              <ul>
                <li>Diagnostic tests and imaging for heart diseases</li>
                <li>Management and treatment of coronary artery diseases</li>
                <li>Interventional cardiology procedures</li>
                <li>Electrophysiology studies and arrhythmia management</li>
                <li>Heart failure management</li>
                <li>Cardiac rehabilitation programs</li>
              </ul>
            </p>
            <p>
              If you have any concerns about your heart health or need specialized cardiac care, our cardiology department is here to help. We are committed to improving the lives of our patients and providing compassionate care.
            </p>
          </div>
        </div>

        <div className="doctors-section" style={doctorsSectionStyle}>
          {/* Repeat this block for each doctor */}
          <div className="doctor-card" style={doctorCardStyle}>
            <img src={c1} alt="Doctor 1" className="doctor-avatar" style={doctorAvatarStyle} />
            <div>
              <h3>Dr A K Bardhan</h3>
              <p>Dr A K Bardhan is a board-certified cardiologist with over 30 years of experience. He specializes in cardiovascular diagnostics and treatment.</p>
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
                <Link to="/book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CardiologyDepartment;
