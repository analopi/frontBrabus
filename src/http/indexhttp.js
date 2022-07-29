import axios from "axios"



const $host = axios.create({
    baseURL: 'https://62.113.111.187:5000/'
})

export {
    $host
}