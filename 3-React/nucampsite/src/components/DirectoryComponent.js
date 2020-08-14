import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderDirectoryItem({campsite, onClick}) {
    return(
        <Card onClick={() => onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

// Everytime you make a react class component with a constructor() method, the next line of code should be super(props).
// Every react component must return a react element
function Directory(props) { // Create a child class Directory using the defaults of the Component parent class.
    
        const directory = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }

export default Directory;