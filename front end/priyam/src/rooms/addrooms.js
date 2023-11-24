import "./addrooms.css";
import {React,useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import AdminHeader from '../header/adminheader';

function Addrooms() {
    const [room, setRoom] = useState({
       availability:"",
       priceperNight:''
      });
    
      const navigate = useNavigate(); 
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setRoom((prevRoom) => ({
          ...prevRoom,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Send the product data to the backend using Axios POST request
        axios
          .post('http://127.0.0.1:4000/admin/addrooms', room)
          .then((response) => {
            console.log('Room added successfully:', response.data);
    
            toast.success('Room added successfully!', {
                onClose: () => {
                  // Redirect to the product listing component
                  navigate('/roomlist');
                },
              });
          })
          .catch((error) => {
            console.error('Error adding room:', error);
            toast.error('Error adding room. Please try again.');
          });
      };
  return (
    <>
    <AdminHeader/>
    <div class="container">
    <div class="reservation-form">
        <h2>Add rooms</h2>
        <form onSubmit={handleSubmit} action="#" method="post">
           <div class="form-group">
                <label for="room-type">Select Room Type:</label>
                <select id="room-type" name="room" value={room.room}
            onChange={handleChange} required>
                    <option value="" disabled selected>Select room type</option>
                    <option value="single">Single Room</option>
                    <option value="double">Double Room</option>
                    <option value="deluxe">Deluxe Room</option>
                </select>
  </div>
           
            <div class="form-group">
                <label for="name">Availability:</label>
                <input type="text" id="availability" name="availability" value={room.availability}
            onChange={handleChange}required/>
            </div>
            <div class="form-group">
                <label for="">Price Per Night:</label>
                <input type="" id="price" name="priceperNight" value={room.priceperNight}
            onChange={handleChange}required/>
            </div>
            
            <div class="form-group">
                <button type="submit" className="btn btn-primary">Add Product</button>
                <div><br></br>
                <a className="btn btn-primary" href="/roomlist" role="button"> See Room List</a>
            </div></div>
        </form>
    </div>
    </div>
    </>
  );
}

export default Addrooms;
