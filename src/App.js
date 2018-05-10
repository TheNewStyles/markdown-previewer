import React, { Component } from 'react';
import './App.css';
import { MarkdownInput } from './components/MarkdownInput';
import { MarkdownOutput } from './components/MarkdownOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Tyler Peterson](wwww.github.com/thenewstyles)*'
    };
  }

  onMarkdownEntered(newMarkdown) {
    this.setState({
      markdown: newMarkdown
    });
  }

  render() {
    return (
      <div className='container'>
        <MarkdownInput
          initialMarkdown={this.state.markdown}
          updateMarkdown={this.onMarkdownEntered.bind(this)}
          markdown={this.state.markdown} />
        <MarkdownOutput 
          output={this.state.markdown} />
      </div>
    )
  }
}

export default App;
