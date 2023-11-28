// import React from 'react';
// import preview from './images/doc_logo-removebg-preview.png'
// class PsychiatryPage extends React.Component {
//   render() {
//     const bodyStyle = {
//       padding: '0px',
//       margin: '0px',
//       boxSizing: 'border-box',
//     };

//     const logoStyle = {
//       height: '120px',
//       width: '100%',
//       backgroundColor: 'bisque',
//     };

//     const h1Style = {
//       textAlign: 'center',
//     };

//     const headerStyle = {
//       height: '100vh',
//       width: '100vw',
//     };

//     const firstSideStyle = {
//       backgroundColor: 'rgba(137, 47, 102, 0.135)',
//       border: '2px solid black',
//       borderRadius: '10px',
//     };

//     const secondSideStyle = {
//       backgroundColor: 'rgb(90, 221, 215)',
//       border: '2px solid black',
//       borderRadius: '10px',
//     };

//     return (
//       <div style={bodyStyle}>
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>Psychiatry</title>
//           <link rel="stylesheet" href="psychiatry.css" />
//           <link
//             href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
//             rel="stylesheet"
//             integrity="sha384-9ndCyUaIbzAi2FUVXJGfKQcapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
//             crossOrigin="anonymous"
//           />
//           <link
//             rel="icon"
//             type="image/gif"
//             href="https://e1.pxfuel.com/desktop-wallpaper/178/954/desktop-wallpaper-clipart-hospital-blue-hospital-logo.jpg"
//           />
//           <style>
//             {`
//               body {
//                 background-color: rgba(184, 191, 191, 0.027);
//               }
//             `}
//           </style>
//         </head>
//         <body style={bodyStyle}>
//           <header style={headerStyle}>
//             <div className="logo" style={logoStyle}>
//               <a href="Home-Page.html">
//                 <img
//                   className="ml-2 mt-2"
//                   height="50px"
//                   width="50px"
//                   src={preview}
//                   alt="img not found"
//                 />
//               </a>
//               <h1 style={h1Style}>Psychiatry</h1>
//             </div>
//           </header>
//           <br />
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <p>
//                   Welcome to our Psychiatry webpage. Here you will find information about various Psychiatry conditions and treatments.
//                 </p>
//                 <p>
//                   Psychiatry is a medical specialty dealing with disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.
//                 </p>
//                 <h2>Common Psychiatry Conditions</h2>
//                 <ul>
//                   <li>Stroke</li>
//                   <li>Epilepsy</li>
//                   <li>Alzheimer's disease</li>
//                   <li>Parkinson's disease</li>
//                   <li>Migraine</li>
//                 </ul>
//                 <h2>Treatments</h2>
//                 <p>
//                   Psychiatry conditions are often treated using a combination of medications, therapy, and lifestyle changes. Some common treatment options include:
//                 </p>
//                 <ul>
//                   <li>Medications: Various medications can help manage symptoms and slow down the progression of certain Psychiatry conditions.</li>
//                   <li>Physical therapy: Physical therapy can help improve mobility and function in patients with Psychiatry disorders.</li>
//                   <li>Surgery: In some cases, surgical interventions may be necessary to treat certain Psychiatry conditions.</li>
//                   <li>Lifestyle changes: Adopting a healthy lifestyle, including regular exercise and a balanced diet, can have a positive impact on overall Psychiatryal health.</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </body>
//       </div>
//     );
//   }
// }

// export default PsychiatryPage;
import React from 'react';
import preview from '../images/apollo-removebg-preview.png';
import Header from './Header';
import {Link} from 'react-router-dom';
class PsychiatryPage extends React.Component {
  render() {
    const bodyStyle = {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.5',
      backgroundColor: 'rgba(184, 191, 191, 0.027)',
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
          <Link to="/">
              <img
                className="ml-2 mt-2"
                height="65px"
                width="60px"
                src={preview}
                alt="Image not found"
                style={logoImgStyle}
              />
            </Link>
          </div>
          <h1>Psychiatry</h1>
        </header>
        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2>Welcome to Our Psychiatry Department</h2>
            <p>
              Psychiatry is a medical specialty dealing with disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. Here, you will find information about various psychiatric conditions and treatments.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>Common Psychiatry Conditions</h2>
            <ul>
              <li>Stroke</li>
              <li>Epilepsy</li>
              <li>Alzheimer's disease</li>
              <li>Parkinson's disease</li>
              <li>Migraine</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2>Treatments</h2>
            <p>
              Psychiatry conditions are often treated using a combination of medications, therapy, and lifestyle changes. Some common treatment options include:
            </p>
            <ul>
              <li>Medications: Various medications can help manage symptoms and slow down the progression of certain psychiatric conditions.</li>
              <li>Physical therapy: Physical therapy can help improve mobility and function in patients with psychiatric disorders.</li>
              <li>Surgery: In some cases, surgical interventions may be necessary to treat certain psychiatric conditions.</li>
              <li>Lifestyle changes: Adopting a healthy lifestyle, including regular exercise and a balanced diet, can have a positive impact on overall psychiatric health.</li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default PsychiatryPage;

