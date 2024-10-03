import MyLog from "./MyLog";
import {toast} from "react-toastify";

export default (url,options)=>{
    return fetch(url,options)
        .then(res => {
            console.log(res)
            MyLog(res)
            if (res.status===204)
            {
                MyLog("NoContent")
                return null
            }
            if (res.ok)
                return res.json()
        })
        
}