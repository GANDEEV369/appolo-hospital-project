// import React, { useState } from "react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
// } from "reactstrap";

// import Askapollo from "./images/Askapollo.jpg";
// import pcrnewah from "./images/pcr_newah.jpg";
// import CardiacBanner from "./images/CardiacBanner.jpg";

// const items = [
//   {
//     src: pcrnewah,
//     altText: "The Apollo WorldCare Of",
//     caption:
//       "The Apollo WorldCare Of Our team of over 11000 doctors join me in giving you the best of modern healthcare to ensure you stay healthy, always.",
//     key: 1,
//     buttonLink:
//       "https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic",
//     buttonText: "Book an Appointment",
//   },
//   {
//     src: Askapollo,
//     altText: "Banner Pro Health",
//     key: 2,
//   },
//   {
//     src: CardiacBanner,
//     altText: "HomePage Cardiac Banner",
//     key: 3,
//   },
// ];

// const MyCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => (
//     <CarouselItem
//       onExiting={() => setAnimating(true)}
//       onExited={() => setAnimating(false)}
//       key={item.key}
//     >
//       <div style={{ marginTop: "84px" }}>
//         <div
//           id={`carouselItem${item.key}`}
//           className="carousel slide"
//           data-ride="carousel"
//           style={{ border: "2px solid blueviolet", marginTop: "0" }}
//         >
//           <div className="carousel-inner">
//             <div className="carousel-item active" data-interval="10000">
//               <img src={item.src} className="d-block w-100" alt="..." />
//               {item.key === 1 && (
//                 <div className="carousel-caption customtext">
//                   <div className="row" style={{ height: "auto" }}>
//                     <div className="col-sm-6 col-xxl-6"></div>
//                     <div className="col-sm-4 col-lg-4 bannerright" >
//                       <h1 className="d-none d-sm-block">
//                         The Apollo World Of Care
//                       </h1>
//                       <p className="dp-col-4">
//                         Our team of over 11000 doctors join me in giving you
//                         the best of modern healthcare to ensure you stay
//                         healthy, always.
//                       </p>
//                       <div className="d-flex justify-content-start">
//                         <a
//                           className="btn btn-outline-primary homebtn"
//                           id={`ApolloWorldOfCare${item.key}`}
//                           href={item.buttonLink}
//                           alt=""
//                           target="_blank"
//                         >
//                           {item.buttonText}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </CarouselItem>
//   ));

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       interval={10000}
//       className="carousel slide"
//       data-ride="carousel"
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// };

// export default MyCarousel;

// import React, { useState, useRef } from "react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
// } from "reactstrap";

// import Askapollo from "./images/Askapollo.jpg";
// import pcrnewah from "./images/pcr_newah.jpg";
// import CardiacBanner from "./images/CardiacBanner.jpg";

// const items = [
//   {
//     src: pcrnewah,
//     altText: "The Apollo WorldCare Of",
//     caption:
//       "The Apollo WorldCare Of Our team of over 11000 doctors join me in giving you the best of modern healthcare to ensure you stay healthy, always.",
//     key: 1,
//     buttonLink:
//       "https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic",
//     buttonText: "Book an Appointment",
//   },
//   {
//     src: Askapollo,
//     altText: "Banner Pro Health",
//     key: 2,
//   },
//   {
//     src: CardiacBanner,
//     altText: "HomePage Cardiac Banner",
//     key: 3,
//   },
// ];

// const MyCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const carouselRef = useRef(null);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => (
//     <CarouselItem
//       onExiting={() => setAnimating(true)}
//       onExited={() => setAnimating(false)}
//       key={item.key}
//     >
//       <div style={{ marginTop: "84px" }}>
//         <div
//           id={`carouselItem${item.key}`}
//           className="carousel slide"
//           data-ride="carousel"
//           style={{ border: "2px solid blueviolet", marginTop: "0" }}
//         >
//           <div className="carousel-inner">
//             <div className="carousel-item active" data-interval="10000">
//               <img src={item.src} className="d-block w-100" alt="..." />
//               {item.key === 1 && (
//                 <div className="carousel-caption customtext">
//                   <div className="row" style={{ height: "auto" }}>
//                     <div className="col-sm-6 col-xxl-6"></div>
//                     <div
//                       className="col-sm-4 col-lg-4 bannerright"
//                       ref={carouselRef}
//                     >
//                       <h1 className="d-none d-sm-block">
//                         The Apollo World Of Care
//                       </h1>
//                       <p className="dp-col-4">
//                         Our team of over 11000 doctors join me in giving you the
//                         best of modern healthcare to ensure you stay healthy,
//                         always.
//                       </p>
//                       <div className="d-flex justify-content-start">
//                         <a
//                           className="btn btn-outline-primary homebtn"
//                           id={`ApolloWorldOfCare${item.key}`}
//                           href={item.buttonLink}
//                           alt=""
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           {item.buttonText}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </CarouselItem>
//   ));

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       interval={10000}
//       className="carousel slide"
//       data-ride="carousel"
//       innerRef={carouselRef}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// };

// export default MyCarousel;

// import React, { useState, useRef } from "react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
// } from "reactstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Askapollo from "./images/Askapollo.jpg";
// import pcrnewah from "./images/pcr_newah.jpg";
// import CardiacBanner from "./images/CardiacBanner.jpg";

// const items = [
//   {
//     src: pcrnewah,
//     altText: "The Apollo WorldCare Of",
//     caption:
//       "The Apollo WorldCare Of Our team of over 11000 doctors join me in giving you the best of modern healthcare to ensure you stay healthy, always.",
//     key: 1,
//     buttonLink:
//       "https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic",
//     buttonText: "Book an Appointment",
//   },
//   {
//     src: Askapollo,
//     altText: "Banner Pro Health",
//     key: 2,
//   },
//   {
//     src: CardiacBanner,
//     altText: "HomePage Cardiac Banner",
//     key: 3,
//   },
// ];

// const MyCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const carouselRef = useRef(null);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => (
//     <CarouselItem
//       onExiting={() => setAnimating(true)}
//       onExited={() => setAnimating(false)}
//       key={item.key}
//     >
//       <div style={{ marginTop: "84px" }}>
//         <div
//           id={`carouselItem${item.key}`}
//           className="carousel slide"
//           data-ride="carousel"
//           style={{ border: "2px solid blueviolet", marginTop: "0" }}
//         >
//           <div className="carousel-inner">
//             <div className="carousel-item active" data-interval="10000">
//               <img src={item.src} className="d-block w-100" alt="..." />
//               {item.key === 1 && (
//                 <div className="carousel-caption customtext">
//                   <div className="row" style={{ height: "auto" }}>
//                     <div className="col-sm-8 col-xxl-8"></div>
//                     <div
//                       className="col-sm-4 col-lg-4 bannerright"
//                       ref={carouselRef}
//                     >
//                       <h1 className="d-none d-sm-block">
//                         The Apollo World Of Care
//                       </h1>
//                       <p className="dp-col-4">
//                         Our team of over 11000 doctors join me in giving you the
//                         best of modern healthcare to ensure you stay healthy,
//                         always.
//                       </p>
//                       <div className="d-flex justify-content-start">
//                         <a
//                           className="btn btn-outline-primary homebtn"
//                           id={`ApolloWorldOfCare${item.key}`}
//                           href={item.buttonLink}
//                           alt=""
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           {item.buttonText}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </CarouselItem>
//   ));

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       interval={10000}
//       className="carousel slide"
//       data-ride="carousel"
//       innerref={carouselRef}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// };

// export default MyCarousel;

import React, { useState, useRef } from "react";//actualactual carousel code
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import Askapollo from "./images/Askapollo.jpg";
import pcrnewah from "./images/pcr_newah.jpg";
import CardiacBanner from "./images/CardiacBanner.jpg";
import { Link } from "react-router-dom";
const items = [
  {
    src: pcrnewah,
    altText: "The Apollo WorldCare Of",
    caption:
      "The Apollo WorldCare Of Our team of over 11000 doctors join me in giving you the best of modern healthcare to ensure you stay healthy, always.",
    key: 1,
    buttonLink:
      "https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic",
    buttonText: "Book an Appointment",
  },
  {
    src: Askapollo,
    altText: "Banner Pro Health",
    key: 2,
  },
  {
    src: CardiacBanner,
    altText: "HomePage Cardiac Banner",
    key: 3,
  },
];

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const carouselRef = useRef(null);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.key}
    >
      <div style={{ marginTop: "84px" }}>
        <div
          id={`carouselItem${item.key}`}
          className="carousel slide"
          data-ride="carousel"
          // style={{ border: "2px solid blueviolet", marginTop: "0" }}
          style={{  marginTop: "0" }}
        > 
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <img src={item.src} className="d-block w-100" alt="..." />
              {item.key === 1 && (
                <div className="carousel-caption customtext">
                  <div className="row" style={{ height: "auto" }}>
                    <div className="col-sm-6 col-xxl-6"></div>
                    <div
                      className="col-sm-4 col-lg-4 bannerright"
                      ref={carouselRef}
                    >
                      <h1 className="d-none d-sm-block">
                        The Apollo World Of Care
                      </h1>
                      <p className="dp-col-4">
                        Our team of over 11000 doctors join me in giving you the
                        best of modern healthcare to ensure you stay healthy,
                        always.
                      </p>
                      <div className="d-flex justify-content-start">
                        <Link to="/book-appointment"
                          className="btn btn-outline-primary homebtn"
                          id={`ApolloWorldOfCare${item.key}`}
                          // href={item.buttonLink}
                          alt=""
                          // target="_blank"
                          // rel="noreferrer"
                        >
                          {item.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={10000}
      className="carousel slide"
      data-ride="carousel"
      ref={carouselRef}
      style={{
        /* Add your styles here */
        textAlign: "center",
        position: "relative",
        // border: "2px solid blueviolet",
        marginTop: "0",
      }}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default MyCarousel;
// import React, { useState, useRef } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
// } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Askapollo from './images/Askapollo.jpg';
// import pcrnewah from './images/pcr_newah.jpg';
// import CardiacBanner from './images/CardiacBanner.jpg';
// import { Link } from 'react-router-dom';

// const items = [
//   // Your carousel items here...
//   {
//     src: pcrnewah,
//     altText: "The Apollo WorldCare Of",
//     caption:
//       "The Apollo WorldCare Of Our team of over 11000 doctors join me in giving you the best of modern healthcare to ensure you stay healthy, always.",
//     key: 1,
//     buttonLink:
//       "https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&utm_source=Apollo_Hospitals&utm_medium=Organic",
//     buttonText: "Book an Appointment",
//   },
//   {
//     src: Askapollo,
//     altText: "Banner Pro Health",
//     key: 2,
//   },
//   {
//     src: CardiacBanner,
//     altText: "HomePage Cardiac Banner",
//     key: 3,
//   },
// ];

// const MyCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const carouselRef = useRef(null);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => (
//     <CarouselItem
//       onExiting={() => setAnimating(true)}
//       onExited={() => setAnimating(false)}
//       key={item.key}
//     >
//       <div>
//         {/* Your carousel item content here... */}
//         <div style={{ marginTop: "84px" }}>
//         <div
//           id={`carouselItem${item.key}`}
//           className="carousel slide"
//           data-ride="carousel"
//           // style={{ border: "2px solid blueviolet", marginTop: "0" }}
//           style={{  marginTop: "0" }}
//         > 
//           <div className="carousel-inner">
//             <div className="carousel-item active" data-interval="10000">
//               <img src={item.src} className="d-block w-100" alt="..." />
//               {item.key === 1 && (
//                 <div className="carousel-caption customtext">
//                   <div className="row" style={{ height: "auto" }}>
//                     <div className="col-sm-6 col-xxl-6"></div>
//                     <div
//                       className="col-sm-4 col-lg-4 bannerright"
//                       ref={carouselRef}
//                     >
//                       <h1 className="d-none d-sm-block">
//                         The Apollo World Of Care
//                       </h1>
//                       <p className="dp-col-4">
//                         Our team of over 11000 doctors join me in giving you the
//                         best of modern healthcare to ensure you stay healthy,
//                         always.
//                       </p>
//                       <div className="d-flex justify-content-start">
//                         <Link to="/book-appointment"
//                           className="btn btn-outline-primary homebtn"
//                           id={`ApolloWorldOfCare${item.key}`}
//                           // href={item.buttonLink}
//                           alt=""
//                           // target="_blank"
//                           // rel="noreferrer"
//                         >
//                           {item.buttonText}
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </CarouselItem>
//   ));

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       interval={10000}
//       innerRef={carouselRef} // Use innerRef to set the ref for the Carousel
//       style={{
//         textAlign: 'center',
//         position: 'relative',
//         marginTop: '0',
//       }}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// };

// export default MyCarousel;
