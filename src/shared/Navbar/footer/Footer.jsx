import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer bg-base-200 dark:bg-[#A294F9] text-base-content py-10 px-24">
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link to="/" ><a className="link link-hover">Home</a></Link>
    <Link to="/dashboard" ><a className="link link-hover">Dashboard</a></Link>
    <Link to="/availableCamps" ><a className="link link-hover">AvailableCamps</a></Link>
   
    
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link to="/login" ><a className="link link-hover">Login</a></Link>
    <Link to="/register" ><a className="link link-hover">Register</a></Link>
   
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
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;