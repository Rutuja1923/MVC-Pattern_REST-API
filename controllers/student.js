const Student = require('../models/student');

async function handleGetAllStudents(req,res) {
    console.log('in get all students handler function')
    const students = await Student.find();
    return res.json(students);
}

async function handleCreateStudent(req,res) {
    const body = req.body;

    if (!body || !body.firstName || !body.lastName || !body.dateOfBirth || !body.gender || !body.email || !body.phoneNumber || !body.gpa) {
        return res.status(400).json(
            {
                'status': 'Error',
                'message': 'All fields are needed!'
            }
        );
    }

    try {
        const newStudent = await Student.create({
            firstName: body.firstName,
            lastName: body.lastName,
            dateOfBirth: body.dateOfBirth,
            gender: body.gender,
            email: body.email,
            phoneNumber: body.phoneNumber,
            gpa: body.gpa
        });

        console.log(`Result: ${newStudent}`);
        return res.status(201).json(
            {
                status: 'Success',
                message: 'Student added successfully!',
                studentId: newStudent._id
            }
        );
    } 
    catch (err) {
        console.error(`Server error: ${err.message}`);
        return res.status(500).json(
            {
                status: 'Error',
                message: 'Failed to create student'
            }
        );
    }
}

async function handleGetStudentByID(req,res) {
    const id = req.params.id;
    try {     
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json(
                {   
                    status : `Not found`,
                    message: `No student found with ID : ${id}`
                }
            );
        }
        return res.json(student);
    }
    catch (err) {
        res.status(500).json(
            {
                status: 'Error', 
                message: 'Invalid Student ID' 
            }
        );
    }    
}

async function handleUpdateStudentByID(req,res) {
    const id = req.params.id;
    try{
        const updatedStudent = await Student.findByIdAndUpdate(
            id, 
            req.body, 
            { 
                new: true,
            }
        );
        if (!updatedStudent){
            return res.status(404).json(
                {
                    status: 'Error',
                    message: `Student with ${id} not found.`
                }
            );
        }
        return res.status(200).json(
            {
                status: 'Success',
                message: 'Student updated successfully!',
                user: updatedStudent
            }
        );
    }
    catch (err) {
        console.error(`Server Error: ${err.message}`);
        res.status(500).json(
            { 
                status: 'Error', 
                message: 'Failed to update student' 
            }
        );
    }
}

async function handleReplaceStudentByID(req,res) {
    const id = req.params.id;
    try{
        const replacedStudent = await Student.findOneAndReplace(
            { _id: id }, 
            req.body, 
            { 
                new: true, 
            }
        );
        if (!replacedStudent){
            return res.status(404).json(
                {
                    status: 'Error',
                    message: `Student with ${id} not found.`
                }
            );
        }
        return res.status(200).json(
            {
                status: 'Success',
                message: 'Student replaced successfully!',
                user: replacedStudent
            }
        );
    }
    catch (err) {
        console.error(`Server Error: ${err.message}`);
        res.status(500).json(
            { 
                status: 'Error', 
                message: 'Failed to replace Student' 
            }
        );
    }
}

async function handleDeleteStudentByID(req,res) {
    const id = req.params.id;
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json(
                { 
                    status: 'Error', 
                    message: `Student with ${id} not found` 
                }
            );
        }
        return res.json(
            { 
                status: 'Success', 
                message: 'Student deleted successfully' 
            }
        );
    } 
    catch (err) {
        console.error(`Server Error: ${err.message}`);
        res.status(500).json(
            { 
                status: 'Error', 
                message: 'Failed to delete student' 
            }
        );
    }
}

module.exports = {
    handleGetAllStudents,
    handleCreateStudent,
    handleGetStudentByID,
    handleUpdateStudentByID,
    handleReplaceStudentByID,
    handleDeleteStudentByID
}