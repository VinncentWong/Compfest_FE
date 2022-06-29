const Card = ({
    className, source
}) => {
   return (
        <div>
            <img src={source} alt="Background" className = {className}></img>
        </div>
   ) 
}

export default Card;