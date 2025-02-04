import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = ({activePath,setActivePath}) => {
    const [menuActive, setMenuActive] = useState(false);
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
                <Link to="/"><li><button className={activePath === '/' ? 'active' : ''} onClick={() => setActivePath('/')}>Home</button></li></Link>
                <Link to="/Pyq"><li><button className={activePath === '/Pyq' ? 'active' : ''} onClick={() => setActivePath('/Pyq')}>PYQ</button></li></Link>
                {/* <Link to="/Lectures">*/}<li><button onClick={notavailable}>Lectures</button></li>{/*</Link> */}
                {/* <Link to="/Notes">*/}<li><button onClick={notavailable}>Notes</button></li>{/*</Link> */}
                <Link to="/Juetserver"><li><button className={activePath === '/Juetserver' ? 'active' : ''} onClick={() => setActivePath('/Juetserver')}>JUET Server</button></li></Link>
                <Link to="/About"><li><button className={activePath === '/About' ? 'active' : ''} onClick={() => setActivePath('/About')}>About</button></li></Link>
                <li><button className={`signin ${activePath === '/signup' ? 'active' : ''}`}
                            onClick={notavailable}>Sign in</button></li>
            </ul>
        </div>
    );
};

export default Navbar;
