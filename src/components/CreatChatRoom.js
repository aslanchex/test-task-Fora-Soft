// component for chat room add

import React, { Component } from "react";

export default class CreatChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });    
  }

  render() {
    return (
      <div>
        <div  onSubmit={this.props.onSubmit} className="chat-room">
          <form>
            <input
                value={this.state.value}
                onChange={this.onChange}
                type="text"
                placeholder="  Create new chat"
            />
            <h1>+</h1>
          </form>
        </div>
      </div>
    );
  }
}
