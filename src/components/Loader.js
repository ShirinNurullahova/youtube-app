import React from 'react';
import loader from '../images/icons8-loader-60.png'

const Loader = ({isLoading}) => {
    return (
        <div
            className="loader"
            style={{display: isLoading ? "block" : "none"}}>
            <img src={loader} alt="loading..." />
        </div>
    )
}
export default Loader;