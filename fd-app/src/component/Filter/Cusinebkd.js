import React, {Component} from 'react';
import './Filter.css';
const url = "http://localhost:8900/cuisine";
const restdetailUrl = "http://localhost:8900/restaurantlist";
var restUrl;

class CusineDisplay extends Component {

    constructor(){
        super()
        this.state = {
            cusineData:""
        }
    }

    cuisineFilter= (event) => {
        let cusineId = "";
        if(event.target.value)
            cusineId = event.target.value;
        {this.props.filterByCuisine(cusineId)}

        // let cusineId = event.target.value;
        // let cityId = sessionStorage.getItem("city");
        // let mealId = sessionStorage.getItem("meal");
        // if(cusineId == "") 
        //     restUrl = `${restdetailUrl}/${cityId}/${mealId}`;
        // else
        //     restUrl = `${restdetailUrl}/${cityId}/${mealId}?cuisine=${cusineId}`;
     
        // fetch(restUrl, {method:'GET'})
        // .then(res => res.json())
        // .then(data => this.props.filterByCuisine(data))
        
    }

    renderCusine = (cusineData) => {
        if(cusineData) {
            return (
                cusineData.map((item) => {
                    return(
                        <div>
                        <label className="radio">
                            <input type = "radio" value = {item.cuisine} name = "cusine" /> {item.name}
                        </label>
                      </div>
                    )
                })
            )
        }
    }

    render(){
        return (
            <div className="filter">
                <h4>Cusine</h4>
                <hr/>
                <div onChange = {this.cuisineFilter}>
                    <div>
                        <label className="radio">
                            <input type = "radio" value ="" name = "cusine" /> All
                        </label>
                    </div>

                    {this.renderCusine(this.state.cusineData)}
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url, {method:'GET'})
        .then(res => res.json())
        .then(data => {
            this.setState({cusineData:data})
        })
    }
}

export default CusineDisplay;
