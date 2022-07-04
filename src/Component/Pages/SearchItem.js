import NavbarHome from '../NavbarHome';
import TabelItem from '../TableItem';

const SearchItemPage = () => {
    // console.log("search = " + JSON.stringify(localStorage.getItem("search")));
    console.log("id = " + JSON.parse(localStorage.getItem("search")).data.map.data.id);
    return(
        <div>
            <NavbarHome exist = {false}></NavbarHome>
            <TabelItem data = {JSON.parse(localStorage.getItem("search"))} multiple = {false}></TabelItem>
        </div>
    )
}
export default SearchItemPage;