// import React, { Component } from 'react';

// class FindHospital extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeBranch: 'all',
//     };
//   }

//   showBranch = (branchId) => {
//     this.setState({ activeBranch: branchId });
//   }

//   render() {
//     const { activeBranch } = this.state;

//     const branches = [
//       {
//         id: 'hyderabad',
//         imageSrc: '..components/images/apollo-hyderabad-1.jpg',
//         name: 'Hyderabad',
//         address: 'Film Nagar, Jubilee Hills, Hyderabad, Telangana State, India.',
//         phone: 'Toll No: 1860 500 1066',
//         callCenter: 'Call Centre(24X7): +91-40-2360 7777 / 5555',
//       },
//       {
//         id: 'bangalore',
//         imageSrc: 'images/bangalore.jpg',
//         name: 'Bangalore',
//         address: '154 / 11, Bannerghatta Road Opp. I.I.M Bangalore - 560 076',
//         phone: 'Call Centre(24X7): +(91)-80-2630 4050',
//         callCenter: 'Call Centre(24X7): +(91)-80-2630 4050',
//       },
//       {
//         id: 'delhi',
//         imageSrc: 'images/delhi.jpg',
//         name: 'Delhi',
//         address: 'Sarita Vihar Delhi Mathura Road, New Delhi - 110076, India',
//         phone: 'Call Centre(24X7): +91-11-71791090 / 1091',
//         callCenter: 'Call Centre(24X7): +91-11-71791090 / 1091',
//       },
//       {
//         id: 'chennai',
//         imageSrc: 'images/chennai.jpg',
//         name: 'Chennai',
//         address: '21, Greams Lane, Off Greams Road Chennai, 600006',
//         phone: 'Call Centre(24X7): +91-44-40401066',
//         callCenter: 'Call Centre(24X7): +91-44-40401066',
//       },
//       {
//         id: 'mumbai',
//         imageSrc: 'images/mumbai.jpg',
//         name: 'Mumbai',
//         address: 'Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai; 400 614',
//         phone: 'Call Centre(24X7): +(91)-22 3350 3350',
//         callCenter: 'Call Centre(24X7): +(91)-22 3350 3350',
//       },
//       {
//         id: 'kolkata',
//         imageSrc: 'images/kolkata.jpg',
//         name: 'Kolkata',
//         address: '58, Canal Circular Road Kolkata: 700 054',
//         phone: 'Call Centre(24X7): +91-33-2320 3040 / 2122',
//         callCenter: 'Call Centre(24X7): +91-33-2320 3040 / 2122',
//       },
//     ];

//     return (
//       <div>
//         <header style={{ background: 'lightseagreen', padding: '10px', textAlign: 'center' }}>
//           <div className="logo">
//             <a href="Home-Page.html"><img className="ml-2 mt-2" height="100px" width="80px" src="images/doc_logo-removebg-preview.png" alt="img not found" /></a>
//           </div>
//           <div className="header-text">
//             <h1>Welcome to our Hospital Website! Find information about hospitals in different cities in India.</h1>
//           </div>
//         </header>

//         <main style={{ margin: '20px', display: 'flex', justifyContent: 'space-between' }}>
//           <ul className="hospital-list" style={{ listStyle: 'none', padding: '10px', width: '30%', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
//             {branches.map((branch) => (
//               <li key={branch.id} className="hospital-item" onClick={() => this.showBranch(branch.id)} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
//                 <h3>{branch.name}</h3>
//               </li>
//             ))}
//           </ul>

//           <div className="branch-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '20px', width: '65%' }}>
//             {branches.map((branch) => (
//               activeBranch === 'all' || activeBranch === branch.id ? (
//                 <div key={branch.id} className="branch-card" id={branch.id} onClick={() => this.showBranch(branch.id)} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
//                   <img src={branch.imageSrc} alt={branch.name} style={{ maxWidth: '100%', borderRadius: '5px', height: '200px', objectFit: 'cover', marginBottom: '10px' }} />
//                   <h3>{branch.name}</h3>
//                   <p>{branch.address}</p>
//                   <p>{branch.phone}</p>
//                   <p>{branch.callCenter}</p>
//                   <a href="bookapointment.html"><button className="btn">BOOK  APPOINTMENT</button></a>
//                 </div>
//               ) : null
//             ))}
//           </div>
//         </main>
//       </div>
//     );
//   }
// }

// export default FindHospital;
// import React, { Component } from 'react';

// import hyderabadImage from '../components/images/apollo-hyderabad-1.jpg';
// import bangaloreImage from '../components/images/bangalore.jpg';
// import delhiImage from '../components/images/delhi.jpg';
// import chennaiImage from '../components/images/chennai.jpg';
// import mumbaiImage from '../components/images/mumbai.jpg';
// import kolkataImage from '../components/images/kolkata.jpg';
// import bg from'../components/images/doc_logo-removebg-preview.png';
// class FindHospital extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeBranch: 'all',
//     };
//   }

//   showBranch = (branchId) => {
//     this.setState({ activeBranch: branchId });
//   }

//   render() {
//     const { activeBranch } = this.state;

//     const branches = [
//       {
//         id: 'hyderabad',
//         imageSrc: hyderabadImage,
//         name: 'Hyderabad',
//         address: 'Film Nagar, Jubilee Hills, Hyderabad, Telangana State, India.',
//         phone: 'Toll No: 1860 500 1066',
//         callCenter: 'Call Centre(24X7): +91-40-2360 7777 / 5555',
//       },
//       {
//         id: 'bangalore',
//         imageSrc: bangaloreImage,
//         name: 'Bangalore',
//         address: '154 / 11, Bannerghatta Road Opp. I.I.M Bangalore - 560 076',
//         phone: 'Call Centre(24X7): +(91)-80-2630 4050',
//         callCenter: 'Call Centre(24X7): +(91)-80-2630 4050',
//       },
//       {
//         id: 'delhi',
//         imageSrc: delhiImage,
//         name: 'Delhi',
//         address: 'Sarita Vihar Delhi Mathura Road, New Delhi - 110076, India',
//         phone: 'Call Centre(24X7): +91-11-71791090 / 1091',
//         callCenter: 'Call Centre(24X7): +91-11-71791090 / 1091',
//       },
//       {
//         id: 'chennai',
//         imageSrc: chennaiImage,
//         name: 'Chennai',
//         address: '21, Greams Lane, Off Greams Road Chennai, 600006',
//         phone: 'Call Centre(24X7): +91-44-40401066',
//         callCenter: 'Call Centre(24X7): +91-44-40401066',
//       },
//       {
//         id: 'mumbai',
//         imageSrc: mumbaiImage,
//         name: 'Mumbai',
//         address: 'Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai; 400 614',
//         phone: 'Call Centre(24X7): +(91)-22 3350 3350',
//         callCenter: 'Call Centre(24X7): +(91)-22 3350 3350',
//       },
//       {
//         id: 'kolkata',
//         imageSrc: kolkataImage,
//         name: 'Kolkata',
//         address: '58, Canal Circular Road Kolkata: 700 054',
//         phone: 'Call Centre(24X7): +91-33-2320 3040 / 2122',
//         callCenter: 'Call Centre(24X7): +91-33-2320 3040 / 2122',
//       },
//     ];

//     return (
//       <div>
//         <header style={{ background: 'lightseagreen', padding: '10px', textAlign: 'center' }}>
//           <div className="logo">
//             <a href="Home-Page.html"><img className="ml-2 mt-2" height="100px" width="80px" src= {bg} alt="img not found" /></a>
//           </div>
//           <div className="header-text">
//             <h1>Welcome to our Hospital Website! Find information about hospitals in different cities in India.</h1>
//           </div>
//         </header>

//         <main style={{ margin: '20px', display: 'flex', justifyContent: 'space-between' }}>
//           <ul className="hospital-list" style={{ listStyle: 'none', padding: '10px', width: '30%', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
//             {branches.map((branch) => (
//               <li key={branch.id} className="hospital-item" onClick={() => this.showBranch(branch.id)} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
//                 <h3>{branch.name}</h3>
//               </li>
//             ))}
//           </ul>

//           <div className="branch-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '20px', width: '65%' }}>
//             {branches.map((branch) => (
//               activeBranch === 'all' || activeBranch === branch.id ? (
//                 <div key={branch.id} className="branch-card" id={branch.id} onClick={() => this.showBranch(branch.id)} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
//                   <img src={branch.imageSrc} alt={branch.name} style={{ maxWidth: '100%', borderRadius: '5px', height: '200px', objectFit: 'cover', marginBottom: '10px' }} />
//                   <h3>{branch.name}</h3>
//                   <p>{branch.address}</p>
//                   <p>{branch.phone}</p>
//                   <p>{branch.callCenter}</p>
//                   <a href="bookapointment.html"><button className="btn">BOOK  APPOINTMENT</button></a>
//                 </div>
//               ) : null
//             ))}
//           </div>
//         </main>
//       </div>
//     );
//   }
// }

// export default FindHospital;
// import React, { Component } from "react";
// import hyderabadImage from "../components/images/apollo-hyderabad-1.jpg";
// import bangaloreImage from "../components/images/bangalore.jpg";
// import delhiImage from "../components/images/delhi.jpg";
// import chennaiImage from "../components/images/chennai.jpg";
// import mumbaiImage from "../components/images/mumbai.jpg";
// import kolkataImage from "../components/images/kolkata.jpg";
// import bg from "../images/apollo-removebg-preview.png";
// import { Link } from "react-router-dom";

// class FindHospital extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeBranch: "all",
//     };
//   }

//   showBranch = (branchId) => {
//     this.setState({ activeBranch: branchId });
//   };

//   render() {
//     const { activeBranch } = this.state;

//     const branches = [
//       {
//         id: "hyderabad",
//         imageSrc: hyderabadImage,
//         name: "Hyderabad",
//         address:
//           "Film Nagar, Jubilee Hills, Hyderabad, Telangana State, India.",
//         phone: "Toll No: 1860 500 1066",
//         callCenter: "Call Centre(24X7): +91-40-2360 7777 / 5555",
//       },
//       {
//         id: "bangalore",
//         imageSrc: bangaloreImage,
//         name: "Bangalore",
//         address: "154 / 11, Bannerghatta Road Opp. I.I.M Bangalore - 560 076",
//         phone: "Call Centre(24X7): +(91)-80-2630 4050",
//         callCenter: "Call Centre(24X7): +(91)-80-2630 4050",
//       },
//       {
//         id: "delhi",
//         imageSrc: delhiImage,
//         name: "Delhi",
//         address: "Sarita Vihar Delhi Mathura Road, New Delhi - 110076, India",
//         phone: "Call Centre(24X7): +91-11-71791090 / 1091",
//         callCenter: "Call Centre(24X7): +91-11-71791090 / 1091",
//       },
//       {
//         id: "chennai",
//         imageSrc: chennaiImage,
//         name: "Chennai",
//         address: "21, Greams Lane, Off Greams Road Chennai, 600006",
//         phone: "Call Centre(24X7): +91-44-40401066",
//         callCenter: "Call Centre(24X7): +91-44-40401066",
//       },
//       {
//         id: "mumbai",
//         imageSrc: mumbaiImage,
//         name: "Mumbai",
//         address:
//           "Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai; 400 614",
//         phone: "Call Centre(24X7): +(91)-22 3350 3350",
//         callCenter: "Call Centre(24X7): +(91)-22 3350 3350",
//       },
//       {
//         id: "kolkata",
//         imageSrc: kolkataImage,
//         name: "Kolkata",
//         address: "58, Canal Circular Road Kolkata: 700 054",
//         phone: "Call Centre(24X7): +91-33-2320 3040 / 2122",
//         callCenter: "Call Centre(24X7): +91-33-2320 3040 / 2122",
//       },
//     ];

//     return (
//       <div>
//         {/* <header style={{ background: 'lightseagreen', padding: '10px', textAlign: 'center' }}>
//           <div className="logo">
//             <a href="Home-Page.html"><img className="ml-2 mt-2" height="100px" width="80px" src={bg} alt="img not found" /></a>
//           </div>
//           <div className="header-text">
//             <h1>Welcome to our Hospital Website! Find information about hospitals in different cities in India.</h1>
//           </div>
//         </header> */}
//         <header
//           style={{
//             background: "lightseagreen",
//             padding: "10px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div className="logo">
//             <Link to='/'>
//               <img
//                 className="ml-2 mt-2"
//                 height="100px"
//                 width="80px"
//                 src={bg}
//                 alt="img not found"
//               />
//             </Link>
//           </div>
//           <div className="header-text" style={{ marginLeft: "20px" }}>
//             <h1>
//               Welcome to our Hospital Website! Find information about hospitals
//               in different cities in India.
//             </h1>
//           </div>
//         </header>

//         <main
//           style={{
//             margin: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <ul
//             className="hospital-list"
//             style={{
//               listStyle: "none",
//               padding: "10px",
//               width: "30%",
//               backgroundColor: "#fff",
//               borderRadius: "5px",
//               boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             {branches.map((branch) => (
//               <li
//                 key={branch.id}
//                 className="hospital-item"
//                 onClick={() => this.showBranch(branch.id)}
//                 style={{
//                   marginBottom: "10px",
//                   padding: "10px",
//                   backgroundColor: "#f4f4f4",
//                   borderRadius: "5px",
//                   boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }}
//               >
//                 <h3>{branch.name}</h3>
//               </li>
//             ))}
//           </ul>

//           <div
//             className="branch-list"
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(2, 1fr)",
//               gridGap: "20px",
//               width: "65%",
//             }}
//           >
//             {branches.map((branch) =>
//               activeBranch === "all" || activeBranch === branch.id ? (
//                 <div
//                   key={branch.id}
//                   className="branch-card"
//                   id={branch.id}
//                   onClick={() => this.showBranch(branch.id)}
//                   style={{
//                     backgroundColor: "white",
//                     padding: "20px",
//                     borderRadius: "5px",
//                     boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//                     transition: "box-shadow 0.3s ease",
//                   }}
//                 >
//                   <img
//                     src={branch.imageSrc}
//                     alt={branch.name}
//                     style={{
//                       maxWidth: "100%",
//                       borderRadius: "5px",
//                       height: "200px",
//                       objectFit: "cover",
//                       marginBottom: "10px",
//                     }}
//                   />
//                   <h3>{branch.name}</h3>
//                   <p>{branch.address}</p>
//                   <p>{branch.phone}</p>
//                   <p>{branch.callCenter}</p>
//                   <Link to="/book-appointment">
//                     <button className="btn-primary">BOOK APPOINTMENT</button>
//                   </Link>
//                 </div>
//               ) : null
//             )}
//           </div>
//         </main>
//       </div>
//     );
//   }
// }

// export default FindHospital;
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import hyderabadImage from "../components/images/apollo-hyderabad-1.jpg";
// import bangaloreImage from "../components/images/bangalore.jpg";
// import delhiImage from "../components/images/delhi.jpg";
// import chennaiImage from "../components/images/chennai.jpg";
// import mumbaiImage from "../components/images/mumbai.jpg";
// import kolkataImage from "../components/images/kolkata.jpg";
// import bg from "../images/apollo-removebg-preview.png";
// class FindHospital extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeBranch: "all",
//       selectedCity: "", // Track selected city
//       selectedUserDetails: null, // Track selected user details
//     };
//   }
//   showBranch = (branchId) => {
//     this.setState({ activeBranch: branchId });
//   };
//   handleBookAppointmentClick(city, userDetails) {
//     this.setState({
//       selectedCity: city,
//       selectedUserDetails: userDetails,
//     });
//   }
//   render() {
//     const { activeBranch, selectedCity, selectedUserDetails } = this.state;
//     const branches = [
//       {
//         id: "hyderabad",
//         imageSrc: hyderabadImage,
//         name: "Hyderabad",
//         address:
//           "Film Nagar, Jubilee Hills, Hyderabad, Telangana State, India.",
//         phone: "Toll No: 1860 500 1066",
//         callCenter: "Call Centre(24X7): +91-40-2360 7777 / 5555",
//       },
//       {
//         id: "bangalore",
//         imageSrc: bangaloreImage,
//         name: "Bangalore",
//         address: "154 / 11, Bannerghatta Road Opp. I.I.M Bangalore - 560 076",
//         phone: "Call Centre(24X7): +(91)-80-2630 4050",
//         callCenter: "Call Centre(24X7): +(91)-80-2630 4050",
//       },
//       {
//         id: "delhi",
//         imageSrc: delhiImage,
//         name: "Delhi",
//         address: "Sarita Vihar Delhi Mathura Road, New Delhi - 110076, India",
//         phone: "Call Centre(24X7): +91-11-71791090 / 1091",
//         callCenter: "Call Centre(24X7): +91-11-71791090 / 1091",
//       },
//       {
//         id: "chennai",
//         imageSrc: chennaiImage,
//         name: "Chennai",
//         address: "21, Greams Lane, Off Greams Road Chennai, 600006",
//         phone: "Call Centre(24X7): +91-44-40401066",
//         callCenter: "Call Centre(24X7): +91-44-40401066",
//       },
//       {
//         id: "mumbai",
//         imageSrc: mumbaiImage,
//         name: "Mumbai",
//         address:
//           "Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai; 400 614",
//         phone: "Call Centre(24X7): +(91)-22 3350 3350",
//         callCenter: "Call Centre(24X7): +(91)-22 3350 3350",
//       },
//       {
//         id: "kolkata",
//         imageSrc: kolkataImage,
//         name: "Kolkata",
//         address: "58, Canal Circular Road Kolkata: 700 054",
//         phone: "Call Centre(24X7): +91-33-2320 3040 / 2122",
//         callCenter: "Call Centre(24X7): +91-33-2320 3040 / 2122",
//       },
//     ];
//     return (
//       <div>
//         <header
//           style={{
//             background: "lightseagreen",
//             padding: "10px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div className="logo">
//             <Link to="/">
//               <img
//                 className="ml-2 mt-2"
//                 height="100px"
//                 width="80px"
//                 src={bg}
//                 alt="img not found"
//               />
//             </Link>
//           </div>
//           <div className="header-text" style={{ marginLeft: "20px" }}>
//             <h1>
//               Welcome to our Hospital Website! Find information about hospitals
//               in different cities in India.
//             </h1>
//           </div>
//         </header>

//         <main
//           style={{
//             margin: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <ul
//             className="hospital-list"
//             style={{
//               listStyle: "none",
//               padding: "10px",
//               width: "30%",
//               backgroundColor: "#fff",
//               borderRadius: "5px",
//               boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             {branches.map((branch) => (
//               <li
//                 key={branch.id}
//                 className="hospital-item"
//                 onClick={() => this.showBranch(branch.id)}
//                 style={{
//                   marginBottom: "10px",
//                   padding: "10px",
//                   backgroundColor: "#f4f4f4",
//                   borderRadius: "5px",
//                   boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }}
//               >
//                 <h3>{branch.name}</h3>
//                 <Link to="/book-appointment">
//                   <button
//                     className="btn-primary"
//                     onClick={() =>
//                       this.handleBookAppointmentClick(branch.name, selectedUserDetails)
//                     }
//                   >
//                     BOOK APPOINTMENT
//                   </button>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div
//             className="branch-list"
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(2, 1fr)",
//               gridGap: "20px",
//               width: "65%",
//             }}
//           >
//             {branches.map((branch) =>
//               activeBranch === "all" || activeBranch === branch.id ? (
//                 <div
//                   key={branch.id}
//                   className="branch-card"
//                   id={branch.id}
//                   onClick={() => this.showBranch(branch.id)}
//                   style={{
//                     backgroundColor: "white",
//                     padding: "20px",
//                     borderRadius: "5px",
//                     boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//                     transition: "box-shadow 0.3s ease",
//                   }}
//                 >
//                   <img
//                     src={branch.imageSrc}
//                     alt={branch.name}
//                     style={{
//                       maxWidth: "100%",
//                       borderRadius: "5px",
//                       height: "200px",
//                       objectFit: "cover",
//                       marginBottom: "10px",
//                     }}
//                   />
//                   <h3>{branch.name}</h3>
//                   <p>{branch.address}</p>
//                   <p>{branch.phone}</p>
//                   <p>{branch.callCenter}</p>
//                   <Link to="/book-appointment">
//                     <button className="btn-primary">BOOK APPOINTMENT</button>
//                   </Link>
//                 </div>
//               ) : null
//             )}
//           </div>
//         </main>
//       </div>
//     );
//   }
// }

// export default FindHospital;
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import hyderabadImage from "../components/images/apollo-hyderabad-1.jpg";
// import bangaloreImage from "../components/images/bangalore.jpg";
// import delhiImage from "../components/images/delhi.jpg";
// import chennaiImage from "../components/images/chennai.jpg";
// import mumbaiImage from "../components/images/mumbai.jpg";
// import kolkataImage from "../components/images/kolkata.jpg";
// import bg from "../images/apollo-removebg-preview.png";

// class FindHospital extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeBranch: "all",
//       selectedUserDetails: null, // Track selected user details
//     };
//   }

//   showBranch = (branchId) => {
//     this.setState({ activeBranch: branchId });
//   };

//   handleBookAppointmentClick(userDetails) {
//     this.setState({
//       selectedUserDetails: userDetails,
//     });
//   }

//   render() {
//     const { activeBranch, selectedUserDetails } = this.state;

//     const branches = [
//       {
//         id: "hyderabad",
//         imageSrc: hyderabadImage,
//         name: "Hyderabad",
//         address: "Film Nagar, Jubilee Hills, Hyderabad, Telangana State, India.",
//         phone: "Toll No: 1860 500 1066",
//         callCenter: "Call Centre(24X7): +91-40-2360 7777 / 5555",
//       },
//       {
//         id: "bangalore",
//         imageSrc: bangaloreImage,
//         name: "Bangalore",
//         address: "154 / 11, Bannerghatta Road Opp. I.I.M Bangalore - 560 076",
//         phone: "Call Centre(24X7): +(91)-80-2630 4050",
//         callCenter: "Call Centre(24X7): +(91)-80-2630 4050",
//       },
//       {
//         id: "delhi",
//         imageSrc: delhiImage,
//         name: "Delhi",
//         address: "Sarita Vihar Delhi Mathura Road, New Delhi - 110076, India",
//         phone: "Call Centre(24X7): +91-11-71791090 / 1091",
//         callCenter: "Call Centre(24X7): +91-11-71791090 / 1091",
//       },
//       {
//         id: "chennai",
//         imageSrc: chennaiImage,
//         name: "Chennai",
//         address: "21, Greams Lane, Off Greams Road Chennai, 600006",
//         phone: "Call Centre(24X7): +91-44-40401066",
//         callCenter: "Call Centre(24X7): +91-44-40401066",
//       },
//       {
//         id: "mumbai",
//         imageSrc: mumbaiImage,
//         name: "Mumbai",
//         address: "Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai; 400 614",
//         phone: "Call Centre(24X7): +(91)-22 3350 3350",
//         callCenter: "Call Centre(24X7): +(91)-22 3350 3350",
//       },
//       {
//         id: "kolkata",
//         imageSrc: kolkataImage,
//         name: "Kolkata",
//         address: "58, Canal Circular Road Kolkata: 700 054",
//         phone: "Call Centre(24X7): +91-33-2320 3040 / 2122",
//         callCenter: "Call Centre(24X7): +91-33-2320 3040 / 2122",
//       },
//     ];

//     return (
//       <div>
//         <header
//           style={{
//             background: "lightseagreen",
//             padding: "10px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div className="logo">
//             <Link to="/">
//               <img
//                 className="ml-2 mt-2"
//                 height="100px"
//                 width="80px"
//                 src={bg}
//                 alt="img not found"
//               />
//             </Link>
//           </div>
//           <div className="header-text" style={{ marginLeft: "20px" }}>
//             <h1>
//               Welcome to our Hospital Website! Find information about hospitals
//               in different cities in India.
//             </h1>
//           </div>
//         </header>

//         <main
//           style={{
//             margin: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <ul
//             className="hospital-list"
//             style={{
//               listStyle: "none",
//               padding: "10px",
//               width: "30%",
//               backgroundColor: "#fff",
//               borderRadius: "5px",
//               boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             {branches.map((branch) => (
//               <li
//                 key={branch.id}
//                 className="hospital-item"
//                 onClick={() => this.showBranch(branch.id)}
//                 style={{
//                   marginBottom: "10px",
//                   padding: "10px",
//                   backgroundColor: "#f4f4f4",
//                   borderRadius: "5px",
//                   boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }}
//               >
//                 <h3>{branch.name}</h3>
//                 <Link to="/book-appointment">
//                   <button
//                     className="btn-primary"
//                     onClick={() =>
//                       this.handleBookAppointmentClick(branch.name, selectedUserDetails)
//                     }
//                   >
//                     BOOK APPOINTMENT
//                   </button>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div
//             className="branch-list"
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(2, 1fr)",
//               gridGap: "20px",
//               width: "65%",
//             }}
//           >
//             {branches.map((branch) =>
//               activeBranch === "all" || activeBranch === branch.id ? (
//                 <div
//                   key={branch.id}
//                   className="branch-card"
//                   id={branch.id}
//                   onClick={() => this.showBranch(branch.id)}
//                   style={{
//                     backgroundColor: "white",
//                     padding: "20px",
//                     borderRadius: "5px",
//                     boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//                     transition: "box-shadow 0.3s ease",
//                   }}
//                 >
//                   <img
//                     src={branch.imageSrc}
//                     alt={branch.name}
//                     style={{
//                       maxWidth: "100%",
//                       borderRadius: "5px",
//                       height: "200px",
//                       objectFit: "cover",
//                       marginBottom: "10px",
//                     }}
//                   />
//                   <h3>{branch.name}</h3>
//                   <p>{branch.address}</p>
//                   <p>{branch.phone}</p>
//                   <p>{branch.callCenter}</p>
//                   <Link to="/book-appointment">
//                     <button className="btn-primary">BOOK APPOINTMENT</button>
//                   </Link>
//                 </div>
//               ) : null
//             )}
//           </div>
//         </main>
//       </div>
//     );
//   }
// }

// export default FindHospital;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import hyderabadImage from "../components/images/apollo-hyderabad-1.jpg";
import bangaloreImage from "../components/images/bangalore.jpg";
import delhiImage from "../components/images/delhi.jpg";
import chennaiImage from "../components/images/chennai.jpg";
import mumbaiImage from "../components/images/mumbai.jpg";
import kolkataImage from "../components/images/kolkata.jpg";
import bg from "../images/apollo-removebg-preview.png";

const FindHospital = () => {
  const [activeBranch, setActiveBranch] = useState("all");

  const branches = [
    {
      id: "hyderabad",
      imageSrc: hyderabadImage,
      name: "Hyderabad",
      address: "Film Nagar, Jubilee Hills, Hyderabad, Telangana State, India.",
      phone: "Toll No: 1860 500 1066",
      callCenter: "Call Centre(24X7): +91-40-2360 7777 / 5555",
    },
    {
      id: "bangalore",
      imageSrc: bangaloreImage,
      name: "Bangalore",
      address: "154 / 11, Bannerghatta Road Opp. I.I.M Bangalore - 560 076",
      phone: "Call Centre(24X7): +(91)-80-2630 4050",
      callCenter: "Call Centre(24X7): +(91)-80-2630 4050",
    },
    {
      id: "delhi",
      imageSrc: delhiImage,
      name: "Delhi",
      address: "Sarita Vihar Delhi Mathura Road, New Delhi - 110076, India",
      phone: "Call Centre(24X7): +91-11-71791090 / 1091",
      callCenter: "Call Centre(24X7): +91-11-71791090 / 1091",
    },
    {
      id: "chennai",
      imageSrc: chennaiImage,
      name: "Chennai",
      address: "21, Greams Lane, Off Greams Road Chennai, 600006",
      phone: "Call Centre(24X7): +91-44-40401066",
      callCenter: "Call Centre(24X7): +91-44-40401066",
    },
    {
      id: "mumbai",
      imageSrc: mumbaiImage,
      name: "Mumbai",
      address: "Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai; 400 614",
      phone: "Call Centre(24X7): +(91)-22 3350 3350",
      callCenter: "Call Centre(24X7): +(91)-22 3350 3350",
    },
    {
      id: "kolkata",
      imageSrc: kolkataImage,
      name: "Kolkata",
      address: "58, Canal Circular Road Kolkata: 700 054",
      phone: "Call Centre(24X7): +91-33-2320 3040 / 2122",
      callCenter: "Call Centre(24X7): +91-33-2320 3040 / 2122",
    },
  ];

  return (
    <div>
      <header
        style={{
          background: "lightseagreen",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="logo">
          <Link to='/'>
            <img
              className="ml-2 mt-2"
              height="100px"
              width="80px"
              src={bg}
              alt="img not found"
            />
          </Link>
        </div>
        <div className="header-text" style={{ marginLeft: "20px" }}>
          <h1>
            Welcome to our Hospital Website! Find information about hospitals
            in different cities in India.
          </h1>
        </div>
      </header>

      <main
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ul
          className="hospital-list"
          style={{
            listStyle: "none",
            padding: "10px",
            width: "30%",
            backgroundColor: "#fff",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          {branches.map((branch) => (
            <li
              key={branch.id}
              className="hospital-item"
              onClick={() => setActiveBranch(branch.id)}
              style={{
                marginBottom: "10px",
                padding: "10px",
                backgroundColor: "#f4f4f4",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              <h3>{branch.name}</h3>
            </li>
          ))}
        </ul>

        <div
          className="branch-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "20px",
            width: "65%",
          }}
        >
          {branches.map((branch) =>
            activeBranch === "all" || activeBranch === branch.id ? (
              <div
                key={branch.id}
                className="branch-card"
                id={branch.id}
                onClick={() => setActiveBranch(branch.id)}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <img
                  src={branch.imageSrc}
                  alt={branch.name}
                  style={{
                    maxWidth: "100%",
                    borderRadius: "5px",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3>{branch.name}</h3>
                <p>{branch.address}</p>
                <p>{branch.phone}</p>
                <p>{branch.callCenter}</p>
                <Link to="/book-appointment">
                  <button className="btn-primary">BOOK APPOINTMENT</button>
                </Link>
              </div>
            ) : null
          )}
        </div>
      </main>
    </div>
  );
};

export default FindHospital;
