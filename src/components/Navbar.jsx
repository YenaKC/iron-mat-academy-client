import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h2>Iron Mat Academy</h2>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/coaches">Coaches</Link>
            <Link to="/classes">Classes</Link>
            <Link to="/techniques">Techniques</Link>
            <Link to="/techniques/new">Add Technique</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;