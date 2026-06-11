import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <h2>Iron Mat Academy</h2>

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