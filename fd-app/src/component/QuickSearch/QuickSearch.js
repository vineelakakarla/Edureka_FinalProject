import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './QuickSearch.css'
const mealUrl = "http://localhost:8900/mealtype";


class QuickSearch extends Component{
    constructor() {
        super()
        this.state = {
            mealData:""
        }
    }
    renderMealdata = (mealData) => {
        if (mealData) {
            return mealData.map((item) => {
                return (

                    <div className="QSCol col-md-4 col-sm-6 col-lg-3">

                        <div className="component">
                            <div className="QSimg">
                                <img className="responsive" src={`/images/${item.name}.jpg`} alt="breakfast_img" />
                            </div>
                            <div className="QStxt">
                                <Link to={`/details/${item.mealtype}`} >
                                    <h5 className="compHead">{item.name[0].toUpperCase() + item.name.slice(1)}</h5>
                                </Link>
                                <p className="txt">Start your day with exclusive {item.name}</p>
                            </div>
                        </div>

                    </div>

                )
            })
      
        }
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="QSContainer">
                <h1 className="QShead">Quick Search</h1>
                <p className="subHead">Discover restaurents by type of meal</p>
                <div className="row">
                    {this.renderMealdata(this.state.mealData)}

                </div>
            </div>
        </div>
                
        )
    }
    componentDidMount(){
        fetch(mealUrl, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
           this.setState({mealData:data})
        })
    }


}
export default QuickSearch; 

