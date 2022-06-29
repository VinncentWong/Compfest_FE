
const Card = ({
    className, source, id
}) => {
    return (
        <div id = {id} className = {className}>
            <img src={source} alt="Background" className = {className}></img>
        </div>
   ) 
}
export default Card;