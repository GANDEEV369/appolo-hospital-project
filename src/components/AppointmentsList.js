// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateAppointmentData from "./UpdateAppointmentData";
// function AppointmentsList() {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//   useEffect(() => {
//     fetchAppointments();
//   }, []);
//   const fetchAppointments = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3005/fetchappointments"
//       );
//       setAppointments(response.data);
//     } catch (error) {
//       console.error("Error Fetching Appointments:", error);
//     }
//   };
//   const senddata = async (formdata) => {
//     try {
//       await axios.put(`http://localhost:3005/updateappointments`, formdata);
//       fetchAppointments();

//       setIsUpdateModalOpen(false);
//     } catch (error) {
//       console.error("Error updating Appointments:", error);
//     }
//   };
//   const handleDelete = async (email) => {
//     try {
//       await axios.delete(`http://localhost:3005/deleteappointment/${email}`);
//       fetchAppointments();
//     } catch (error) {
//       console.error("Error deleting appointment:", error);
//     }
//   };
//   const handleUpdateClick = (appointment) => {
//     setSelectedAppointment(appointment);
//     setIsUpdateModalOpen(true);
//   };
//   return (
//     <div>
//       <h2>Appointments List</h2>
//       <div className='appointment-grid'>
//         {appointments.map((appointment) => (
//           //  console.log("Appointment Details:", appointment),
//           // <div key={appointment.email} style= {cardStyle}className="appointment-card">
//           <div key={appointment.email} style= {cardStyle}className="appointment-card">
//             <p>Name: {appointment.name}</p>
//             <p>Phone Number: {appointment.phonenumber}</p>
//             <p>Email: {appointment.email}</p>
//             <p>City: {appointment.city}</p>
//             <p>Age: {appointment.age}</p>
//             <p>CheckBox: {appointment.agreeChecked}</p>
//             <button style= {buttonStyle}onClick={() => setSelectedAppointment(appointment)}>View</button>
//             <button style= {buttonStyle}onClick={() => handleUpdateClick(appointment)}>Update</button>
//             <button style= {buttonStyle}onClick={() => handleDelete(appointment.email)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       {selectedAppointment && (
//         <UpdateAppointmentData
//           isOpen={isUpdateModalOpen}
//           toggle={() => setIsUpdateModalOpen(!isUpdateModalOpen)}
//           selectedAppointment={selectedAppointment}
//           senddata={senddata}
//         />
//       )}
//       {selectedAppointment && (
//         <div className="appointment-details">
//           <h3>Appointment Details</h3>
//           <p>Name: {selectedAppointment.name}</p>
//           <p>Phone Number: {selectedAppointment.phonenumber}</p>
//           <p>Email: {selectedAppointment.email}</p>
//           <p>City: {selectedAppointment.city}</p>
//           <p>Age: {selectedAppointment.age}</p>
//           <p>Agree: {selectedAppointment.agreeChecked}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// const cardStyle = {
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   padding: "10px",
//   margin: "10px",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   backgroundColor: "#fff",
// };
// const buttonStyle = {
//   marginRight: "10px",
//   padding: "5px 10px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "3px",
//   cursor: "pointer",
// };
// // export default AppointmentsList;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateAppointmentData from "./UpdateAppointmentData";
// function AppointmentsList() {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const response = await axios.get("http://localhost:3005/fetchappointments");
//       setAppointments(response.data);
//     } catch (error) {
//       console.error("Error Fetching Appointments:", error);
//     }
//   };
//   const senddata = async (formdata) => {
//     try {
//       await axios.put(`http://localhost:3005/updateappointments`, formdata);
//       fetchAppointments();
//       setIsUpdateModalOpen(false);
//     } catch (error) {
//       console.error("Error updating Appointments:", error);
//     }
//   };
//   const handleDelete = async (email) => {
//     try {
//       await axios.delete(`http://localhost:3005/deleteappointment/${email}`);
//       fetchAppointments();
//     } catch (error) {
//       console.error("Error deleting appointment:", error);
//     }
//   };
//   const handleUpdateClick = (appointment) => {
//     setSelectedAppointment(appointment);
//     setIsUpdateModalOpen(true);
//   };
//   return (
//     <div>
//       <h2>Appointments List</h2>
//       <div className="appointment-grid">
//         {appointments.map((appointment,index) => (
//           console.log(appointment),
//           // <div key={appointment.email} style={cardStyle} className="appointment-card">
//           <div key={index} style={cardStyle} className="appointment-card">
//             <p>Name: {appointment.name}</p>
//             <p>Phone Number: {appointment.phonenumber}</p>
//             <p>Email: {appointment.email}</p>
//             <p>City: {appointment.city}</p>
//             <p>Age: {appointment.age}</p>
//             <button style={buttonStyle} onClick={() => setSelectedAppointment(appointment)}>View</button>
//             <button style={buttonStyle} onClick={() => handleUpdateClick(appointment)}>Update</button>
//             <button style={buttonStyle} onClick={() => handleDelete(appointment.email)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       {selectedAppointment && (
//         <UpdateAppointmentData
//           isOpen={isUpdateModalOpen}
//           toggle={() => setIsUpdateModalOpen(!isUpdateModalOpen)}
//           selectedAppointment={selectedAppointment}
//           senddata={senddata}
//         />
//       )}
//       {selectedAppointment && (
//         <div className="appointment-details">
//           <h3>Appointment Details</h3>
//           <p>Name: {selectedAppointment.name}</p>
//           <p>Phone Number: {selectedAppointment.phonenumber}</p>
//           <p>Email: {selectedAppointment.email}</p>
//           <p>City: {selectedAppointment.city}</p>
//           <p>Age: {selectedAppointment.age}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// const cardStyle = {
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   padding: "10px",
//   margin: "10px",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   backgroundColor: "#fff",
// };
// const buttonStyle = {
//   marginRight: "10px",
//   padding: "5px 10px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "3px",
//   cursor: "pointer",
// };
// // export default AppointmentsList;//main code
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateAppointmentData from "./UpdateAppointmentData";

// function AppointmentsList() {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const response = await axios.get("http://localhost:3005/fetchappointments");
//       setAppointments(response.data);
//     } catch (error) {
//       console.error("Error Fetching Appointments:", error);
//     }
//   };

//   const senddata = async (formdata) => {
//     try {
//       await axios.put(`http://localhost:3005/updateappointments`, formdata);
//       fetchAppointments();
//       setIsUpdateModalOpen(false);
//     } catch (error) {
//       console.error("Error updating Appointments:", error);
//     }
//   };

//   const handleDelete = async (email) => {
//     try {
//       await axios.delete(`http://localhost:3005/deleteappointment/${email}`);
//       fetchAppointments();
//     } catch (error) {
//       console.error("Error deleting appointment:", error);
//     }
//   };

//   const handleUpdateClick = (appointment) => {
//     setSelectedAppointment(appointment);
//     setIsUpdateModalOpen(true);
//   };

//   return (
//     <div>
//       <h2>Appointments List</h2>
//       <div className="appointment-grid">
//         {appointments.map((appointment) => (
//           <div key={appointment.email} style={cardStyle} className="appointment-card">
//             <p>Name: {appointment.name}</p>
//             <p>Phone Number: {appointment.phonenumber}</p>
//             <p>Email: {appointment.email}</p>
//             <p>City: {appointment.city}</p>
//             <p>Age: {appointment.age}</p>
//             <button style={buttonStyle} onClick={() => setSelectedAppointment(appointment)}>View</button>
//             <button style={buttonStyle} onClick={() => handleUpdateClick(appointment)}>Update</button>
//             <button style={buttonStyle} onClick={() => handleDelete(appointment.email)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       {selectedAppointment && (
//         <UpdateAppointmentData
//           isOpen={isUpdateModalOpen}
//           toggle={() => setIsUpdateModalOpen(!isUpdateModalOpen)}
//           selectedAppointment={selectedAppointment}
//           senddata={senddata}
//         />
//       )}
//       {selectedAppointment && (
//         <div className="appointment-details">
//           <h3>Appointment Details</h3>
//           <p>Name: {selectedAppointment.name}</p>
//           <p>Phone Number: {selectedAppointment.phonenumber}</p>
//           <p>Email: {selectedAppointment.email}</p>
//           <p>City: {selectedAppointment.city}</p>
//           <p>Age: {selectedAppointment.age}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// const cardStyle = {
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   padding: "10px",
//   margin: "10px",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   backgroundColor: "#fff",
// };

// const buttonStyle = {
//   marginRight: "10px",
//   padding: "5px 10px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "3px",
//   cursor: "pointer",
// };

// export default AppointmentsList;//real actual code which is in github
import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateAppointmentData from "./UpdateAppointmentData";

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    fetchAppointments();
  
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:3005/fetchappointments");
      setAppointments(response.data);
      console.log(response.data[0].formData.name);
      console.log("res")
         
      console.log("err");
    } catch (error) {
      console.error("Error Fetching Appointments:", error);
    }
  };

  const senddata = async (formdata) => {
    try {
      await axios.put(`http://localhost:3005/updateappointments`, formdata);
      fetchAppointments();
      setIsUpdateModalOpen(false);
    } catch (error) {
      console.error("Error updating Appointments:", error);
    }
  };

  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:3005/deleteappointment/${email}`);
      fetchAppointments();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const handleUpdateClick = (appointment) => {
    setSelectedAppointment(appointment);
    setIsUpdateModalOpen(true);
  };

  return (
    <div>
      <h2>Appointments List</h2>
      <div className="appointment-grid">
        {appointments.map((appointment) => (
          <div key={appointment.formData.email} style={cardStyle} className="appointment-card">
            <p>Name: {appointment.formData.name}</p>
            <p>Phone Number: {appointment.formData.phonenumber}</p>
            <p>Email: {appointment.formData.email}</p>
            <p>City: {appointment.formData.city}</p>
            <p>Age: {appointment.formData.age}</p>
            <button style={buttonStyle} onClick={() => setSelectedAppointment(appointment)}>View</button>
            <button style={buttonStyle} onClick={() => handleUpdateClick(appointment)}>Update</button>
            <button style={buttonStyle} onClick={() => handleDelete(appointment.email)}>Delete</button>
          </div>
        ))}
      </div>
      {selectedAppointment && (
        <UpdateAppointmentData
          isOpen={isUpdateModalOpen}
          toggle={() => setIsUpdateModalOpen(!isUpdateModalOpen)}
          selectedAppointment={selectedAppointment}
          senddata={senddata}
        />
      )}
      {selectedAppointment && (
        <div className="appointment-details">
          <h3>Appointment Details</h3>
          <p>Name: {selectedAppointment.formData.name}</p>
          <p>Phone Number: {selectedAppointment.formData.phonenumber}</p>
          <p>Email: {selectedAppointment.formData.email}</p>
          <p>City: {selectedAppointment.formData.city}</p>
          <p>Age: {selectedAppointment.formData.age}</p>
        </div>
      )}
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "10px",
  margin: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

const buttonStyle = {
  marginRight: "10px",
  padding: "5px 10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
};

export default AppointmentsList;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UpdateAppointmentData from "./UpdateAppointmentData";

// function AppointmentsList() {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const response = await axios.get("http://localhost:3005/fetchappointments");
//       setAppointments(response.data);
//     } catch (error) {
//       console.error("Error Fetching Appointments:", error);
//     }
//   };

//   const senddata = async (formdata) => {
//     try {
//       await axios.put(`http://localhost:3005/updateappointments`, formdata);
//       fetchAppointments();
//       setIsUpdateModalOpen(false);
//     } catch (error) {
//       console.error("Error updating Appointments:", error);
//     }
//   };

//   const handleDelete = async (email) => {
//     try {
//       await axios.delete(`http://localhost:3005/deleteappointment/${email}`);
//       fetchAppointments();
//     } catch (error) {
//       console.error("Error deleting appointment:", error);
//     }
//   };

//   const handleUpdateClick = (appointment) => {
//     setSelectedAppointment(appointment);
//     setIsUpdateModalOpen(true);
//   };

//   return (
//     <div>
//       <h2>Appointments List</h2>
//       <div className="appointment-grid">
//         {appointments.map((appointment) => (
//           <div key={appointment.email} style={cardStyle} className="appointment-card">
//             <p>Name: {appointment.name}</p>
//             <p>Phone Number: {appointment.phonenumber}</p>
//             <p>Email: {appointment.email}</p>
//             <p>City: {appointment.city}</p>
//             <p>Age: {appointment.age}</p>
//             <button style={buttonStyle} onClick={() => setSelectedAppointment(appointment)}>View</button>
//             <button style={buttonStyle} onClick={() => handleUpdateClick(appointment)}>Update</button>
//             <button style={buttonStyle} onClick={() => handleDelete(appointment.email)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       {selectedAppointment && (
//         <UpdateAppointmentData
//           isOpen={isUpdateModalOpen}
//           toggle={() => setIsUpdateModalOpen(!isUpdateModalOpen)}
//           selectedAppointment={selectedAppointment}
//           senddata={senddata}
//         />
//       )}
//       {selectedAppointment && (
//         <div className="appointment-details">
//           <h3>Appointment Details</h3>
//           <p>Name: {selectedAppointment.name}</p>
//           <p>Phone Number: {selectedAppointment.phonenumber}</p>
//           <p>Email: {selectedAppointment.email}</p>
//           <p>City: {selectedAppointment.city}</p>
//           <p>Age: {selectedAppointment.age}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// const cardStyle = {
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   padding: "10px",
//   margin: "10px",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   backgroundColor: "#fff",
// };

// const buttonStyle = {
//   marginRight: "10px",
//   padding: "5px 10px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "3px",
//   cursor: "pointer",
// };

// export default AppointmentsList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UpdateData from './UpdateData';
// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//   useEffect(() => {
//     fetchEmployees();
//   }, []);
//   const fetchEmployees = async () => {
//     try {
      
//       const response = await axios.get('http://localhost:3005/fetchappointments');
//       setEmployees(response.data);
      
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };
//   const senddata = async (formdata) => {
//     try {
//       // Make the PUT request to update the employee data
//       await axios.put(`http://localhost:4000/update`, formdata);
//       // Refresh the employee list
//       fetchEmployees();
//       // Close the update modal
//       setIsUpdateModalOpen(false);
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/del/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };
//   const handleUpdateClick = (employee) => {
//     setSelectedEmployee(employee);
//     setIsUpdateModalOpen(true);
//   };
//   return (
//     <div>
//       <h2>Employee List</h2>
//       <div className='employee-grid'>
//         {employees.map((employee) => (
//           <div key={employee.name} style= {cardStyle}className="employee-card">
//             <p>Id: {employee.id}</p>
//             <p>Name: {employee.name}</p>
//             <p>Batch: {employee.batch}</p>
//             <p>Salary: {employee.salary}</p>
//             <button style= {buttonStyle}onClick={() => setSelectedEmployee(employee)}>View</button>
//             <button style= {buttonStyle}onClick={() => handleUpdateClick(employee)}>Update</button>
//             <button style= {buttonStyle}onClick={() => handleDelete(employee.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       {selectedEmployee && (
//         <UpdateData
//           isOpen={isUpdateModalOpen}
//           toggle={() => setIsUpdateModalOpen(!isUpdateModalOpen)}
//           selectedEmployee={selectedEmployee}
//           senddata={senddata}
//         />
//       )}
//       {selectedEmployee && (
//         <div className="employee-details">
//           <h3>Employee Details</h3>
//           <p>Id: {selectedEmployee.id}</p>
//           <p>Name: {selectedEmployee.name}</p>
//           <p>Batch: {selectedEmployee.batch}</p>
//           <p>Salary: {selectedEmployee.salary}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// const cardStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '10px',
//     margin: '10px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fff',
//   };
//   const buttonStyle = {
//     marginRight: '10px',
//     padding: '5px 10px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '3px',
//     cursor: 'pointer',
//   };
// export default EmployeeList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UpdateData from './UpdateData';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/fetch');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   const senddata = async (formdata) => {
//     try {
//       // Make the PUT request to update the employee data
//       await axios.put(`http://localhost:4000/update`, formdata);

//       // Refresh the employee list
//       fetchEmployees();

//       // Close the update modal
//       setIsUpdateModalOpen(false);
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/del/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   const handleUpdateClick = (employee) => {
//     setSelectedEmployee(employee);
//     setIsUpdateModalOpen(true);
//   };
  
//   return (
//     <div>
//       <h2>Employee List</h2>
//       <div className='employee-grid'>
//         {employees.map((employee) => (
//           <div key={employee.id} style= {cardStyle}className="employee-card">
//             <p>Id: {employee.id}</p>
//             <p>Name: {employee.name}</p>
//             <p>Batch: {employee.batch}</p>
//             <p>Salary: {employee.salary}</p>
//             <button style= {buttonStyle}onClick={() => setSelectedEmployee(employee)}>View</button>
//             <button style= {buttonStyle}onClick={() => handleUpdateClick(employee)}>Update</button>
//             <button style= {buttonStyle}onClick={() => handleDelete(employee.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       {selectedEmployee && (
//         <UpdateData
//           isOpen={isUpdateModalOpen}
//           toggle={() => setIsUpdateModalOpen(!isUpdateModalOpen)}
//           selectedEmployee={selectedEmployee}
//           senddata={senddata}
//         />
//       )}
//       {selectedEmployee && (
//         <div className="employee-details">
//           <h3>Employee Details</h3>
//           <p>Id: {selectedEmployee.id}</p>
//           <p>Name: {selectedEmployee.name}</p>
//           <p>Batch: {selectedEmployee.batch}</p>
//           <p>Salary: {selectedEmployee.salary}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// const cardStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '10px',
//     margin: '10px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fff',
//   };
  
//   const buttonStyle = {
//     marginRight: '10px',
//     padding: '5px 10px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '3px',
//     cursor: 'pointer',
//   };

// export default EmployeeList;