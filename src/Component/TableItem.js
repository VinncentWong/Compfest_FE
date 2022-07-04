import { Table } from "react-bootstrap";
import { useState } from "react";
import axios from "../Api/AxiosConfig"
import { useNavigate } from "react-router-dom";

const TabelItem = ({data, multiple}) => {
    console.log("Masuk ke tabel item");
    console.log("Data id = " + data.data.map.data.id);
    const [itemName, setItemName] = useState("");
    const navigate = useNavigate();
    const itemNameHandler = (event) => {
        setItemName(event.target.value);
    }
    const userData = JSON.parse(localStorage.getItem("data"));
    const userBalance = userData.map.data.balance;
    console.log(`balance user = ${userBalance}`);
    const submitHandler = async (event) => {
        try{
            event.preventDefault();
            const deletedUserId = await validate(itemName);
            console.log("id yang mau dihapus = " + deletedUserId);
            if(deletedUserId === null){
                throw new Error();
            }
            console.log("Nilai valid = " + typeof(deletedUserId) === Number);
            console.log(`token = ${JSON.parse(localStorage.getItem("data")).map.token}`)
            await axios.delete(`/item/deleteitem/${Number(deletedUserId)}`, {
                headers : {
                    Authorization : "Bearer " + JSON.parse(localStorage.getItem("data")).map.token,
                }
            });
            const newData = await axios.get(`/item/getitems`, {
                headers : {
                    Authorization : "Bearer " + JSON.parse(localStorage.getItem("data")).map.token,
                }
            });
            const stringJson = JSON.stringify(newData.data);
            localStorage.setItem("search", stringJson);
            alert("success buy items!")
            navigate("/home")
        }
        catch(err){
            alert("error occured when delete item data");
            navigate("/home")
        }
    }

    const validate = async (itemName) => {
        const arrayJson = data.data.map.data;
        console.log(`arrayJson = ${arrayJson}`);
        let tempData = {};
        arrayJson.map((value, index) => {
            console.log(`index ${index} memiliki nama ${value.name} dengan id ${value.id}`);
            console.log(`item name = ${itemName} sama dengan ${value.name} bernilai ${itemName === value.name}`);
            if(value.name === itemName){
                tempData = value;
            }
        })
        console.log("nilai tempdata = " + JSON.stringify(tempData));
        const fixData = tempData;
        console.log(`nilai json fixdata = ${JSON.stringify(fixData)}`);
        console.log(`validasi besarnya harga fix data = ${fixData.price} dan user balance = ${userBalance} = ${fixData.price > userBalance}`);
        if(fixData.price > userBalance){
            throw new Error();
        }
        userData.map.data.balance = userBalance - fixData.price;
        const user = await axios.post(`/addbalance/${userData.map.data.id}`, {
            balance : userData.map.data.balance
        }, {
            headers : {
                Authorization : "Bearer " + JSON.parse(localStorage.getItem("data")).map.token,
            }
        });
        const stringJson = JSON.stringify(user.data);
        localStorage.setItem("data", stringJson);
        return fixData.id;
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
                                <td id = "table-number" className = "td-index">{data.data.map.data.id + 1}</td>
                                <td key = {data.data.map.data.name} className = "td-name">{data.data.map.data.name}</td>
                                <td key = {data.data.map.data.description} className = "td-description">{data.data.map.data.description}</td>
                                <td key = {data.data.map.data.price} className = "td-price">{data.data.map.data.price}</td>
                                <td key = {data.data.map.data.id} id = "image" className = "td-image">
                                    <img alt = "alt" src={`data:image/jpeg;base64,${data.data.map.data.image}`} width={400} height = {200}></img>
                                </td>
                                <td key = {data.data.map.data.createdAt} className = "td-created">{data.data.map.data.createdAt}</td>
                            </tr>
                    </tbody>
                </Table>
                <div className = "form-buy">
                    <form onSubmit = {submitHandler}>
                        <label htmlFor="buy-item" className = "label-buy">Masukkan nama item yang ingin dihapus</label>
                        <br></br>
                        <input type="text" id = "buy-item" placeholder = "Barang A..." onChange = {itemNameHandler}></input>
                        <input type="submit"></input>
                    </form>
                </div>
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
                    <form onSubmit={submitHandler}>
                        <label htmlFor="buy-item" className = "label-buy">Masukkan nama item yang ingin dibeli</label>
                        <br></br>
                        <input type="text" id = "buy-item" placeholder = "Barang A..." onChange = {itemNameHandler}></input>
                        <input type="submit"></input>
                    </form>
                </div>
            </>
        )
    }
}

export default TabelItem;