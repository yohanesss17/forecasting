import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./weather.scss"
import WeatherData from "./WeatherData";
import NotFound from "./NotFound";


class Weather extends React.Component {
    constructor() {
        super()

        this.state = {
            latitude: '',
            longitude: '',
            city: '',
            temperature: '',
            weather: '',
            description: '',
            date: '',
            feels: '',
            humidity: '',
            wind: '',
            cloud: '',
            uv: '',
            pressure: '',
            forecast: [],
            tomorrowForecast: [],
            loading: true,
            notFound: false,
            search: '',
            tab: 1,
        }

        this.query = ''

        this.getMyLocation = this.getMyLocation.bind(this)
    }

    componentDidMount() {
        this.getMyLocation()
    }

   

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })

                this.query = position.coords.latitude + "," + position.coords.longitude;
                this.getWeatherAndTime()
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        }
    }

    searchCity= () => {
        this.setState({
            loading: true
        });
        this.getWeatherAndTime()
    }

    handleChange(event) {
        this.setState({
            search: event.target.value,
        })
        this.query = event.target.value
    }

    async getWeatherAndTime() {
        await axios.get('http://api.weatherapi.com/v1/forecast.json?key=a68f6cf234b844afb9575904221305&q=' + this.query + '&days=7&aqi=yes&alerts=no').then((result) => {
            var result = result.data
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var weekdays = new Array(7);
            weekdays[0] = "Sunday";
            weekdays[1] = "Monday";
            weekdays[2] = "Tuesday";
            weekdays[3] = "Wednesday";
            weekdays[4] = "Thursday";
            weekdays[5] = "Friday";
            weekdays[6] = "Saturday";

            let newDate = new Date()
            var day = weekdays[newDate.getDay()];
            let date = newDate.getDate();
            let month = newDate.getMonth();
            this.setState({
                city: result.location.name + ', ' + result.location.region,
                temperature: result.current.temp_c,
                feels: result.current.feelslike_c,
                date: day + ', ' + date + ' ' + monthNames[month],
                forecast: result.forecast.forecastday[0],
                tomorrowForecast: result.forecast.forecastday[1],
                weather: result.current.condition.text,
                humidity: result.current.humidity,
                wind: result.current.wind_kph,
                cloud: result.current.cloud,
                uv: result.current.uv,
                pressure: result.current.pressure_in,
                loading: false,
                notFound: false,
                tab: 1
            })

        }).catch((error) => {
            this.setState({
                notFound: true,
                loading: false
            });

        })
    }

    loading = () =>{
        this.setState({
            loading: true
        })
    }
    finishLoad = () =>{
        this.setState({
            loading: false
        })
    }

    render() {
        if (this.state.loading === false) {
            let weather;
            if (this.state.notFound === true) {
                weather = <NotFound />
            } else {
                weather = <WeatherData state={this.state} loading={this.loading} finish={this.finishLoad} />
            }
            return (
                <div>
                    <div className='w-full lg:container mx-auto flex flex-wrap py-[1rem] lg:py-[4rem] px-[2rem] lg:px-[0rem] relative'>
                        <div className="basis-full h-[40px] relative mb-[20px] lg:mb-[40px]">
                            <input type="text" className="px-[10px] py-[5px] border-y-[1px] border-l-[1px] border-darkBLue rounded-tl-[5px] rounded-bl-[5px] w-10/12  lg:w-[200px] outline-darkBlue" value={this.search} onChange={ e=> this.handleChange(e)} placeholder="Search city name" />
                            <button className="bg-darkBlue text-white px-[5px] py-[5px] rounded-tr-[5px] rounded-br-[5px] w-2/12 lg:w-[40px] h-[37px]" onClick={this.searchCity}>
                                <FontAwesomeIcon icon={faSearch} className="text-white" />
                            </button>
                        </div>
                        {weather}
                    </div>
                </div>
            )
        }
    }
}

export default Weather;