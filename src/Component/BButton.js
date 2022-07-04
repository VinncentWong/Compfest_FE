import Button from "react-bootstrap/esm/Button";

const BButton = ({variant, children, id, className, onClick}) => {
    const clickHandler = (event) => {
        onClick(event);
    }
        console.log(`Nilai className = ${className}`)
        return (
            <div>
                <Button variant = {variant} id = {id} className = {className} onClick = {clickHandler}>{children}</Button>
            </div>
        )
    }

export default BButton;