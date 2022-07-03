import { Stack } from "react-bootstrap";
import Search from "./Search.js";
import BButton from "./BButton.js";
import { Link } from "react-router-dom";

const NavbarHome = () => {
    return(
        <Stack direction = "horizontal" gap={2} className = "stack">
            <h3 id = "topic-navbar">Kantin Kejujuran</h3>
            <Link to="/additem">
                <BButton variant="primary" id = "additem-button">Add Item</BButton>
            </Link>
            <Search id = "search-form"></Search>
            <h3 id = "userid-navbar">
            {
                JSON.parse(window.localStorage.getItem("data")).map.data.studentNumber
            }
            </h3>
            <img src="https://neuro.ucr.edu/sites/g/files/rcwecm2801/files/styles/form_preview/public/blank-profile-pic.png?itok=MMqjmBtg"
            width="80px" id = "image-people" alt="user"></img>
        </Stack>
    );
}

export default NavbarHome;