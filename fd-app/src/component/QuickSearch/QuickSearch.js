import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './QuickSearch.css'

class QuickSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mealData: ""
        }
    }
    renderMealdata = (mealData) => {
        if (mealData) {
            return mealData.map((item) => {
                return (

                    <div className="QSCol col-md-4 col-sm-6 col-lg-3">
                        <Link to={`/details/${item.mealtype}`} >

                            <div className="component">
                                <div className="QSimg">
                                    <img className="responsive" src={`/images/${item.name}.jpg`} alt={`${item.name}_img`} />
                                </div>
                                <div className="QStxt">

                                    <h5 className="compHead">{item.name[0].toUpperCase() + item.name.slice(1)}</h5>

                                    <p className="txt">Start your day with exclusive {item.name}</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                )
            })

        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="QSContainer">
                    <h1 className="QShead">Quick Search</h1>
                    <p className="subHead">Discover restaurents by type of meal</p>
                    <div className="row">
                        {this.renderMealdata(this.props.mealData)}

                    </div>
                </div>
            </div>

        )
    }
    


}
export default QuickSearch;

