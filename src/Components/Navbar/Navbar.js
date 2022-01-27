import React,{useState , useEffect} from 'react'
import WeatherItem from '../WeatherItem/WeatherItem';
import './Navbar.css'

function Navbar() {
    const [text , setText] = useState( );
    const [Data ,setData] = useState({});

    const getWeatherData = async () =>{
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=41728530d4048cd44f4d4a8ee2459a29`;
        const fetchData = await fetch(url);
        const parsedData = await fetchData.json();
        const {speed} = parsedData.wind;
        const {temp,humidity,pressure} = parsedData.main;
        const {name} = parsedData;
        const {visibility} = parsedData;
        const {country , sunset , sunrise} =parsedData.sys;
        const {main: weatherType} = parsedData.weather[0];

        const weatherInfo = {
            temp,
            humidity,
            pressure,
            weatherType,
            name,
            speed,
            country,
            sunset,
            sunrise,
            visibility,
        };
        setData(weatherInfo);
    }catch(error){
    }
}
    useEffect(() => {
        getWeatherData();
    }, []);

    return (
        <div>
           <div>
            </div>
            <div className="container">
                <div className="header">
                        <h2>Welcome to Weather App</h2>
                        <div className="search-bar">
                            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='  search city' />
                            <button onClick={getWeatherData}>Search</button>
                        </div>
                            <div className="finalData">
                                        <WeatherItem {...Data}/>
                            </div>
                </div>
            </div>
        </div>
    )
    
}

export default Navbar
