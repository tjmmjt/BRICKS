import axios from "axios"
import { useState } from "react"
import ModalAddSet from "../../ModalAddSet/ModalAddSet"

function AddSet() {
    // this page will have a form with an input and button
    // user will input their lego set number and click search button
    // the search button calls handleSearch() which makes an api call to rebrickable.router
    // with the lego set id as axios.get('/:id')
    // render the result with:
        // image, name, set number, total pieces, genre number, etc.
    
    // local state for storing API result
    const [id, setId] = useState('')
    const [lego, setLego] = useState({})
    // local state for modal open/close boolean
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleSearch = async (event) => {
        event.preventDefault()
        // API request by set ID
        axios.get(`/api/search/${id}`)
        .then(result => {
            // setLego to the searched LEGO set
            setLego(result.data)
        })
        .catch(err => {
            // alert user if search is bad
            alert("Error Searching, make sure you are entering correct LEGO ID!")
            console.error("Error Searching:", err)
        })
        // reset input
        setId('')
        // setOpen(true) to open Modal
        setOpen(true);
    }

    // TESTING
    // console.log('id:', id)
    // console.log('lego:', lego)

    return (
        <>
            <h2>Add Set</h2>
            <form onSubmit={handleSearch}>
                <input type="text" value={id} onChange={(event) => setId(event.target.value)}/>
                <button type="submit">Search</button>
            </form>
            
            <ModalAddSet lego={lego} open={open} close={() => setOpen(false)} />
        </>
    )
    
}

export default AddSet