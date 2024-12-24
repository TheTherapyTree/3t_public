import logo from './logo.svg';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Staff from './Pages/Staff';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Faq from './Pages/Faq';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element = {<Layout />}>
            <Route exact path = "/" element = {<Home />} />
            <Route exact path = "/about" element = {<About />} />
            <Route exact path = "/directordesk" element = {<Staff />} />
            <Route exact path = "/faq" element = {<Faq />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
