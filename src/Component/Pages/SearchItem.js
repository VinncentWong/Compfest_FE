import NavbarHome from '../NavbarHome';
import TabelItem from '../TableItem';

const SearchItemPage = () => {
    // console.log("search = " + JSON.stringify(localStorage.getItem("search")));
    console.log("id = " + JSON.parse(localStorage.getItem("search")).data.map.data.id);
    return(
        <div>
            <NavbarHome></NavbarHome>
            <TabelItem data = {JSON.parse(localStorage.getItem("search"))}></TabelItem>
        </div>
    )
}

// const traverseItem = () =>{
//     return (
//             data.map((element) => {
//                     return(
//                     <li key = {element.id}>
//                         <h3>Id : {element.id}</h3>
//                         <h3>Name : {element.name}</h3>
//                     </li>
//                     )
//             })
//     );
// }
export default SearchItemPage;