//~~**##__ IMPORTS __##--**~~\\
import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'
import "./App.css";

const store = ConfigureStore();
class App extends Component { // Create child class of Component imported from React
    render() { // Passed up the chain to the next parent
    return ( // return a div with className of App
      // Anything outside of this "App" div will NOT be rendered
      <Provider store={store}>
        <BrowserRouter>
          <div className="App"> 
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
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
