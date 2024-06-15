import axios from "axios";

export default axios.create({
    baseURL: "http://api.rawg.io/api",
    params: {
        key: ""
    }
})
