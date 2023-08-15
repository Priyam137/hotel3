//import logo from './logo.svg';
import './booksingle.css';

function Bookdouble() {
  return (
    <div class="booking-form">
        <h2>Double Room Booking</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" required/>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="" disabled selected>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="persons">Total Number of Persons:</label>
                <input type="number" id="persons" name="persons" min="1" required/>
            </div>
            <div class="form-group">
                <label>Payment Option:</label>
                <div class="payment-icons">
                    <a href=""><i class="fab fa-cc-visa"></i></a>
                    <a href=""><i class="fab fa-cc-mastercard"></i></a>
                    <a href=""><i class="fab fa-paypal"></i></a>
                    <a href=""><i class="fas fa-money-bill-alt"></i></a>
                </div>
            </div>
            <div class="form-group">
                <input type="submit" value="Book Now"/>
            </div>
        </form>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>
    </div>
    
   
 
  );
}

export default Bookdouble;
