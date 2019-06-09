import React from 'react'
import './App.css'
import Header from './Components/header'
import Content from './Components/content'
import Footer from './Components/footer'
import NormalAnatomy from './contentComponents/CT_normalAnatomy'
import './index.css'
function App (){
  return(
    <div>
      <Header />
      <Content />
      <NormalAnatomy style = {{
        fontFamily: 'Raleway',
       	backgroundColor: "#000"}}/>
      <Footer />
    </div>
  )
}

export default App
