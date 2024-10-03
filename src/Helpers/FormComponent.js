import {useEffect, useState} from "react";
import MyFetch from "./MyFetch";
import {type} from "@testing-library/user-event/dist/type";

export default (props) => {
    const [areas,setAreas] = useState([])
    useEffect(()=>{
    MyFetch("http://localhost:5095/api/AreaApi")
        .then(data => {
            if (Array.isArray(data))
                setAreas(data)
            else
            {
                console.log("data не є масивом")
            }
        })
        .catch(err =>
        {
            console.log("Catch = "+err.message)
        })},[])
    const onSubmit = (ev) =>
    {
        ev.preventDefault()
        const frmData = new FormData(ev.target);
        const data = Object.fromEntries(frmData.entries());
        MyFetch("http://localhost:5095/api/CreateApiCity", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
            .then(newCity => {
                console.log(newCity)
                console.log("УСПІХ");
                props.reloadCities()
            })
            .catch(err =>
            {
                console.log("НЕВДАЧА")
            })
    }
    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="cityName">Вкажіть назву міста</label>
            <input id="cityName" name="nameCity"/><br/>
            <label htmlFor="cityCount">Вкажіть населення міста</label>
            <input id="cityCount" name="peopleCount"/><br/>
            <label htmlFor="cityArea">Оберіть область</label>
            <select id="cityArea" name="areaId">
                {areas.map(region => (
                    <option key={region.id} value={region.id}>{region.nameArea}</option>
                ))}
            </select><br/>
            <input type="submit"/>
        </form>
    )
}