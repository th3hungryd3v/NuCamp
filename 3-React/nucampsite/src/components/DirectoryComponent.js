import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { CampsiteInfoComponent } from './CampsiteInfoComponent'

// Everytime you make a react class component with a constructor() method, the next line of code should be super(props).
// Every react component must return a react element
class Directory extends Component { // Create a child class Directory using the defaults of the Component parent class.
    constructor(props) { // props || properties = The only argument that is required when using a constructor() method to create class components.
        super(props); // super(props) = 1st line of the constructor() method required ** alleviates having to use this.props = props in the constructor(), all that happens in the base component in the parent class Component
        this.state = { // state = special property in React ** Always needs to hold an object
            selectedCampsite: null // keeps track of the last clicked campsite ** set to null
    };

}

onCampsiteSelect(campsite) {
    this.setState({selectedCampsite: campsite});
}
    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfoComponent campsite={this.state.selectedCampsite} />
                {/* <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Directory;