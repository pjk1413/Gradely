import React, { Component } from 'react';
import SchoolStatistics from './dataDisplays/SchoolStatistics';

class DataOverviewBox extends Component {
    render() {
        return (
            <div className="jumbotron m-3 shadow p-3">
                <div className="row">
                    <div className="col">
                        {/*<TeacherStatistics />*/}
                    </div>
                    <div className="col">
                        {/*<Trends />*/}
                    </div>
                </div>
                <div className="row">
                    <SchoolStatistics />
                </div>
            </div>
        );
    }
}

export default DataOverviewBox;