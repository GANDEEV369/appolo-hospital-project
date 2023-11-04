// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EmployeeList = () => {
//   const [fetch, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

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

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/del/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   const handleUpdate = async (id, updatedEmployee) => {
//     try {
//       await axios.put(`http://localhost:4000/update`, updatedEmployee);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Employee List</h2>
//       {fetch.map((employee) => (
//         <div key={employee.id}>
//           <p>Id: {selectedEmployee.id}</p>
//           <p>Name: {selectedEmployee.name}</p>
//           <p>Batch: {selectedEmployee.batch}</p>
//           <p>Salary: {selectedEmployee.salary}</p>
//           <button onClick={() => setSelectedEmployee(employee)}>View</button>
//           <button onClick={() => handleUpdate(employee.id, { name: 'Updated Name' })}>Update</button>
//           <button onClick={() => handleDelete(employee.id)}>Delete</button>
//         </div>
//       ))}
//       {selectedEmployee && (
//         <div>
//           <h3>Selected Employee:</h3>
//           <p>Id: {selectedEmployee.id}</p>
//           <p>Name: {selectedEmployee.name}</p>
//           <p>Batch: {selectedEmployee.batch}</p>
//           <p>Salary: {selectedEmployee.salary}</p>
//           {/* <p>Age: {selectedEmployee.age}</p> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

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

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/del/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   const handleUpdate = async (id, updatedEmployee) => {
//     try {
//       await axios.put(`http://localhost:4000/update/${id}`, updatedEmployee);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };
  

//   return (
//     <div>
//       <h2>Employee List</h2>
//       {employees.map((employee) => (
//         <div key={employee.id}>
//           <p>Id: {employee.id}</p>
//           <p>Name: {employee.name}</p>
//           <p>Batch: {employee.batch}</p>
//           <p>Salary: {employee.salary}</p>
//           <button onClick={() => setSelectedEmployee(employee)}>View</button>
//           <button onClick={() => handleUpdate(employee.id, { name: 'Updated Name' })}>Update</button>
//           <button onClick={() => handleDelete(employee.id)}>Delete</button>
//         </div>
//       ))}
//       {selectedEmployee && (
//         <div>
//           <h3>Selected Employee:</h3>
//           <p>Id: {selectedEmployee.id}</p>
//           <p>Name: {selectedEmployee.name}</p>
//           <p>Batch: {selectedEmployee.batch}</p>
//           <p>Salary: {selectedEmployee.salary}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EmployeeList = ({ displayFormat }) => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);
//   //   const fetchEmployees = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:4000/fetch');
// //       setEmployees(response.data);
// //     } catch (error) {
// //       console.error('Error fetching employees:', error);
// //     }
// //   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/del/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   const handleUpdate = async (id, updatedEmployee) => {
//     try {
//       await axios.put(`http://localhost:4000/update/${id}`, updatedEmployee);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/fetch');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   // Rest of your component logic remains the same

//   return (
//     <div>
//       <h2>Employee List</h2>
//       {displayFormat === "table" ? (
//         // Render records in table format
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Batch</th>
//               <th>Salary</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee.id}>
//                 <td>{employee.id}</td>
//                 <td>{employee.name}</td>
//                 <td>{employee.batch}</td>
//                 <td>{employee.salary}</td>
//                 <td>
//                   <button onClick={() => setSelectedEmployee(employee)}>View</button>
//                   <button onClick={() => handleUpdate(employee.id, { name: 'Updated Name' })}>Update</button>
//                   <button onClick={() => handleDelete(employee.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         // Render records in grid card format
//         <div className="employee-grid">
//           {employees.map((employee) => (
//             <div key={employee.id} className="employee-card">
//               <p>Id: {employee.id}</p>
//               <p>Name: {employee.name}</p>
//               <p>Batch: {employee.batch}</p>
//               <p>Salary: {employee.salary}</p>
//               <button onClick={() => setSelectedEmployee(employee)}>View</button>
//               <button onClick={() => handleUpdate(employee.id, { name: 'Updated Name' })}>Update</button>
//               <button onClick={() => handleDelete(employee.id)}>Delete</button>
//             </div>
//           ))}
//         </div>
//       )}

//       {selectedEmployee && (
//         <div>
//           <h3>Selected Employee:</h3>
//           <p>Id: {selectedEmployee.id}</p>
//           <p>Name: {selectedEmployee.name}</p>
//           <p>Batch: {selectedEmployee.batch}</p>
//           <p>Salary: {selectedEmployee.salary}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UpdateData from './Components/UpdateData';
// //actual code 1
// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

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
//   async function senddata(formdata){
//     try{
//     await axios.put('http://localhost:4000/update',formdata);
//     fetchEmployees();
//     }
//     catch(error){
//     console.log('Error in updating the data')
//     }
//     }

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/del/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   const handleUpdate = async ( updatedEmployee) => {
//     try {
//       await axios.put(`http://localhost:4000/update`, updatedEmployee);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <div className='employee-grid'>
//       {employees.map((employee) => (
//         <div key={employee.id} style= {cardStyle}className="employee-card">
//           <p>Id: {employee.id}</p>
//           <p>Name: {employee.name}</p>
//           <p>Batch: {employee.batch}</p>
//           <p>Salary: {employee.salary}</p>
//           <button style= {buttonStyle}onClick={() => setSelectedEmployee(employee)}>View</button>
//           {/* <button style= {buttonStyle} onClick={() => handleUpdate(employee.id, { name: 'Updated Name' },employee.batch,employee.salary)}>Update</button> */}
//           <UpdateData senddata = {senddata} />
//           <button style= {buttonStyle}onClick={() => handleDelete(employee.id)}>Delete</button>
//           {/* <UpdateData senddata = {senddata} /> */}

//         </div>
        
//       ))}
      

//       {selectedEmployee && (
//         <div>
//           <h3>Selected Employee:</h3>
//           <p>Id: {selectedEmployee.id}</p>
//           <p>Name: {selectedEmployee.name}</p>
//           <p>Batch: {selectedEmployee.batch}</p>
//           <p>Salary: {selectedEmployee.salary}</p>
//         </div>
        
//       )}
//       </div>
//     </div>
//   );
// };
// const cardStyle = {
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   padding: '10px',
//   margin: '10px',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   backgroundColor: '#fff',
// };

// const buttonStyle = {
//   marginRight: '10px',
//   padding: '5px 10px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '3px',
//   cursor: 'pointer',
// };
// export default EmployeeList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UpdateData from './Components/UpdateData';

// const EmployeeList = () => {
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

//   const handleViewClick = (employee) => {
//     setSelectedEmployee(employee);
//     setIsUpdateModalOpen(true); // Open the same modal for viewing
//   };

//   const handleUpdateClose = () => {
//     setIsUpdateModalOpen(false);
//   };

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <div className='employee-grid'>
//         {employees.map((employee) => (
//           <div key={employee.id} style={cardStyle} className="employee-card">
//             <p>Id: {employee.id}</p>
//             <p>Name: {employee.name}</p>
//             <p>Batch: {employee.batch}</p>
//             <p>Salary: {employee.salary}</p>
//             <button style={buttonStyle} onClick={() => handleViewClick(employee)}>View</button>
//             <button style={buttonStyle} onClick={() => handleUpdateClick(employee)}>Update</button>
//             <button style={buttonStyle} onClick={() => handleDelete(employee.id)}>Delete</button>
//           </div>
//         ))}
//       </div>

//       {selectedEmployee && (
//         <UpdateData
//           isOpen={isUpdateModalOpen}
//           toggle={handleUpdateClose}
//           employee={selectedEmployee}
//           senddata={senddata}
//         />
//       )}
//     </div>
//   );
// };

// const cardStyle = {
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   padding: '10px',
//   margin: '10px',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   backgroundColor: '#fff',
// };

// const buttonStyle = {
//   marginRight: '10px',
//   padding: '5px 10px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '3px',
//   cursor: 'pointer',
// };

// export default EmployeeList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateData from './UpdateData';

import 'bootstrap/dist/css/bootstrap.min.css';
function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:4000/fetch');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const senddata = async (formdata) => {
    try {
      // Make the PUT request to update the employee data
      await axios.put(`http://localhost:4000/update`, formdata);

      // Refresh the employee list
      fetchEmployees();

      // Close the update modal
      setIsUpdateModalOpen(false);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/del/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleUpdateClick = (employee) => {
    setSelectedEmployee(employee);
    setIsUpdateModalOpen(true);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <div className='employee-grid'>
        {employees.map((employee) => (
          <div key={employee.id} style= {cardStyle}className="employee-card">
            <p>Id: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Batch: {employee.batch}</p>
            <p>Salary: {employee.salary}</p>
            <button style= {buttonStyle}onClick={() => setSelectedEmployee(employee)}>View</button>
            <button style= {buttonStyle}onClick={() => handleUpdateClick(employee)}>Update</button>
            <button style= {buttonStyle}onClick={() => handleDelete(employee.id)}>Delete</button>
          </div>
        ))}
      </div>
      {selectedEmployee && (
        <UpdateData
          isOpen={isUpdateModalOpen}
          toggle={() => setIsUpdateModalOpen(!isUpdateModalOpen)}
          selectedEmployee={selectedEmployee}
          senddata={senddata}
        />
      )}
    </div>
  );
}
const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };
  
  const buttonStyle = {
    marginRight: '10px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };

export default EmployeeList;