import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ""};
  }
  render() {
    return (
      <div className="form-group search-bar">
        <input type="text" 
        onChange={event => this.onInputChange(event.target.value)} 
        className="form-control" />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
