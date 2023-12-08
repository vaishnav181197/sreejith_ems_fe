import { BASE_URL } from "./basrUrl";
import { commonApi } from "./commonApi";

// add user 

export const addUser=async(body,header)=>{

    // api 

    return  await  commonApi("POST",`${BASE_URL}/add`,body,header)
}