import { post, del, get, put } from "../api_helper"
import * as url from "../url_helper"

const login = (data) => post(url.LOGIN, data);
const register = (data) => post(url.REGISTER, data);

export { login, register }