import React from 'react';
import ProfilePictureCard from '../ProfilePictureCard/ProfilePictureCard';
import './header.scss';

const Header = () => (
  <header>
    <ProfilePictureCard />
    <nav>
      <ul>
        <li>About me</li>
        <li>Projects</li>
        <li>Social</li>
      </ul>
    </nav>
  </header>
);

export default Header;
