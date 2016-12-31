import React, { Component, PropTypes } from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';


class ChannelSection extends Component {
    render () {
        return (
            <div>
                <ChannelList {...this.props} />
                <ChannelForm {...this.props} />
            </div>
        );
    }
}

ChannelSection.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannnel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired
}

export default ChannelSection;