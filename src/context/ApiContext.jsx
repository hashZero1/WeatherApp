import { createContext, useState } from "react";
import axios from 'axios'
import useForm from "../Hooks/useForm";


export const ApiContext = createContext();

export const ApiProvider = ({children}) =>{
    const [cityValue , handleChange] = useForm("");
    const [cityName, setCityName] = useState()
    const Base_URL = `https://api.weatherapi.com/v1/current.json?key=46a14caf5d5c4bde98c95253222512&q=${cityValue}&aqi=yes`;

  const fetchData = async() => {
        try{
            const config = {headers: {Accept: 'application/json'}}
            const res = await axios.get(Base_URL,config)
            const data = res.data
         setCityName(data)
        }
        catch(e){
         console.log(e)
        }}
    
    const value = {cityName, fetchData, handleChange}
    
    return(
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    )
}
