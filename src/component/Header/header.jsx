import './header.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

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

            <Dropdown id="header-dropdown">
                <Dropdown.Toggle variant="secondary" className="btn">
                    <i className="bi bi-list"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu id="toggle-item">
                    <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Skills">Skills</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Projects">Projects</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Contact">Contact Me</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
export default Header;
