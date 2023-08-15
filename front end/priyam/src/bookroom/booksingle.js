//import logo from './logo.svg';
import './booksingle.css';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios to make API calls
import { toast } from 'react-toastify'; // Import react-toastify for pop-up messages
import 'react-toastify/dist/ReactToastify.css';



function Booksingle() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        persons: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleBooking = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://127.0.0.1:4000/admin/roomlist', formData);
          if (response.data.success) {
            toast.success('Booking successful!'); // Show success message
            // You can also redirect the user to another page after successful booking
          }
        } catch (error) {
          console.error('Error booking:', error);
          toast.error('Booking failed. Please try again.'); // Show error message
        }
      };
  
  return (
    <div className="booking-form">
      <h2>Single Room Booking</h2>
      <form onSubmit={handleBooking}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled selected>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="persons">Total Number of Persons:</label>
          <input
            type="number"
            id="persons"
            name="persons"
            min="1"
            value={formData.persons}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Book Now" />
        </div>
      </form>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>
    </div>
  );
}
export default Booksingle;
