import './App.css';
import Footer from './Componentes/Components/Footer';
import FormContato from './Componentes/Components/FormContato';
import Header from './Componentes/Components/Header';

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
