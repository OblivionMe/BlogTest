import React from "react";

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () =>
      this.globalSearch()
    );
  };

  globalSearch = () => {
    let { searchInput } = this.state;
    console.log(this.props.data)
    let items = this.props.data.filter(value => {
      return (
        value.BlogUser.toLowerCase().includes(searchInput.toLowerCase()) 
        // ||
        // value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
        // value.visits
        //   .toString()
        //   .toLowerCase()
        //   .includes(searchInput.toLowerCase())
      );
    }
    );
    this.props.handleSetData(items);
  };

  render() {
    return (
      <>
        <br />
        <input
          name="searchInput"
          placeholder="search blogger name..."
          value={this.state.searchInput || ""}
          onChange={this.handleChange}
          label="Search"
        />
        <br />
        <br />
      </>
    );
  }
}