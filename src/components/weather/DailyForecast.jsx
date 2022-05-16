import React from "react";

class DailyForecast extends React.Component {
    render() {
        return (
            <div className="flex flex-wrap basis-full items-center rounded-[25px] bg-[rgb(255,255,255,0.05)] py-[0.5rem]" key={this.key}>
                <div className="basis-3/12 flex justify-start">
                    <img alt="" src={this.props.data.condition.icon} className="w-[50px]" alt="" />
                </div>
                <div className="basis-7/12 flex flex-wrap">
                    <div className="basis-full lg:basis-full font-semibold">
                        <p>{this.props.data.condition.text}</p>
                    </div>
                    <div className="basis-full text-subtitle">
                        {this.props.data.time.split(' ')[1].split(':')[0]}:00
                    </div>
                </div>
                <div className="basis-2/12 font-semibold text-[20px]">
                    {this.props.data.temp_c}&deg;
                </div>

            </div>
        )
    }
}

export default DailyForecast;