import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.intra.42.fr",
    headers: { "Authorization": " Bearer 148a64aed0bbcba2382cae58923fb7fd15b79798e20e2a604eaa7fc47b2cb2c2"}
})

export default api;