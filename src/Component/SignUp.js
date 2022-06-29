import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
    const [studentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        const response = axios.post("/login", {
            studentID : studentID,
            studentPassword : password
        });
        if(response == null || response == undefined){

        } 
        response.then((result) => {
            return result;
        })
    }

    const changeStudentIDHandler = (event) => {
        setStudentID(studentID);
        console.log("Nilai student id = " + event.target.value);
    }

    const changePasswordHandler = (event) => {
        setPassword(password);
        console.log("Nilai student id = " + event.target.value);
    }

    return (
        <div>
            <h1 id = "login-page-title">Registration page</h1>
            <Form onSubmit={submitHandler} id = "form-login">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" onChange={changeStudentIDHandler}/>
                    <Form.Text className="text-muted">
                    We'll never share your Student ID with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={changePasswordHandler}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp;