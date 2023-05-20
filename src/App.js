import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import About from './components/HomePage/About';
import Products from './components/HomePage/Products';
import Contact from './components/HomePage/Contact';
import Cart from './components/HomePage/Cart';
import Navbar from './components/HomePage/Navbar';
import Footer from './components/HomePage/Footer';
import ViewEachProduct from './components/HomePage/ViewEachProduct';

function App() {
  return (
    <div className='AppHome'>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<ViewEachProduct part={"part"}/>} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
