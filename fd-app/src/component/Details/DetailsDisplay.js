import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailsDisplay.css';

const DetailsDisplay = (props) => {

    const renderDetails = ({ restData }) => {
        if (restData) {
            return restData.map((item) => {
                return (
                    <div className="RestData">
                        <div className="row head">
                            <div className="col-md-2">
                                <div className="restImg">
                                    <img className="responsive" className="restImage" src={`${item.thumb}`} alt="breakfast_img" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="restDet">
                                    <Link to={`/rest/${item._id}`} ><h5 className="RestTitle">{item.name}</h5></Link>
                                    <p className="txt"> {item.address}</p>
                                </div>

                            </div>


                        </div>
                        <div className="row" >
                            <div className="col-md-2">
                                <p className="txt">CUSINES:</p>
                            </div>
                            <div className="col-md-8">
                                <div className="restDet">
                                    <p className="txt"> {item.Cuisine[0].name}, {item.Cuisine[1].name}</p>
                                </div>

                            </div>


                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <p className="txt">COST FOR TWO:</p>
                            </div>
                            <div className="col-md-8">
                                <div className="restDet">
                                    <p className="txt"> {item.cost}</p>
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