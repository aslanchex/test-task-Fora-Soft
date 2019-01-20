//chat list component

import React, { Component } from "react";
// import io from "socket.io-client";
// import CreateChatRoom from "./CreatChatRoom";
import MessageArea from "./MessageArea";
import SendVideoContainer from "./SendVideoContainer";


export default class ChatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chattitle: "",
      chatlist: ['room 1', 'room 2', 'room 3', 'room 4']
    };

    // this.socket = io("localhost:5000");

    // this.createChatRoom.bind(this);
    // this.socket.on("RECEIVE_CHATNAME", data => {
    //   this.addChat(data);
    // });
    // this.addChat.bind(this);
    // this.createChatRoom.bind(this);
  }

//   addChat = data => {
//     this.setState({ chatlist: [...this.state.chatlist, data] });
//   };

//   createChatRoom = ev => {
//     ev.preventDefault()
//     let value = this.refs.nameField.state.value;
//     this.setState({ chattitle: value });
//     this.socket.emit("SEND_CHATNAME", {
//       chattitle: value,
//       chatlist: this.state.chatlist
//     });
//     console.log(77);
//   };

  render() {
    if (!this.state.chattitle) {
        return (
            <div className="char-room-container">
              {this.state.chatlist.map((val, i) => {
                return (
                  <div className="chat-room" key={i}>
                    <h3>{val}</h3>
                  </div>
                );
              })}
              {/* <CreateChatRoom ref="nameField" onSubmit={this.createChatRoom} /> */}
            </div>
        );
    } else {
        return (
            <div className="container">
              <SendVideoContainer /> */}
              <MessageArea
                value=""
                ref="nameField"
                message={this.state.message}
                messages={this.state.messages}
                onSubmit={this.sendMessage}
              />
            </div>
        );
    }
  }
}
