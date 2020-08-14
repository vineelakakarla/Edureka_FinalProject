import React from 'react';
import './RestImg.css';
import {Link} from 'react-router-dom';

const RestImg = () => {
    return (
        <div className="mainContainer">
            <div className="row">
                <div className="col-lg-12 col-12 img">
                    <div className="container gallery">
                        <a href="/gallery" className="img_link">Click to see Image Gallery</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RestImg;