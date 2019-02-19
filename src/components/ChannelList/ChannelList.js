import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ChannelList.css";
import "../../App.css";
import {ChannelTile} from "../ChannelTile/ChannelTile";
import {ChannelRow} from "../ChannelRow/ChannelRow";




export  class ChannelList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rowSize: 3
        }

    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {

        let currentHideNav = (window.innerWidth <= 760);
        if (currentHideNav) {
            this.setState({rowSize: 2});
        }
        else {
            this.setState({rowSize: 3});
        }
    }


    render() {


        var results = this.props.channels.map((channel) => {
           return (
               <div className="col-10 col-sm-3">
                   <ChannelTile channel={channel}/>
               </div>
           )
        });

        var channels = [];
        for (var i = 0; i < this.props.channels.length;i+=this.state.rowSize) {

            if (i > this.props.channels.length - 1) {
                break;
            }

            var rows = [];
            for (var j = i; j < i + this.state.rowSize && j <= this.props.channels.length -1;j++) {

                rows.push(
                    <div className="col-6 col-sm-3">
                        <ChannelTile channel={this.props.channels[j]}/>
                    </div>
                );
            }
            channels.push(
                <ChannelRow children={rows}/>
            )
        }

        return (
            <div className="container">
                {channels}
            </div>
        );
    }
}


