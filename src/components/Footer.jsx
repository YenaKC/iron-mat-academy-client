import { Link } from "react-router-dom"
import tiktokIcon from "../assets/tiktok.png";
import instagramIcon from "../assets/instagram.png";
import xIcon from "../assets/x.png";
import facebookIcon from "../assets/facebook.png";

function Footer() {
    return (
        <footer>
            <div className="footer-content">

                <div className="footer-brand">
                    <h3>IRON MAT ACADEMY</h3>
                    <p>Master your craft, dominate the mat</p>

                    <div className="footer-socials">
                        <Link to="/"><img src={tiktokIcon} alt="TikTok" /></Link>
                        <Link to="/"><img src={instagramIcon} alt="Instagram" /></Link>
                        <Link to="/"><img src={xIcon} alt="X" /></Link>
                        <Link to="/"><img src={facebookIcon} alt="Facebook" /></Link>
                    </div>
                </div> 

                <div className="footer-links">
                    <h4>Explore</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/coaches">Coaches</Link>
                    <Link to="/classes">Classes</Link>
                    <Link to="/techniques">Techniques</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Carrer Guitard 48, Barcelona</p>
                    <p>info@ironmatacademy.com</p>
                    <p>Mon - Fri: 07:00 - 22:00 / Sat: 10:00 -13:00</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Iron Mat Academy. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
}

export default Footer;