import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export class MarkdownInput extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        rawMarkdown: props.initialMarkdown
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.props.updateMarkdown(event.target.value);
      this.setState({
        rawMarkdown: event.target.value        
      });       
    }
  
    render() {
      return (
        <div className='item'>          
          <textarea id="raw-markdown"
            defaultValue={this.state.rawMarkdown}
            onChange={(this.handleChange)}/>
        </div>
      );
    }
  }

  MarkdownInput.propTypes = {
    initialMarkdown: PropTypes.string,
    markdownEntered: PropTypes.func
  };