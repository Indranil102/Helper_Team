import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const handleButtonClick = (path) => {
        setActive(path); // Update the active state
    };
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    const notavailable = () =>{
        alert("Comming Soon")
      };
    return (
        <div className="Navbar">
            <div className="brand">HelperTeam</div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`helper ${menuActive ? 'active' : ''}`}>
                <Link to="/"><li><button className={active === '/' ? 'active' : ''} onClick={() => handleButtonClick('/')}>Home</button></li></Link>
                <Link to="/Pyq"><li><button className={active === '/Pyq' ? 'active' : ''} onClick={() => handleButtonClick('/Pyq')}>PYQ</button></li></Link>
                {/* <Link to="/Lectures">*/}<li><button onClick={notavailable}>Lectures</button></li>{/*</Link> */}
                {/* <Link to="/Notes">*/}<li><button onClick={notavailable}>Notes</button></li>{/*</Link> */}
                <Link to="/Juetserver"><li><button className={active === '/Juetserver' ? 'active' : ''} onClick={() => handleButtonClick('/Juetserver')}>JUET Server</button></li></Link>
                <Link to="/About"><li><button className={active === '/About' ? 'active' : ''} onClick={() => handleButtonClick('/About')}>About</button></li></Link>
                <Link to="/signup"><li><button className={`signin ${active === '/signup' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('/signup')}>Sign in</button></li></Link>
            </ul>
        </div>
    );
};

export default Navbar;
