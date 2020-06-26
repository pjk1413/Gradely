import React, { Component } from 'react';

class TableItem extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    //OnClick
    

    //OnChange

    render() {
        return (
            <td onClick={this.handleClick} className="cell" value={this.props.value}>
                {this.state.value}
            </td>
        );
    }
}

export default TableItem;