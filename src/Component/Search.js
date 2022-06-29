import { Form } from "react-bootstrap";

const Search = ({id}) => {
    if(id !== null){
        return (
            <div id = "id">
                <Form.Label htmlFor="form-control">Search</Form.Label>
                <Form.Control type = "text" id = "form-control" aria-describedby="text-block"></Form.Control>
                <Form.Text id = "text-block"></Form.Text>
            </div>
        )
    }
}

export default Search;