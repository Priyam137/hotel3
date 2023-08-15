
import './service.css';
import Footer from '../footer/footer';
import Header from '../header/header';




function Service() {
  return (
    <>
    <Header/>
        <div class="service">
    <h4 class="services-heading">Our Services</h4>
    <div class="container services-container">
    
    <div class="service-item">
        <h3 class="service-title">Accommodation</h3>
        <p class="service-description">
            Enjoy a comfortable stay in our well-appointed rooms with modern amenities. Choose from a variety of room types to suit your preferences, whether you're traveling solo, with family, or for business.
        </p>
    </div>
    <div class="service-item">
        <h3 class="service-title">Dining</h3>
        <p class="service-description">
            Indulge in a culinary experience at our fine dining restaurants. Our skilled chefs prepare a diverse range of dishes, from local delicacies to international cuisines, ensuring a delightful dining experience for every guest.
        </p>
    </div>
    <div class="service-item">
        <h3 class="service-title">Recreation</h3>
        <p class="service-description">
            Relax and unwind in our recreational facilities. Take a refreshing dip in the pool, work out in the fitness center, or rejuvenate with a spa treatment. There's something for everyone to enjoy during their stay at Hotel XYZ.
        </p>
    </div>
    <div class="service-item">
        <h3 class="service-title">Business Facilities</h3>
        <p class="service-description">
            For our business guests, we offer state-of-the-art meeting rooms and conference facilities. Stay productive with high-speed internet, audio-visual equipment, and professional support to host successful events.
        </p>
    </div>
</div>
</div><br></br>
<Footer/></>


   

  );
}

export default Service;
