import { Table } from "react-bootstrap";
const TabelItem = ({data, multiple}) => {
    console.log("Masuk ke tabel item");
    console.log("Data id = " + data.data.map.data.id);

    const clickHandler = (event) => {
        console.log("Yang diklik adalah" + event.target + "dengan nilai " + event.target.value);
    }
    if(!multiple){
        return(
            <Table striped bordered hover class = "tabel">
                <thead >
                    <tr>
                        <th class = "h-index">No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th class = "h-image">Image</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td id = "table-number" onClick={clickHandler}>{data.data.map.data.id + 1}</td>
                            <td key = {data.data.map.data.name} onClick={clickHandler}>{data.data.map.data.name}</td>
                            <td key = {data.data.map.data.description} onClick={clickHandler}>{data.data.map.data.description}</td>
                            <td key = {data.data.map.data.price} onClick={clickHandler}>{data.data.map.data.price}</td>
                            <td key = {data.data.map.data.id} id = "image" onClick={clickHandler}>
                                <img alt = "alt" src={`data:image/jpeg;base64,${data.data.map.data.image}`} width={400} height = {200}></img>
                            </td>
                            <td key = {data.data.map.data.createdAt}>{data.data.map.data.createdAt}</td>
                        </tr>
                </tbody>
            </Table>
        )
    } else {
        return (
            <>
                <Table class = "table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.data.map.data.map((value, index) => {
                                    return (
                                    <tr class = "tr-table">
                                        <>
                                            <td key = {index} class = "td-index">{index + 1}</td>
                                        </>
                                        <>
                                            <td key = {value.name} class = "td-name">{value.name}</td>
                                        </>
                                        <>
                                            <td key = {value.description} class = "td-description">{value.description}</td>
                                        </>
                                        <>
                                            <td key = {value.price + 1} class = "td-price">{value.price}</td>
                                        </>
                                        <>
                                            <td key = {index + 1} class = "td-image">
                                                <img  alt = "alt" src={`data:image/jpeg;base64,${value.image}`} width={500} height = {300}></img>
                                            </td>
                                        </>
                                        <>
                                            <td key = {value.createdAt} class = "td-created">{value.createdAt}</td>
                                        </>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default TabelItem;