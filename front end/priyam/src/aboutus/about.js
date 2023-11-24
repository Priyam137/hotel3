
import './about.css';
import Hotel3 from "../images/hotel3.jpg"
import Footer from '../footer/footer';
import Header from '../header/header';

function Room() {
  return (
    <>
    <Header/>
    <div class="container about-container">
    <h2 class="about-heading">About Hotel </h2>
    <img src={Hotel3} alt="Hotel XYZ" class="about-image"/>
    <p class="about-description">
        Welcome to Hotel XYZ, your perfect destination for a memorable stay! Located in the heart of the city, our hotel offers the utmost comfort and convenience for both leisure and business travelers.
    </p>
    <p class="about-description">
        At Hotel XYZ, we take pride in providing exceptional services and modern amenities to ensure a delightful experience for our guests. Our well-appointed rooms, friendly staff, and beautiful views will make your stay truly enjoyable.
    </p>
    <p class="about-description">
        Whether you're here for a relaxing vacation, a corporate event, or a family gathering, we have everything you need to make your stay a memorable one. Indulge in our fine dining options, unwind by the pool, or stay productive in our state-of-the-art business center.
    </p>
    <p class="about-description">
        We look forward to welcoming you to Hotel XYZ and providing you with an unforgettable experience. Your satisfaction is our top priority, and we strive to exceed your expectations in every way possible.
    </p>
</div><br></br>
<Footer/>
</>
  );
}

export default Room;
