import React from 'react';
import './RestImg.css';
import {Link} from 'react-router-dom';

const RestImg = (props) => {
    var divImg; 
     
    if(props.restData == "")
        divImg={};
    else

        divImg = {  
                    backgroundImage: `url('${props.restData[0].thumb}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',                
                    backgroundRepeat: 'no-repeat',
                    
                };
       
        
    return (
        <div className="mainContainer">
            <div className="row">
                <div className="col-lg-12 col-12" style= {divImg} >
                    <div className="container gallery">
                        <a href="/gallery" className="img_link">Click to see Image Gallery</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RestImg;