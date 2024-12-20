import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
