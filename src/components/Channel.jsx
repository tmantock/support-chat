import React, { Component, PropTypes } from 'react';

class Channel extends Component {
    onClick(event) {
        event.preventDefault();
        const { setChannel, channel } = this.props;
        setChannel(channel);
    }

    render() {
        const { channel } = this.props;
        return (
            <li>
                <a onClick={this.onClick.bind(this)}>
                    {channel.name}
                </a>
            </li>
        );
    }
}

Channel.propTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired
}

export default Channel;