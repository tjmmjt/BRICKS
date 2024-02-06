import axios from "axios"
import { useState } from "react"


function AddSet() {
    // this page will have a form with an input and button
    // user will input their lego set number and click search button
    // the search button calls handleSearch() which makes an api call to rebrickable.router
    // with the lego set id as axios.get('/:id')
    // render the result with:
        // image, name, set number, total pieces, genre number, etc.
    
    // local state for storing API result
    const [id, setId] = useState('')
    const [lego, setLego] = useState()

    const handleSearch = (event) => {
        event.preventDefault()
        console.log('in handleSearch()')

        axios.get(`/api/search/${id}`)
        .then(result => {
            setLego(result.data)
        })
        .catch(err => {
            alert("Error Searching, make sure you are entering correct LEGO ID!")
            console.error("Error Searching:", err)
        })

        // setLego('')
    }

    console.log('id:', id)
    console.log('lego:', lego)

    return (
        <>
            <h2>Add Set</h2>
            <form onSubmit={handleSearch}>
                <input type="text" value={lego} onChange={(event) => setId(event.target.value)}/>
                <button type="submit">Search</button>
            </form>        
        </>
    )
    
}

export default AddSet