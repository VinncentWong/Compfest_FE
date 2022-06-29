import Card from "../Cards";
import Navbar from "../Navbar";

const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Card source="https://i.pinimg.com/originals/44/35/82/4435827ac0c3903cc4e31a8ab5c3a1fd.jpg" className="card-home"></Card>
        </div>
    )
}

export default LandingPage;