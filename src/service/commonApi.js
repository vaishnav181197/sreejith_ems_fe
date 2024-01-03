import axios from "axios";

// define a function for common api call using axios library

export const commonApi=async(method,url,data,header)=>{

           let config={
            method,
            url,
            data,
            headers:header?header:{"content-type":"application/json"}
           }


        //    axios api call- create an instance

      return await  axios(config).then((data)=>{
            return data
        }).catch((err)=>{
            return err
        })
}