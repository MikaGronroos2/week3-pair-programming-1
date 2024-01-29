import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
      </div>
    </nav>
  );
};

export default Navbar;

// ZOOMI ON KAATUNUT XDDDDD

// :'DDDD mitä vittua

// Discord?'

// Jooooo, mun disc on myös mangomansikka

// Friend Request lähetetty
