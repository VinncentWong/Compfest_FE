import NavbarHome from "../NavbarHome";
import Card from "../Cards";
import { Image } from "react-bootstrap";

const Home = ({
    id, username, profilePicture
}) => {
    return (
        <>
            <NavbarHome></NavbarHome>
            <Card source="https://i.pinimg.com/originals/44/35/82/4435827ac0c3903cc4e31a8ab5c3a1fd.jpg" className="card-home" id = "home"></Card>
        </>
    )
}

export default Home;