import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import axios from "axios";
import {ChatBot} from "../../bot";
import "./ChannelDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";

const clientID = 'vcot0kpqo1jbrdodynosldxmimawiy';

export  class ChannelDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            channel: null,
            chatbot: null,
            chat: [],
            chatText: "",
            repeatCount: 1
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.onChatHandler = this.onChatHandler.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onRepeatChange = this.onRepeatChange.bind(this);
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var name = this.props.match.params.name;
        if (id && name) {
            var url = 'https://api.twitch.tv/kraken/search/channels?query=' + name + "&limit=100";
            var config = {
                headers: {
                    'Client-ID':clientID
                }
            };
            axios.get(url,config)
                .then(res => {
                    var results = res.data.channels;
                    for (var i = 0; i < results.length;i++) {
                        if (results[i]._id == id) {
                            this.setState({channel:results[i]},() => {
                                var chatbot = new ChatBot(this.state.channel.display_name);
                                chatbot.client.on('chat', this.onChatHandler);
                                this.setState({chatbot:chatbot});

                            });
                        }
                    }
                })
        }
    }

    onChatHandler(channel,user,message,self) {
        console.log(user);
        var chat_message = {
            user:user,
            message:message
        };
        var chat = this.state.chat;
        chat.push(chat_message);
        this.setState({chat:chat});

        var chatDiv = document.getElementById('chat');
        if (chatDiv) {
            chatDiv.scrollTop = chatDiv.scrollHeight - chatDiv.clientHeight;
        }
    }


    sendMessage() {
        var text = this.state.chatText;

        if (!text || text.length < 1) {
            return;
        }

        this.state.chatbot.sendMessage(text,this.state.repeatCount);
    }

    onTextChange(event) {
        this.setState({chatText:event.target.value});
    }

    onRepeatChange(event) {
        this.setState({repeatCount:event.target.value});
    }

    render() {

        var chatLog = this.state.chat.map((msg, index) => {
            if (index % 2 == 0) {
                return (
                    <div className="chat-msg">
                        <span class="chat-username" style={{'color': msg.user.color}}>{msg.user.username}</span>:
                        <span className="chat-message">{msg.message}</span>
                    </div>
                )
            }
            else {
                return (
                    <div style={{'background-color':'grey'}} className="chat-msg">
                        <span class="chat-username" style={{'color': msg.user.color}}>{msg.user.username}</span>:
                        <span className="chat-message">{msg.message}</span>
                    </div>
                )
            }

        });

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        {this.state.channel &&
                            <h1>{this.state.channel.display_name}</h1>
                        }
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <span>Enter message:</span><input onChange={this.onTextChange} value={this.state.chatText} type="text" />
                    </div>


                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        Repeat <input onChange={this.onRepeatChange} value={this.state.repeatCount} type="number" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <button onClick={this.sendMessage}>SEND</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <div id="chat">
                            {chatLog}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


