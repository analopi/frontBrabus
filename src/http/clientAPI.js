import { $host } from "./indexhttp"


export const postModuleEazy = async (mobile, other) => {
    console.log("dasdasdasdasdasd")
    const {data} = await $host.post('/api/client/eazy', {mobile, other})
    return data
}
export const postModuleHard = async (mobile,other, gosNumber,methodConnect) => {
    console.log("dasdasdasdasdasd")
    const {data} = await $host.post('/api/client/hard', {mobile, other, gosNumber,methodConnect})
    return data
  }