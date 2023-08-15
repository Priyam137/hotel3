//import logo from './logo.svg';

//import { Navigate } from 'react-router-dom';
import './App.css';
//import Header from './header/header';
import Home from './home/home';
import {Route, Routes,Navigate} from 'react-router-dom';
import UserLogin from './userlogin/userlogin';
import Contact from './contact/contact';
import Userregister from './userregister/userregister';
import Adminlogin from './adminlogin/adminlogin';
import Footer from './footer/footer';
import Room from './rooms/room';
import About from './aboutus/about';
import Service from './services/service';
import Singleroom from "./rooms/singleroom";
import Doubleroom from "./rooms/doubleroom";
import Deluxeroom from "./rooms/deluxeroom";
import Booksingle from './bookroom/booksingle';
import Bookdouble from './bookroom/bookdouble';
import Bookdeluxe from './bookroom/bookdeluxe';
import Addrooms from './rooms/addrooms';
import RoomList from './rooms/roomlist';
import UpdateRoom from './rooms/updateroom';
function App() {
  const user = localStorage.getItem("token");
  return (
    
  

    <div className="App">
      <Routes>
        
    
     <Route path="/home" exact element={<Home/>}/>
     {user && <Route path="/" exact element={<Home />} />}ProductList
     <Route path="/userlogin" exact element={<UserLogin/>}/>
     <Route path="/userregister" exact element={<Userregister/>}message="Registration page"/>
     <Route path="/adminlogin" exact element={<Adminlogin/>}/>
     <Route path="/contactus" exact element={<Contact/>}/>
     <Route path="/footer" exact element={<Footer/>}/>
     <Route path='/room' exact element={<Room/>}/>
     <Route path='/about' exact element={<About/>}/>
     <Route path='/service' exact element={<Service/>}/>
     <Route path='/singleroom' exact element={<Singleroom/>}/>
     <Route path='/doubleroom' exact element={<Doubleroom/>}/>
     <Route path='/deluxeroom' exact element={<Deluxeroom/>}/>
     <Route path='/booksingle' exact element={<Booksingle/>}/>
     <Route path='/bookdouble' exact element={<Bookdouble/>}/>
     <Route path='/bookdeluxe' exact element={<Bookdeluxe/>}/>
     <Route path="/addrooms" exact element={<Addrooms/>}/>
     <Route path="/roomlist" exact element={<RoomList/>}/>
     <Route path='/updateroom/:id' exact element={<UpdateRoom/>}/>
     <Route path="/" element={<Navigate replace to="/userlogin" />} />
     </Routes>
     
     
     
     </div>
    
     
  
  );
}

export default App;
