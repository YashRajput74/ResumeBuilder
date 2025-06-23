import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="headerr">
            <div className="logo">Heitech.</div>
            <nav className="navBar">
                <a href="#home" className="active">Home</a>
                <a href="#solutions">About ▾</a>
                <a href="#features">Features ▾</a>
                <a href="#templates">Templates</a>
                <Link to="/auth">Log in</Link>
                <Link to="/auth" className="signup">Sign Up</Link>
            </nav>
        </header>
    );
}