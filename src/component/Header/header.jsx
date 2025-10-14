import './header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div id="header-main">
            <div id="Logo"><a href="/">Mukul</a></div>

            <ul id="ol">
                <li><Link className="dropdown-item" to="/">Home</Link></li>
                <li><Link className="dropdown-item" to="/Skills">Skills</Link></li>
                <li><Link className="dropdown-item" to="/Projects">Projects</Link></li>
                <li><Link className="dropdown-item" to="/Contact">Contact Me</Link></li>
            </ul>

            <div className="btn-group" id="header-dropdown">
                <button type="button" className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    <i className="bi bi-list"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" id="toggle-item">
                    <li><Link className="dropdown-item" to="/">Home</Link></li>
                    <li><Link className="dropdown-item" to="/Skills">Skills</Link></li>
                    <li><Link className="dropdown-item" to="/Projects">Projects</Link></li>
                    <li><Link className="dropdown-item" to="/Contact">Contact Me</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
