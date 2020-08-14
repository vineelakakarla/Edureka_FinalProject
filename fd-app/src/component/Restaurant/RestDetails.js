import React from 'react';
import './RestDetails.css';

const RestDetails = (props) => {
    console.log(props);

    const restaurantData = ({restData}) => {
       
        if (restData) {
         return (
            <div className="matter">
                <h1 id="heading">{restData[0].name}</h1>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="#Overview" data-toggle="tab" className="nav-link">Overview</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Contact" data-toggle="tab" className=" nav-link active">Contact</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="Overview" className="tab-pane fade in">
                        <h3 className="overview">About this place</h3>
                        <p className="overTxt">This restaurant has best cusine</p>
                        <p className="overTxt">Mainly famous for spicy food</p>
                    </div>
                    <div id="Contact" className="tab-pane fade in active show">
                        <p className="ph">Phone Number</p>
                        <p className="num">+91 114004566 </p>
                        <div className="add">
                            <h3 className="addName">{restData[0].name}</h3>
                            <p className="addTxt">{restData[0].address}</p>
                        </div>
                    </div>
                </div>
            
      
            


            </div>
                )
              }

        
    }
    return (

        <div className="container content">
            {restaurantData(props)}
            

        </div>
    )
}
export default RestDetails;