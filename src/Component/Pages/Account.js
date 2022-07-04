import { useState } from "react";
import NavbarHome from "../NavbarHome";
import axios from "../../Api/AxiosConfig"

const Account = () => {
    console.log("profile = " + JSON.stringify(localStorage.getItem("profile")))
    const [balanceText, setBalanceText] = useState("");
    const data = JSON.parse(localStorage.getItem("data"));
    console.log("data = " + data.map.data.balance);
    if(data.map.data.balance === null){
        data.map.data.balance = 0;
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post(`/addbalance/${data.map.data.id}`, {
                balance : balanceText
            }, {
                headers : {
                    Authorization : "Bearer " + JSON.parse(localStorage.getItem("data")).map.token,
                }
            });
            const stringJson = JSON.stringify(response.data);
            localStorage.setItem("data", stringJson);
            alert(response.data.map.message);  
            window.location.reload(true); 
        }
        catch(err){
            alert(err);
        }
    }

    const balanceHandler = (event) => {
        setBalanceText(event.target.value);
    }
    return (
        <>
            <NavbarHome exist={false}></NavbarHome>
            <h3 className = "form-account-text">Student ID : {data.map.data.studentNumber}</h3>
            <h3 className = "form-account-text">Student Balance : {data.map.data.balance}</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="balance" className = "form-account-text">Masukkan balance yang Anda inginkan</label>
                <input type = "number" id = "balance" onChange = {balanceHandler}></input>
                <input type = "submit"></input>
            </form>
        </>
    )
}

export default Account;
