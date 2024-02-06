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

function* gallerySaga(action) {
  yield takeLatest("FETCH_GALLERY", fetchGallery);
}

export default gallerySaga;
