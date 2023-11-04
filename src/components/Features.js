import React, { useState } from "react";
import { Link } from 'react-router-dom';

const MyComponent = () => {
  const [activeTab, setActiveTab] = useState("content1");

  const showContent = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="menu" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        <div className="container4 row mt-3" style={{ display: "flex", width: "70%", textAlign: "center", justifyContent: "center", backgroundColor: "lightblue", borderRadius: "5px" }}>
          <div className="buttons">
            <button className={`buttonscroll ${activeTab === "content1" ? "active" : ""}`} onClick={() => showContent("content1")}>
              <span className="text-primary">Specialities</span>
            </button>
            <button className={`buttonscroll ${activeTab === "content2" ? "active" : ""}`} onClick={() => showContent("content2")}>
              <span className="text-primary">Pro Health</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container6" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>
        <div className="tab-content py-sm-5 py-3" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>
          <div className="tab-pane" id="content1" style={{ width: "70%", margin: "auto", display: activeTab === "content1" ? "block" : "none" }}>
            <div className="row justify-content-center text-center">
              <div className="col-md-12">
                <h2>Explore our Centres of Clinical Excellence</h2>
                <p className="sub_hdng pt-1">Learn about the world-class healthcare we provide</p>
              </div>
              <div className="col-md-5">
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah.webp"
                  alt="Advised a procedure or surgery?"
                  className="img-fluid rounded-4 d-none d-sm-block"
                />
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah_m.webp"
                  alt="Advised a procedure or surgery?"
                  className="img-fluid rounded-4 d-block d-sm-none"
                />
              </div>
              <div className="col-md-6">
                <div className="text-center pt-lg-0 pt-4">
                  <div className="row justify-content-center">
                    <div className="col">
                      <Link to='/cardiology' className="pg_widget" id="COE_Cardiology">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/cardiology_icon.svg"
                          alt="icon"
                        />
                        <h5 style={{ textDecoration: "none" }}>Cardiology</h5>
                      </Link>
                    </div>

                    <div className="col">
                      <Link to='/gastrology' className="pg_widget" id="COE_Gastroenterology">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/gastroenterology.svg"
                          alt="icon"
                        />
                        <h5 style={{ textDecoration: "none" }}>Gastroenterology</h5>
                      </Link>
                    </div>

                    <div className="col">
                      <Link to='/gynecology' className="pg_widget" id="COE_Gynecology">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/gynecology.svg"
                          alt="icon"
                        />
                        <h5 style={{ textDecoration: "none" }}>Gynecology</h5>
                      </Link>
                    </div>

                    <div className="col">
                      <Link to='/dermatology' className="pg_widget" id="COE_Dermatology">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dermatology.svg"
                          alt="icon"
                        />
                        <h5 style={{ textDecoration: "none" }}>Dermatology</h5>
                      </Link>
                    </div>

                    <div className="col">
                      <Link to='/ophtamology' className="pg_widget" id="COE_Ophthalmology">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ophthalmology.svg"
                          alt="icon"
                        />
                        <h5 style={{ textDecoration: "none" }}>Ophthalmology</h5>
                      </Link>
                    </div>

                    <div className="col">
                      <Link to='/pulmanology' className="pg_widget" id="COE_Pulmonology">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/pulmonology.svg"
                          alt="icon"
                        />
                        <h5 style={{ textDecoration: "none" }}>Pulmonology</h5>
                      </Link>
                    </div>

                    <div className="col">
                      <Link to='/plastic-surgery' className="pg_widget" id="COE_Plasticsurgery">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/plasticsurgery.svg"
                          alt="icon"
                        />
                        <h5 style={{ textDecoration: "none" }}>Plastic surgery</h5>
                      </Link>
                    </div>

                    <div className="col">
                      <Link to='/psychiatry' className="pg_widget" id="COE_Psychiatry">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/psychiatry.svg"
                          alt="icon"
                        />
                        <h5 style={{ textDecoration: "none" }}>Psychiatry</h5>
                      </Link>
                    </div>

                    <div className="col">
                      <Link to='/dentistry' className="pg_widget" id="COE_Dentistry">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dentistry.svg"
                          alt="icon"
                        />
                        <h5 style={{ textDecoration: "none" }}>Dentistry</h5>
                      </Link>
                    </div>

                    <div className="col">
                      <Link to='/ENT' className="pg_widget" id="COE_ENT">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ent.svg"
                          alt="icon"
                        />
                        <h5>ENT (Ear, Nose, Throat)</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="content2" style={{ display: activeTab === "content2" ? "block" : "none", width: "70%", margin: "auto" }}>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <img
                  src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ProHealth.jpg"
                  alt="Get proactive - Be Prohealth !"
                  className="img-fluid rounded-4 d-none d-sm-block"
                />
                <img
                  src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ProHealth-mob.jpg"
                  alt="Get proactive - Be Prohealth !"
                  className="img-fluid rounded-4 d-block d-sm-none"
                />
              </div>
              <div className="col-md-7">
                <h2>Get proactive - Be ProHealth !</h2>
                <p className="sub_hdng pt-1">Build your ProHealth plan now</p>
                <p>
                  ProHealth Program is a unique end-to-end personalized
                  proactive health program that brings together predictive risk
                  analysis, doctor-curated health packages, cutting-edge
                  diagnostics with expert evaluation, and a personalized path to
                  wellness, designed to make positive shifts – making you
                  healthier.
                </p>
                <p>
                  This health program is based on Apollo's pioneering efforts in
                  preventive care for almost 40 years and over 22 million health
                  checks.
                </p>
                <p>
                  Apollo ProHealth program can PREDICT health risks, help
                  PREVENT ailments, and OVERCOME lifestyle diseases where
                  possible.
                </p>
                <p>
                  <a
                    href="https://www.askapollo.com/apollo-prohealth/?utm_source=apollohospitals_sticky_button&utm_medium=owned_media&utm_campaign=pro_health_sticky_button"
                    target="_blank"
                    id="cta-book-prohealth_2"
                    className=""
                    rel="noreferrer"
                  >
                    Book ProHealth
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;

                    {/* <div className="col">
                      <a
                        href="https://www.apollohospitals.com/book-doctor-appointment/pediatrician/?utm_campaign=pediatrician&amp;utm_source=home&amp;utm_medium=specialities"
                        className="pg_widget"
                        id="COE_Pediatrics"
                      >
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/paediatricurology.svg"
                          alt="icon"
                        />
                        <h5 style={{textDecoration: "none"}}>Pediatrics</h5>
                      </a>
                    </div> */}
                    {/* <div className="col">
                      <a
                        href="https://www.apollohospitals.com/book-doctor-appointment/endocrinologist/?utm_campaign=endocrinologist&amp;utm_source=home&amp;utm_medium=specialities"
                        className="pg_widget"
                        id="COE_Endocrinology"
                      >
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/endocrinology.svg"
                          alt="icon"
                        />
                        <h5 style={{textDecoration: "none"}}>Endocrinology</h5>
                      </a>
                    </div> */}
                    {/* <div className="col">
                      <a
                        href="https://www.apollohospitals.com/book-doctor-appointment/urologist/?utm_campaign=urologist&amp;utm_source=home&amp;utm_medium=specialities"
                        className="pg_widget"
                        id="COE_Urology"
                      >
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/urology.svg"
                          alt="icon"
                        />
                        <h5 style={{textDecoration: "none"}}>Urology</h5>
                      </a>
                    </div> */}
                    {/* <div className="col">
                      <a
                        href="https://www.apollohospitals.com/book-doctor-appointment/nephrologist/?utm_campaign=nephrologist&amp;utm_source=home&amp;utm_medium=specialities"
                        className="pg_widget"
                        id="COE_Nephrology"
                      >
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/nephrology.svg"
                          alt="icon"
                        />
                        <h5 style={{textDecoration: "none"}}>Nephrology</h5>
                      </a>
                    </div> */}
                                        {/* <div className="col">
                      <a
                        href="https://www.apollohospitals.com/book-doctor-appointment/neonatologist/?utm_campaign=neonatologist&amp;utm_source=home&amp;utm_medium=specialities"
                        className="pg_widget"
                        id="COE_Neonatology"
                      >
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neonatology.svg"
                          alt="icon"
                        />
                        <h5 style={{textDecoration: "none"}}>Neonatology</h5>
                      </a>
                    </div> */}
                    {/* <div className="col">
                      <a
                        href="https://www.apollohospitals.com/book-doctor-appointment/vascular-surgeon/?utm_campaign=vascular-surgeon&amp;utm_source=home&amp;utm_medium=specialities"
                        className="pg_widget"
                        id="COE_VascularSurgery"
                      >
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/vascularsurgery.svg"
                          alt="icon"
                        />
                        <h5 style={{textDecoration: "none"}}>Vascular Surgery</h5>
                      </a>
                    </div> */}