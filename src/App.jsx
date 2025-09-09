import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Components/Footer'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import SingleBlogPage from './Components/SingleBlog'
import ScrollToTop from './Components/ScrollTop'

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<SingleBlogPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
