
import './room.css';
import Room1 from "../images/room1.jpg"
import Room2 from "../images/room2.jpg"
import Room3 from "../images/room3.jpg"
//import Header from '../header/header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Header from '../header/header';
import Footer from '../footer/footer';




const Room = () => {
    const [rooms, setRooms] = useState([]); 
  
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

    const handleBookNow = (roomId) => {
        const selectedRoom = rooms.find((room) => room._id === roomId);
        if (selectedRoom) {
          // Simulate booking logic here, such as making an API call to book the room
          // For now, let's just show a success message using toast
          toast.success(`Successfully booked ${selectedRoom.room} room!`);
        } else {
          toast.error('Room not found for booking.');
        }
      };
  
   
      

  return (
    <div>
      <Header/>
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
                  <button
                    onClick={() => handleBookNow(room._id)}
                    className="btn btn-primary"
                  >
                    Book Now
                  </button>
                </td>
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    
    
  

    <div class="aboutroom">
        <div class="row">
            <div class="col-md-6">
                <div class="room-card">
                    <img src={Room1} alt="Single Room" class="room-photo"/>
                   <a href="/singleroom"> <h3 class="room-heading">Single Room</h3></a>
                    <p class="room-description">Our comfortable single rooms are perfect for solo travelers. Each room is equipped with a cozy bed and modern amenities to ensure a relaxing stay.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="room-dis">
                    <p class="room-price">Rs. 2300 per night</p>
                    <a href="/booksingle"><button class="book-button">Book Now</button></a>
                </div>
            </div>

            <div class="col-md-6">
                <div class="room-dis">
                    <p class="room-price">Rs. 3100 per night</p>
                    <a href="/bookdouble"><button class="book-button">Book Now</button></a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="room-card">
                    <img src={Room3} alt="Double Room" class="room-photo"/>
                    <a href="/doubleroom"><h3 class="room-heading">Double Room</h3></a>
                    <p class="room-description">Our spacious double rooms are ideal for couples or friends. Enjoy a comfortable stay with a queen-size bed and beautiful views of the surrounding area.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="room-card">
                    <img src={Room2} alt="Deluxe Room" class="room-photo"/>
                    <a href="/deluxeroom"><h3 class="room-heading">Deluxe Room</h3></a>
                    <p class="room-description">Indulge in luxury with our deluxe rooms. These elegantly designed rooms feature premium amenities, a king-size bed, and stunning interior decor.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="room-dis">
                    <p class="room-price">Rs. 4500 per night</p>
                    <a href="/bookdeluxe"><button class="book-button">Book Now</button></a>
                </div>
            </div>
        </div>
          </div><Footer/></div>

    


   

  );
}

export default Room;
