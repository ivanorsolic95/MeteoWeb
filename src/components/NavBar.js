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
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            {!isMobile && (
             <div className="navbar-grid-container">
                  <ul class="nav flex-column">
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
                          <a className="nav-link" href="#">OLED</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">DHT11</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">BMP180</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">MQ135</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Code</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Demo</a>
                      </li>
                  </ul>
             </div>
            
            )}

            {isMobile && (
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <button onClick={() => setOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Hardware</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Configuration</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tools</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">OLED</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">DHT11</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">BMP180</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">MQ135</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Code</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Demo</a>
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
