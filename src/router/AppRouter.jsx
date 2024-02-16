import React from 'react'
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Home from '../components/pages/home/Home'
import Exams from '../components/pages/exams/Exams'
import About from '../components/pages/about/About'
import Contact from '../components/pages/contact/Contact'
import Book from '../components/pages/book/Book'
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/book" element={<Book/>}/>
          <Route path="/exams" element={<Exams/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
