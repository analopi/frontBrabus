import axios from "axios"



const $host = axios.create({
    baseURL: 'http://api.kupim-ekb.ru/'
})

export {
    $host
}