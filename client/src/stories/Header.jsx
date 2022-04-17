import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';
import logo from '../assets/logo-dc-crop.png';
import { NavLink } from 'react-router-dom';

export const Header = ({ user, onLogin, onLogout }) => (
  <header>
    <div className="wrapper">
      <div>
        <NavLink to="/"><img src={logo} alt="BibleBot" height="48px" /></NavLink>
        <nav>
          <ul>
            <li><NavLink end to="/" className={(navData) => navData.isActive ? "active-nav" : "" }>Home</NavLink></li>
            <li><NavLink end to="/blog" className={(navData) => navData.isActive ? "active-nav" : "" }>Blog</NavLink></li>
            <li><NavLink end to="/usage-and-commands" className={(navData) => navData.isActive ? "active-nav" : "" }>Usage and Commands</NavLink></li>
            <li><NavLink end to="/permissions" className={(navData) => navData.isActive ? "active-nav" : "" }>Permissions</NavLink></li>
            <li><NavLink end to="/terms" className={(navData) => navData.isActive ? "active-nav" : "" }>Terms of Service</NavLink></li>
            <li><NavLink end to="/copyrights" className={(navData) => navData.isActive ? "active-nav" : "" }>Copyrights</NavLink></li>
            <li><NavLink end to="/donate" className={(navData) => navData.isActive ? "active-nav" : "" }>Donate</NavLink></li>
          </ul>
        </nav>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              <img src={user.avatar} alt="Your Avatar" />
              &nbsp;&nbsp;
              <NavLink to="/dashboard">
                <Button primary size="small" label="Dashboard" />
              </NavLink>
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button primary size="small" onClick={onLogin} label="Log in with Discord" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
