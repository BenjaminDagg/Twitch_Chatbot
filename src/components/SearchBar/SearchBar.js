import React, { Component } from 'react';

import axios from "axios";



export  class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.onTextChange = this.onTextChange.bind(this);
    }

    componentDidMount() {

    }

    onTextChange(event) {
        this.props.onTextChanged(event.target.value);
    }

    render() {

        return (
            <div>
                <input onChange={this.onTextChange} type="text" />
            </div>
        );
    }
}


