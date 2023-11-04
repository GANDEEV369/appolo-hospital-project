import React from 'react';
import preview from '../images/apollo-removebg-preview.png'

const GynecologyDepartment = () => {
  const globalStyles = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  };

  const bodyStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.5,
  };

  const headerStyle = {
    backgroundColor: '#7b7070',
    padding: '20px',
    textAlign: 'center',
    marginTop:"80px"
  };

  const navStyle = {
    listStyleType: 'none',
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
  };

  const navListItemStyle = {
    display: 'inline-block',
    marginRight: '10px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#fff',
    padding: '5px 10px',
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

  const doctorStyle = {
    display: 'inline-block',
    marginRight: '20px',
  };

  const doctorImageStyle = {
    width: '200px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '0%',
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
    <div style={globalStyles}>
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
        <h1>Gynecology Department</h1>
      </header>

      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Welcome to Gynecology Department</h2>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Our Services</h2>
          <ul>
            <li>Routine gynecological examinations</li>
            <li>Contraception and family planning</li>
            <li>Prenatal care</li>
            <li>Management of menstrual disorders</li>
            <li>Treatment of gynecological conditions</li>
            <li>Gynecological surgery</li>
            <li>Menopausal care</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Routine Gynecological Examinations</h2>
          <p>Gynecologists perform regular check-ups to monitor and maintain women's reproductive health. These examinations may include pelvic exams, breast exams, and Pap smears for cervical cancer screening.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Contraception and Family Planning</h2>
          <p>Gynecologists provide counseling and guidance on different contraceptive methods, helping women choose the most suitable option based on their needs and preferences. They also offer family planning services, including preconception counseling and fertility evaluation.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Prenatal Care</h2>
          <p>Gynecologists play a crucial role in providing comprehensive prenatal care during pregnancy. They monitor the health of both the mother and the developing fetus, perform ultrasounds, order necessary tests, and address any concerns or complications that may arise.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Management of Menstrual Disorders</h2>
          <p>Gynecologists diagnose and treat various menstrual disorders, such as irregular periods, heavy bleeding (menorrhagia), painful periods (dysmenorrhea), and menstrual disorders associated with hormonal imbalances.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Treatment of Gynecological Conditions</h2>
          <p>Gynecologists diagnose and treat a range of gynecological conditions, including but not limited to:</p>
          <ul>
            <li>Infections of the reproductive organs, such as yeast infections, bacterial vaginosis, and sexually transmitted infections (STIs).</li>
            <li>Uterine fibroids and ovarian cysts.</li>
            <li>Endometriosis, a condition where the tissue lining the uterus grows outside the uterus.</li>
            <li>Polycystic ovary syndrome (PCOS), a hormonal disorder affecting the ovaries.</li>
            <li>Pelvic organ prolapse, a condition where the pelvic organs descend or bulge into the vagina.</li>
            <li>Menopausal symptoms and hormonal changes.</li>
            <li>Gynecological Surgery: Gynecologists perform various surgical procedures to address gynecological conditions, including minimally invasive procedures such as laparoscopy and hysteroscopy. Common surgeries include hysterectomy (removal of the uterus), myomectomy (removal of fibroids), and ovarian cystectomy (removal of ovarian cysts).</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Menopausal Care</h2>
          <p>Gynecologists provide care and support for women going through menopause, addressing symptoms such as hot flashes, night sweats, mood changes, and vaginal dryness. They may offer hormonal therapies or alternative treatments to manage menopausal symptoms.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Meet Our Doctors</h2>
          <div className="doctor" style={doctorStyle}>
            <img
              src="https://i.pinimg.com/736x/dc/04/aa/dc04aaae4d9a84ad7c4a3be7bc4e9766.jpg"
              alt=""
              height="600px"
              width="400px"
              style={doctorImageStyle}
            />
            <h3>Dr. Emily Johnson</h3>
            <p>Specializes in obstetrics and gynecology</p>
            <p>Experience: 15+ years</p>
            <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentButtonStyle}>
              Book Appointment
            </a>
          </div>

          <div className="doctor" style={doctorStyle}>
            <img
              src="https://media.istockphoto.com/id/177839842/photo/smiling-doctor-woman-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=infRKfdmTMS8WYFZHF_GPuBpLPszyyXhiP5Er9a50jA="
              alt=""
              height="600px"
              width="400px"
              style={doctorImageStyle}
            />
            <h3>Dr. Sarah Thompson</h3>
            <p>Specializes in reproductive endocrinology</p>
            <p>Experience: 10+ years</p>
            <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentButtonStyle}>
              Book Appointment
            </a>
          </div>

          <div className="doctor" style={doctorStyle}>
            <img
              src="https://media.istockphoto.com/id/1189191657/photo/indian-young-female-doctor-showing-thumbs-up.jpg?s=612x612&w=0&k=20&c=xdw2finHCAfLKyXMEhRQ-PuJUx2ORhiSymE4DRKpXj0="
              alt=""
              height="600px"
              width="400px"
              style={doctorImageStyle}
            />
            <h3>Dr. Sonakshi Vindre</h3>
            <p>Specializes in reproductive endocrinology</p>
            <p>Experience: 20+ years</p>
            <a href="bookapointment.html" className="book-appointment-button" style={bookAppointmentButtonStyle}>
              Book Appointment
            </a>
          </div>
        </section>
      </main>

      <footer style={footerStyle}>
        <p>&copy; 2023 Gynecology Department. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GynecologyDepartment;
