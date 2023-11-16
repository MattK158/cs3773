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
          <img src={"/assets/logo.png"} alt="Logo" style={{ width: 'auto', height: 'px' }}/>
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <i class="fa-solid fa-house" style={{ marginRight: '8px' }}></i>
               Home
              </Link>
            </li>
            <li>
              <Link
                to='/catalog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fa-solid fa-basket-shopping" style={{ marginRight: '8px' }}></i>
                Catalog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/checkout'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fa-regular fa-credit-card" style={{ marginRight: '8px' }}></i>
                Checkout
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fa-solid fa-user" style={{ marginRight: '8px' }}></i>
                Sign In
              </Link>
            </li>

            <li>
              <Link
                to='/signup'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fa-solid fa-user" style={{ marginRight: '8px' }}></i>
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to='/cart'
                className='nav-links'
                onClick={closeMobileMenu}>
                <i class="fa-solid fa-cart-shopping" style={{ marginRight: '8px' }}></i>                
                Cart
              </Link>
            </li>
            
            {/* <li>
              <Link
                to='/admin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Admin
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;