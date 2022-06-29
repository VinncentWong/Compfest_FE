
import { Stack } from "react-bootstrap";
import BButton from "./BButton";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <Stack direction = "horizontal" gap={2} className = "stack">
            <h3 id = "topic-navbar">Kantin Kejujuran</h3>
            <Link to="/signup">
                <BButton variant="primary" id = "signup-button" className = "button-home">Sign Up</BButton>
            </Link>
            <Link to = "/login">
                <BButton variant="secondary" id = "login-button" className = "button-home">Login</BButton>
            </Link>
        </Stack>
    );
}

export default Navbar;