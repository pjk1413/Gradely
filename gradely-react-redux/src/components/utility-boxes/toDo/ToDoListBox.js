import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import AddItem from './AddItem';
import { connect } from 'react-redux'
//import { addToDoItem, removeToDoItem } from './../../../action/userActions'

class ToDoListBox extends Component {
    constructor() {
        super()
    }

    render() {
        let toDoListItems = []

        toDoListItems = this.props.user && this.props.user.toDoList.map(item => {
            return <ToDoItem id={item.id} text={item.description} checked={item.checked}/>
        })
        //console.log(this.props.toDoList)
        return (
            <div class="jumbotron m-3 shadow p-3 z-1030">
                <h6 className="d-inline">To Do List</h6>
                <button data-toggle="modal" data-target="#addItemModal" 
                className="float-right btn btn-warning">Add Item</button>
                <div id="toDoListCarousel" class="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="5000">
                            <div className="row mx-auto">
                                {toDoListItems}
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev w-10" href="#toDoListCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next w-10" href="#toDoListCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user.user
})


export default connect(mapStateToProps, {})(ToDoListBox);