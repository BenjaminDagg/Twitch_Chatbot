import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const clientID = 'vcot0kpqo1jbrdodynosldxmimawiy';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    var url = 'https://api.twitch.tv/kraken/search/channels?query=starcraft';
    var config = {
      headers: {
        'Client-ID':clientID
      }
    };
    axios.get(url,config)
        .then(res => {
          console.log(res);
        })

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
