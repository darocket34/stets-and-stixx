import './App.css';
import Nav from './components/Navigation';
import About from './components/About/';
import Home from './components/Home';
import Events from './components/Events';
import Connect from './components/Connect';
import Pricing from './components/Pricing'
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='events' element={<Events />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='connect' element={<Connect />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
