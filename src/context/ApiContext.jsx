import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const ApiContext = createContext()

export const ApiProvider = ({children}) =>{
    const [cityName, setCityName] = useState('')

  useEffect(() => {
    async function FetchData(){
        try{
         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=46a14caf5d5c4bde98c95253222512&q=${cityName}&aqi=yes`);
         const data = response.data;
         setCityName(data)
        }
        catch(e){
         console.log(e)
        }}
         FetchData()
  },[cityName])
    
    const value = {cityName, setCityName}
    
    return(
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    )
}
