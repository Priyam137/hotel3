import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';

const UpdateRoom = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({
    //room: '',
    availability: '',
    priceperNight: ''
    
  });
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch the product details for the specified ID
    axios
      .get(`http://127.0.0.1:4000/admin/rooms/${id}`)
      .then((response) => {
        setRoom(response.data.data); // Assuming 'data' is an array with a single product object
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Call the API to update the product
    axios
      .post(`http://127.0.0.1:4000/admin/updateroom/${room._id}`, room)
      .then((response) => {
        console.log('Product updated successfully:', response.data);
        toast.success('Product added successfully!', {
          onClose: () => {
            // Redirect to the product listing component
            navigate('/roomlist');
          },
        });

        // Redirect or show a success message
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        // Show an error message or toast notification
      });
  };

  return (
    <div className="container mt-5">
      <h2>Update Room</h2>
      <form>
        <div className="mb-3">
          <label for="room-type">Select Room Type:</label>
                <select id="room-type" name="room" value={room.room}
            onChange={handleInputChange} required>
                    <option value="" disabled selected>Select room type</option>
                    <option value="single">Single Room</option>
                    <option value="double">Double Room</option>
                    <option value="deluxe">Deluxe Room</option>
                </select>
          
        </div>
        <div className="mb-3">
          <label className="form-label">Availability</label>
          <input
            type="text"
            className="form-control"
            name="availability"
            value={room.availability}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">priceperNight</label>
          <input
            type="text"
            className="form-control"
            name="priceperNight"
            value={room.priceperNight}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>
          Update Room
        </button>
      </form>
    </div>
  );
};

export default UpdateRoom;


