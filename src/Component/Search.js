const Search = ({id}) => {
    if(id !== null || id !== undefined){
        return (
            <div id = {id}>
                <label htmlFor="form-search" id = "label-search">Search</label>
                <form>
                    <input type = "search" id = "form-search"></input>
                </form>
            </div>
        )
    }
}

export default Search;