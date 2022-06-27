import Home from "./NavbarSubComponent/Home";
import About from "./NavbarSubComponent/About";
import ButtonLogin from "./NavbarSubComponent/BLogin";
import { Stack } from "react-bootstrap";
import '../Style/Navbar.css'

const Navbar = () => {
    return(
        <Stack direction = "horizontal" gap={2} id = "stack">
            <Home className = "home" variant = "success">Home</Home>
            <About className = "about" variant = "success"></About>
            <h1 id = "title">Kantin Kejujuran</h1>
            <ButtonLogin className = "ms-auto" variant = "success" id = "button-login">Login</ButtonLogin>
        </Stack>
    );
}

export default Navbar;