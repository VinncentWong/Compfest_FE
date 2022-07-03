const Search = ({id, onChange}) => {
    const tempSearchHandler = (event) => {
        onChange(event);
    }
    if(id !== null || id !== undefined){
        return (
            <div id = {id}>
                <label htmlFor="form-search" id = "label-search">Search</label>
                <form>
                    <input type = "search" id = "form-search"  onChange = {tempSearchHandler}></input>
                </form>
            </div>
        )
    }
}

export default Search;