const userData = {
    userList : [
    { //User Object
        id: 1,
        firstName: "Patrick",
        lastName: "Kramer",
        phoneNumber: "3146306101",
        email: "pjk1413@gmail.com",
        password: "12345",
        userType: "Teacher",
        address: {
            street: "5201 Pernod Ave",
            city: "St. Louis",
            state: "MO",
            zipcode: "63021"
        },
        picture: "www.google.com", //Will need to be figured out more later
        studentData: {}, //only applicable if type is student, otherwise null
        attendanceObjects: [],
        toDoListObjects: [],
        calendarObjects: [],
        messageObjects: [],
        courseObjects: [
            {
                title: "Algebra 1",
                subject: "Math",
                assignmentObjects: [
                    {
                        type: "homework",
                        title: "Assignment 1",
                        points: 50,
                        dueDate: "1/20/20",
                        description: "A all about me assignment, please reference the dashboard for more information",
                        link: "www.google.com" //Link to where the assignment can be viewed 
                    },
                    {
                        type: "homework",
                        title: "Assignment 2",
                        points: 50,
                        dueDate: "1/20/20",
                        description: "A all about me assignment, please reference the dashboard for more information",
                        link: "www.google.com" //Link to where the assignment can be viewed 
                    },
                    {
                        type: "homework",
                        title: "Assignment 3",
                        points: 50,
                        dueDate: "1/20/20",
                        description: "A all about me assignment, please reference the dashboard for more information",
                        link: "www.google.com" //Link to where the assignment can be viewed 
                    },

                ],
                studentObjects: [],
            }
        ],
        disciplineObjects: [],
        assignmentObjects: [] //Do we need this, or is it easier to simply find the objects from the 
    },
]
}
export default userData