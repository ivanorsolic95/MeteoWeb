import React, {useState, useEffect} from 'react';
import '../styles/navbar.css'
import { Link } from 'gatsby';

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className='navbar-container'>
            {!isMobile && (
             <div className="navbar-grid-container">
                  <ul class="nav flex-column">
                      <li className="nav-item">
                          <Link to='/' className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/hardware/' className="nav-link">Hardware</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/configuration/' className="nav-link">Configuration</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/tools/' className="nav-link">Tools</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/oled/' className="nav-link">OLED</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/dht11/' className="nav-link">DHT11</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/bmp180/' className="nav-link">BMP180</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/mq135/' className="nav-link">MQ135</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/code/' className="nav-link">Code</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/demo/' className="nav-link">Demo</Link>
                      </li>
                  </ul>
             </div>
            
            )}

            {isMobile && (
                <div className="navbar-flex-container">
                    <button onClick={() => setOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="navbar-menu-button" aria-controls="navbar-default" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="navbar-list">
                        <li>
                        <Link to='/' className="navbar-link" aria-current="page">Home</Link>
                        </li>
                        <li>
                        <Link to='/hardware/' className="navbar-link" aria-current="page">Hardware</Link>
                        </li>
                        <li>
                        <Link to='/configuration/' className="navbar-link">Configuration</Link>
                        </li>
                        <li>
                        <Link to='/tools/' className="navbar-link">Tools</Link>
                        </li>
                        <li>
                        <Link to='/oled/' className="navbar-link">OLED</Link>
                        </li>
                        <li>
                        <Link to='/dht11/' className="navbar-link">DHT11</Link>
                        </li>
                        <li>
                        <Link to='/bmp180/' className="navbar-link">BMP180</Link>
                        </li>
                        <li>
                        <Link to='/mq135/' className="navbar-link">MQ135</Link>
                        </li>
                        <li>
                        <Link to='/code/' className="navbar-link">Code</Link>
                        </li>
                        <li>
                        <Link to='/demo/' className="navbar-link">Demo</Link>
                        </li>

                    </ul>
                    </div>
                </div>
            )

            }
        </nav>
    )
}

export default NavBar;
