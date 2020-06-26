import React, { Component } from 'react';
import Notification from './Notification';
import './notification.css';
import { connect } from 'react-redux'

class NotificationBox extends Component {


    shuffle(array) {
        array.sort(() => Math.random() - 0.5)
    }

    render() {
        //Needs to get all messages, needs to get all assignments
        const messageNotifications = this.props.messages && this.props.messages.map(message => {
            console.log(message)
            return ({
                links: "#message",
                title: "Unread Message - " + message.subject,
                location: "Messages",
                details: "From: " + message.sentByName + ".  Email: " + message.sentByEmail
            })
        })

        const assignmentNotifications = this.props.assignments && this.props.assignments.map(assignment => {
            console.log(assignment)
            return {
                links: "#studentGradeModal",
                title: "Assignment",
                location: "Assignments",
                details: "Score: " + assignment.points + assignment.turnedIn ? "  You have turned in this assignment " : "You have not turned in this assignment"
            }
        })
        
        let array = messageNotifications
        console.log(array)
        
        
        if(assignmentNotifications && assignmentNotifications.length > 0) {
            if(array) {
                array.push(assignmentNotifications)
            }
        }
        
        //const array = messageNotifications && messageNotifications.concat(assignmentNotifications)
        
        array && array.sort(() => Math.random() - 0.5)
        console.log(array)
        const notificationItem = array && array.map(notification => {
            console.log(notification)
            return (
                <Notification
                links={notification.links}
                title={notification.title} 
                location={notification.location} 
                details={notification.details} />
            )
        })

        console.log(notificationItem)



        return (

            <div class="jumbotron m-3 shadow p-3 z-1030">
                <h6 className="">Notifications</h6>
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="5000">
                            <div className="row mx-auto">
                                {notificationItem && notificationItem.length > 0 ? notificationItem : <h6 className="display-4">No Notifications</h6>}
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev w-10" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next w-10" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>


        );
    }
}

const mapStateToProps = state => ({
    messages: state.user.messages,
    assignments: state.user.user.assignmentScores
})

export default connect(mapStateToProps, {})(NotificationBox);