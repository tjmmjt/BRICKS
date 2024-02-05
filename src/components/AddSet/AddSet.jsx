

function AddSet() {
    // this page will have a form with an input and button
    // user will input their lego set number and click search button
    // the search button calls handleSearch() which makes an api call to rebrickable.router
    // with the lego set id as axios.get('/:id')
    // render the result with:
        // image, name, set number, total pieces, genre number, etc.

    const handleSearch = (event) => {
        event.preventDefault()
        console.log('in handleSearch()')
    }

    return (
        <>
            <h2>Add Set</h2>
            <form onSubmit={handleSearch}>
                <input type="text" />
                <button type="submit">Search</button>
            </form>        
        </>
    )
    
}

export default AddSet