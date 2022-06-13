
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  const title ='React Site';
  return (
    <div className="App">
      <Header title={title} />
      <Main />
      <Footer title={title} />
    </div>
  );
}

export default App;
