import { Table } from "react-bootstrap";
const TabelItem = ({data, multiple}) => {
    console.log("Masuk ke tabel item");
    console.log("Data id = " + data.data.map.data.id);
    const clickHandler = (event) => {
        console.log("Yang diklik adalah" + event.target + "dengan nilai " + event.target.value);
    }
    if(!multiple){
        return(
            <>
                <Table striped bordered hover className = "table">
                    <thead >
                        <tr>
                            <th className = "h-index">No</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th className = "h-image">Image</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td id = "table-number" onClick={clickHandler} className = "td-index">{data.data.map.data.id + 1}</td>
                                <td key = {data.data.map.data.name} onClick={clickHandler} className = "td-name">{data.data.map.data.name}</td>
                                <td key = {data.data.map.data.description} onClick={clickHandler} className = "td-description">{data.data.map.data.description}</td>
                                <td key = {data.data.map.data.price} onClick={clickHandler} className = "td-price">{data.data.map.data.price}</td>
                                <td key = {data.data.map.data.id} id = "image" onClick={clickHandler} className = "td-image">
                                    <img alt = "alt" src={`data:image/jpeg;base64,${data.data.map.data.image}`} width={400} height = {200}></img>
                                </td>
                                <td key = {data.data.map.data.createdAt} className = "td-created">{data.data.map.data.createdAt}</td>
                            </tr>
                    </tbody>
                </Table>
                <label htmlFor="buy-item">Masukkan nama item yang ingin dihapus</label>
                <br></br>
                <input type="text" id = "buy-item" placeholder = "Barang A..."></input>
                <input type="submit"></input>
            </>
        )
    } else {
        return (
            <>
                <Table className = "table">
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
                                    <tr className = "tr-table">
                                        <>
                                            <td key = {index} className = "td-index">{index + 1}</td>
                                        </>
                                        <>
                                            <td key = {value.name} className = "td-name">{value.name}</td>
                                        </>
                                        <>
                                            <td key = {value.description} className = "td-description">{value.description}</td>
                                        </>
                                        <>
                                            <td key = {value.price + 1} className = "td-price">{value.price}</td>
                                        </>
                                        <>
                                            <td key = {index + 1} className = "td-image">
                                                <img  alt = "alt" src={`data:image/jpeg;base64,${value.image}`} width={500} height = {300}></img>
                                            </td>
                                        </>
                                        <>
                                            <td key = {value.createdAt} className = "td-created">{value.createdAt}</td>
                                        </>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                <div className = "form-buy">
                    <label htmlFor="buy-item" className = "label-buy">Masukkan nama item yang ingin dibeli</label>
                    <br></br>
                    <input type="text" id = "buy-item" placeholder = "Barang A..."></input>
                    <input type="submit"></input>
                </div>
            </>
        )
    }
}

export default TabelItem;