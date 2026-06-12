function Footer() {
    return (
        <footer>
            <div className="footer-content">

                <div className="footer-brand">
                    <h3>IRON MAT ACADEMY</h3>
                    <p>Master your craft, dominate the mat</p>
                </div>

                <div className="footer-socials">
                    <img src="/tiktok.png" alt="TikTok" />
                    <img src="/instagram.png" alt="Instagram" />
                    <img src="/x.png" alt="X" />
                    <img src="/facebook.png" alt="Facebook" />
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

            <div className="footer-bottom">
                <p>© 2026 Iron Mat Academy. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
}

export default Footer;