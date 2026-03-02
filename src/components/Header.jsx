import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {

    return (
        <header className="header">
            <div className="logo">
                <h2>FlowerPlant</h2>
            </div>
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/my-plants" className="nav-link">My Plants</Link>
                <Link to="/add-plant" className="nav-link">Add a Plant</Link>
                <Link to="/about" className="nav-link">About</Link>
            </nav>
        </header>
    );
}