import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import data from "./components/Data.json";
import Title from "./components/Title";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      search: ""
    };
    this.sortBy = this.sortBy.bind(this);
  }
  // sortBy(key) {
  //   this.setState({
  //     data: data.sort((a, b) => a > b),
  //   });
  // }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }


  render() {
    return (
      <div>
        <Title />
        <SearchBar />
        <EmployeeTable data={this.state.data} sortBy={this.sortBy}  />
      </div>
    );
  }
}

export default App;
