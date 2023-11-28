import React from 'react';
import preview from '../images/apollo-removebg-preview.png'
import Header from './Header';
import {Link} from 'react-router-dom';
const PulmonologyDepartment = () => {
  const bodyStyle = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.5,
  };

  const headerStyle = {
    backgroundColor: '#4aa1ac',
    padding: '20px',
    textAlign: 'center',
    marginTop:"80px",
    position:"relative"
  };

  const mainStyle = {
    padding: '20px',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    marginBottom: '10px',
  };

  const footerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    textAlign: 'center',
  };

  const doctorStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const doctorImageStyle = {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    marginRight: '20px',
  };

  const doctorDetailsStyle = {
    flex: 1,
  };

  const doctorNameStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const doctorSpecializationStyle = {
    color: '#777',
    marginBottom: '5px',
  };

  const doctorExperienceStyle = {
    color: '#777',
  };

  const bookAppointmentButtonStyle = {
    display: 'inline-block',
    backgroundColor: 'lightseagreen',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    marginLeft: '10px',
  };
  const bookAppointmentStyle = {
    marginTop: '10px',
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '5px',
    textDecoration: 'none',
  };
  const bookAppointmentButtonHoverStyle = {
    backgroundColor: '#45a049',
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

  return (
    <div style={bodyStyle}>
      <Header/>
      <header style={headerStyle}>
        <div className="logo" style={logoStyle}>
        <Link to="/">
            <img
              className="ml-2 mt-2"
              height="65px"
              width="60px"
              src={preview}
              alt="img not found"
              style={logoImgStyle}
            />
          </Link>
        </div>
        <h1>Pulmonology</h1>
      </header>
      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h2>Welcome to Our Pulmonology Department</h2>
          <p>The Pulmonology Department specializes in the diagnosis and treatment of diseases and conditions related to the respiratory system. Our team of pulmonologists is dedicated to providing comprehensive care to patients with respiratory issues.</p>
        </section>

        <section style={sectionStyle}>
          <h2>Our Doctors</h2>
          <div className="doctor" style={doctorStyle}>
            <img
              src="https://as1.ftcdn.net/v2/jpg/03/05/69/00/1000_F_305690038_kio1DI7qtf1kMPT4z6keI3GwB0zP6Sch.jpg"
              alt="Doctor 1"
              style={doctorImageStyle}
            />
            <div className="doctor-details" style={doctorDetailsStyle}>
              <h3 className="doctor-name" style={doctorNameStyle}>
                Dr. John Smith
              </h3>
              <p className="doctor-specialization" style={doctorSpecializationStyle}>
                Specializes in Pulmonary Medicine
              </p>
              <p className="doctor-experience" style={doctorExperienceStyle}>
                Experience: 15+ years
              </p>
              <Link to="/book-appointment" style={bookAppointmentStyle}>
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="doctor" style={doctorStyle}>
            <img
              src="https://as1.ftcdn.net/v2/jpg/01/72/18/66/1000_F_172186647_e93OQdc8KSoBzIPqfKG0UoJSJhR15HLa.jpg"
              alt="Doctor 2"
              style={doctorImageStyle}
            />
            <div className="doctor-details" style={doctorDetailsStyle}>
              <h3 className="doctor-name" style={doctorNameStyle}>
                Dr. Emily Johnson
              </h3>
              <p className="doctor-specialization" style={doctorSpecializationStyle}>
                Specializes in Respiratory Critical Care
              </p>
              <p className="doctor-experience" style={doctorExperienceStyle}>
                Experience: 12+ years
              </p>
              <Link to="/book-appointment" style={bookAppointmentStyle}>
                Book Appointment
              </Link>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2>Diagnostic Facilities</h2>
          <ul>
            <li>State-of-the-art pulmonary function testing equipment</li>
            <li>Bronchoscopy suite</li>
            <li>Sleep laboratories for sleep disorder evaluations</li>
            <li>Imaging services for respiratory conditions</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2>Collaborations</h2>
          <p>We collaborate with other medical departments and institutions to ensure a multidisciplinary approach to patient care. This includes partnerships with cardiology, oncology, and sleep medicine departments.</p>
        </section>

        <section style={sectionStyle}>
          <h2>Research and Innovation</h2>
          <p>We are actively involved in research initiatives and clinical trials related to pulmonary diseases. Our commitment to ongoing research allows us to offer cutting-edge treatments and contribute to advancements in the field of pulmonology.</p>
        </section>

        <section style={sectionStyle}>
          <h2>Patient Education</h2>
          <p>We provide resources, support groups, and educational materials to help our patients better understand their respiratory conditions and manage their health effectively. Our goal is to empower patients to make informed decisions about their respiratory well-being.</p>
        </section>

        <section style={sectionStyle}>
          <h2>Appointments and Contact Information</h2>
          <p>To schedule an appointment or for more information, please contact our department at:</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@pulmonologydepartment.com</p>
          <p>Our working hours are Monday to Friday, 8:00 AM to 5:00 PM.</p>
        </section>
      </main>

      <footer style={footerStyle}>
        <p>&copy; 2023 Pulmonology Department. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PulmonologyDepartment;
