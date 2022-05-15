import React from "react";
import notFoundImage from "../../assets/image/not_found.jpg"

class NotFound extends React.Component {
    render() {
        return (
            <div className="basis-full flex justify-center items-center">
                <div className="text-center">
                    <img src={notFoundImage} className="w-[400px]" alt="" />
                    <h3 className="mt-[30px] text-[20px] ">The city you are looking for can't be found </h3>
                </div>
            </div>
        )
    }
}

export default NotFound;