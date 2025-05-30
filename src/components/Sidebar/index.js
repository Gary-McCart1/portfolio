import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import glight from "../../assets/images/G-light.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faBolt, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="hamburger-menu" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} color="#ffd700" />
            </button>

            <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
                <Link className='logo' to='/' onClick={() => setIsOpen(false)}>
                    <img src={glight} alt="logo" />
                </Link>
                <nav>
                    <NavLink exact="true" activeclassname="active" to="/" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faBolt} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="certificates-link" to="/certificates" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faClipboard} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/gary-mccart-4b4b881bb/'>
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href='https://github.com/Gary-McCart1'>
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
