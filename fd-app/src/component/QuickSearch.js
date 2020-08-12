import React, {Component} from "react";
import './QuickSearch.css'
const mealUrl = "http://localhost:8900/mealtype";


class QuickSearch extends Component{
    constructor() {
        super()
        this.state = {
            mealData:""
        }
    }

   
    renderMealdata = (mealdata) => {
        if(mealdata) {
            return mealdata.map((item) => {
                return(
                    <div className="component">
                            <div className="QSimg">
                                <img className="responsive" src={`/images/${item.name}.jpg`} alt="breakfast_img"/>
                            </div>
                            <div className="QStxt">
                                <h5 className="compHead">{item.name}</h5>
                                <p className="txt">Start your day with exclusive {item.name}</p>
                            </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div class="QSContainer">
                <h1 class="QShead">Quick Search</h1>
                <p class="subHead">Discover restaurents by type of meal</p>
                <div class="row">
                    <div class="QSCol col-md-4 col-sm-6 col-lg-3">
                       
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

