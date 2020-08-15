//~~**##__ IMPORTS __##--**~~\\
import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";

class App extends Component { // Create child class of Component imported from React
    render() { // Passed up the chain to the next parent
    return ( // return a div with className of App
      // Anything outside of this "App" div will NOT be rendered
      <BrowserRouter>
        <div className="App"> 
          <Main />
        </div>
      </BrowserRouter>
    );
  };
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
