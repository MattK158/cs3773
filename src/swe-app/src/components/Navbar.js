import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useUser } from '../UserContext';

function Navbar() {
  const [click, setClick] = useState(false);
  const { user, signIn, signOut } = useUser();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  if (!user) {
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
              <img src={"/assets/logo.png"} alt="Logo" style={{ width: 'auto', height: '60px' }}/>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/signin'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <i class="fa-solid fa-user" style={{ marginRight: '8px' }}></i>
                  Customer Sign-In
                </Link>
              </li>
              <li>
              <Link
                  to='/adminsignin'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <i class="fa-solid fa-user" style={{ marginRight: '8px' }}></i>
                  Admin Sign-In
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={"/assets/logo.png"} alt="Logo" style={{ width: 'auto', height: '60px' }}/>
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
            <li className='nav-item'>
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
            {/* <li>
              <Link
                to='/signup'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fa-solid fa-user" style={{ marginRight: '8px' }}></i>
                Sign Up
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/cart'
                className='nav-links'
                onClick={closeMobileMenu}>
                <i class="fa-solid fa-cart-shopping" style={{ marginRight: '8px' }}></i>                
                Cart
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signin'
                className='nav-links'
                onClick={() => {
                  signOut();
                  closeMobileMenu();
                }}
              >
                <i class="fa-solid fa-user" style={{ marginRight: '8px' }}></i>
                Sign Out
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