import { $host } from "./indexhttp"


export const postModuleEazy = async (mobile, other) => {
    const {data} = await $host.post('/api/client/eazy', {mobile, other})
    return data
}
export const postModuleHard = async (mobile,other, gosNumber,methodConnect) => {
    const {data} = await $host.post('/api/client/hard', {mobile, other, gosNumber,methodConnect})
    return data
  }