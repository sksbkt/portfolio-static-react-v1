import axios from "axios";
import { BACKEND_URL } from "../constants/urls";
export default axios.create({
  baseURL: BACKEND_URL,
});
