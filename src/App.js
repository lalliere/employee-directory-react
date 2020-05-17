import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./components/Data.json";
import Title from "./components/Title";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      searchFirst: "",
      filteredTable: [],
      sortDirection: "asc",
    };
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort((a, b) => {
      if (this.state.sortDirection === "asc") {
        this.setState({ sortDirection: "desc" });
        return a[key].toLowerCase() < b[key].toLowerCase() ? -1 : 1;
      } else {
        this.setState({ sortDirection: "asc" });
        return a[key].toLowerCase() < b[key].toLowerCase() ? 1 : -1;
      }
    });
    this.setState({ filteredTable: arrayCopy });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    }, this.filterTable);
  };

  filterTable() {
    console.log(this.state.searchFirst)
    // If theres no search or it is an empty string just return the unfiltered data
    if (
      this.state.searchFirst === null ||
      this.state.searchFirst === "" ||
      this.state.searchFirst === " "
    ) {
      this.setState({ filteredTable: data });
    } else {
      // otherwise sort the data and set this sorted data in state.
      const items = this.state.data.filter(
        (data) =>
          data.First_Name.toLowerCase().includes(
            this.state.searchFirst.toLowerCase()
          ) ||
          data.Last_Name.toLowerCase().includes(
            this.state.searchFirst.toLowerCase()
          ) ||
          data.Phone_number.includes(this.state.searchFirst) ||
          data.Email.toLowerCase().includes(this.state.searchFirst.toLowerCase()) ||
          data.Deparment.toLowerCase().includes(
            this.state.searchFirst.toLowerCase()
          )
      );
      this.setState({ filteredTable: items });
    }
  }

  componentDidMount() {
    // Fire this function once the component is ready so we have data to send to the CoolTableComponent
    this.filterTable();
  }

  render() {
    return (
      <div>
        <Title />
        <form className="form">
          <input className="search-bar"
            value={this.state.searchFirst}
            name="searchFirst"
            onChange={this.handleInputChange}
          />
        </form>
        <EmployeeTable data={this.state.filteredTable} sortBy={this.sortBy} />
      </div>
    );
  }
}

export default App;
