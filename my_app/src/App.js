import Header from './components/header/Header';
import Card from './components/card/Card';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import { BasketProvider } from './components/card/BasketContext';

function App() {
  return (
    <div>
      <BasketProvider>
        <Header />
        <main>
          <Cards /> 
        </main>
        <Footer />
      </BasketProvider>
    </div>
  );
}

export default App;