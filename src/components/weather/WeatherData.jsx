import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faMapMarkerAlt, faTint, faWind } from '@fortawesome/free-solid-svg-icons'
import DailyForecast from "./DailyForecast";
import rain from "../../assets/image/rain.png";
import uvImg from "../../assets/image/uv.png";
import compass from "../../assets/image/compass.png";
import pressure from "../../assets/image/pressure.png";

class WeatherData extends React.Component {

    constructor() {
        super()
        this.todayShow = true;
        this.todayClass = 'basis-2/12 h-full text-black font-semibold pb-[16px] cursor-pointer border-darkBlue border-b-[1px]';
        this.tomorrowClass = 'ml-[10px] basis-2/12 h-full text-subtitle pb-[16px] cursor-pointer ';
        this.loading = false;
    }

    switchToday = () => {
        this.props.loading()
        this.todayShow = true;
        this.todayClass = 'basis-2/12 h-full text-black font-semibold pb-[16px] cursor-pointer border-darkBlue border-b-[1px]'
        this.tomorrowClass = 'ml-[10px] basis-2/12 h-full text-subtitle pb-[16px] cursor-pointer '
        this.props.finish()
    }

    switchTomorrow = () => {
        this.props.loading()
        this.todayShow = false;
        this.todayClass = 'basis-2/12 h-full text-black font-subtitle pb-[16px] cursor-pointer'
        this.tomorrowClass = 'ml-[10px] basis-2/12 h-full text-black font-semibold pb-[16px] cursor-pointer border-darkBlue border-b-[1px]'
        this.props.finish()
    }

    render() {
        const { wind, humidity, city, temperature, date, cloud, forecast, weather, tomorrowForecast, uv } = this.props.state

        return (
            <div className="basis-full flex flex-wrap">
                <div className="basis-full lg:basis-7/12">
                    <div className={`basis-full weather-bg bg-cover h-[300px] mx-auto text-darkBlue text-center px-[1rem] py-[2rem] rounded-[15px] flex flex-wrap`}>
                        <div className="basis-full px-[1rem]">
                            <div className="flex flex-wrap">
                                <div className="basis-6/12 text-left">
                                    <p className="text-subtitle text-[12px] text-darkBlue ">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />  <span className="font-bold">{city} </span>
                                    </p>
                                </div>
                                <div className="basis-6/12 text-right">
                                    <p className="text-darkBlue text-[12px]"> {date} </p>
                                </div>
                            </div>

                            <div className="mt-[60px]">
                                <h1 className="text-darkBlue flex items-start justify-center"><span className="text-[75px] leading-[55px] mr-[5px]"> {temperature} </span> &deg;C</h1>
                                <p className="text-darkBlue mt-[1rem] text-[12px]">
                                    {weather}</p>
                            </div>

                            <div className="flex flex-wrap mt-[50px]">
                                <div className="basis-4/12 text-left">
                                    <FontAwesomeIcon icon={faTint} /> {humidity}
                                </div>
                                <div className="basis-4/12">
                                    <FontAwesomeIcon icon={faWind} /> {wind}
                                </div>
                                <div className="basis-4/12 text-right">
                                    <FontAwesomeIcon icon={faCloud} /> {cloud}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full flex flex-wrap mt-[30px]">
                        <div className="basis-6/12 pr-[1rem]">
                            <div className="rounded-[10px] bg-[#ECF3F8] h-[150px]">
                                <div className="pl-[0.7rem] lg:pl-[1rem] pt-[0.7rem] lg:pt-[1.2rem] flex flex-wrap">
                                    <div className="basis-full lg:basis-6/12">
                                        <h3 className="text-black font-bold text-[14px] lg:text-[18px]">Wind</h3>
                                        <p className="text-subtitle text-[12px] lg:text-[14px] my-[.3rem] lg:my-[.8rem]">Today Wind Speed</p>
                                        <h3 className="text-black font-bold text-[14px] lg:text-[18px]">{wind} km/h</h3>
                                    </div>
                                    <div className="basis-full lg:basis-6/12 flex justify-end items-end lg:items-center lg:justify-center pr-[20px]">
                                        <img className="w-[40px] lg:w-[80px]" alt="" src={compass} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-6/12 pl-[1rem]">
                            <div className="rounded-[10px] bg-[#ECF3F8] h-[150px]">
                                <div className="pl-[0.7rem] lg:pl-[1rem] pt-[0.7rem] lg:pt-[1.2rem] flex flex-wrap">
                                    <div className="basis-full lg:basis-6/12">
                                        <h3 className="text-black font-bold text-[14px] lg:text-[18px]">Pressure</h3>
                                        <p className="text-subtitle text-[12px] lg:text-[14px] my-[.3rem] lg:my-[.8rem]">Today Pressure </p>
                                        <h3 className="text-black font-bold text-[14px] lg:text-[18px]">{wind} inch</h3>
                                    </div>
                                    <div className="basis-full lg:basis-6/12 flex justify-end items-end lg:items-center lg:justify-center pr-[20px]">
                                        <img className="w-[40px] lg:w-[80px]" alt="" src={pressure} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full flex flex-wrap mt-[30px]">
                        <div className="basis-6/12 pr-[1rem]">
                            <div className="rounded-[10px] bg-[#ECF3F8] h-[150px]">
                                <div className="pl-[0.7rem] lg:pl-[1rem] pt-[0.7rem] lg:pt-[1.2rem] flex flex-wrap">
                                    <div className="basis-full lg:basis-6/12">
                                        <h3 className="text-black font-bold text-[14px] lg:text-[18px]">Rain Chances</h3>
                                        <p className="text-subtitle text-[12px] lg:text-[14px] my-[.3rem] lg:my-[.8rem]">Today Rain Chances</p>
                                        <h3 className="text-black font-bold text-[14px] lg:text-[18px]">{forecast.day.daily_chance_of_rain} %</h3>
                                    </div>
                                    <div className="basis-full lg:basis-6/12 flex justify-end items-end lg:items-center lg:justify-center pr-[20px]">
                                        <img className="w-[40px] lg:w-[80px]" alt="" src={rain} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-6/12 pl-[1rem]">
                            <div className="rounded-[10px] bg-[#ECF3F8] h-[150px]">
                                <div className="pl-[0.5rem] lg:pl-[1rem] pt-[0.7rem] lg:pt-[1.2rem] flex flex-wrap">
                                    <div className="lg:basis-6/12">
                                        <h3 className="text-black font-bold text-[14px] lg:text-[18px]">UV</h3>
                                        <p className="text-subtitle text-[12px] lg:text-[14px] my-[.3rem] lg:my-[.8rem]">Today UV Index</p>
                                        <h3 className="text-black font-bold text-[14px] lg:text-[18px]">{uv} </h3>
                                    </div>
                                    <div className="basis-full lg:basis-6/12 flex justify-end items-end lg:items-center lg:justify-center pr-[20px]">
                                        <img className="w-[40px] lg:w-[80px]" alt="" src={uvImg} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-full lg:basis-5/12 flex flex-wrap">
                    <div className="basis-full flex flex-wrap text-black mt-[30px] lg:mt-[0px] lg:px-[1rem]">
                        <div className="lg:border-l-[1px] border-[#E6ECEF] lg:px-[2rem] flex flex-wrap">
                            <div className="border-b-[1px] flex flex-wrap basis-full border-subtitle">
                                <div className={this.todayClass} onClick={this.switchToday}>
                                    Today
                                </div>
                                <div className={this.tomorrowClass} onClick={this.switchTomorrow}>
                                    Tomorrow
                                </div>
                            </div>
                            <div className={`max-h-[600px] basis-full mt-[20px] overflow-auto today ${this.todayShow === false ? 'hidden' : ''}`} id="scrollbar">
                                {forecast.hour.map((data, key) =>
                                    <DailyForecast data={data} key={key} />
                                )}
                            </div>
                            <div className={`max-h-[600px] basis-full mt-[20px] overflow-auto tomorrow  ${this.todayShow === true ? 'hidden' : ''}`} id="scrollbar">
                                {tomorrowForecast.hour.map((data, key) =>
                                    <DailyForecast data={data} key={key} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherData