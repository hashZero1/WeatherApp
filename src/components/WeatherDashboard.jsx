import { useContext } from 'react'
import CityDetails from './CityDetails';
import { ApiContext } from '../context/ApiContext';

const WeatherDashboard = () => {
  const {cityName,cityValue,handleChange, fetchData} = useContext(ApiContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetchData()
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-indigo-500 via-indigo-300 to-indigo-100">
    <div className='w-full lg:w-2/5 p-2 lg:p-5'>
         <h1 className="text-3xl text-white drop-shadow-lg mb-4 rounded-lg font-semibold p-4 bg-white bg-opacity-40">Weather APP</h1>

      <form onSubmit={handleSubmit}>
      <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input value={cityValue} onChange={handleChange} type="search" id="search" className="block w-full p-4 pl-10 focus:outline-none text-sm text-gray-800  rounded-lg bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search for City" required/>
      <button onClick={fetchData} className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-violet-700">Search</button>
      </div>
      {cityName?
        <div className='flex items-center justify-center'>  
        <CityDetails city={cityName}/>
        </div>
        : null }
      </form>
      </div>
      </div>
  )
}

export default WeatherDashboard;