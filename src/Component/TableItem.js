import { Table } from "react-bootstrap";

const TabelItem = (data) => {
    console.log("Masuk ke tabel item");
    console.log("Data id = " + data.data.data.map.data.id);
    return(
        <Table striped bordered hover id = "tabel">
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
                    <tr id = "table-number">{data.data.data.map.data.id + 1}
                        <td key = {data.data.data.map.data.id}>{data.data.data.map.data.name}</td>
                        <td key = {data.data.data.map.data.id}>{data.data.data.map.data.description}</td>
                        <td key = {data.data.data.map.data.id}>{data.data.data.map.data.price}</td>
                        <td key = {data.data.data.map.data.id} id = "image">
                            <img alt = "alt" src={`data:image/jpeg;base64,${data.data.data.map.data.image}`}></img>
                        </td>
                        <td key = {data.data.data.map.data.id}>{data.data.data.map.data.createdAt}</td>
                    </tr>
            </tbody>
        </Table>
    )
}

export default TabelItem;