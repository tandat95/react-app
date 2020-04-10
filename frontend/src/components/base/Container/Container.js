import React, { Component } from "react";

export class Container extends Component {
    component = React.createRef();
    dimensions = {
        width: 0,
        height: 0
    };

    componentDidMount() {
        this.dimensions = {
            width: this.component.current.offsetWidth,
            height: this.component.current.offsetHeight
        };
    }

    render() {
        return (
            <div ref={this.component} {...this.props}>
                {this.props.children}
            </div>
        );
    }
}