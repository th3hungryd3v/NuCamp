//~~**##__ IMPORTS __##--**~~\\
import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Directory from "./DirectoryComponent";
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from "../shared/campsites";

class Main extends Component { // Create child class of Component imported from React
  constructor(props) {
    super(props);
    this.state = { 
      campsites: CAMPSITES,
    };
  }

  render() { // Passed up the chain to the next parent
    const HomePage = () => {
      return (
          <Home />
      )
    }
    return ( // return a div with className of App
      // Anything outside of this "App" div will NOT be rendered
      <div>
        <Header /> 
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  };
}

export default Main;