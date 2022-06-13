import axios from "axios";

const addBaseUrl = (url: string) =>{
    return "http://localhost:8080"+url;
}
const get = async(url: any,queryParams: any) => {
    return axios.get(addBaseUrl(url), { params: queryParams });
}
const post = async(url: string, body: object, queryParams?: object) => {
    return axios.post(addBaseUrl(url), body, { params: queryParams });
}
const put = async(url: string, body: object, queryParams?: object) => {
    return axios.put(addBaseUrl(url), body, { params: queryParams });
}
const deleteR = async(url: string, id:number) => {
    return axios.delete(`${addBaseUrl(url)}/${id}`);
}

export default { get, post, put, delete: deleteR };