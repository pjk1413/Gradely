import React, { Component } from 'react';
import './gradeEntry.css';

class TableItemHead extends Component {
    render() {

        const cellStyle = {
            width: 100,
            textAlign: "center"
        }


        return (
        <th className="py-0 px-1" style={cellStyle} scope="col">
            <div className="col">
            <small>({this.props.points})</small>
                </div>
            {this.props.title}  </th>
        );
    }
}

export default TableItemHead;