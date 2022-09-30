import { Component } from "react";
import StudentsList from "./components/StudentsList.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List of Students</h1>
        <StudentsList />
      </div>
    );
  }
}

export default App;

