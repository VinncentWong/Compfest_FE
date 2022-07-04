import { Stack } from "react-bootstrap";
import Search from "./Search.js";
import BButton from "./BButton.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../Api/AxiosConfig"

const NavbarHome = ({exist}) => {

    const [textSearch, setTextSearch] = useState("");
    const navigate = useNavigate();
    
    const searchHandler = (event) => {
        console.log("search handler -> textSearch = " + textSearch);
        setTextSearch(event.target.value);
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        try{
            console.log("Token = " +  JSON.parse(localStorage.getItem("data")).map.token)
            console.log("text search = " + textSearch);
            const response = await axios.get("/item/getitem", 
            {
                headers : {
                    "Authorization" : "Bearer " + JSON.parse(localStorage.getItem("data")).map.token,
                    "search" : textSearch
                }
            });
            const stringJson = JSON.stringify(response);
            localStorage.setItem("search", stringJson);
            navigate("/searchitem");
        }
        catch(err){
            alert(err);
        }
    }

    const getItemsHandler = async (event) => {
        console.log("Masuk ke handler get items");
        const response = await axios.get("/item/getitems", {
            headers : {
                Authorization : "Bearer " + JSON.parse(localStorage.getItem("data")).map.token,
            }
        });
        const stringJson = JSON.stringify(response);
        console.log("string json = " + stringJson);
        localStorage.setItem("items", stringJson);
        navigate("/getitems");
    }

    return(
        <Stack direction = "horizontal" gap={2} className = "stack" onSubmit={submitHandler}>
            <a href = "/home"><h3 id = "topic-navbar">Kantin Kejujuran</h3></a>
            <Link to="/additem">
                <BButton variant="primary" id = "additem-button">Add Item</BButton>
            </Link>
            <Search id = "search-form" onChange = {searchHandler} valid = {exist}></Search>
            <h3 id = "userid-navbar">
            {
                JSON.parse(window.localStorage.getItem("data")).map.data.studentNumber
            }
            </h3>
            <BButton variant = "secondary" id = "button-get-items" onClick = {getItemsHandler}>Get Items</BButton>
            <a href = "/account" className = "link-profile">
                <img src="https://neuro.ucr.edu/sites/g/files/rcwecm2801/files/styles/form_preview/public/blank-profile-pic.png?itok=MMqjmBtg"
                width="80px" id = "image-people" alt="user">
                </img>
            </a>
        </Stack>
    );
}

export default NavbarHome;