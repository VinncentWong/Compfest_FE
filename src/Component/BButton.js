import Button from "react-bootstrap/esm/Button";

const BButton = ({
    variant, children, id, className
}) => {
    console.log(`Nilai className = ${className}`)
    return (
        <div>
            <Button variant = {variant} id = {id} className = {className}>{children}</Button>
        </div>
    )
}

export default BButton;