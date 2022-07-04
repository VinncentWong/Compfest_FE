import Button from "react-bootstrap/esm/Button";

const BButton = ({variant, children, id, className, onClick}) => {
    const clickHandler = (event) => {
        onClick(event.target.value);
    }
        console.log(`Nilai className = ${className}`)
        return (
            <div>
                <Button variant = {variant} id = {id} className = {className} onClick = {onClick}>{children}</Button>
            </div>
        )
    }

export default BButton;