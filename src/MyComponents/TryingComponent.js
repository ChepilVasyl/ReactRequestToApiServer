import {useEffect, useState} from "react";

export default ()=>{
    let [value,setValue] = useState([])
    const getData = () =>
    {
        fetch("http://localhost:5095/api/CityApi")
            .then(res => res.json())
            .then(data =>
            {
                setValue(data.data)
                if (!Array.isArray(data.data))
                {
                    console.log("Дані не є масивом")
                }
            })
            .catch(err =>
            {
                console.log("Помилка з fetch "+err)
            })
    }
    useEffect(()=>{
        getData()
    },[])
    
    return (
        <>
            <h1>Результати</h1>
            <ul>
            {value.map((data,index)=>
                (
                <li key={index}>{data.nameCity}</li>
                ))}
            </ul>
        </>
    )
}