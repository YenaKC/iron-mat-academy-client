import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-header">
                {/* The logo redirects the user back to the homepage, following common UX conventions. */}
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Iron Mat Academy" />
                </Link>

                <button
                    className="menu-button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* cuando clickquea hamburguesa aprece menu */}
            <div className={isOpen ? "nav-links open" : "nav-links"}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/coaches">Coaches</Link>
                <Link to="/classes">Classes</Link>
                <Link to="/techniques">Techniques</Link>
                <Link to="/techniques/new">Add Technique</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;