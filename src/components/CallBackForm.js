import React, { useState } from "react";

function CallBackForm({userDetails}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    age: "",
    specialist: null,
    submitted: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSpecialistChange = (event) => {
    setFormData({
      ...formData,
      specialist: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here.
    // For this example, we will just mark the form as submitted.
    setFormData({
      ...formData,
      submitted: true,
    });
  };

  const containerStyle = {
    backgroundColor: "rgb(145, 205, 227)",
    width: "450px",
    padding: "50px",
    margin: "40px",
  };

  const selectStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "10px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const submitButtonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h3>Fill the form & get a</h3>
      <h1 style={{ color: "#5348f3" }}>call back in 15 mins</h1>
      {/* <h2>Appointment Form</h2> */}
      {userDetails.name && <p>Welcome, {userDetails.name}!</p>}
      <label>Select a Specialist:</label>
      <select onChange={handleSpecialistChange} style={selectStyle}>
        <option value="">Please Select</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Gastroenterology">Gastroenterology</option>
        <option value="Gynecology">Gynecology</option>
        <option value="Dermatology">Dermatology</option>
        <option value="Ophthalmology">Ophthalmology</option>
        <option value="Pulmonology">Pulmonology</option>
        <option value="Plastic Surgery">Plastic Surgery</option>
        <option value="Psychiatry">Psychiatry</option>
        <option value="Dentistry">Dentistry</option>
        <option value="ENT (Ear, Nose, Throat)">ENT (Ear, Nose, Throat)</option>
      </select>
      {formData.specialist && (
        <div>
          <h4>Selected Specialist: {formData.specialist}</h4>
          {/* Render the specialist component here */}
        </div>
      )}

      <form id="callback-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          required
          onChange={handleChange}
          style={selectStyle}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          required
          onChange={handleChange}
          style={selectStyle}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          onChange={handleChange}
          style={selectStyle}
        />

        <label htmlFor="city">City</label>
        <select id="city" required onChange={handleChange} style={selectStyle}>
          <option value="">Please Select</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          {/* Add other city options here */}
        </select>

        <label htmlFor="age">Age</label>
        <select id="age" required onChange={handleChange} style={selectStyle}>
          <option value="">Please Select</option>
          <option value="0-10yrs">0-10yrs</option>
          <option value="10-18yrs">10-18yrs</option>
          {/* Add other age options here */}
        </select>

        <input
          type="submit"
          value="Book appointment"
          style={submitButtonStyle}
        />
      </form>

      <p>
        *I agree that Medico 24|7 representatives can contact me over call, SMS,
        and WhatsApp. I understand that this will override the DND status on my
        mobile number.
      </p>
    </div>
  );
}

export default CallBackForm;
