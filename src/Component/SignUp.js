import axios from "../Api/AxiosConfig"
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate} from 'react-router-dom';
import React from "react";

const SignUp = () => {
    const [studentID, setStudentID] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        if(studentID.length !== 5 || !validate()){
            alert("ID tidak valid")
            navigate("/");
            return;
        }
        console.log("Validasi ID = " + validate());
        console.log("Array length - 2 = " + studentID[studentID.length - 2]);
        const response = axios.post("/registration", {
            studentNumber : studentID,
            password : password
        });
        response
        .then((success) => {
            alert("Sukses menyimpan data user!")
            navigate("/")
        })
        .catch((error) => {
            alert("Gagal menyimpan data user");
            console.log(error.response.data);
            console.log(error.response.header);
            console.log(error.response.status);
            navigate("/");
        });
    }

    const validate = () => {
        let sum = 0;
        for(let i = 0 ; i < 3 ; i++){
            sum = sum + Number(studentID[i]);
        }
        if(Number(studentID[studentID.length - 2]) !== 0){
            let sumBack = Number(studentID.substring(studentID.length-2));
            console.log("Sumback = " + sumBack);
            if(sum !== sumBack){
                return false;
            } else {
                return true;
            }
        } else {
            if(sum !== Number(studentID[studentID.length - 1])){
                return false;
            } else {
                return true;
            }
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
            <h1 id = "login-page-title">Registration page</h1>
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

export default SignUp;