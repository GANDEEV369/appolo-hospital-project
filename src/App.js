
import './App.css';
import Head from './components/Head';
import { Button, Input,CardFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Head/>
      <body>
    <header style={{position: 'fixed', zIndex: '10', height: 'auto', width: '100%', left: '0',right: '0',top: '0'}}>
      <div className="container1"
        style="display: flex; height: 25px; background-color: rgb(174, 48, 174); justify-content: space-between;text-align: center; ">
        <p className="header1 ml-5" style={{justifyContent: 'center', textAlign: 'center'}}>
          <i className="fa-brands fa-facebook"></i>|
          <i className="fa-brands fa-instagram"></i>|
          <i className="fa-brands fa-twitter"></i>|
          <i className="fa-brands fa-youtube"> </i>
        </p>
        <p className="header2 mr-5" style={{justifyContent: 'center', textAlign: 'center', paddingRight: '20px' }}>
          <i>Privacy Policy</i>|
          <i>Disclaimer</i>|
          <i>Contact</i>
        </p>
      </div>
      <div>
        <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
          <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classNameName="navbar-nav mr-auto">
              <li classNameName="nav-item dropdown">
                <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Centers of Excellence
                </a>
                <div classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a classNameName="dropdown-item" href="#">Action</a>
                  <a classNameName="dropdown-item" href="#">Another action</a>
                  <div classNameName="dropdown-divider"></div>
                  <a classNameName="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li classNameName="nav-item dropdown">
                <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Health Information
                </a>
                <div classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a classNameName="dropdown-item" href="#">Action</a>
                  <a classNameName="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  International Patient
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Hospitals
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
            </form>
          </div>
        </nav>
      </div>
    </header>
    <div style={{marginTop: '84px'}}>
      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel"
        style={{border: '2px solid blueviolet', marginTop:'0' }}>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="10000">
            <img src="images/pcr_newah.jpg" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption customtext">
              <div className="row" style={{height: auto}}>
                <div className=" col-sm-8 col-xxl-8"></div>
                <div className="col-sm-4 col-lg-4 bannerright">
                  <h1 className="d-none d-sm-block">The Apollo World Of Care</h1>
                  <p className="dp-col-4">Our team of over 11000 doctors join me in giving you the best of modern healthcare
                    to
                    ensure you stay healthy, always.</p>
                  <div className="d-flex justify-content-start">
                    <a className="btn btn-outline-primary homebtn" id="ApolloWorldOfCare"
                      href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&amp;utm_source=Apollo_Hospitals&amp;utm_medium=Organic"
                      alt="" target="_blank">Book an Appointment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-interval="2000" style={{border: '2px solid blueviolet'}}>
            <a href="https://www.askapollo.com/book-health-check?utm_source=websitebanner&amp;utm_medium=digital&amp;utm_campaign=mothers-day-health-check-apollohospitals"
              id="BannerProHealth" target="_blank">
              <img src="images/Askapollo-RB-WebBanner-64ee28a99f190.jpg" className="d-block w-100" alt="..."></img>
            </a>
          </div>
          <div className="carousel-item" style={{border: '2px solid blueviolet'}}>
            <a href="https://www.apollohospitals.com/book-doctor-appointment/cardiologist/?utm_campaign=cardiologist&amp;utm_source=home_banner&amp;utm_medium=digital"
              id="HomePage-Cardiac-Banner" target="_blank">
              <img src="images/Cardiac-Banner_Desk-1.jpg" className="d-block w-100" alt="..."></img>
            </a>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container3 col-md-12"
        style={{display: 'flex',  width: '100%', marginTop:'30px',textAlign:'center',justifyContent:'space-around'}}>
        <div className="row row-col-sm-3 row-col-md-3 row-col-lg-12"
          style={{ display:'flex', flexDirection:'row', width:'90%',textAlign: 'center', justifyContent:'space-around'}}>
          <div className="smallbox row-col-1" id="box1" style="width: 70px;">
            <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
              alt="" style="padding: 10px;">
              <img src="images/bookappt_icon.svg" alt="icon" height="60px" width="60px"></img>
              <h6>Book Appointment</h6>
            </a>
          </div>  
          <div className="smallbox row-col-1" id="box2" style="width: 200px;">
            <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
              alt="" style="height: 100px; width: 100px;">
              <img src="images/bookhelathcheck_icon.svg" alt="icon" height="60px" width="60px"></img>
              <h6>Book Health Check-up</h6>
            </a>
          </div>
          <div className="smallbox row-col-1" id="box3" style="width: 200px;">
            <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
              alt="" style="height: 100px; width: 100px;">
              <img src="images/consultonline_icon.svg" alt="icon" height="60px" width="60px"></img>
              <h6>Consult Online</h6>
            </a>
          </div>
          <div className="smallbox row-col-1" id="box4" style="width: 200px; ">
            <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
              alt="" style="height: 100px; width: 100px;">
              <img src="images/buymedicines_icon.svg" alt="icon" height="60px" width="60px"></img>
              <h6>Buy Medicine</h6>
            </a>
          </div>
          <div className="smallbox row-col-1" id="box5" style="width: 200px;">
            <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
              alt="" style="height: 100px; width: 100px;">
              <img src="images/findhsptl_icon.svg" alt="icon" height="60px" width="60px"></img>
              <h6>Find Hospital</h6>
            </a>
          </div>
          <div className="smallbox row-col-1" id="box6" style="width: 200px; ">
            <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
              alt="" style="height: 100px; width: 100px;">
              <img src="images/finddoctor_icon.svg" alt="icon" height="60px" width="60px"></img>
              <h6>View Health Record</h6>
            </a>
          </div>
        </div>  
      </div>
      <section>
        <div className="menu" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div className="container4 row mt-3"
            style={{ display: 'flex', width: '70%', textAlign: 'center', justifyContent: 'center', backgroundColor: 'lightblue', borderRadius: '5px' }}>
            <div className="buttons">
              <Button className="buttonscroll" id="button2" onClick="showContent('content1')"><a
                  className="text-primary">Specialities</a></Button>
              <Button className="buttonscroll" id="button1" onClick="showContent('content2')" href><a className="text-primary">Pro
                  Health</a></Button>
            </div>
          </div>
        </div>
        <div className="conatiner6" style={{width: '100%', justifyContent: 'center', textAlign: 'center'}}>
          <div className="tab-content py-sm-5 py-3" style={{width: '100%', justifyContent: 'center', textAlign: 'center'}}>
            <div className="tab-pane" id="content1" style={{ width:'70%',margin: auto}} role="tabpanel"
              aria-labelledby="Procedures-tab" tabindex="0">
              <div className="row justify-content-center text-center">
                <div className="col-md-12">
                  <h2>Explore our Centres of Clinical Excellence </h2>
                  <p className="sub_hdng pt-1">Learn about the world className health care we provide </p>
                </div>
                <div className="col-md-5">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah.webp"
                    alt="Advised a procedure or surgery?" className="img-fluid rounded-4 d-none d-sm-block" >
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah_m.webp"
                    alt="Advised a procedure or surgery?" className="img-fluid rounded-4 d-block d-sm-none">
                </div>
                
                <div className="col-md-6">
                  <div className="text-center pt-lg-0 pt-4">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <div className="row row-col-3 row-col-lg-5 g-2 g-lg-4">
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/cardiologist/?utm_campaign=cardiologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Cardiology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/cardiology_icon.svg"
                                alt="icon"></img>
                              <h5>Cardiology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/neurologist/?utm_campaign=neurologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Neurology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neurology.svg"
                                alt="icon"></img>
                              <h5>Neurology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/gastroenterologist/?utm_campaign=gastroenterologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Gastroenterology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/gastroenterology.svg"
                                alt="icon"></img>
                              <h5>Gastroenterology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/orthopedician/?utm_campaign=orthopedician&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Orthopaedic">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/orthopaedic.svg"
                                alt="icon"></img>
                              <h5>Orthopaedic</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/oncologist/?utm_campaign=oncologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Oncology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/oncology_icon.svg"
                                alt="icon"></img>
                              <h5>Oncology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/gynecologist/?utm_campaign=gynecologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Gynecology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/gynecology.svg"
                                alt="icon"></img>
                              <h5>Gynecology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/dermatologist/?utm_campaign=dermatologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Dermatology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dermatology.svg"
                                alt="icon"></img>
                              <h5>Dermatology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/opthalmologist/?utm_campaign=opthalmologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Ophthalmology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ophthalmology.svg"
                                alt="icon"></img>
                              <h5>Ophthalmology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/pediatrician/?utm_campaign=pediatrician&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Pediatrics">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/paediatricurology.svg"
                                alt="icon"></img>
                              <h5>Pediatrics</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/endocrinologist/?utm_campaign=endocrinologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Endocrinology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/endocrinology.svg"
                                alt="icon"></img>
                              <h5>Endocrinology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/urologist/?utm_campaign=urologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Urology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/urology.svg"
                                alt="icon"></img>
                              <h5>Urology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/nephrologist/?utm_campaign=nephrologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Nephrology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/nephrology.svg"
                                alt="icon"></img>
                              <h5>Nephrology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/pulmonologist/?utm_campaign=pulmonologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Pulmonology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/pulmonology.svg"
                                alt="icon"></img>
                              <h5>Pulmonology</h5>
                            </a>
                          </div>
  
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/rheumatologist/?utm_campaign=rheumatologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Rheumatology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/rheumatology.svg"
                                alt="icon"></img>
                              <h5>Rheumatology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/neurosurgeon/?utm_campaign=neurosurgeon&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Neurosurgery">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neurology.svg"
                                alt="icon"></img>
                              <h5>Neurosurgery</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/radiologist/?utm_campaign=radiologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Radiology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/radiology.svg"
                                alt="icon"></img>
                              <h5>Radiology</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/plastic-surgeon/?utm_campaign=plastic-surgeon&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Plasticsurgery">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/plasticsurgery.svg"
                                alt="icon"></img>
                              <h5>Plastic surgery</h5>
                            </a>
                          </div>
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/neonatologist/?utm_campaign=neonatologist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Neonatology">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neonatology.svg"
                                alt="icon"></img>
                              <h5>Neonatology</h5>
                            </a>
                          </div>  
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/vascular-surgeon/?utm_campaign=vascular-surgeon&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_VascularSurgery">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/vascularsurgery.svg"
                                alt="icon"></img>
                              <h5>Vascular Surgery</h5>
                            </a>
                          </div>  
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/psychiatrist/?utm_campaign=psychiatrist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Psychiatry">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/psychiatry.svg"
                                alt="icon"></img>
                              <h5>Psychiatry</h5>
                            </a>
                          </div>  
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/dentist/?utm_campaign=dentist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_Dentistry">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dentistry.svg"
                                alt="icon"></img>
                              <h5>Dentistry</h5>
                            </a>
                          </div> 
                          <div className="col">
                            <a href="https://www.apollohospitals.com/book-doctor-appointment/ent-specialist/?utm_campaign=ent-specialist&amp;utm_source=home&amp;utm_medium=specialities"
                              className="pg_widget" id="COE_ENT">
                              <img
                                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ent.svg"
                                alt="icon"></img>
                              <h5>ENT (Ear, Nose, Throat)</h5>
                            </a>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
            <div className="tab-pane active show" id="content2" style={{display:'flex' width:'70%',margin: 'auto'}} role="tabpanel"
              aria-labelledby="ProHealth-tab" tabindex="0">  
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ProHealth.jpg"
                    alt="Get proactive - Be Prohealth !" className="img-fluid rounded-4 d-none d-sm-block">
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ProHealth-mob.jpg"
                    alt="Get proactive - Be Prohealth !" className="img-fluid rounded-4 d-block d-sm-none">
                </div>
                <div className="col-md-7"> 
                  <h2>Get proactive - Be ProHealth !</h2>
                  <p className="sub_hdng pt-1">Build your ProHealth plan now </p>
                  <p>ProHealth Program is a unique end-to-end personalized proactive health program that brings together
                    predictive risk analysis, doctor-curated health packages, cutting-edge diagnostics with expert
                    evaluation, and a personalized path to wellness, designed to make positive shifts – making you
                    healthier. </p>  
                  <p>This health program is based on Apollo's pioneering efforts in preventive care for almost 40 years
                    and over 22 million health checks. </p> 
                  <p>Apollo ProHealth program can PREDICT health risks, help PREVENT ailments, and OVERCOME lifestyle
                    diseases where possible.</p>
                  <p></p>
                  <p><a
                      href="https://www.askapollo.com/apollo-prohealth/?utm_source=apollohospitals_sticky_button&amp;utm_medium=owned_media&amp;utm_campaign=pro_health_sticky_button"
                      target="_blank" id="cta-book-prohealth_2" className="">Book ProHealth</a></p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>
      {/* Footer start  */}
      <div style={{ backgroundColor: '#007c9d' }}>
        <h2 style={{textAlign: 'center', color: 'white', justifyContent: 'center'}}>What would you like to do today ?</h2>
        <div className="container3 col-md-12"
          style={{display: 'flex',  width: '100%', marginTop:'30px',textAlign:'center',justifyContent:'space-around'}}>
          <div className="row row-col-sm-3 row-col-md-3 row-col-lg-12"
            style={{ display:'flex', flexDirection:'row', width:'90%',textAlign: 'center', justifyContent:'spaceAround'}}>
  
            <div className="smallbox row-col-1" id="box1" style={{width: '70px'}}>
              <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
                alt="" style={{padding: '10px'}}>
                <img src="images/bookappt_icon.svg" alt="icon" height="60px" width="60px"></img>
                <h6>Book Appointment</h6>
              </a>
            </div>
  
            <div className="smallbox row-col-1" id="box2" style={{width: '200px'}}>
  
              <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
                alt="" style={{height: '100px' ,width: '100px'}}>
                <img src="images/bookhelathcheck_icon.svg" alt="icon" height="60px" width="60px"></img>
                <h6>Book Health Check-up</h6>
              </a>
            </div>
            <div className="smallbox row-col-1" id="box3" style={{width: '200px'}}>
              <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
                alt="" style={{height: '100px', width: '100px'}}>
                <img src="images/consultonline_icon.svg" alt="icon" height="60px" width="60px"></img>
                <h6>Consult Online</h6>
              </a>
            </div>
            <div className="smallbox row-col-1" id="box4" style={{width: '200px' }}>
              <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
                alt="" style={{height: '100px', width: '100px'}}>
                <img src="images/buymedicines_icon.svg" alt="icon" height="60px" width="60px"></img>
                <h6>Buy Medicine</h6>
              </a>
            </div>
            <div className="smallbox row-col-1" id="box5" style={{width: '200px'}}>
              <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
                alt="" style={{height: '100px' ,width: '100px'}}>
                <img src="images/findhsptl_icon.svg" alt="icon" height="60px" width="60px"></img>
                <h6>Find Hospital</h6>
              </a>
            </div>
            <div className="smallbox row-col-1" id="box6" style={{width: '200px' }}>
              <a href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic"
                alt="" style={{height: '100px', width: '100px'}}>
                <img src="images/finddoctor_icon.svg" alt="icon" height="60px" width="60px"></img>
                <h6>View Health Record</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="container md-5">
          <div className="card md-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="images/me (3).jpg" className="card-img img-fluid rounded-4 d-none d-sm-block" alt="Main Page Developer"></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Main Page Developer</h5>
                  <p className="card-text">I have created the main page which provides different services. By clicking the buttons, we can redirect to the webpage required by the user.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container8"> 
        </div>
    </div>
    </div>
    {/* Footer end  */}
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
      integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
      crossorigin="anonymous"></script>
    <script>
      function showContent(id) {
        document.querySelectorAll('.tab-pane').forEach(function (el) {
          el.style.display = 'none';
        });
        document.getElementById(id).style.display = 'flex';
      }
    </script>
  </body>
    </div>
  );
}

export default App;
