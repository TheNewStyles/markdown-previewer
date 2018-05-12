import React, { Component } from 'react';
import './App.css';
import { MarkdownInput } from './components/MarkdownInput';
import { MarkdownOutput } from './components/MarkdownOutput';
import { Header } from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '\n\n   Heading\n   =======\n   \n   Sub-heading\n   -----------\n    \n   ### Another deeper heading\n    \n   Paragraphs are separated\n   by a blank line.\n   \n   Leave 2 spaces at the end of a line to do a  \n   line break\n   \n   Text attributes *italic*, **bold**, \n   `monospace`, ~~strikethrough~~ .\n   \n   Shopping list:\n   \n     * apples\n     * oranges\n     * pears\n   \n   Numbered list:\n   \n     1. apples\n     2. oranges\n     3. pears\n   \n   The rain---not the reign---in\n   Spain.\n   \n    *[Tyler Peterson](wwww.github.com/thenewstyles)*'
    };
  }

  onMarkdownEntered(newMarkdown) {
    this.setState({
      markdown: newMarkdown
    });
  }

  render() {
    return (
      
      <div>
        <Header/>
        <div className='container'>
          <MarkdownInput
            initialMarkdown={this.state.markdown}
            updateMarkdown={this.onMarkdownEntered.bind(this)}/>
          <MarkdownOutput 
            output={this.state.markdown} />
        </div>
      </div>
    )
  }
}

export default App;
