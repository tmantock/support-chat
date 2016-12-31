import React, { Component, PropTypes } from 'react';
import fecha from 'fecha';

class Message extends Component {
    render () {
        let { message } = this.props;
        let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YYYY');
        return (
            <li className = 'message'>
                <div classname = 'author'>
                    <strong>{message.author}</strong>
                    <i className = 'timestamp'>{createdAt}</i>
                </div>
                <div className = 'body'>{message.body}</div>
            </li>
        )
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message;