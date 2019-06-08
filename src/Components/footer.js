import React from 'react'
import '../index.css'
import logo from '../logo.png'

export default class Footer extends React.Component {
  render(){
    return(
      <footer>
      <nav>
        <div class="navtop_footer">
          <a href="#">Home</a>
          <a href="#">CT Normal Anatomy</a>
          <a href="#">Oncology Cases</a>
          <a href="#">Other</a>
          <a href="#">About</a>
        </div>
      </nav>
      <div class="navbar_">
        <a className = "logo_">
          <img src={logo} className ="logoimg_footer"  />
        </a>
      </div>
      <div class="footer_block">
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-vk"></a>
        <a href="#" class="fab fa-telegram-plane"></a>
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="far fa-envelope"></a>
      </div>
      <div class="footer_end">
        <p>
          &#169;VanoVeryWonderful, Inc. 2019
        </p>
      </div>
    </footer>
    )
  }
}
