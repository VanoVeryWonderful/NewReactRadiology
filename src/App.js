import React from 'react'
import './App.css'
import logo from './logo.png'
import {Route, NavLink} from 'react-router-dom'
import Content from './Components/content'
import Footer from './Components/footer'
import NormalAnatomy from './contentComponents/CT_normalAnatomy'
import './index.css'

 class App extends React.Component {
  constructor(){
    super()
    this.state = {
      showMenu: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  const openMenu = this.state.showMenu;
  this.setState(prevState => {
    return ({
      showMenu: !prevState.showMenu
    })

  });

}
  render(){
    return(
      <div>
      <header>
         <div className= 'navbar_'>
           <a href="<App/>" className = 'logo_'>
             <img className = 'logoimg' src = {logo}/>
           </a>
         </div>
         <nav>
          <div className= {this.state.showMenu ? "navtop responsive": "navtop"}>
            <NavLink to="/" className= "_pink">Home</NavLink>
            <NavLink to= "/normalanatomy" >CT Normal Anatomy</NavLink>
            <a href="#">Oncology Cases</a>
            <a href="#">Other</a>
            <a href="#">About</a>
            <div className="block_search">
                <input type="text" className="input_search" />
                <button className="btn_search" type="button">Search</button>
            </div>
            <a href="#" onClick={this.handleClick} className="menu_icon">&#9776;</a>
          </div>
        </nav>

      </header>
      <Route path = "/" exact component = {Content}/>
      <Route path = "/normalanatomy" exact component = {NormalAnatomy}/>
      <Footer />
      </div>
    )
  }
}

export default App
