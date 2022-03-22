import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './todo/header';
import Home from './todo/index';
import About from './about/about';
import Contact from './contact/contact';
import NoPage from './noPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
    // <Router>
    //   <div>
    //     <Route exact path='/'>
    //       <Home />
    //     </Route>
    //     <Route path='/about'>
    //       <About />
    //     </Route>
    //     <Route path='/news'>
    //       <Contact />
    //     </Route>
    //   </div>
    // </Router>
  );
}
