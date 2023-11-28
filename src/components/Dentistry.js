// import React from 'react';
// import preview from './images/doc_logo-removebg-preview.png'
// class DentistDepartment extends React.Component {
//   render() {
//     const bodyStyle = {
//       fontFamily: 'Arial, sans-serif',
//       margin: '0',
//       padding: '0',
//     };

//     const headerStyle = {
//       backgroundColor: 'lightskyblue',
//       color: '#fff',
//       padding: '20px',
//       textAlign: 'center',
//       position: 'relative',
//     };

//     const h1Style = {
//       margin: '0',
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

//     const mainStyle = {
//       margin: '20px',
//     };

//     const departmentInfoStyle = {
//       display: 'grid',
//       gridTemplateColumns: '1fr',
//       gridGap: '20px',
//       alignItems: 'center',
//     };

//     const departmentInfoImageStyle = {
//       maxWidth: '100%',
//       borderRadius: '5px',
//     };

//     const departmentDescriptionStyle = {
//       lineHeight: '1.5',
//     };

//     const doctorsSectionStyle = {
//       display: 'grid',
//       gridTemplateColumns: '1fr',
//       gridGap: '20px',
//       marginTop: '40px',
//     };

//     const doctorCardStyle = {
//       border: '1px solid #ddd',
//       padding: '10px',
//       display: 'flex',
//       alignItems: 'center',
//       transition: 'background-color 0.3s ease-in-out',
//     };

//     const doctorCardHoverStyle = {
//       backgroundColor: 'lightskyblue',
//     };

//     const doctorAvatarStyle = {
//       width: '100px',
//       height: '100px',
//       borderRadius: '50%',
//       marginRight: '20px',
//     };

//     const bookAppointmentStyle = {
//       marginTop: '10px',
//       backgroundColor: 'blue',
//       color: 'white',
//       padding: '8px 12px',
//       borderRadius: '5px',
//       textDecoration: 'none',
//     };

//     const bookAppointmentBoxStyle = {
//       padding: '10px',
//       borderRadius: '5px',
//       display: 'inline-block',
//     };

//     return (
//       <div style={bodyStyle}>
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>Dentist Department</title>
//           <link rel="stylesheet" href="Dentist.css" />
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
//               <h1 style={h1Style}>Dentist Department</h1>
//             </div>
//           </header>
//           <main style={mainStyle}>
//             <section>
//               <h2>Welcome to Dentist Department</h2>
//               <p>
//                 The Dentistry Department, also known as the Dental Department, is a branch of healthcare that focuses on the diagnosis, prevention, and treatment of oral diseases and conditions. Dentistry encompasses various dental specialties and disciplines aimed at promoting oral health and maintaining the functionality and aesthetics of the teeth, gums, and mouth. Here are some key details about the Dentistry Department:
//               </p>
//             </section>

//             <section>
//               <h2>Our Services</h2>
//               <ul>
//                 <li>Teeth cleaning and exams</li>
//                 <li>Fillings and restorations</li>
//                 <li>Tooth extractions</li>
//                 <li>Dental implants</li>
//                 <li>Orthodontics and braces</li>
//                 <li>Root canals</li>
//               </ul>
//             </section>
//             <section>
//               <h2>Dental Procedures and Treatments</h2>
//               <ul>
//                 <li>Dental fillings for the treatment of cavities</li>
//                 <li>Teeth whitening to enhance the color and brightness of the teeth</li>
//                 <li>Dental crowns and bridges for the restoration of damaged or missing teeth</li>
//                 <li>Dental implants as a permanent solution for tooth replacement</li>
//                 <li>Dental cleanings to remove plaque, tartar, and stains from the teeth</li>
//                 <li>Dental extractions, including wisdom tooth removal</li>
//                 <li>Treatment of gum diseases, such as scaling and root planing</li>
//                 <li>Dental examinations and X-rays for the diagnosis of oral conditions</li>
//               </ul>
//             </section>
//             <section>
//               <h2>Oral Health Education</h2>
//               <p>
//                 Dentists play a crucial role in educating patients about proper oral hygiene practices, including brushing techniques, flossing, and the importance of a balanced diet for dental health. They provide guidance on maintaining oral health and preventing common dental problems.
//               </p>
//             </section>

//             <section>
//               <h2>Collaboration with Other Specialties</h2>
//               <p>
//                 Dentists often collaborate with other healthcare professionals, such as oral and maxillofacial surgeons, orthodontists, periodontists, and medical doctors, to provide comprehensive care for patients requiring multidisciplinary treatment.
//               </p>
//             </section>

//             <section>
//               <h2>Dental Technology</h2>
//               <p>
//                 Advancements in dental technology have improved the diagnosis and treatment of oral conditions. Dentistry departments may incorporate digital imaging, intraoral cameras, computer-aided design/computer-aided manufacturing (CAD/CAM) systems, and laser dentistry for enhanced precision and patient comfort.
//               </p>
//             </section>

//             <section>
//               <h2>Patient Comfort and Anxiety Management</h2>
//               <p>
//                 Dentists and dental professionals prioritize patient comfort during dental procedures. Techniques such as local anesthesia, sedation dentistry, and the use of relaxation techniques help alleviate dental anxiety and ensure a positive dental experience.
//               </p>
//             </section>

//             <section>
//               <h2>Meet Our Dentists</h2>
//               <div className="dentist" style={doctorsSectionStyle}>
//                 <img
//                   src="https://img.freepik.com/free-photo/portrait-doctor_144627-39390.jpg?size=626&ext=jpg&ga=GA1.2.282885672.1687778570&semt=ais"
//                   alt=""
//                   height="600px"
//                   width="400px"
//                   style={doctorAvatarStyle}
//                 />
//                 <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
//                   <h3>Dr. Emily Johnson</h3>
//                   <p>Specializes in cosmetic dentistry</p>
//                   <p>Experience: 10+ years</p>
//                   <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentStyle}>
//                     Book Appointment
//                   </a>
//                 </div>
//               </div>
//               <br />

//               <div className="dentist" style={doctorsSectionStyle}>
//                 <img
//                   src="https://t3.ftcdn.net/jpg/02/95/51/80/240_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg"
//                   alt=""
//                   height="600px"
//                   width="400px"
//                   style={doctorAvatarStyle}
//                 />
//                 <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
//                   <h3>Dr. Sarah Thompson</h3>
//                   <p>Specializes in pediatric dentistry</p>
//                   <p>Experience: 15+ years</p>
//                   <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentStyle}>
//                     Book Appointment
//                   </a>
//                 </div>
//               </div>
//             </section>
//           </main>

//           <footer>
//             <p>&copy; 2023 Dentist Department. All rights reserved.</p>
//           </footer>
//         </body>
//       </div>
//     );
//   }
// }

// export default DentistDepartment;
import React from 'react';
import preview from '../images/apollo-removebg-preview.png';
import Header from './Header';
import {Link} from 'react-router-dom';
class DentistDepartment extends React.Component {
  render() {
    const bodyStyle = {
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      backgroundColor: 'rgba(184, 191, 191, 0.027)',
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
      margin: '0',
    };

    const logoStyle = {
      position: 'absolute',
      top: '10px',
      left: '10px',
    };

    const logoImageStyle = {
      height: '65px',
      width: '60px',
    };

    const mainStyle = {
      margin: '20px',
    };

    const sectionStyle = {
      marginBottom: '20px',
    };

    const headingStyle = {
      color: '#333',
      marginBottom: '10px',
      
    };

    const listStyle = {
      listStyleType: 'disc',
      marginLeft: '20px',
    };

    const bookAppointmentStyle = {
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

    const doctorSectionStyle = {
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
                alt="Image not found"
                style={logoImageStyle}
              />
            </Link>
          </div>
          <h1 style={h1Style}>Dentist Department</h1>
        </header>
        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2>Welcome to Dentist Department</h2>
            <p>
              The Dentistry Department, also known as the Dental Department, is a branch of healthcare that focuses on the diagnosis, prevention, and treatment of oral diseases and conditions. Dentistry encompasses various dental specialties and disciplines aimed at promoting oral health and maintaining the functionality and aesthetics of the teeth, gums, and mouth. Here are some key details about the Dentistry Department:
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Our Services</h2>
            <ul style={listStyle}>
              <li>Teeth cleaning and exams</li>
              <li>Fillings and restorations</li>
              <li>Tooth extractions</li>
              <li>Dental implants</li>
              <li>Orthodontics and braces</li>
              <li>Root canals</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2>Dental Procedures and Treatments</h2>
            <ul style={listStyle}>
              <li>Dental fillings for the treatment of cavities</li>
              <li>Teeth whitening to enhance the color and brightness of the teeth</li>
              <li>Dental crowns and bridges for the restoration of damaged or missing teeth</li>
              <li>Dental implants as a permanent solution for tooth replacement</li>
              <li>Dental cleanings to remove plaque, tartar, and stains from the teeth</li>
              <li>Dental extractions, including wisdom tooth removal</li>
              <li>Treatment of gum diseases, such as scaling and root planing</li>
              <li>Dental examinations and X-rays for the diagnosis of oral conditions</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2>Oral Health Education</h2>
            <p>
              Dentists play a crucial role in educating patients about proper oral hygiene practices, including brushing techniques, flossing, and the importance of a balanced diet for dental health. They provide guidance on maintaining oral health and preventing common dental problems.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Collaboration with Other Specialties</h2>
            <p>
              Dentists often collaborate with other healthcare professionals, such as oral and maxillofacial surgeons, orthodontists, periodontists, and medical doctors, to provide comprehensive care for patients requiring multidisciplinary treatment.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Dental Technology</h2>
            <p>
              Advancements in dental technology have improved the diagnosis and treatment of oral conditions. Dentistry departments may incorporate digital imaging, intraoral cameras, computer-aided design/computer-aided manufacturing (CAD/CAM) systems, and laser dentistry for enhanced precision and patient comfort.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Patient Comfort and Anxiety Management</h2>
            <p>
              Dentists and dental professionals prioritize patient comfort during dental procedures. Techniques such as local anesthesia, sedation dentistry, and the use of relaxation techniques help alleviate dental anxiety and ensure a positive dental experience.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Meet Our Dentists</h2>
            <div className="dentist" style={doctorSectionStyle}>
              <img
                src="https://img.freepik.com/free-photo/portrait-doctor_144627-39390.jpg?size=626&ext=jpg&ga=GA1.2.282885672.1687778570&semt=ais"
                alt=""
                height="100px"
                width="100px"
                style={doctorAvatarStyle}
              />
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
                <h3>Dr. Emily Johnson</h3>
                <p>Specializes in cosmetic dentistry</p>
                <p>Experience: 10+ years</p>
                <Link to="/book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </Link>
              </div>
            </div>
            <div className="dentist" style={doctorSectionStyle}>
              <img
                src="https://t3.ftcdn.net/jpg/02/95/51/80/240_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg"
                alt=""
                height="100px"
                width="100px"
                style={doctorAvatarStyle}
              />
              <div className="book-appointment-box" style={bookAppointmentBoxStyle}>
                <h3>Dr. Sarah Thompson</h3>
                <p>Specializes in pediatric dentistry</p>
                <p>Experience: 15+ years</p>
                <Link to="/book-appointment" style={bookAppointmentStyle}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 Dentist Department. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default DentistDepartment;
