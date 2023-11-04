// import React from 'react';
// import preview from './images/doc_logo-removebg-preview.png'
// class ENTDepartment extends React.Component {
//   render() {
//     const bodyStyle = {
//       margin: '0',
//       padding: '0',
//       boxSizing: 'border-box',
//     };

//     const headerStyle = {
//       backgroundColor: '#f0f0f0',
//       padding: '20px',
//       textAlign: 'center',
//     };

//     const mainStyle = {
//       padding: '20px',
//     };

//     const sectionStyle = {
//       marginBottom: '20px',
//     };

//     const headingStyle = {
//       color: '#333',
//       marginBottom: '10px',
//     };

//     const footerStyle = {
//       backgroundColor: '#f0f0f0',
//       padding: '10px',
//       textAlign: 'center',
//     };

//     const doctorStyle = {
//       display: 'inline-block',
//       marginRight: '20px',
//     };

//     const doctorImageStyle = {
//       width: '300px',
//       height: '300px',
//       objectFit: 'cover',
//       borderRadius: '0%',
//     };

//     const bookAppointmentButtonStyle = {
//       display: 'inline-block',
//       backgroundColor: '#4CAF50',
//       color: 'white',
//       padding: '10px 20px',
//       textDecoration: 'none',
//       borderRadius: '4px',
//       fontWeight: 'bold',
//       marginLeft: '10px',
//     };

//     const bookAppointmentButtonHoverStyle = {
//       backgroundColor: '#45a049',
//     };

//     const logoStyle = {
//       position: 'absolute',
//       top: '10px',
//       left: '10px',
//     };

//     const logoImageStyle = {
//       height: '65px',
//       width: '60px',
//     };

//     return (
//       <div style={bodyStyle}>
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>ENT Department</title>
//           <link rel="stylesheet" href="Ent.css" />
//         </head>
//         <body>
//           <header style={headerStyle}>
//             <div className="logo" style={logoStyle}>
//               <a href="Home-Page.html">
//                 <img
//                   className="ml-2 mt-2"
//                   height="65px"
//                   width="60px"
//                   src={preview}
//                   alt="img not found"
//                   style={logoImageStyle}
//                 />
//               </a>
//               {/* <h1>ENT(Ear, Nose & Throat) Department</h1> */}
//             </div>
//           </header>
//           <main style={mainStyle}>
//             <section style={sectionStyle}>
//               <h2>Welcome to Our ENT Department</h2>
//               <p>
//                 The ENT (Ear, Nose, and Throat) department, also known as Otolaryngology, is a medical specialty that focuses on the diagnosis and treatment of disorders related to the ear, nose, throat, head, and neck. ENT specialists, or otolaryngologists, are physicians who are trained to provide both medical and surgical interventions for a wide range of conditions. Here are some key details about the ENT department:
//               </p>
//             </section>

//             <section style={sectionStyle}>
//               <h2>Our Services</h2>
//               <ul>
//                 <li>Hearing tests and evaluations</li>
//                 <li>Nasal and sinus treatments</li>
//                 <li>Tonsillectomy and adenoidectomy</li>
//                 <li>Throat and vocal cord disorders</li>
//                 <li>Allergy testing and treatment</li>
//                 <li>Head and neck surgery</li>
//               </ul>
//             </section>
//             <section style={sectionStyle}>
//               <h2>Diagnostic and Treatment Services</h2>
//               <ul>
//                 <li>Evaluation and management of ear infections, hearing loss, and tinnitus</li>
//                 <li>Diagnosis and treatment of sinusitis, nasal obstruction, and nasal polyps</li>
//                 <li>Assessment and management of voice disorders, swallowing difficulties, and snoring/sleep apnea</li>
//                 <li>Surgical interventions such as tonsillectomy, adenoidectomy, myringotomy, and sinus surgery</li>
//                 <li>Evaluation and management of head and neck tumors, including biopsies and surgical removal</li>
//                 <li>Treatment of facial trauma, including fractures and soft tissue injuries</li>
//               </ul>
//             </section>

//             <section style={sectionStyle}>
//               <h2>Hearing and Balance Disorders</h2>
//               <p>
//                 Otolaryngologists play a vital role in the evaluation and treatment of hearing loss and balance disorders. They can perform audiological tests, prescribe hearing aids, and provide surgical options such as cochlear implants for severe hearing loss.
//               </p>
//             </section>

//             <section style={sectionStyle}>
//               <h2>Allergy and Immunotherapy</h2>
//               <p>
//                 Many ENT departments offer allergy testing and immunotherapy (allergy shots) for patients with allergic rhinitis and other allergic conditions affecting the nose and sinuses.
//               </p>
//             </section>

//             <section style={sectionStyle}>
//               <h2>Collaboration with Other Specialties</h2>
//               <p>
//                 Otolaryngologists often collaborate with other medical specialties such as neurology, pulmonology, oncology, and speech pathology to provide comprehensive care for patients with complex conditions.
//               </p>
//             </section>

//             <section style={sectionStyle}>
//               <h2>Pediatrics and Geriatrics</h2>
//               <p>
//                 ENT specialists provide care for patients of all ages, including infants, children, and older adults. They address unique ENT concerns specific to these age groups, such as pediatric ear infections and age-related hearing loss.
//               </p>
//             </section>
//           </main>

//           <section>
//             <h2>Meet Our Doctors</h2>
//             <div className="doctor" style={doctorStyle}>
//               <img
//                 src="https://t4.ftcdn.net/jpg/03/20/52/31/240_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
//                 alt=""
//                 height="600px"
//                 width="400px"
//                 style={doctorImageStyle}
//               />
//               <h3>Dr. Biswaranjan Panda</h3>
//               <p>Specializes in ear disorders</p>
//               <p>Experience: 15+ years</p>
//               <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentButtonStyle}>
//                 Book Appointment
//               </a>
//             </div>

//             <div className="doctor" style={doctorStyle}>
//               <img
//                 src="https://t3.ftcdn.net/jpg/03/08/95/96/240_F_308959677_9dsUpeKnj2wWy42Vr8ofYNeKoazLXgSX.jpg"
//                 alt=""
//                 height="600px"
//                 width="400px"
//                 style={doctorImageStyle}
//               />
//               <h3>Dr. Sarah Thompson</h3>
//               <p>Specializes in nasal and sinus treatments</p>
//               <p>Experience: 11+ years</p>
//               <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentButtonStyle}>
//                 Book Appointment
//               </a>
//             </div>
//           </section>
//           <footer style={footerStyle}>
//             <p>&copy; 2023 ENT Department. All rights reserved.</p>
//           </footer>
//         </body>
//       </div>
//     );
//   }
// }

// export default ENTDepartment;
import React from "react";
import preview from "../images/apollo-removebg-preview.png";
import Header from "./Header";

class ENTDepartment extends React.Component {
  render() {
    const bodyStyle = {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.5,
    };

    const headerStyle = {
      backgroundColor: "#eababa",
      color:"fff",
      padding: "20px",
      textAlign: "center",
      marginTop: "80px",
      position: 'relative'
    };

    const mainStyle = {
      padding: "20px",
    };

    const sectionStyle = {
      marginBottom: "20px",
    };

    const headingStyle = {
      color: "#333",
      marginBottom: "10px",
    };

    const footerStyle = {
      backgroundColor: "#f0f0f0",
      padding: "10px",
      textAlign: "center",
    };

    const doctorStyle = {
      display: "inline-block",
      marginRight: "20px",
    };

    const doctorImageStyle = {
      width: "150px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "100%",
    };

    const bookAppointmentButtonStyle = {
      display: "inline-block",
      backgroundColor: "#566d7e",
      color: "white",
      padding: "10px 20px",
      textDecoration: "none",
      borderRadius: "4px",
      fontWeight: "bold",
      marginLeft: "10px",
    };

    const bookAppointmentButtonHoverStyle = {
      backgroundColor: "#337f8b",
    };

    const logoStyle = {
      position: "absolute",
      top: "10px",
      left: "10px",
    };

    const logoImageStyle = {
      height: "65px",
      width: "60px",
    };

    return (
      <div style={bodyStyle}>
        <Header />
        {/* <header style={headerStyle}>
          <div className="logo" style={logoStyle}>
            <a href="Home-Page.html">
              <img
                className="ml-2 mt-2"
                height="65px"
                width="60px"
                src={preview}
                alt="img not found"
                style={logoImageStyle}
              />
            </a>
          </div>
          <h1>ENT (Ear, Nose & Throat) Department</h1>
        </header> */}
        <header style={headerStyle}>
          <div className="logo" style={logoStyle}>
            <a href="Home-Page.html">
              <img
                className="ml-2 mt-2"
                height="65px"
                width="60px"
                src={preview}
                alt="img not found"
                style={logoImageStyle}
              />
            </a>
          </div>
          <h1>ENT (Ear, Nose & Throat) Department</h1>
        </header>
        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={headingStyle}>Welcome to Our ENT Department</h2>
            <p>
              The ENT (Ear, Nose, and Throat) department, also known as
              Otolaryngology, is a medical specialty that focuses on the
              diagnosis and treatment of disorders related to the ear, nose,
              throat, head, and neck. ENT specialists, or otolaryngologists, are
              physicians who are trained to provide both medical and surgical
              interventions for a wide range of conditions. Here are some key
              details about the ENT department:
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={headingStyle}>Our Services</h2>
            <ul>
              <li>Hearing tests and evaluations</li>
              <li>Nasal and sinus treatments</li>
              <li>Tonsillectomy and adenoidectomy</li>
              <li>Throat and vocal cord disorders</li>
              <li>Allergy testing and treatment</li>
              <li>Head and neck surgery</li>
            </ul>
          </section>

          {/* Add more sections for other information about the department and services. */}
        </main>

        <section>
          <h2 style={headingStyle}>Meet Our Doctors</h2>
          <div className="doctor" style={doctorStyle}>
            <img
              src="https://t3.ftcdn.net/jpg/03/08/95/96/240_F_308959677_9dsUpeKnj2wWy42Vr8ofYNeKoazLXgSX.jpg"
              alt=""
              height="200px"
              width="150px"
              style={doctorImageStyle}
            />
            <h3>Dr. Biswaranjan Panda</h3>
            <p>Specializes in ear disorders</p>
            <p>Experience: 15+ years</p>
            <a
              href="bookapointment.html"
              className="book-appointment-button"
              style={bookAppointmentButtonStyle}
            >
              Book Appointment
            </a>
          </div>
          <div className="doctor" style={doctorStyle}>
            <img
              src="https://t4.ftcdn.net/jpg/03/20/52/31/240_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
              alt=""
              height="200px"
              width="150px"
              style={doctorImageStyle}
            />
            <h3>Dr. Sarah Thompson</h3>
            <p>Specializes in nasal and sinus treatments</p>
            <p>Experience: 11+ years</p>
            <a
              href="bookapointment.html"
              className="book-appointment-button"
              style={bookAppointmentButtonStyle}
            >
              Book Appointment
            </a>
          </div>
        </section>

        <footer style={footerStyle}>
          <p>&copy; 2023 ENT Department. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default ENTDepartment;
