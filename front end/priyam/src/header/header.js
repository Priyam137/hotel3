
import './header.css';

function Header() {
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Redirect to the login page
    window.location = "/userlogin";
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" >
    <div class="container-fluid">
      <a class="navbar-brand" >Hotel</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/service">Services</a>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Rooms
            </a>
            
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/singleroom">Room Single</a></li>
              <li><a class="dropdown-item" href="/doubleroom">Room Double</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="/deluxeroom">luxury Room</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contactus">Contact Us</a>
          </li>
        </ul>

        <ul class="navbar-nav d-flex">
                    <li class="nav-item">
                        <a class="nav-link" href="/userlogin">User Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/adminlogin">Admin Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/userregister">Register</a>
                    </li>
                </ul>
                <button class="logout-button" onClick={handleLogout}>Logout</button>
    
      </div>
    </div>
  </nav>
  
  );
}
export default Header;
