import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';
import AdminHeader from '../header/adminheader';


const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch the list of products from the API
    axios
      .get('http://127.0.0.1:4000/admin/roomlist')
      .then((response) => {
        setRooms(response.data.data);
        console.log(response.data,"Res Data")
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
      });
  }, []);

  const handleDelete = (roomId) => {
    // Delete the product using the API
    axios
      .delete(`http://127.0.0.1:4000/admin/deleteroom/${roomId}`)
      .then(() => {
        // Filter out the deleted product from the state
        setRooms((prevRooms) =>
          prevRooms.filter((room) =>  room._id !== roomId)
        );

        // Show toast notification for successful deletion
        toast.success('Room deleted successfully!');
        // history.push('/product-list');
        navigate('/roomlist');
      })
      .catch((error) => {
        console.error('Error deleting room:', error);
        toast.error('Error deleting room. Please try again.');
      });
  };

  return (
    <>
    <AdminHeader/>
    <div className="container mt-5">
      <h2>Room List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Select Room Type</th>
            <th>Availability</th>
            <th>Price Per Night</th>
            
          </tr>
        </thead>
        <tbody>
            {/*console.log(rooms,"trfghjkofygu")*/}
          {rooms.map((room) => (
            <tr key={room._id}>
              <td>{room.room}</td>
              <td>{room.availability}</td>
              <td>{room.priceperNight}</td>
              
              <td>
                <Link to={`/updateroom/${room._id}`}>
                  <FontAwesomeIcon icon={faEdit} className="me-2" />
                </Link>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(room._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default RoomList;











