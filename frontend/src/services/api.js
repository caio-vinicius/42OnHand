import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.intra.42.fr",
    headers: { "Authorization": " Bearer 40fcef170ad307e7b66f8dafd12b9ce7863392219cce9fd3959546304148325c"}
})

export default api;