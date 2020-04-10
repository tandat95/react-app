import "./Button.scss"
import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Button extends Component {
    render() {
        return (
            <button
                className={`btn ${this.props.className}`} s
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                style={{
                    padding: this.props.padding ? this.props.padding : null,
                    color: this.props.color,
                    border: this.props.noBorder === true ? 'none' : this.props.border,
                    backgroundColor: this.props.backgroundColor,
                    cursor: this.props.disabled === true ? 'not-allowed' : ''
                }}
            >

                <span style={{ margin: '0px 5px' }}>{this.props.text}</span>

            </button>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    /** Type of button */
    type: PropTypes.string,
    backgroundColor: PropTypes.string,
    noBorder: PropTypes.bool,
    /** Disabled: true, false */
    disabled: PropTypes.bool,

    onClick: PropTypes.func,
    padding: PropTypes.string,
    border: PropTypes.string,
    isDefault: PropTypes.bool
};

Button.defaultProps = {
    disabled: false,
    className: '',
    text: 'Button',
    color: '',
    type: 'btn-default',
    border: '',
    noBorder: false,
    onClick: () => {
        console.log("Button Click");
    },
};
