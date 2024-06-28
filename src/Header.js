import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link className={pathname === '/' ? 'active' : ''} to="/">Home</Link>
        </li>
        <li>
          <Link className={pathname === '/clothing' ? 'active' : ''} to="/clothing">Clothing</Link>
        </li>
        {/* <li>
          <Link className={pathname === '/shorts' ? 'active' : ''} to="/shorts">Shorts</Link>
        </li>
        <li>
          <Link className={pathname === '/trousers' ? 'active' : ''} to="/trousers">Trousers</Link>
        </li>
        <li>
          <Link className={pathname === '/kaftan' ? 'active' : ''} to="/kaftan">Kaftan</Link>
        </li> */}
        <li>
          <Link className={pathname === '/contact' ? 'active' : ''} to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
