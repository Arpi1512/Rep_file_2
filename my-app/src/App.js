import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "./components/Button";
import Toolbar from "./components/Toolbar";

class App extends React.Component {
  state = {
    buttonValue: "First Button",
    toolbarTitle: "Title",
  };

  onButtonClick = () => {
    this.setState({ buttonValue: "Second Button" }, () => {
      this.onChangeToolbarTitleClick();
    });
  };

  onChangeToolbarTitleClick = () => {
    this.setState({
      toolbarTitle: `Button text changed to ${this.state.buttonValue}`,
    });
  };
  render() {
    return (
      <div className="App">
        <Toolbar title={this.state.toolbarTitle} />
        <button onClick={this.onButtonClick}>Change Values</button>
        <Button value={this.state.buttonValue} />
      </div>
    );
  }
}

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
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
