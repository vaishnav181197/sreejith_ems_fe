import { BASE_URL } from "./basrUrl";
import { commonApi } from "./commonApi";

// add user 

export const addUser=async(body,header)=>{

    // api 

    return  await  commonApi("POST",`${BASE_URL}/add`,body,header)
}

// get all employees 

   export const allUsers=async()=>{
     return   await  commonApi("GET",`${BASE_URL}/get-all-users`,"")
   }

  // to delete an employee 

  export const deleteUser=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/delete-user/${id}`,{})
  }