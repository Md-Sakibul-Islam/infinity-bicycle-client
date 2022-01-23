import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div>
      

      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
