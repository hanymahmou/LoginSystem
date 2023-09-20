import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Componant/Layout/Layout'
import About from './Componant/About/About'
import Contact from './Componant/Contact/Contact'
import Home from './Componant/Home/Home';
import Portofolio from './Componant/portofolio/Portofolio'


const router = createBrowserRouter([
{path: "" , element: <Layout/> , children: [
  {path: "About" , element: <About/>},
  {path: "Contact" , element: <Contact/>},
  {path: "Home" , element: <Home/>},
  {path: "" , element: <Home/>},
  {path: "Portofolio" , element: <Portofolio/>},
]}
])

export default class App extends Component {
  render() {
    return <>
    
<RouterProvider router={router}/>
    </>
  }
}
