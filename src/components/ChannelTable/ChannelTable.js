import React, { Component } from 'react';

import axios from "axios";
import {SearchBar} from "../SearchBar/SearchBar";

const clientID = 'vcot0kpqo1jbrdodynosldxmimawiy';

export class ChannelTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText:"",
            results: []
        };

        this.onTextChanged = this.onTextChanged.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {


    }

    onTextChanged(text) {
        this.setState({searchText:text});
    }

    search() {
        var url = 'https://api.twitch.tv/kraken/search/channels?query=' + this.state.searchText;
        var config = {
            headers: {
                'Client-ID':clientID
            }
        };
        axios.get(url,config)
            .then(res => {
                console.log(res);
                this.setState({results:res.data.channels});
            })
    }

    render() {

        var results = this.state.results.map((res) => {
            return <img src={res.logo} />
        });


        return (
            <div id={"channel-table"}>
                <SearchBar text={this.state.searchText} onTextChanged={this.onTextChanged}/>
                <button onClick={this.search}>Search</button>
                {results}
            </div>
        );
    }
}


