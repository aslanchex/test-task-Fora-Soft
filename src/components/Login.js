import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.setState({ value: val });
  }

  render() {
    return (
      <div className="login-page">
        <h3 className="title">What's your nickname?</h3>
        <form onSubmit={this.props.onSubmit}>
          <input
            value={this.state.value}
            onChange={this.onChange}
            id="login-form"
            type="text"
            placeholder="Username"
            className="form-control inputname"
          />
          <label htmlFor="login-form">
            <input type="submit" value="Log in" />
          </label>
        </form>
      </div>
    );
  }
}
