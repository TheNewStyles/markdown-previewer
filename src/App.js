import React, { Component } from 'react';
import './App.css';
import { MarkdownInput } from './components/MarkdownInput';
import { MarkdownOutput } from './components/MarkdownOutput';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: 'Heading\n=======\n'
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
        {/* TODO send markdown to output */}
        <MarkdownOutput />
      </div>
    )
  }
}

export default App;
