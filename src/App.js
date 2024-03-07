import './App.css';
import Nav from './components/Navigation';
import About from './components/About/';
import Home from './components/Home';
import Services from './components/Services';
import Connect from './components/Connect';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {

  return (
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='connect' element={<Connect />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
