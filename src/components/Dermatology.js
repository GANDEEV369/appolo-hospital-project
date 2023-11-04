import React from 'react';
import preview from '../images/apollo-removebg-preview.png'
import dermetology from './images/dermitology.jpg'
import d1 from './images/d1.png'
import d2 from './images/d2.png'
import d3 from './images/d3.png'
import d4 from './images/d4.png'
import Header from './Header';
const DermatologyDepartment = () => {
  const bodyStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  };

  const headerStyle = {
    backgroundColor: 'lightskyblue',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    marginTop:"80px"
  };

  const h1Style = {
    margin: 0,
  };

  const logoStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
  };

  const logoImgStyle = {
    height: '65px',
    width: '60px',
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

  const departmentInfoImgStyle = {
    maxWidth: '100%',
    borderRadius: '5px',
  };

  const departmentDescriptionStyle = {
    lineHeight: 1.5,
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
    transition: 'background-color 0.3s ease-in-out',
  };

  const doctorCardHoverStyle = {
    backgroundColor: 'lightskyblue',
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
    <div style={bodyStyle}>
      <Header/>
      <header style={headerStyle}>
        <div className="logo" style={logoStyle}>
          <a href="Home-Page.html">
            <img
              className="ml-2 mt-2"
              height="65px"
              width="60px"
              src={preview}
              alt="img not found"
              style={logoImgStyle}
            />
          </a>
        </div>
        <h1 style={h1Style}>Dermatology Department</h1>
      </header>

      <main style={mainStyle}>
        <div className="department-info" style={departmentInfoStyle}>
          <img src={dermetology} width="300px" height="180px" alt="Dermatology Department" style={departmentInfoImgStyle} />
          <div className="department-description" style={departmentDescriptionStyle}>
            <h2>About Dermatology</h2>
            <p>
              The Dermatology Department at our hospital is dedicated to providing comprehensive care for patients with various skin conditions. Our team of experienced dermatologists and healthcare professionals are committed to delivering the highest standard of care and utilizing advanced technologies for accurate diagnosis and treatment of skin disorders.
            </p>
            <p>
              Our services include:
              <ul>
                <li>Diagnosis and treatment of skin diseases</li>
                <li>Management of acne, eczema, and psoriasis</li>
                <li>Mole and wart removal</li>
                <li>Skin cancer screenings</li>
                <li>Scar revision and cosmetic dermatology</li>
                <li>UV light therapy and photodynamic therapy</li>
              </ul>
            </p>
            <p>
              If you have any concerns about your skin health or need specialized dermatological care, our dermatology department is here to help. We are dedicated to improving the health and well-being of our patients and providing compassionate care.
            </p>
          </div>
        </div>

        <div className="doctors-section" style={doctorsSectionStyle}>
          <div className="doctor-card" style={doctorCardStyle}>
            <img
              src={d1}
              alt="Doctor 1"
              className="doctor-avatar"
              style={doctorAvatarStyle}
            />
            <div>
              <h3>Dr Aishwarya Malladi</h3>
              <p>Dr Aishwarya Malladi is a board-certified dermatologist with over 10 years of experience. She specializes in skin cancer detection and treatment.</p>
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
                <a href="bookapointment.html" className="book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </a>
              </div>
            </div>
          </div>

          <div className="doctor-card" style={doctorCardStyle}>
            <img
              src={d2}
              alt="Doctor 2"
              className="doctor-avatar"
              style={doctorAvatarStyle}
            />
            <div>
              <h3>Dr Akhilesh Agarwal</h3>
              <p>Dr Akhilesh Agarwal is a dermatologist with a focus on cosmetic dermatology. He has expertise in laser treatments, Botox, and dermal fillers.</p>
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
                <a href="bookapointment.html" className="book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </a>
              </div>
            </div>
          </div>

          <div className="doctor-card" style={doctorCardStyle}>
            <img
              src={d3}
              alt="Doctor 3"
              className="doctor-avatar"
              style={doctorAvatarStyle}
            />
            <div>
              <h3>Dr Amulya Ramamurthy</h3>
              <p>Dr Amulya Ramamurthy is a dermatologist specialized in pediatric dermatology. She has extensive experience in diagnosing and treating skin conditions in children.</p>
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
                <a href="bookapointment.html" className="book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </a>
              </div>
            </div>
          </div>

          <div className="doctor-card" style={doctorCardStyle}>
            <img
              src={d4}
              alt="Doctor 4"
              className="doctor-avatar"
              style={doctorAvatarStyle}
            />
            <div>
              <h3>Dr Anju Mangla</h3>
              <p>Dr Anju Mangla is a dermatologist with expertise in dermatologic surgery. She performs procedures such as mole removal, skin biopsies, and Mohs surgery.</p>
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
                <a href="bookapointment.html" className="book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DermatologyDepartment;
