import { Form, Button} from "react-bootstrap";
const AddItem = () => {
   return (
    <div>
    <h1 id = "login-page-title">Add item page</h1>
    <Form  id = "form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="product-name">Product name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" id = "product-name"/>
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="price">Price</Form.Label>
            <Form.Control type="number" placeholder="Price" id = "price"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control type="text" placeholder="Description" id = "description"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="file">Please input product image</Form.Label>
            <Form.Control type="file" placeholder="Description" id = "file" accept="image/jpg,image/png,image/jpeg"/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
</div>
   )
}

export default AddItem;