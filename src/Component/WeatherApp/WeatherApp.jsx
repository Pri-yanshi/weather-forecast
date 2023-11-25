import React,{useState} from 'react';
import './WeatherApp.css';
import { CiSearch } from "react-icons/ci";
import clear from '../Images/clear.png';
import cloud1 from '../Images/cloud1.png';
import drizzle from '../Images/drizzle.png';
import humidity1 from '../Images/humidity1.png';
import rain from '../Images/rain.png';
import snow from '../Images/snow.png';
import wind from '../Images/wind.png';
import { Typewriter } from 'react-simple-typewriter';

const WeatherApp = () => {

   let api_key ="f99563ece67f745c65042c40c91ad629";
   const [wicon , setWicon] = useState(cloud1);

   const search = async()=>{
    const element= document.getElementsByClassName("cityInput");
    if(element[0].value===""){
      return 0;
    }
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location');

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h";
    temp[0].innerHTML = Math.floor(data.main.temp)+"°c";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWicon(clear);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(cloud1);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWicon(drizzle);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setWicon(drizzle);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setWicon(rain);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setWicon(rain);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setWicon(snow);
    }
    else{
      setWicon(clear);
    }

   }

  return (
    <>
      <div className="container">
        <div className="top-nav">
          <input type="text" className='cityInput' placeholder='Search' />
          <div className="search-icon" onClick={search}>
          <CiSearch />
          </div>
        </div>
        <div className="weather-img">
          <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location"></div>
        <div className="data-container">
          <div className="element">
            <img src={humidity1} alt="" className='icon'/>
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind} alt="" className='icon'/>
            <div className="data">
              <div className="wind-rate">18km/h</div>
              <div className="text">Wind</div>
            </div>
          </div>
        </div>
        <div className="weather"><span style={{color:'navyBlue',textShadow:"5px 5px 8px rgb(0,0,0,0.2)",boxShadow:"4px 5px 5px rgb(0,0,0,0.2)"}}><Typewriter
            words={['Weather Forecast']}
            loop={true}
            cursor
            cursorFontWeight='200'
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={180}
            delaySpeed={1000}
        
          /></span></div>
      </div>
      
    </>
  )
}

export default WeatherApp
