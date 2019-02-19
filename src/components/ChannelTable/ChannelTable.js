import React, { Component } from 'react';
import {PageButtons} from "../PageButtons/PageButtons";
import axios from "axios";
import {SearchBar} from "../SearchBar/SearchBar";
import {ChannelList} from "../ChannelList/ChannelList";

const clientID = 'vcot0kpqo1jbrdodynosldxmimawiy';

export class ChannelTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText:"",
            results: [],
            page:0
        };

        this.onTextChanged = this.onTextChanged.bind(this);
        this.search = this.search.bind(this);
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {


    }

    /*
    Callback from search bar when the search text has changed
    update state with the new tesxt
     */
    onTextChanged(text) {
        this.setState({searchText:text});
    }

    search() {

        //reset page to first
        this.setState({page:0});

        //remove spaces from search text
        var searchText = this.state.searchText.replace(/\s/g,'+');

        var url = 'https://api.twitch.tv/kraken/search/channels?query=' + searchText + "&limit=100";
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

    /*
    Callback from page buttons to change index of page
     */
    onPageChanged(i) {
        this.setState({page:i});
    }

    render() {

        //get subset of results list based on what page your on
        var page = this.state.page * 10;
        if (this.state.page == 9) {
            var pageList = this.state.results.slice(page,page + 10);
        }
        else {
            var pageList = this.state.results.slice(page,page + 9);
        }



        return (
            <div id="channel-table">
                <SearchBar text={this.state.searchText} onTextChanged={this.onTextChanged}/>
                <button onClick={this.search}>Search</button>
                {this.state.results.length > 0 &&
                    <PageButtons currentPage={this.state.page} onPageChange={this.onPageChanged} size={this.state.results.length}/>
                }
                <ChannelList channels={pageList}/>
                {this.state.results.length > 0 &&
                    <PageButtons currentPage={this.state.page} onPageChange={this.onPageChanged} size={this.state.results.length}/>
                }
            </div>
        );
    }
}


