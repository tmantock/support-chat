import React, { Component, PropTypes } from 'react';

class MessageForm extends Component {
    onSubmit(event) {
        event.preventDefault();
        const node = this.refs.message;
        const message = node.value;
        this.props.addMessage(message);
        node.value = '';
    }

    renderInput () {
        if (this.props.activeChannel.id !== undefined) {
            return (
                <input ref = 'message' type = 'text' className = 'form-control' placeholder = 'Add Message...' />
            );
        }
    }

    render () {
        

        return (
            <form onSubmit = { this.onSubmit.bind(this) }>
                <div className = 'form-group'>
                    {this.renderInput()}
                </div>
            </form>
        )
    }
}

MessageForm.propTypes = {
    activeChannel: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
}

export default MessageForm;