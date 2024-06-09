import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import About from './components/AboutStore/About';
import Catalig from './components/catalog/Catalig';
import Sell from './components/Buy/Sell';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/catalog' element={<Catalig/>}/>
          <Route path='/buy' element={<Sell/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;