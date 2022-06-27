import { Button } from "react-bootstrap";

const ButtonLogin = (props) => {
    return(
        <Button id = {props.id} variant = {props.variant} className = {props.className}active>{props.children}</Button>
    )
}

export default ButtonLogin;