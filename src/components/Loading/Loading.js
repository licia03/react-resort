import React from 'react';
import loadingGif from '../../images/gif/loading-arrow.gif';
import './Loading.css';

export default function Loading() {
    return (
        <div className="loading">
            <h4>room data loading...</h4>
            <img src={loadingGif} alt="Loading" />
        </div>
    )
}
