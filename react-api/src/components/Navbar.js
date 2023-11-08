// import { Link } from "react-router-dom";
import {Link} from "react-router-dom";
import './Navbar.css'

function Navbar(){
    return (
    
        <div class="nav">
            <nav>
                <ul class="na">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;