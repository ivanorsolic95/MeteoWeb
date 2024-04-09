import React, {useState, useEffect} from 'react';
import '../styles/navbar.css'

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.addEventListener('resize', handleResize);
    }, []);

    return (
        <nav>
            {!isMobile && (
             <div class="navbar-grid-container">
                  <ul class="nav flex-column">
                      <li class="nav-item">
                          <a class="nav-link" href="#">Hardware</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Configuration</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Tools</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">OLED</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">DHT11</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">BMP180</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">MQ135</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Code</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Demo</a>
                      </li>
                  </ul>
             </div>
            
            )}
        </nav>
    )
}

export default NavBar;
