import React from "react";
//import Data from "./Components/Data"
import EmployeeTable from "./components/EmployeeList";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import data from "./components/Data.json";
import Title from "./components/Title";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
    this.sortBy = this.sortBy.bind(this)
  }
  sortBy(key) {
    this.setState({
      data: data.sort( (a,b) => a[key] > b[key])
    })
  }
  render() {
    return (
      <div>
        <Title />
        <SearchBar />
        <EmployeeTable data={this.state.data} />;
      </div>
    );
  }
}

export default App;
