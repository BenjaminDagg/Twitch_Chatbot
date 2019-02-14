import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {ChannelTable} from "./components/ChannelTable/ChannelTable";

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
          <ChannelTable/>
      </div>
    );
  }
}

export default App;
