import React,{useState,useEffect} from 'react'
// import './WeatherItem.css'
import '../WeatherItem/WeatherItem.css'
export default function WeatherItem(
    {temp,
    humidity,
    pressure,
    weatherType,
    name,
    speed,
    country,
    sunset,
    sunrise,
    visibility,}
    ) {
        const [weatherState , setWeatherState] = useState("");
        useEffect(() => {
            if(weatherType){
                switch (weatherType){
                    case "Clouds":
                    setWeatherState("fa-cloud");
                    break;
                    case "Haze":
                        setWeatherState("fa-smog");
                        break;
                        case "Clear":
                            setWeatherState("fa-sun");
                            break;
                            case "Mist":
                                break;
                }
            }
        }, [weatherType])

        // Converting sec in time of sunrise
        let sunrisesec = sunrise;
        let datesunrise = new Date(sunrisesec *1000);
        let timesunrise = `${datesunrise.getHours()}:${datesunrise.getMinutes()}`;

        // Converting sec in time of sunset
        let sec = sunset;
        let date = new Date(sec *1000);
        let timeStr = `${date.getHours()}:${date.getMinutes()}`;


    return (
        <div>
            <div className="weather-type">
                <div className="item-1"><p>Weather :-  {weatherType}<i className={`fas ${weatherState}`}></i></p></div>
            </div>
            <div className="container-1">
                <div className="item-1"> <p>City <i className="fas fa-map-marker-alt"></i> :- {name}  {country} </p></div>
                <div className="item-1"> <p>Temp <i className="fas fa-temperature-high" id='temp-icon'></i> :- {temp}&deg;</p></div>
                <div className="item-1"> <p> Pressure:- {pressure} </p></div>
                <div className="item-1"> <p>Humidity:-  {humidity}</p></div>
                <div className="item-1"> <p>Visibility:-  {visibility}(m)</p></div>
                <div className="item-1"> <p>Wind speed  <i className="fas fa-wind"></i> :-  {speed}(m/s)</p> </div>
                <div className="item-1"> <p>Sunrise  <i className="fas fa-sun"></i> :-  {timesunrise} AM</p></div>
                <div className="item-1"> <p>Sunset  <i className="fas fa-moon"></i> :-  {timeStr} </p></div>
            </div>
        </div>
    )
}
