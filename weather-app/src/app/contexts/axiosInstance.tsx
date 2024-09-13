import axios from "axios";
import { apiBaseURL } from "../helpers/api";

export const axiosInstance = axios.create({
    baseURL : apiBaseURL
})