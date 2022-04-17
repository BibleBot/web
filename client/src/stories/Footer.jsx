import React from 'react';
import { Button } from './Button';
import './footer.css';
import logo from '../assets/logo-dc-crop-fix-transparent.png';
import { Link, NavLink } from 'react-router-dom';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = ({ user, onLogin, onLogout }) => (
  <footer>
    <div className="wrapper">
      <div>
        <NavLink to="/"><img src={logo} alt="BibleBot" height="48px" /></NavLink>
        <div class="footer-text-left">
          <h5>Scripture from your Discord client to your heart.</h5>
          <h5>Made with <FontAwesomeIcon icon={solid("heart")} /> by <span class="kd"><a href="https://kerygma.digital">Kerygma Digital</a></span>.</h5>
        </div>
      </div>
      <div>
        <div class="footer-text-center">
          <a href="https://twitter.com/biblebot_d">
            <FontAwesomeIcon icon={brands("twitter")} />
          </a>
          &nbsp;
          <a href="https://github.com/biblebot">
            <FontAwesomeIcon icon={brands("github")} />
          </a>
          &nbsp;
          <Link to="/rss">
            <FontAwesomeIcon icon={solid("rss")} />
          </Link>
        </div>
      </div>
      <div>
        <div class="footer-text-right">
          <h5>Kerygma Digital Co. (EIN: 86-1609851)</h5>
          <h5>30 North Gould Street, Suite 4000, Sheridan, WY 82801</h5>
        </div>
      </div>
    </div>
  </footer>
);