import { Stack } from "react-bootstrap";
import Search from './Cards'

const NavbarHome = () => {
    return(
        <Stack direction = "horizontal" gap={2} className = "stack">
            <h3 id = "topic-navbar">Kantin Kejujuran</h3>
            <img src="https://neuro.ucr.edu/sites/g/files/rcwecm2801/files/styles/form_preview/public/blank-profile-pic.png?itok=MMqjmBtg"
            width="80px" id = "image-people"></img>
        </Stack>
    );
}

export default NavbarHome;