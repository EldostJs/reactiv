import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import About from './components/AboutStore/About';
import Catalig from './components/catalog/Catalig';
import Sell from './components/Buy/Sell';
import Bucked from './components/Bucked/Bucked';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/catalog' element={<Catalig />} />
          <Route path='/buy/:id/:name/:price/:image' element={<Sell />} />
          <Route path='/buc' element={<Bucked/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;