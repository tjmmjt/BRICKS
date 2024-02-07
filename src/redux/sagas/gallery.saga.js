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
  console.log('in deleteSet(*)')
  console.log('delete id:', action.payload)
  yield axios.delete(`/api/gallery/${action.payload}`)
  yield put({type: 'FETCH_GALLERY'})
}

function* gallerySaga(action) {
  yield takeLatest("FETCH_GALLERY", fetchGallery);
  yield takeLatest('DELETE_SET', deleteSet)
}

export default gallerySaga;
