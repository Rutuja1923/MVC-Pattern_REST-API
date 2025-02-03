const express = require('express');

const { handleGetAllStudents, handleCreateStudent, handleGetStudentByID, handleUpdateStudentByID, handleReplaceStudentByID, handleDeleteStudentByID} = require('../controllers/student');

const router = express.Router();

//REST API routes
router
    .route('/')
    //to get all students information
    .get(handleGetAllStudents)
    // to create a new student -> send data in request body
    .post(handleCreateStudent);

router
    .route('/:id')
    //to get user information about a student with specified id
    .get(handleGetStudentByID)
    //to update a student information -> send data in request body
    .patch(handleUpdateStudentByID)
    // to replace a student details -> send data in request body
    .put(handleReplaceStudentByID)
    //to delete a student with specified id
    .delete(handleDeleteStudentByID);

module.exports = router;