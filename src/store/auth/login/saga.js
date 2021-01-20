import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper"


import { login } from "../../../helpers/auth/auth"

const fireBaseBackend = getFirebaseBackend()

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(login, {
      email: user.email,
      password: user.password,
    })
    if(response.error){
      yield put(apiError(response.error))
    } else {
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
      history.push("/dashboard")
    }
  } catch (error) {
    yield put(apiError("Oops! Can't access the server."))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}
function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
