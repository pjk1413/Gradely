import React, { Component } from 'react';

class GradeEntryNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-lg">
              <a className="navbar-brand btn btn-outline-light" data-toggle="modal" data-target="#gradeEntry">
                Menu
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <a className="nav-link" to="/#">
                            Add Assignment
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" to="/#">
                            Remove Assignment
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" to="/#">
                            Edit Assignment
                          </a>
                        </li>
                      </ul>
 
                    </div>
                  </nav>
        );
    }
}

export default GradeEntryNavBar;