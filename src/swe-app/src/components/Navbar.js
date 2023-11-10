import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={"https://cdn.discordapp.com/attachments/986188819592257546/1171881786872172664/logoV3.png?ex=655e4af6&is=654bd5f6&hm=859de9d33629b7a5a532899369c994a6ee9d73c9dc4c648efb5acf79520fe791&"} alt="Logo" style={{ width: 'auto', height: 'px' }}/>
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/catalog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Catalog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/checkout'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Checkout
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>

            <li>
              <Link
                to='/signup'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to='/cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
            
            <li>
              <Link
                to='/admin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;