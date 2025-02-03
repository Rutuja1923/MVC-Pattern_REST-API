# Student API

This API allows you to manage student data with the following routes.

## Routes and Their Details

### POST /api/student
- **Description**: Create a new student with details provided in the request body.
- **Request Format**: `application/x-www-form-urlencoded` (in Postman)
- **Response**: Returns the status and ObjectID of the created student.

### GET /api/student
- **Description**: Fetch all students' information.
- **Request Format**: `application/x-www-form-urlencoded` (in Postman)
- **Response**: Returns a list of all students.

### GET /api/student/:id
- **Description**: Fetch a student's information based on the provided ID.
- **Request Format**: `application/x-www-form-urlencoded` (in Postman)
- **Response**: Returns the student data for the given ID.

### PATCH /api/student/:id
- **Description**: Update a student's information based on the provided ID. The new data should be sent in the request body.
- **Request Format**: `application/x-www-form-urlencoded` (in Postman)
- **Response**: Returns the updated student information.

### PUT /api/student/:id
- **Description**: Replace a student's details based on the provided ID with the new data sent in the request body.
- **Request Format**: `application/x-www-form-urlencoded` (in Postman)
- **Response**: Returns the replaced student information.

### DELETE /api/student/:id
- **Description**: Delete a student based on the provided ID.
- **Request Format**: `application/x-www-form-urlencoded` (in Postman)
- **Response**: Returns a success message indicating that the student has been deleted.
