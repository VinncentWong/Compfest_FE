import Button from "react-bootstrap/esm/Button";

const About = (props) =>{
    return(
        <Button variant = {props.variant} className = {props.className} active>About</Button>
    )
}

export default About;