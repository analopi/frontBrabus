import axios from "axios"



const $host = axios.create({
    baseURL: 'http://62.113.111.187:5000/'
})

export {
    $host
}