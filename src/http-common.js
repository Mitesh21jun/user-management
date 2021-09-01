import axios from "axios";

export default axios.create({
    baseURL: "http://15.207.229.231:8000/machstatz/",
    headers: {
        "Content-type": "application/json"
    }
})