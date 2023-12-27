import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const navItems = [
  {
    name: 'startseite',
    href: '/',
  },
  {
    name: 'Was?',
    href: '/ueber',
  },
  {
    name: 'regeln',
    href: '/regeln',
  },
  {
    name: 'Problem?',
    href: '/pech',
  },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Router className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a className="logo" href="/">
          PuttParty
        </a>
        {/* Hamburger Menu */}
        <button
          className="hamburger_menu"
          onClick={() => setIsActive(!isActive)}
        >
          <span className={`${isActive ? 'active' : ''} bar`}></span>
          <span className={`${isActive ? 'active' : ''} bar`}></span>
          <span className={`${isActive ? 'active' : ''} bar`}></span>
        </button>
        {/* Desktop Menu */}
        <div className="menu">
          {navItems.map((item, index) => (
            <a href={item.href} key={index}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className={`navbar__mobile ${isActive ? 'active' : 'hidden'}`}>
        {navItems.map((item, index) => (
          <a
            href={item.href}
            key={index}
            onClick={() => setIsActive(!isActive)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </Router>
  );
};

export default Navbar;
