import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateAppointmentData from "./UpdateAppointmentData";

function DoctorsList() {
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
      <h2>Doctors List</h2>
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