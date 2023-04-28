import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Todo from './assets/Pages/Todo'

import NotFound from './assets/Pages/NotFound'
import Contact from './assets/Pages/Contact'
import About from './assets/Pages/About'
import Home from './assets/Pages/Home'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container my-5'>
          <Routes>

            <Route  path='/' element={<Home/>} />
            <Route  path='/About' element={<About/>} />
            <Route  path ='/contact' element={<Contact/>} />
            <Route path='/NotFound' element={<NotFound/>} />
            <Route path='/todo' element={<Todo/>}/>
            <Route path='*' element={<Navigate to={'/notfound'}/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
