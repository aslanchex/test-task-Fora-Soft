import React, { Component } from 'react';

export default class MessageArea extends Component { 
    constructor(props) {
        super(props);        
        this.state = {
            value: props.value
        };
        this.onChange = this.onChange.bind(this);
    };

    onChange(e) {
        var val = e.target.value;
        this.setState({value: val});
    }
    
    render() {
        return (
            <div className="chat-page">
                <div className="chat-area">
                    <ul className="messages">
                        {this.props.messages.map((message, i) => {
                            return (
                                <div
                                    className='message'
                                    key={i}
                                >
                                    <p className='author'>{message.author}</p>: {message.message}
                                </div>
                            );
                        })}
                    </ul>
                </div>
                <div className='input-area'>
                    <form onSubmit={this.props.onSubmit}>
                        <input
                            value={this.state.value}
                            onChange={this.onChange}
                            type='text'
                            id="input-message"
                            placeholder="Type here..."
                        />
                        <input
                            className='send-button'
                            type='submit'
                            value='Send'
                        />
                    </form>
                </div>
            </div>
        )
    }
}