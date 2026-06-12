import tiktokIcon from "../assets/tiktok.png";
import instagramIcon from "../assets/instagram.png";
import xIcon from "../assets/x.png";
import facebookIcon from "../assets/facebook.png";
import logo from "../assets/logo.png"

function Footer() {
    return (
        <footer>
            <div className="footer-content">

                <div className="footer-brand">
                    <h3>IRON MAT ACADEMY</h3>
                    <p>Master your craft, dominate the mat</p>

                    <div className="footer-socials">
                        <img src={tiktokIcon} alt="TikTok" />
                        <img src={instagramIcon} alt="Instagram" />
                        <img src={xIcon} alt="X" />
                        <img src={facebookIcon} alt="Facebook" />
                    </div>
                </div> 

                <div className="footer-links">
                    <h4>Explore</h4>
                    <p>Home</p>
                    <p>About</p>
                    <p>Coaches</p>
                    <p>Classes</p>
                    <p>Techniques</p>
                    <p>Contact</p>
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