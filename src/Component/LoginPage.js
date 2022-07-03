import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import axios from "../Api/AxiosConfig"

const LoginPage = () => {

    const [studentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("/login", {
                studentNumber : studentID,
                password : password
            });
            alert(response.data.map.message);
            const stringJson = JSON.stringify(response.data)
            localStorage.setItem("data", stringJson);
            navigate("/home");
        }
        catch(err){
            alert(err);
            navigate("/");
        }
    }

    const changeStudentIDHandler = (event) => {
        setStudentID(event.target.value);
        console.log("Nilai student id = " + event.target.value);
    }

    const changePasswordHandler = (event) => {
        setPassword(event.target.value);
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