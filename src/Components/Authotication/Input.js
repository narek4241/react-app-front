import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.idName = props.idName;
        this.type = props.type;
        this.value = props.value;
        this.placeholder = props.placeholder;
    }
    render() {
        return (
            <input
                id={this.idName}
                name={this.idName}
                type={this.type}
                value={this.value}
                className={''}
                placeholder={this.placeholder}
                // onChange={'handleChange'}
                // onBlur={'handleblur'}
                // onBlur={onSubmit}
            />
        );
    }
}

export default Input;











