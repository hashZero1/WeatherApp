const CityDetails = ({city}) => {
    return(
        <div className="w-full lg:w-[32em] py-4">
            <div className="flex flex-col rounded-lg p-4 w-full max-w-lg bg-white bg-opacity-40 text-violet-900">
                <div className="font-bold text-2xl ">{city.location.name},
                <span className="text-xl">{city.location.region}</span>
                <div className="text-[16px] font-normal">{city.location.localtime}</div>
						<div className="text-sm">{city.location.country}</div>
                </div>
                <div className="mt-6 self-center bg-violet-500 inline-flex items-center justify-center rounded-lg h-full w-full">
                    <img className="w-[5em]" src={city.current.condition.icon} alt={city.current.condition.text}/>
						</div>
						<div className="flex flex-row items-center justify-center mt-10 ">
							<div className="font-medium text-6xl">{city.current.temp_c}°C</div>
							<div className="flex flex-col items-center ml-6">
								<div className="font-medium text-sm">{city.current.condition.text}</div>
								<div className="mt-1">
									<span className="text-sm font-light ">Real Feel {city.current.feelslike_c}°C</span>
								</div>
							</div>
						</div>
						<div className="flex flex-row justify-around mt-6 p-2 bg-white rounded-lg">
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Wind</div>
								<div className="text-sm">{city.current.wind_kph}km/h</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Humidity</div>
								<div className="text-sm ">{city.current.humidity}%</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm ">Visibility</div>
								<div className="text-sm">{city.current.vis_km}km</div>
							</div>
                            <div className="flex flex-col items-center">
								<div className="font-medium text-sm ">UV Index</div>
								<div className="text-sm">{city.current.uv}</div>
							</div>
						</div>
                </div>

                <div className="bg-white rounded-lg bg-opacity-40 items-center my-4 py-1 lg:py-4 justify-center sm:flex space-y-0 lg:space-y-4 text-violet-950">
                <div className="lg:w-[16em] ">
                    <div className="text-center bg-white m-4 rounded-md px-5 py-2">
                    <div className="grid grid-cols-1 divide-y">
                    <h4 className='font-bold'>Air Quality Index</h4>
                        <div className="my-1 text-xs">CO <span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.co}</span></div>
                        <div className="my-1 text-xs">NO2 <span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.no2}</span></div>
                        <div className="my-1  text-xs">O3 <span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.o3}</span></div>
                        <div className="my-1 text-xs">SO2 <span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.so2}</span></div>
                        <div className="my-1 text-xs">PM2.5<span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.pm2_5}</span></div>
                        <div className="my-1 text-xs">PM10<span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.pm10}</span></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center align-middle">
                <div className="bg-white my-2 mx-4 lg:my-2 rounded-md sm:w-auto mb-4 text-violet-950 inline-flex items-center justify-center px-7 py-2.5">
                    <div className="text-left">
                    <div className=" grid grid-cols-1 divide-y">
                     
                       <div className="mb-1 text-xs">Wind Direction <span className="mt-1 font-sans text-sm font-semibold"> {city.current.wind_dir}</span></div>
                       <div className="mb-1 text-xs">Wind Degree <span className="mt-1 font-sans text-sm font-semibold"> {city.current.wind_degree}°</span></div>
                       <div className="mb-1 text-xs">Cloud<span className="mt-1 font-sans text-sm font-semibold"> {city.current.cloud}</span></div>
                       <div className="mb-1 text-xs">Gust <span className="mt-1 font-sans text-sm font-semibold"> {city.current.gust_kph}km/h</span></div>
                       </div>
                    </div>
                </div>
                <div className="bg-white my-2 mx-4 lg:mt-2 rounded-md sm:w-auto text-violet-950  inline-flex items-center justify-center px-7 py-2.5 ">
                    <div className="text-left">
                    <div className=" grid grid-cols-1 divide-y">
                       <div className="mb-1 text-xs">Latitude <span className="mt-1 font-sans text-sm font-semibold"> {city.location.lat}km/h</span></div>
                       <div className="mb-1 text-xs">Longitude <span className="mt-1 font-sans text-sm font-semibold"> {city.location.lon}km/h</span></div>
                       </div>
                    </div>
                </div>
            </div>
                </div>
             </div>
       
    )
}

export default CityDetails