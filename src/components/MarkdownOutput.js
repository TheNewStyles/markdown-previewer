import React, { Component } from 'react';

export class MarkdownOutput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    };
  }

    render() {
      return (
        <div className='item'>
          <textarea id="converted-markdown" value={this.props.output} readOnly={true}></textarea>
        </div>
      );
    }
  }
  