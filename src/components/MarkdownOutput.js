import React, { Component } from 'react';
import marked from 'marked'
export class MarkdownOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {        
    };
  }

  outputHTML() {
    let rawMarkup = marked(this.props.output, {sanitize: true});
      return  {__html: rawMarkup } ;
  }

    render() {
      return (
        <div className='item'>
          <span id="converted-markdown" dangerouslySetInnerHTML={this.outputHTML()} readOnly={true}></span>
        </div>
      );
    }
  }
  