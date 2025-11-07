import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Nosotros from './pages/Nosotros'
import Footer from './components/Footer';
import Procedimientos from './pages/Procedimientos';
import Location from './pages/Location';
import Questions from './pages/Question';
import Contacto from './pages/Contacto';
import Botox from './components/Botox';
import Papada from './components/Papada';
import Perfilamiento from './components/Perfilamiento';
import Relleno from './components/Relleno';
import Radiesse from './components/Radiesse';
import Rino from './components/Rino';
import Booster from './components/Booster';
import Adn from './components/adn';
import Sculptra from './components/Sculptra';
import Ellanse from './components/Ellanse';
import Ojeras from './components/Ojeras';
import Armonizacion from './components/Armonizacion';
import Dermapen from './components/Dermapen';
import Peel from './components/Peel';
import Diamond from './components/Diamond';
import Cicatriz from './components/Cicartriz';
import Cosmelan from './components/Cosmelan';
import Grasa from './components/Grasa';
import Celulitis from './components/Celulitis';
import Estrias from './components/Estrias';
import { Route, Routes, useLocation } from 'react-router-dom'


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh] overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/procedimientos' element={<Procedimientos />} />
          <Route path='/location' element={<Location />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/contact' element={<Contacto />} />
        </Routes>
        <Routes>
          <Route path='/botox' element={<Botox />} />
          <Route path='/papada' element={<Papada />} />
          <Route path='/perfilamiento' element={<Perfilamiento />} />
          <Route path='/relleno' element={<Relleno />} />
          <Route path='/radiesse' element={<Radiesse />} />
          <Route path='/rino' element={<Rino />} />
          <Route path='/booster' element={<Booster />} />
          <Route path='/adn' element={<Adn />} />
          <Route path='/sculptra' element={<Sculptra />} />
          <Route path='/ellanse' element={<Ellanse />} />
          <Route path='/ojeras' element={<Ojeras />} />
          <Route path='/armonizacion' element={<Armonizacion />} />
          <Route path='/derma' element={<Dermapen />} />
          <Route path='/peel' element={<Peel />} />
          <Route path='/diamond' element={<Diamond />} />
          <Route path='/cicatriz' element={<Cicatriz />} />
          <Route path='/cosmelan' element={<Cosmelan />} />
          <Route path='/grasa' element={<Grasa />} />
          <Route path='/celulitis' element={<Celulitis />} />
          <Route path='/estrias' element={<Estrias />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
