import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="Navbar">
            <div className="brand">HelperTeam</div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`helper ${menuActive ? 'active' : ''}`}>
                <Link to="/"><li><button>Home</button></li></Link>
                <Link to="/Pyq"><li><button>PYQ</button></li></Link>
                {/*<Link to="/Lectures"><li><button>Lectures</button></li></Link>*/}
                <Link to="/Notes"><li><button>Notes</button></li></Link>
                <Link to="/Juetserver"><li><button>JUET Server</button></li></Link>
                <Link to="/About"><li><button>About</button></li></Link>
                <Link to="/signup"><li><button className="signin">Sign in</button></li></Link>
            </ul>
        </div>
    );
};

export default Navbar;
