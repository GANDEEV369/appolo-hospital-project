import React from 'react';
import preview from '../images/apollo-removebg-preview.png'
import Header from './Header';
class PlasticSurgeryPage extends React.Component {
  render() {
    const bodyStyle = {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.5,
    };

    const headerStyle = {
      backgroundColor: '#eababa',
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

    const footerStyle = {
      backgroundColor: '#f0f0f0',
      padding: '10px',
      textAlign: 'center',
    };

    const surgeonStyle = {
      display: 'inline-block',
      marginRight: '20px',
    };

    const surgeonImageStyle = {
      width: '150px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '100%',
    };

    const bookAppointmentButtonStyle = {
      display: 'inline-block',
      backgroundColor: '#566d7e',
      color: 'white',
      padding: '10px 20px',
      textDecoration: 'none',
      borderRadius: '4px',
      fontWeight: 'bold',
      marginLeft: '10px',
    };

    const bookAppointmentButtonHoverStyle = {
      backgroundColor: '#337f8b',
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
          <h1>Plastic Surgery Department</h1>
        </header>
        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2>Welcome to Our Plastic Surgery Department</h2>
            <p>
              The Plastic Surgery department is a medical specialty that focuses on reconstructive and aesthetic procedures to enhance or restore the appearance and function of various parts of the body. Plastic surgeons are highly trained physicians who specialize in performing surgical interventions to address congenital anomalies, trauma-related injuries, and aesthetic concerns. Here are some key details about the Plastic Surgery department:
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Aesthetic Procedures</h2>
            <ul>
              <li>Breast augmentation, reduction, or lift</li>
              <li>Rhinoplasty (nose surgery)</li>
              <li>Facelift, brow lift, or eyelid surgery</li>
              <li>Liposuction and body contouring</li>
              <li>Abdominoplasty (tummy tuck)</li>
              <li>Botox and dermal fillers for facial rejuvenation</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2>Comprehensive Evaluation</h2>
            <p>
              Plastic surgeons conduct thorough evaluations and consultations with patients to understand their goals, assess their medical history, and discuss potential surgical options. They work closely with patients to develop personalized treatment plans and provide realistic expectations.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Multidisciplinary Collaboration</h2>
            <p>
              Plastic surgeons often collaborate with other medical specialties, such as dermatology, otolaryngology, and orthopedic surgery, to ensure comprehensive care for patients. This multidisciplinary approach helps address complex cases that require combined expertise.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Patient Safety and Ethics</h2>
            <p>
              Plastic surgeons prioritize patient safety and adhere to ethical guidelines. They educate patients about the potential risks and benefits of procedures, discuss alternative options, and ensure that patients make informed decisions.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Continuum of Care</h2>
            <p>
              Plastic surgeons provide preoperative, intraoperative, and postoperative care to their patients. They monitor patients' progress, manage postoperative pain, and guide patients through the recovery process.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Advances in Technology</h2>
            <p>
              Plastic surgery has benefited from technological advancements, including minimally invasive techniques, computer-assisted imaging, 3D printing, and innovative surgical instruments. These advancements contribute to improved surgical outcomes and patient satisfaction.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Our Procedures</h2>
            <ul>
              <li>Rhinoplasty</li>
              <li>Breast Augmentation</li>
              <li>Liposuction</li>
              <li>Tummy Tuck</li>
              <li>Facelift</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2>Meet Our Surgeons</h2>
            <div className="surgeon" style={surgeonStyle}>
              <img
                src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.282885672.1687778570&semt=ais"
                alt=""
                height="600px"
                width="400px"
                style={surgeonImageStyle}
              />
              <h3>Dr. Emily Johnson</h3>
              <p>Specializes in facial procedures</p>
              <p>Experience: 15+ years</p>
              <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentButtonStyle}>
                Book Appointment
              </a>
            </div>
            <div className="surgeon" style={surgeonStyle}>
              <img
                src="https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg?size=626&ext=jpg&ga=GA1.1.282885672.1687778570&semt=ais"
                alt=""
                height="600px"
                width="400px"
                style={surgeonImageStyle}
              />
              <h3>Dr. Sarah Thompson</h3>
              <p>Specializes in body contouring</p>
              <p>Experience: 10+ years</p>
              <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentButtonStyle}>
                Book Appointment
              </a>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2>Testimonials</h2>
            <div className="testimonial" style={sectionStyle}>
              <p>"I am extremely happy with the results of my breast augmentation surgery. Dr. Johnson is a talented surgeon!"</p>
              <p>- Lisa S.</p>
            </div>

            <div className="testimonial" style={sectionStyle}>
              <p>"Dr. Thompson made me feel comfortable throughout the entire process. I highly recommend her for liposuction!"</p>
              <p>- John M.</p>
            </div>
          </section>
        </main>

        <footer style={footerStyle}>
          <p>&copy; 2023 Plastic Surgery Clinic. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default PlasticSurgeryPage;
