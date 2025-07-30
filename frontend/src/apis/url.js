import { backend } from "./config.js";
import axios from "axios";

export async function getUrl(id, token) {try {
    const response = await axios.get(backend + "/url/fetchall/" + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return []; // return empty array to avoid undefined
  }
}
export async function createUrl(body, token) {
    try {
        const response=await axios.post(backend+"/url/save",
        body,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
    } catch (error) {
        console.log(error.message);
    }
   

}

