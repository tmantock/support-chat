import React, { Component, PropTypes } from 'react';

class ChannelForm extends Component {
    onSubmit(event) {
        event.preventDefault();

        const channelName = this.refs.channel.value;
        this.props.addChannel(channelName);
        channelName = '';
    }
    render () {
        return (
            <form onSubmit = {this.onSubmit.bind(this)}>
                <input type='text' ref='channel' />
            </form>
        )
    }
}

ChannelForm.PropTypes = {
    addChannel: PropTypes.func.isRequired
}

export default ChannelForm;