import './App.css';
import Footer from './Componentes/Footer/Footer';
import FormContato from './Componentes/FormContato/FormContato';
import Header from './Componentes/Header/Header';

function  App () {
  return (
    <div className="App grid">
      <Header/>
      <FormContato/>
      <Footer/>
    </div>
  );
}

export default App;
