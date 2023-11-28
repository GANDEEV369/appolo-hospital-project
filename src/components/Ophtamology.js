import React from 'react';
import preview from '../images/apollo-removebg-preview.png'
import opthalmology from './images/opthalmology.jpg'
import o1 from'./images/o1.png';
import o2 from'./images/o2.png';
import o3 from'./images/o3.png';
import o4 from'./images/o4.png';
import Header from './Header';
import {Link} from 'react-router-dom';
 
const OphthalmologyDepartment = () => {
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
    flexWrap: 'wrap',
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
        <h1 style={h1Style}>Ophthalmology Department</h1>
      </header>

      <main style={mainStyle}>
        <div className="department-info" style={departmentInfoStyle}>
          <img src={opthalmology} width="300px" height="180px" alt="Ophthalmology Department" style={departmentInfoImgStyle} />
          <div className="department-description" style={departmentDescriptionStyle}>
            <h2>About Ophthalmology</h2>
            <p>
              The Ophthalmology Department at our hospital is dedicated to providing comprehensive eye care for patients of all ages. Our team of experienced ophthalmologists and eye care professionals are committed to delivering the highest standard of care and utilizing advanced technologies for accurate diagnosis and treatment of eye conditions.
            </p>
            <p>
              Our services include:
              <ul>
                <li>Comprehensive eye exams</li>
                <li>Diagnosis and treatment of eye diseases</li>
                <li>Cataract surgery</li>
                <li>Glaucoma management</li>
                <li>Retinal disorders treatment</li>
                <li>Corneal transplantation</li>
                <li>Refractive surgeries (LASIK, PRK)</li>
              </ul>
            </p>
            <p>
              If you have any concerns about your eye health or need specialized ophthalmological care, our ophthalmology department is here to help. We are dedicated to improving the vision and eye health of our patients and providing compassionate care.
            </p>
          </div>
        </div>

        <div className="doctors-section" style={doctorsSectionStyle}>
          <div className="doctor-card" style={doctorCardStyle}>
            <img
              src={o1}
              alt="Doctor 1"
              className="doctor-avatar"
              style={doctorAvatarStyle}
            />
            <div>
              <h3>Dr. Rahul Sharma</h3>
              <p>Dr. Rahul Sharma is a board-certified ophthalmologist with over 15 years of experience. He specializes in cataract surgery and refractive surgeries.</p>
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
              <Link to="/book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className="doctor-card" style={doctorCardStyle}>
            <img
              src={o2}
              alt="Doctor 2"
              className="doctor-avatar"
              style={doctorAvatarStyle}
            />
            <div>
              <h3>Dr. Sneha Patel</h3>
              <p>Dr. Sneha Patel is an ophthalmologist with expertise in pediatric ophthalmology and strabismus. She provides comprehensive eye care for children.</p>
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
              <Link to="/book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className="doctor-card" style={doctorCardStyle}>
            <img
              src={o3}
              alt="Doctor 3"
              className="doctor-avatar"
              style={doctorAvatarStyle}
            />
            <div>
              <h3>Dr. Naveen Gupta</h3>
              <p>Dr. Naveen Gupta is a retinal specialist with extensive experience in the diagnosis and management of retinal disorders such as diabetic retinopathy and macular degeneration.</p>
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
                <a href="bookapointment.html" className="book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </a>
              </div>
            </div>
          </div>

          <div className="doctor-card" style={doctorCardStyle}>
            <img
              src={o4}
              alt="Doctor 4"
              className="doctor-avatar"
              style={doctorAvatarStyle}
            />
            <div>
              <h3>Dr. Priya Verma</h3>
              <p>Dr. Priya Verma is a cornea specialist with expertise in corneal transplantation and management of corneal diseases such as keratoconus.</p>
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

export default OphthalmologyDepartment;
