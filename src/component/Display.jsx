// import './App.css';
import Header from './Header/header';
import Main from './main/main';
// import Skills from './component/main/Skills/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Display() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}

export default Display;