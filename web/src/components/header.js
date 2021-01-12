import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'
import styles from './header.module.css'
import logo from '../images/logo-unilegal-llc.png'
import logomob from '../images/logo-unilegal-llcmob.png'
import mystyles from './header.scss'


const Header = ({ onHideNav, onShowNav, showNav, siteTitle, siteImage }) => (
  <div className={styles.root}>
    <div class="mobile-container">
      <div class="content">
        <nav>
          <input type="checkbox" id="hamburger1" />
          <label for="hamburger1"></label>
          <ul class="nav-links">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about-us/'>About Us</Link>
            </li>
            <li>
              <Link to='/profile-of-lawyers/'>Profile of Lawyers</Link>
            </li>
            <li>
              <Link to='/news/'>News</Link>
            </li>
            <li>
              <Link to='/contact/'>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div class="logodiv">
          <Link to='/'>
            <img className="logo"
              src={logomob}
              alt="portomono_logo"
              height="720"
              width="2500"
            /></Link>
        </div>
      </div>
    </div>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to='/'>
          <img className="logo"
            src={logo}
            alt="portomono_logo"
          /></Link>
      </h1>


      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <div className="headerbtn">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about-us/'>About Us</Link>
            </li>
            <li>
              <Link to='/profile-of-lawyers/'>Profile of Lawyers</Link>
            </li>
            <li>
              <Link to='/news/'>News</Link>
            </li>
            <li>
              <Link to='/contact/'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Header
