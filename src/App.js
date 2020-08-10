import React, { Component } from 'react';
import './App.css';
import BlogList from './BlogList/blogListing';
import Form from './createBlog/createBlog';
import SearchComponent from './SearchComponent'

class App extends Component {
  constructor() {
    super();

    this.state = {
      BlogUser: '',
      Title: '',
      BlogContent: '',
      items: [
        {BlogUser: 'sid', Title: 'my diary', BlogContent : 'my first entry'},
        {BlogUser: 'user1', Title: 'book', BlogContent : 'second book'},
        {BlogUser: 'user2', Title: 'list', BlogContent : 'table needed'},
      
      ],
      filteredData: [],
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      BlogUser: this.state.BlogUser,
      Title: this.state.Title,
      BlogContent: this.state.BlogContent,
    });

    this.setState({
      items,
      BlogUser: '',
      Title: '',
      BlogContent: '',
    });
  };
  handleSetData = data => {
    console.log(data);
    this.setState({ items: data });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };
  
  render() {
    let { items } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div>
          <SearchComponent
          data={this.state.items}
          handleSetData={this.handleSetData}
        />
            <Form handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              newBlogUser={this.state.BlogUser}
              newTitle={this.state.Title}
              newBlogContent={this.state.BlogContent} />
          </div>
          <div>
            <BlogList items={items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;