import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer'
import NavHeader from './components/NavHeader/NavHeader'
import Index from './pages/Index';
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'


class App extends Component {
  render() {
    return (
      <Router>
        <div id="body-target">
          <NavHeader />
          <div class="container">
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
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
