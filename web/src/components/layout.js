import React from 'react'
import Header from './header'
import { Link } from 'gatsby'
import favicon from '../images/unilegal_law_firm_singapore.ico'
import Helmet from 'react-helmet'
import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle, siteImage }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <Header siteTitle={siteTitle} siteImage={siteImage} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer class="site-footer">
      <div class="container1">
        <div class="row">

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><Link to='/about-us/'>About Us</Link></li>
              <li><Link to='/profile-of-lawyers/'>Profile of Lawyers</Link></li>
              <li><Link to='/news/'>News</Link></li>
              <li><Link to="/contact/">Contact Us</Link></li>

            </ul>
          </div>
        </div>
      </div>
      <div class="footericon">
        <a href="https://www.facebook.com/UniLegal-LLC-177963516095678" target="_blank" class="fa fa-facebook" rel="noreferrer"></a>
        <a href="https://www.linkedin.com/company/unilegal-llc" target="_blank" class="fa fa-linkedin" rel="noreferrer"></a>
      </div>
      <div class="line"></div>
      <div class="container1">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by <Link to='/'>UniLegal LLC</Link>.
            </p>
          </div>

        </div>
      </div>
    </footer>
  </>
)

export default Layout
