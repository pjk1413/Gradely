import React, { Component } from 'react';
import axios from 'axios';

export default function saveUser(user) {
    if (!user.type) {
        return "User type not defined"
      }
      console.log("HERE")
    let path = ""
    switch (user.type) {
        case "TEACHER":
            path="teacher/new"
            break;
        case "PARENT":
            path="parent/new"
            break;
        case "STUDENT":
            console.log("STUDENT")
            path="student/new"
            break;
        case "ADMIN":
            path="admin/new"
            break;
        default:

            break;
    }
    const fullPath = "http://localhost:8080/"+path
    axios.post(fullPath, user).then((response) => {
    return response.data
  })
}