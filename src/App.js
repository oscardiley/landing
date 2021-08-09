import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './Components';
import GlobalStyle from './Components/globalStyles';
import Home from './Pages/HomePage/Home';
import Products from './Pages/Products/Products';
import Services from './Pages/Services/Services';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
