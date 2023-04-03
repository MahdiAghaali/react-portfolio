import React from 'react';
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import ProfilePictureCard from '../ProfilePictureCard/ProfilePictureCard';
import './header.scss';

const Header = () => {
  const openMenu = () => {
    const menu = document.getElementById('menu');
    const shadow = document.getElementById('shadow');
    menu.classList.add('isOpen');
    shadow.classList.add('isOpen');
  };
  const closeMenu = () => {
    const shadow = document.getElementById('shadow');
    const menu = document.getElementById('menu');
    menu.classList.remove('isOpen');
    shadow.classList.remove('isOpen');
  };

  return (
    <header>
      <h1>Mahdi Aghaali</h1>
      <button type="button" id="openMenu" onClick={openMenu}>
        <FaBars />
      </button>
      <nav id="menu">
        <button type="button" id="closeMenu" onClick={closeMenu}>
          <CgClose />
        </button>
        <ProfilePictureCard />
        <ul>
          <li><a href="#landing" onClick={closeMenu}>About me</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#social" onClick={closeMenu}>Social</a></li>
        </ul>
      </nav>
      <button type="button" id="shadow" onClick={closeMenu}> </button>
    </header>
  );
};

export default Header;
