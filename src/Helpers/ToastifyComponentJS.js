import {toast} from "react-toastify";
export default () =>
{
    const ShowToastInfo = () =>
    {
        toast.info("Hellow toast info")
    }
    const ShowToastError = () =>
    {
        toast.error("Hellow toast error")
    }
    return(
        <>
            <button onClick={ShowToastInfo}>Info</button><br/>
            <button onClick={ShowToastError}>Error</button>
        </>
    )
}