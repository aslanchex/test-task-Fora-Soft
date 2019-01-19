import React from "react";
import io from "socket.io-client";
import Login from "./components/Login"
import MessageArea from "./components/MessageArea"
import SendVideo from "./components/SendVideo"

export default class Chat extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      username: "",
      message: "",
      messages: []
    };

    // socket listening to the running server port
    this.socket = io("localhost:5000");

    // the code below catch the emit sent from the server and add the object
    this.socket.on("RECEIVE_MESSAGE", (data) => {
        this.addMessage(data);
     });

    this.addMessage.bind(this);

    // sending the message to the server every time to click 'Send Message'
    this.sendMessage.bind(this);
    this.setNickname.bind(this);
  }
   
  addMessage = (data) => {
    this.setState({ messages: [...this.state.messages, data]});
  };

  sendMessage = (ev) => {
    ev.preventDefault();
    let value = this.refs.nameField.state.value;
    this.setState({ message: value });
    this.socket.emit("SEND_MESSAGE", {
      author: this.state.username,
      message: value,
      messages: this.state.messages,
      id: this.state.messages.length
    });
  };

  setNickname = (ev) => {
    ev.preventDefault()
    let value = this.refs.nameField.state.value;
    this.setState({username: value});
    console.log(this.state.username);
  }

  render() {
    if (!this.state.username) {
      return (
          <div className='container'>
            <Login 
              value="" 
              ref="nameField"
              username={this.state.username} 
              setLogin={this.setLogin}
              onSubmit={this.setNickname}
            />
          </div>
        ) 
      } else {
        return (
          <div className='container'>
            <SendVideo />
            <MessageArea
              value=''
              ref='nameField'
              message={this.state.message}
              messages={this.state.messages}
              onSubmit={this.sendMessage}
            />
          </div>
        )
    }
  }
}