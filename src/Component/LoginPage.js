import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import dataUser from "../Utils/DataUser";

const LoginPage = () => {

    const [studentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        // const response = axios.post("/login", {
        //     studentID : studentID,
        //     studentPassword : password
        // });
        // if(response == null || response == undefined){

        // } 
        dataUser.push({
            userID : 19000
        });
        console.log(`nilai data user = ${dataUser.at(0)["userID"]}`);
        navigate("/home");
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
            <h1 id = "login-page-title">Login page</h1>
            <Form onSubmit={submitHandler} id = "form-login">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter student ID" onChange={changeStudentIDHandler}/>
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

export default LoginPage;