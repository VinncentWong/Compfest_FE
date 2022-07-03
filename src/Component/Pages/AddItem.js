import axios from "../../Api/AxiosConfig";
import { useState } from "react";
import { Form, Button} from "react-bootstrap";
const AddItem = () => {

    const [productName, setProductName] = useState("");
    const [price, setProductPrice] = useState("");
    const [description, setProductDescription] = useState("");
    const [image, fileExist] = useState([]);

    const productNameHandler = (event) => {
        console.log(`product name = ${event.target.value}`)
        setProductName(event.target.value);
    }

    const priceHandler = (event) => {
        console.log(`product price = ${event.target.value}`)
        setProductPrice(event.target.value);
    }

    const descriptionHandler = (event) => {
        console.log(`product description = ${event.target.value}`)
        setProductDescription(event.target.value);
    }

    const imageHandler = (event) => {
        fileExist(event.target.files);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("Masuk ke submit handler");
        try{
            const response = await axios.post('/item/additem', {
                name : productName,
                description : description,
                price : price,
                image : image[0]
            }, {
                headers : {
                    Authorization : "Bearer " + JSON.parse(localStorage.getItem("data")).map.token,
                    "Content-Type" : "multipart/form-data",
                }
            })
            console.log(`token = ${JSON.parse(localStorage.getItem("data")).map.token}`)
            alert(response.data.map.message);
        }
        catch(error){
            console.log("Masuk catch");
            alert(error);
            console.log("Error = " + error);
        }
    }
   return (
    <div>
    <h1 id = "login-page-title">Add item page</h1>
    <Form  id = "form-login" onSubmit = {submitHandler} enctype="multipart/form-data">
        <Form.Group className="mb-3">
            <Form.Label htmlFor="product-name">Product name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" id = "product-name" onChange={productNameHandler}/>
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="price">Price</Form.Label>
            <Form.Control type="number" placeholder="Price" id = "price" onChange={priceHandler}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control type="text" placeholder="Description" id = "description" onChange = {descriptionHandler}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="file">Please input product image</Form.Label>
            <Form.Control type="file" placeholder="Description" id = "file" accept="image/jpg,image/png,image/jpeg" onChange = {imageHandler} name = "image" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
</div>
   )
}

export default AddItem;