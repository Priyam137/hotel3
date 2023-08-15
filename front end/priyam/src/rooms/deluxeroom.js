
import './singleroom.css';
import Room1 from "../images/room1.jpg"
import Room2 from "../images/room2.jpg"
import Room3 from "../images/room3.jpg"
import Footer from '../footer/footer';
import Header from '../header/header';



function Deluxeroom() {
  return (
    <>
    <Header/>
    <div class="container deluxe-room-container">
        <h2 class="room-heading">Deluxe Room</h2>
        <div id="roomCarousel" class="carousel slide room-slider" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Room3} class="d-block w-100" alt="Single Room Photo 1"/>
                </div>
                <div class="carousel-item">
                    <img src={Room1} class="d-block w-100" alt="Single Room Photo 2"/>
                </div>
                <div class="carousel-item">
                    <img src={Room2} class="d-block w-100" alt="Single Room Photo 3"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#roomCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#roomCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button><br></br>
            <div class="d-grid gap-2 col-6 mx-auto">
<a class="book-button-main" href="/room" role="button">Book deluxe Room</a></div>
        </div>
        <p class="room-description">
            Our comfortable Single Room is perfect for solo travelers seeking a relaxing stay. The room features a cozy bed, modern amenities, and a well-designed interior to ensure your comfort and convenience during your stay.
        </p>
        <div class="room-amenities">
            <h4>Amenities:</h4>
            <ul>
                <li>Luxury double bed</li>
                <li>Free Food</li>
                <li>Private bathroom</li>
                <li>Flat-screen TV</li>
                <li>Air conditioning</li>
                <li>Free Wi-Fi</li>
                <li>Work desk</li>
                <li>In-room safe</li>
                <li>Coffee maker</li>
                
            </ul>
        </div>
    </div><br></br>
    <Footer/></>


   

  );
}

export default Deluxeroom;
