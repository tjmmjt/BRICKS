import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchGallery(action) {
  try {
    console.log("in fetchGallery()");
    const gallery = yield axios.get(`/api/gallery`);
    yield put({ type: "SET_GALLERY", payload: gallery.data });
  } catch (error) {
    console.error('Error in fetchGallery * ()', error)
  }
}

function* deleteSet(action) {
  // console.log('in deleteSet(*)')
  // console.log('delete id:', action.payload)
  yield axios.delete(`/api/gallery/${action.payload}`)
  yield put({type: 'FETCH_GALLERY'})
}

function* updateSet(action){
  console.log('in updateSet(*)')
  // need to send axios.put request by req.params.id with req.body
  console.log('payload:', action.payload)
  console.log('id:', action.payload.id)

  
}

function* gallerySaga(action) {
  yield takeLatest("FETCH_GALLERY", fetchGallery);
  yield takeLatest('DELETE_SET', deleteSet)
  yield takeLatest('UPDATE_SET', updateSet)
}

export default gallerySaga;
