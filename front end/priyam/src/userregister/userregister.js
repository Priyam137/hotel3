 import './userregister.css';
import {React,useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/header';


    function Userregister() {
      const [register, setRegister] = useState({
        userName:"",
        email:"",
        password:''
       });
     
       const navigate = useNavigate(); 
     
       const handleChange = (event) => {
         const { name, value } = event.target;
         setRegister((prevRegister) => ({
           ...prevRegister,
           [name]: value,
         }));
       };
     
       const handleSubmit = (event) => {
         event.preventDefault();
     
         // Send the product data to the backend using Axios POST request
         axios
           .post('http://127.0.0.1:4000/users/userregister', register)
           .then((response) => {
             console.log('Registered successfully:', response.data);
     
             toast.success('Registered successfully!', {
                 onClose: () => {
                   // Redirect to the product listing component
                   navigate('/userlogin');
                 },
               });
     
             // You can perform additional actions after successful product addition
           })
           .catch((error) => {
             console.error('Error register:', error);
             toast.error('Error register. Please try again.');
           });
       };
      return (
        <>
        <Header/>
        <div class="registration-container">
        <h1>User Registration</h1>
        <form onSubmit={handleSubmit} class="registration-form" action="/register" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="userName" value={register.userName}
            onChange={handleChange} required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email"value={register.email}
            onChange={handleChange} required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password"value={register.password}
            onChange={handleChange} required/>

            <input type="submit" value="Register"/>
        </form>
        <p>Already a user? <a href="/userlogin">Login here</a></p>
    </div>
   </>  

  );
}

export default Userregister;
