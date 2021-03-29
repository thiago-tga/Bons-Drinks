import "../src/Asserts/reset.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import Drinks from "./Pages/Drinks/index";
import SobreNos from "./Pages/SobreNos/index";
import Home from "./Pages/Home/index";
import NossoTime from './Pages/NossoTime/index'
import Contato from "./Pages/Contato/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>

          <Route path = '/drinks/'>
            <Drinks/>
          </Route>

          <Route path = '/sobre'>
            <SobreNos/>
          </Route>

          <Route exact path='/' >
            <Home/>
          </Route>

          <Route path='/time'>
            <NossoTime/>
          </Route>

          <Route path="/contato">
            <Contato/>
          </Route>
          
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
