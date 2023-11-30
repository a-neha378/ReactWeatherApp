
import React, { useEffect, useState } from 'react'
import { FaCity } from "react-icons/fa";

export const Tempapp = () => {

    const [city, setCity] = useState('Pune')
    const [weatherData, setData] = useState('')

    const fetchWeatherData = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b73e1d6f3f7ffd122e6d7eb1cd3e49d9`
        /* const response =  await fetch(url)
         console.log(response);
         const resJson =  await response.json()
         console.log(resJson.name);*/

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
                console.log(data)
               // console.log(data.weather[0].main)
            })


    }
    useEffect(() => {
        fetchWeatherData()
    }, [city])
    return (
        <>
            <div className='container bg-info bg-opacity-50 border border-info  rounded w-25 p-5 mt-5 '>
                <input className='form-control text-capitalize' type='search' placeholder='Serach With City Name'

                    onChange={(e) => setCity(e.target.value)}
                ></input>

                {weatherData.main ? (<><div className='row mt-5 justify-content-center'>
                    <div className='col-3 col-sm-3  mt-1'>
                        <FaCity className='fs-1  ms-4 text-white' />
                    </div>
                    <div className='col-5 col-sm-5 me-5  '>
                        <p className="h1  fw-bold text-capitalize">{city}</p>
                    </div>
                </div>

                    <p className='h3'>{weatherData.main.temp}°C - {weatherData.weather[0].main}</p>
                    <div>
                        <span>Min-{weatherData.main.temp_min}°C</span><span> | </span><span>Max-{weatherData.main.temp_max}°C</span>
                    </div></>)
                    : (<div className='mt-5 fs-3'>No Data Found</div>)
                }
            </div>
        </>
    )
}
