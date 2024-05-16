import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOutlet from './LayoutOutlet.jsx'
import {Home, About, Contact} from './components/index.js'
const router= createBrowserRouter([{
  path:'/',
  element: <LayoutOutlet/>,
  children:[{path:"/", element:<Home />},{path:"About", element:<About/>},{path:"Contact", element:<Contact />},{}]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
