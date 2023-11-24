
import './home.css';
import Header from '../header/header';
import Hotel1 from "../images/hotel1.jpg"
import Hotel2 from "../images/hotel2.jpg"
import Hotel3 from "../images/hotel3.jpg"
import Room1 from "../images/room1.jpg"
import Room2 from "../images/room2.jpg"
import Room3 from "../images/room3.jpg"
import Footer from '../footer/footer';
function Home() {
    
  return (
    <><Header/>
    <div>
    <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
        <li data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#homeCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#homeCarousel" data-bs-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src={Hotel1} alt="Slide 1"/>
            <div class="carousel-caption">
                
                <p>Most hotels train people with the booklets. We take ours to the ballet. </p>
            </div>
        </div>
        <div class="carousel-item">
            <img src={Hotel2} alt="Slide 2"/>
            <div class="carousel-caption">
                
                <p>Our new hotels will play a leading role promoting the world peace.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src={Hotel3} alt="Slide 3"/>
            <div class="carousel-caption">
                
                <p>Location is heavenly. Best to visit in week days to enjoy the peaceful beauty.</p>
            </div>
        </div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>

   
   <a class="carousel-control-prev" href="#homeCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#homeCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>
</div><br></br>
<div class="d-grid gap-2 col-6 mx-auto">
<a class="book-button-main" href="/room" role="button">Book Rooms</a></div><br></br><br></br>

<div class="check-availability">
<div class="container">
        <h2>Check Availability</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="check-in-date">Check-in Date:</label>
                <input type="date" id="check-in-date" name="check-in-date" required/>
            </div>
            <div class="form-group">
                <label for="check-out-date">Check-out Date:</label>
                <input type="date" id="check-out-date" name="check-out-date" required/>
            </div>
            <div class="form-group">
                <input type="submit" value="Check Availability"/>
            </div>
            </form>
            </div></div><br></br>
 
        <div class="row">
            
            <div class="col-md-6">
                <div class="card">
                    <img src={Room1} class="card-img-top" alt="Hotel 1"/>
                    <div class="card-overlay">
                        <h5 class="card-title-on-image">Hotel 1</h5>
                        <p class="card-text-on-image">Description of Hotel 1.</p>
                    </div>
                </div>
            </div>
            
            <div className='col-6'>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <h2>20 Years of Hotels and Resort Experience</h2> 
            <p>Hotel Luxuria is a haven of comfort and elegance, nestled in the heart of a bustling city. Our hotel offers a unique blend of modern luxury and traditional charm, catering to discerning travelers seeking a truly memorable stay. With its exceptional service, exquisite dining, and plush accommodations, Hotel Luxuria is the ideal choice for both leisure and business travelers.</p>
            </div><br></br>

            <div className='col-6'>
            <h2>20 Years of Hotels and Resort Experience</h2>
            <p>Hotel Luxuria is a haven of comfort and elegance, nestled in the heart of a bustling city. Our hotel offers a unique blend of modern luxury and traditional charm, catering to discerning travelers seeking a truly memorable stay. With its exceptional service, exquisite dining, and plush accommodations, Hotel Luxuria is the ideal choice for both leisure and business travelers.</p>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <img src={Room2} class="card-img-top" alt="Hotel 2"/>
                    <div class="card-overlay">
                        <h5 class="card-title-on-image">Hotel 1</h5>
                        <p class="card-text-on-image">Description of Hotel 1.</p>
                    </div>
                </div>
            </div><br></br>
     
            <div class="col-md-6">
                <div class="card">
                    <img src={Room3} class="card-img-top" alt="Hotel 3"/>
                    <div class="card-overlay">
                        <h5 class="card-title-on-image">Hotel 1</h5>
                        <p class="card-text-on-image">Description of Hotel 1.</p>
                    </div>
                </div>
            </div>

            <div className='col-6'>
            <h2>20 Years of Hotels and Resort Experience</h2> 
            <div calss="description">
            <p>Hotel Luxuria is a haven of comfort and elegance, nestled in the heart of a bustling city. Our hotel offers a unique blend of modern luxury and traditional charm, catering to discerning travelers seeking a truly memorable stay. With its exceptional service, exquisite dining, and plush accommodations, Hotel Luxuria is the ideal choice for both leisure and business travelers.</p>
            </div></div>
        </div>
    </div>
    <Footer/>
    </>
  );
  
}
export default Home;
