import React from 'react';

const BuyMedicine = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a href="Home-Page.html">
            <img
              className="ml-2 mt-2"
              height="50px"
              width="50px"
              src="images/doc_logo-removebg-preview.png"
              alt="img not found"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#medicines">
                  Medicines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#babycare">
                  Baby Care
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-nav">
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </nav>

      <section id="home">
        <div id="carouselExampleIndicators" className="carousel slide slideshow" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/slideshow.jpg" alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src="/images/slideshow.jpg" alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src="/images/slideshow.jpg" alt="Image 3" />
            </div>
          </div>
        </div>
      </section>

      <div id="medicines" className="container">
        <div className="medicine-section">
          <h2>Medicines</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="medicine-box">
                <img src="/images/tablet1.jpg" alt="Medicine Image 1" />
                <p className="product-cost">Rs/- 899</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="medicine-box">
                <img src="/images/tablet2.jpg" alt="Medicine Image 2" />
                <p className="product-cost">Rs/- 999</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="medicine-box">
                <img src="/images/tablet3.jpg" alt="Medicine Image 3" />
                <p className="product-cost">Rs/- 399</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="medicine-box">
                <img src="/images/tablet4.jpg" alt="Medicine Image 4" />
                <p className="product-cost">Rs/- 349</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="medicine-box">
                <img src="/images/tablet5.jpg" alt="Medicine Image 5" />
                <p className="product-cost">Rs/- 699</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="medicine-box">
                <img src="/images/tablet9.jpg" alt="Medicine Image 6" />
                <p className="product-cost">Rs/- 599</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="babycare" className="container">
        <div className="babycare-section">
          <h2>Baby Care</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="babycare-box">
                <img src="/images/b-1.jpg" alt="Baby Care Image 1" />
                <p className="product-cost">Rs/- 599</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="babycare-box">
                <img src="/images/b-2.jpg" alt="Baby Care Image 2" />
                <p className="product-cost">Rs/- 999</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="babycare-box">
                <img src="/images/b-3.jpg" alt="Baby Care Image 3" />
                <p className="product-cost">Rs/- 699</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="babycare-box">
                <img src="/images/b-4.jpg" alt="Baby Care Image 4" />
                <p className="product-cost">Rs/- 999</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="babycare-box">
                <img src="/images/b-5.jpg" alt="Baby Care Image 5" />
                <p className="product-cost">Rs/- 349</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="babycare-box">
                <img src="/images/b-6.jpg" alt="Baby Care Image 6" />
                <p className="product-cost">Rs/- 299</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="container">
        <h2>About</h2>
        <img src="/images/about-medicine.png" alt="About Image" />
        <p>
          Medico Hospitals is always looking to make things easier for you. Our aim is to provide our customers with the best medical facilities, constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, would like some specific information about the services we provide, or just have a question for us, please fill up the Form given below and we will get back to you.
        </p>
      </div>

      <footer className="footer">
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BuyMedicine;
