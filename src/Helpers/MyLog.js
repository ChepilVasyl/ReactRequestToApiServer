import {toast} from "react-toastify";

export default (message) => 
    {
        console.log(message)
        if(typeof(message)==="string")
            toast.info(message)
    }