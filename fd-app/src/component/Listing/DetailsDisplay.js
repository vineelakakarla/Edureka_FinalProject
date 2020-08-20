import React from 'react';
import { Link } from 'react-router-dom';
import Paginate from './Paginate';
import './DetailsDisplay.css';

const DetailsDisplay = (props) => {


const renderDetails = ({restData} ) => {
        if (restData) {
            return restData.map((item) => {
                return (
                    <div className="RestData">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="restImg">
                                    <img className="img-responsive" className="restImage" src={`${item.thumb}`} alt="breakfast_img" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="restDet">
                                    <Link to={`/rest/${item._id}`} className="RestTitle" ><h2>{item.name}</h2></Link>
                                    <p className="resttxt"> {item.address}</p>
                                </div>

                            </div>

                        </div>
                        <hr/>
                            <div className="row" >
                            <div className="col-md-2">
                                <p className="resttxt">CUSINES:</p>
                            </div>
                            <div className="col-md-8">
                                <div className="restDet">
                                    <p className="resttxt"> {item.Cuisine[0].name}, {item.Cuisine[1].name}</p>
                                </div>

                            </div>


                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <p className="resttxt">COST FOR TWO:</p>
                            </div>
                            <div className="col-md-8">
                                <div className="restDet">
                                    <p className="resttxt"> {item.cost}</p>
                                </div>

                            </div>


                        </div>

                    </div>
                )
            }
            )
        }

    }

    return (

        <div>
            {renderDetails(props)}
            
          
        </div>

    )
}

export default DetailsDisplay;