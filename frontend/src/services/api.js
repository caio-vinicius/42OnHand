import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.intra.42.fr",
    headers: { "Authorization": " Bearer 65a09aa41c50ab663631cddcdea17cbcd0350087e7ffc5b1080f79115d64d4c1"}
})

export default api;