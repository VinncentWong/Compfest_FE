import { ButtonGroup } from "@mui/material";
import Home from "./NavbarSubComponent/Home";
import About from "./NavbarSubComponent/About";

const Navbar = () => {
    return(
        <ButtonGroup >
            <Home></Home>
            <About></About>
        </ButtonGroup>
    );
}

export default Navbar;