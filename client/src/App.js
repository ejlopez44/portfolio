import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer';
import NavHeader from './components/NavHeader/NavHeader';
import Index from './pages/Index';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Admin from './pages/Admin';
import EditProject from './pages/EditProject';
import AddProject from './pages/AddProject';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="body-target">
          <NavHeader />
          <br />
          <div className="container">
            <Switch>
              <Route exact path={["/", "/index"]}>
                <Index />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
              <Route exact path="/admin">
                <Admin />
              </Route>
              <Route path="/edit/:id" component={EditProject} />
              <Route exact path="/add-project" component={AddProject} />
            </Switch>
          </div>
          <br />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
