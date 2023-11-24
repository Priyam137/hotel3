
import './contact.css';
import Header from '../header/header';

function Contact() {
  return (
    <>
    <Header/>
    <div>
  
      <main>
          <section id="contact">
              <h1>Contact Us :~)</h1>
              <p>
                  If you have any questions or inquiries, please feel free to contact us using the form below or through the provided contact details.
              </p>
              <form action="/send-email" method="post">
                  <label for="name">Your Name:</label>
                  <input type="text" id="name" name="name" required/>
  
                  <label for="email">Your Email:</label>
                  <input type="email" id="email" name="email" required/>
  
                  <label for="message">Your Message:</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
  
                  <input type="submit" value="Send Message"/>
              </form>
  
              <div class="contact-details">
                  <h2>Our Contact Information:</h2>
                  <p><b>Email:</b> chouhanpriyam137@gmail.com</p>
                  <p><b>Phone:</b> +91 8051769150</p>
                  <p><b>Address:</b> JanakPuri , Delhi , India</p>
              </div>
          </section>
      </main>
      </div>
      </>
 
  );
}

export default Contact;
