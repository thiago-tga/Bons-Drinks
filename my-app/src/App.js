import "../src/Asserts/reset.css"
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import Contato from "./Pages/Contato/index";
import Home from "./Pages/Home/index";
import SobreNos from "./Pages/SobreNos/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path = '/sobre'>
            <SobreNos/>
          </Route>

          <Route path='/'>
            <Home/>
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
