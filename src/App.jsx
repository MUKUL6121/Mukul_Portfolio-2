import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Display from './component/Display'
import Header from './component/Header/header';
import Projects from './component/main/Projects/Projects';
import ContactMe from './component/main/ContactMe/ContactMe';
// import Main from './component/main/main';
import Skills from './component/main/Skills/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div id="app">
        <Router>
          <Routes>
            <Route path='/' element={<Display />}></Route>
            <Route path='/Home' element={<Display />}></Route>
            <Route path='/skills' element={<><Header /><Skills /></>}></Route>
            <Route path='/Projects' element={<><Header /><Projects /></>}></Route>
            <Route path='/Contact' element={<><Header /><ContactMe /></>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
