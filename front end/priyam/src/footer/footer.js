
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <div class="footer">
    <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h4 class="footer-heading">Contact Us</h4>
                    <p class="footer-contact">Email: chouhanpriyam137@gmail.com</p>
                    <p class="footer-contact">Phone: 8051769150</p>
                </div>
                <div class="col-md-4">
                    <h4 class="footer-heading">Quick Links</h4>
                    <a href="/" class="footer-link">Home</a>
                    <a href="/about" class="footer-link">About Us</a>
                    <a href="/room" class="footer-link">Rooms</a>
                    <a href="/contactus" class="footer-link">Contact</a>
                </div>
                <div class="col-md-4">
                    <h4 class="footer-heading">Follow Us</h4>
                    <div class="footer-social">
                    <a href="https://www.facebook.com/priyam.chouhan.9" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/chouhan.priyam5" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/priyam-chouhan-4b70a3205/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="all-rights-reserved">All Rights Reserved &copy; 2023 Hotel Reservation</p>
                </div>
            </div>
        </div>
</div>
  );
}

export default Footer;
