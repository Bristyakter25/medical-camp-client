import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer bg-[#F5EFFF] dark:bg-[#00072D] dark:text-white text-black py-20 px-36">
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link to="/" ><a className="link link-hover">Home</a></Link>
    <Link to="/dashboard/allChart" ><a className="link link-hover">Dashboard</a></Link>
    <Link to="/availableCamps" ><a className="link link-hover">AvailableCamps</a></Link>
    <Link to="/upcomingEvents" ><a className="link link-hover">Upcoming Events</a></Link>
   
    
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link to="/login" ><a className="link link-hover">Login</a></Link>
    <Link to="/register" ><a className="link link-hover">Register</a></Link>
    <Link to="/aboutUs" ><a className="link link-hover">About Us</a></Link>
   
  </nav>
  
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input dark:bg-white bg-white text-black input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;