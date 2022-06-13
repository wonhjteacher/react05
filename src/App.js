
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProductTab from './components/ProductTab/ProductTab';


function App() {
  const title ='React Site';
  return (
    <div className="App">
      <Header title={title} />
      <Main />
      <ProductTab />
      <Footer title={title} />
    </div>
  );
}

export default App;
