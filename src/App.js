import React, { Component } from 'react';
import './App.css';

class App extends Component {

  
  render() {
    return (
      <div className='container'>
        <MarkdownInput newText={this.updateText}/>
        <MarkdownOutput />
      </div>
    )
  }
}

class MarkdownInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: 'SHIT'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});       
  }

  render() {
    return (
      <div className='item'>
        <textarea id="input"
          value={this.state.value} 
          onChange={this.handleChange}/>
      </div>
    );
  }
}

class MarkdownOutput extends Component {
  render() {
    return (
      <div className='item'>

      </div>
    );
  }
}

export default App;
