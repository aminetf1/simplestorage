import React from 'react'
import Header from '../Header/Header'
import {Outlet} from "react-router-dom"
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <div className='app-conatiner'>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout