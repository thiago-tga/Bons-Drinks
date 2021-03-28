import "../src/Asserts/reset.css"
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import Contato from "../src/Pages/Contato/Contato";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
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
