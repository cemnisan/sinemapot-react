import React from 'react';
import NavBar from './components/layout/Navbar';
import data from './data/router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const routerPath = data.routerPath.map((item, index) => (
    <Route
      key={index}
      exact={item.exact}
      component={item.component}
      path={item.path} />
  ))

  return (
    <Router>
      <header id="headerSection">
        <NavBar />
        <Switch>
          {routerPath}
        </Switch>
      </header>
    </Router>
  );
}

export default App;
