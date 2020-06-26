import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import AddItem from './AddItem';

class ToDoList extends Component {
    constructor() {
        super()

        //Anytime you create a class method that you want to use set state on, you need to bind it to your own class
        //this.handleClick = this.handleClick.bind(this) //Makes sure that handleClick method is bound to the context as it exists in this class
        this.handleRemove = this.handleRemove.bind(this)
        this.handleAdd = this.handleRemove.bind(this)
        this.addItem = this.addItem.bind(this)
        
        //state should relate to a single item, the parent should deal with multiple instances of this element
        this.state = {
           items : [
            {text: "Take out the garbage"},
            {text: "Clean up the dishes"},
            {text: "Read a book for fun"}
           ]
        }
    }


    addItem(text) {
        const newItem = {
            text: text
        }
        let tempItems = this.state.items 
        tempItems.push(newItem)
        this.setState({
            items: tempItems
        })
    }

   handleRemove(text) {
        let tempItem = null

        const tempItems = this.state.items.map(item => {
            if (text === item.text) {
                tempItem = item
            }
            return item
        })
        
        tempItems.splice(tempItems.indexOf(tempItem), 1)
       
       this.setState({
           items: tempItems
       })

   }


    //All display logic should go inside render method, and before the return (style, display, conditional rendering)

    //To transfer state to child component, must use props
    render() {
        const toDoItems = this.state.items.map((item) => {
            return <ToDoItem key={item.text} text={item.text} remove={this.handleRemove} />
        })

        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Todo List</span>
                    <button data-toggle="modal" data-target="#addItemModal" className="float-right btn btn-warning">Add Item</button>
                </nav>
                <div className="row">
                    {toDoItems}
                </div>
                

                <AddItem add={this.addItem}/>
            </div>
        );
    }
}

export default ToDoList;