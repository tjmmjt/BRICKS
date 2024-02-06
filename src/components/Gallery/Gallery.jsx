import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function Gallery() {
    console.log('in Gallery()');
    const dispatch = useDispatch()
    const store = useSelector(store => store.galleryReducer)
    // console.log('galleryReducer', store)
    // const fetchGallery = dispatch({type: 'FETCH_GALLERY'})
    useEffect(() => {
        dispatch({type: 'FETCH_GALLERY'})
    }, [])

    return(
        <>
            <h2>Gallery</h2>
            {store.map((set, i) => (
                <Box key={i}>
                    <Box height='10rem'>
                        <img src={set.set_img_url} alt={set.name} height='100%' />
                    </Box>
                </Box>
            ))}
        </>
    )
}

export default Gallery