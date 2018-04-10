import React, { Component } from 'react';

class HiddenMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({show: nextProps.show})
    }

    render() {
        const { children } = this.props
        const { show } = this.state
        return (
            <p>
                {(show) ?
                    children : 
                    children.replace(/[a-zA-Z0-9]/g, "x")
                }
            </p>
        )
    }
}

export default HiddenMessage;