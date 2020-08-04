import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              NuCamp Bo0tCamp
            </NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Yourself React Everybo
//         </a>
//       </header>
//     </div>
//   );
// }
