import React from 'react'
import { Header,Footer } from './components/index.js'
import { Outlet } from 'react-router-dom'
function LayoutOutlet() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default LayoutOutlet