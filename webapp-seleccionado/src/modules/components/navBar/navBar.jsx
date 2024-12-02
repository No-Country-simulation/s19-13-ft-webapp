import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccountDropdown from './accountDropdown';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className=" bg-white my-10 h-11">
        <div className="flex  items-center justify-between px-4 max-w-7xl mx-auto">
          <a href="/" className="flex items-center gap-2 text-black no-underline">
           <img src="logo-33.svg" alt="Logo" />
            
          </a>
          <div className="flex items-center gap-4">
            <Link to={'/crear-juego'}><button className="flex font-Roboto text-center content-center hover:text-blue-950  hover:fill-blue-950 transition duration-500">
             <img src="mas.svg" alt="" className="px-1" />
              <p>Crear actividad</p>
            </button></Link>
            
            <div className='relative' ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={` flex flex-row items-center gap-2 text-black px-4 py-2 rounded-md fill-black hover:text-blue-950 hover:fill-blue-950 transition duration-500 ${
                  isDropdownOpen ? 'bg-blue-800 text-white' : ''
                }`}
              >
                <svg
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.49999 2.16671C7.39226 2.1665 6.30384 2.45684 5.34339 3.00875C4.38293 3.56065 3.58403 4.35481 3.02642 5.31196C2.46881 6.26911 2.17199 7.35578 2.1656 8.46349C2.15921 9.57121 2.44346 10.6612 2.98999 11.6247C3.35939 11.1447 3.83425 10.756 4.37785 10.4887C4.92145 10.2214 5.51924 10.0827 6.12499 10.0834H10.875C11.4807 10.0827 12.0785 10.2214 12.6221 10.4887C13.1657 10.756 13.6406 11.1447 14.01 11.6247C14.5565 10.6612 14.8408 9.57121 14.8344 8.46349C14.828 7.35578 14.5312 6.26911 13.9736 5.31196C13.4159 4.35481 12.617 3.56065 11.6566 3.00875C10.6961 2.45684 9.60772 2.1665 8.49999 2.16671ZM14.7882 13.3102C14.8874 13.1809 14.9824 13.0484 15.0732 12.9128C15.9509 11.6087 16.4187 10.072 16.4167 8.50004C16.4167 4.12767 12.8724 0.583374 8.49999 0.583374C4.12761 0.583374 0.583321 4.12767 0.583321 8.50004C0.580826 10.2391 1.15335 11.9303 2.21178 13.3102L2.20782 13.3245L2.48886 13.6514C3.23136 14.5195 4.15325 15.2162 5.19101 15.6936C6.22876 16.171 7.35769 16.4177 8.49999 16.4167C8.67099 16.4167 8.84093 16.4114 9.00982 16.4009C10.4383 16.3108 11.8152 15.8332 12.9927 15.0194C13.5558 14.6309 14.0662 14.1711 14.5111 13.6514L14.7922 13.3245L14.7882 13.3102ZM8.49999 3.75004C7.8701 3.75004 7.26601 4.00026 6.82061 4.44566C6.37521 4.89106 6.12499 5.49515 6.12499 6.12504C6.12499 6.75493 6.37521 7.35902 6.82061 7.80442C7.26601 8.24982 7.8701 8.50004 8.49999 8.50004C9.12988 8.50004 9.73397 8.24982 10.1794 7.80442C10.6248 7.35902 10.875 6.75493 10.875 6.12504C10.875 5.49515 10.6248 4.89106 10.1794 4.44566C9.73397 4.00026 9.12988 3.75004 8.49999 3.75004Z'
                  />
                </svg>
                <svg
                  width='13'
                  height='7'
                  viewBox='0 0 13 7'
                  className='md:hidden'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 1L6.5 6L12 1'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <p className='hidden md:inline'>Mi cuenta</p>
              </button>
              <AccountDropdown isOpen={isDropdownOpen} />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
