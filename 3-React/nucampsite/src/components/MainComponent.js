//~~**##__ IMPORTS __##--**~~\\
import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Directory from "./DirectoryComponent"
import CampsiteInfoComponent from './CampsiteInfoComponent'
import { CAMPSITES } from "../shared/campsites"

class Main extends Component { // Create child class of Component imported from React
  constructor(props) {
    super(props);
    this.state = { 
      campsites: CAMPSITES,
      selectedCampsite: null
    };
  }

  onCampsiteSelect(campsiteId) {
    this.setState({selectedCampsite: campsiteId});
}

  render() { // Passed up the chain to the next parent
    return ( // return a div with className of App
      // Anything outside of this "App" div will NOT be rendered
      <div>
        <Header /> 
        <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
        <CampsiteInfoComponent campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
        <Footer />
      </div>
    );
  };
}

export default Main;