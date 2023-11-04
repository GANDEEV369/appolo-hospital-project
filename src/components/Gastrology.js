import React from 'react';
import preview from '../images/apollo-removebg-preview.png'
import Header from './Header';
const GastroenterologyDepartment = () => {
  const bodyStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const headerStyle = {
    backgroundColor: '#d6c8c8',
    padding: '20px 0',
    textAlign: 'center',
    marginTop:"80px"
  };

  const h1Style = {
    margin: 0,
  };

  const mainSectionStyle = {
    backgroundColor: '#fff',
    padding: '40px 0',
  };

  const doctorSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
    textDecoration: 'solid',
  };

  const doctorInfoStyle = {
    flex: 1,
    textAlign: 'center',
  };

  const doctorImageStyle = {
    flex: 1,
    textAlign: 'center',
    height: '100px',
    width: '100px',
  };

  const imgStyle = {
    maxWidth: '1000px',
    height: '150px',
    borderRadius: '0%',
  };

  const servicesSectionStyle = {
    textAlign: 'center',
  };

  const h2Style = {
    marginBottom: '20px',
  };

  const ulStyle = {
    listStyleType: 'disc',
    marginLeft: '20px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
  };

  const bookAppointmentButtonStyle = {
    display: 'inline-block',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    marginLeft: '10px',
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
        <h1 style={h1Style}>Gastroenterology Department</h1>
      </header>

      <div className="main-section" style={mainSectionStyle}>
        <div className="container" style={containerStyle}>
          <div className="doctor-section" style={doctorSectionStyle}>
            <div className="doctor-info" style={doctorInfoStyle}>
              <h2>Meet Our Gastroenterologist</h2>
              <p><strong>Dr. John Smith</strong></p>
              <p>Specialization: Gastroenterology</p>
              <p>Experience: 10+ years</p>
              <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentButtonStyle}>
                Book Appointment
              </a>
            </div>
            <div className="doctor-image" style={doctorImageStyle}>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
                height="auto"
                width="auto"
                style={imgStyle}
              />
            </div>
          </div>
          <div className="doctor-section" style={doctorSectionStyle}>
            <div className="doctor-info" style={doctorInfoStyle}>
              <p><strong>Dr. Adesh A Setty</strong></p>
              <p>Specialization: Gastroenterology</p>
              <p>Experience: 15+ years</p>
              <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentButtonStyle}>
                Book Appointment
              </a>
            </div>
            <div className="doctor-image" style={doctorImageStyle}>
              <img
                src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg&ga=GA1.1.282885672.1687778570&semt=sph"
                alt=""
                height="auto"
                width="auto"
                style={imgStyle}
              />
            </div>
          </div>
          <div className="services-section" style={servicesSectionStyle}>
            <h2 style={h2Style}>Services Offered</h2>
            <ul style={ulStyle}>
              <li>Diagnostic procedures for gastrointestinal disorders</li>
              <li>Endoscopic examinations</li>
              <li>Treatment of acid reflux and heartburn</li>
              <li>Management of liver diseases</li>
              <li>Colonoscopy and screening for colorectal cancer</li>
              <li>ERCP (Endoscopic Retrograde Cholangiopancreatography)</li>
            </ul>
          </div>
          <main>
            <section>
              <h2 style={h2Style}>Gastroenterologists</h2>
              <p style={paragraphStyle}>The department is staffed by highly trained gastroenterologists who have expertise in diagnosing and treating complex gastrointestinal conditions. They perform procedures such as endoscopy and colonoscopy.</p>
            </section>
            <section>
              <h2 style={h2Style}>Diagnostic Tests</h2>
              <ul style={ulStyle}>
                <li>Endoscopy</li>
                <li>Colonoscopy</li>
                <li>Imaging tests (CT scans, MRI scans, ultrasound)</li>
                <li>Laboratory tests (blood tests, stool tests, breath tests)</li>
              </ul>
            </section>
            <section>
              <h2 style={h2Style}>Multidisciplinary Approach</h2>
              <p style={paragraphStyle}>Gastroenterology involves collaboration with other medical specialties such as hepatology, nutrition, radiology, and oncology to provide comprehensive care for patients with complex GI conditions.</p>
            </section>
            <section>
              <h2 style={h2Style}>Patient Education and Prevention</h2>
              <p style={paragraphStyle}>Gastroenterologists emphasize patient education on healthy lifestyle, dietary modifications, and regular screenings for colorectal cancer and other GI disorders. They provide guidance on managing conditions like IBS and celiac disease.</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default GastroenterologyDepartment;
