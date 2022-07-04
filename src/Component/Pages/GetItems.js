import NavbarHome from "../NavbarHome";
import TabelItem from "../TableItem";

const GetItem = () => {
    return(
        <>
            <NavbarHome exist={false}></NavbarHome>
            <TabelItem data = {JSON.parse(localStorage.getItem("items"))} multiple = {true}></TabelItem>
        </>
    )
}

export default GetItem;