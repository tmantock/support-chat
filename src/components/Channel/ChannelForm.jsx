import React, { Component, PropTypes } from 'react';

class ChannelForm extends Component {
    onSubmit(event) {
        event.preventDefault();
        const node = this.refs.channel
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value = '';
    }
    render () {
        return (
            <form onSubmit = {this.onSubmit.bind(this)}>
                <div className = 'form-group'>
                    <input type='text' placeholder = 'Add Channel' ref='channel' />
                </div>
            </form>
        )
    }
}

ChannelForm.PropTypes = {
    addChannel: PropTypes.func.isRequired
}

export default ChannelForm;