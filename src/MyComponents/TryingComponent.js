import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import MyLog from "../Helpers/MyLog";
import MyFetch from "../Helpers/MyFetch";
import FormComponent from "../Helpers/FormComponent";

export default ()=>{
    let [value,setValue] = useState([])
    const getData = () =>
    {
        MyFetch("http://localhost:5095/api/CityApi?sizePage=5")
            .then(data =>
            {
                setValue(data.data)
                toast.info("success")
            })
            .catch(err =>
            {
                toast.error(err.message)
            })
    }
    useEffect(()=>{
        getData()
    },[])
    const DoDelete = (ev) =>{
        let id = ev.target.id
        MyFetch("http://localhost:5095/api/DeleteApi/"+parseInt(id),{
            method: "DELETE"
        })
            .then(()=>getData())
    }
    return (
        <>
            <FormComponent reloadCities={getData}/>
            <h1 id="1">Результати</h1>
            <ul>
            {value.map((data,index)=>
                (
                    <>
                        <li key={index}>{data.nameCity}
                            <button id={data.id+"city"} onClick={DoDelete}>Delete</button>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}