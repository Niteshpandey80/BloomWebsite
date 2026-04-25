import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Main from './components/main/Main.jsx'
import Page1 from './components/page1/Page1.jsx'
import Page2 from './components/page2/Page2.jsx'
import Footer from './components/footer/Footer.jsx'



const App = () => {
  return (
    <div>
     <Navbar/>
     <Main/>
     <Page1/>
     <Page2/>
     <Footer/>
    </div>
  )
}

export default App
