const Search = ({id, onChange, valid}) => {
    const tempSearchHandler = (event) => {
        onChange(event);
    }
    if((id !== null || id !== undefined) && valid){
        return (
            <div id = {id}>
                <label htmlFor="form-search" id = "label-search">Search</label>
                <form>
                    <input type = "search" id = "form-search"  onChange = {tempSearchHandler}></input>
                </form>
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Search;