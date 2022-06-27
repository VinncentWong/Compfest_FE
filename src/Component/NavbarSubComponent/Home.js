import { Button } from "react-bootstrap";

const Home = (props) => {
    return (
        <Button className = {props.className} variant = {props.variant} active>Home</Button>
    )
}

export default Home;