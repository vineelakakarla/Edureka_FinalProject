import React, {Component} from 'react';
import './Filter.css';


class CusineDisplay extends Component {

    constructor(props){
        super(props)
    }

    cuisineFilter= (event) => {
        let cusineId = "";
        if(event.target.value)
            cusineId = event.target.value;
        {this.props.filterByCuisine(cusineId)}
        
    }

    renderCusine = ({cusineData}) => {
        if(cusineData) {
            return (
                cusineData.map((item) => {
                    return(
                        <div>
                        <label className="radio filterItem">
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
                <h6>Cusine</h6>
                <hr/>
                <div onChange = {this.cuisineFilter}>
                    <div>
                        <label className="radio filterItem">
                            <input type = "radio" value ="" name = "cusine" /> All
                        </label>
                    </div>

                    {this.renderCusine(this.props)}
                </div>
            </div>
        )
    }
       
}

export default CusineDisplay;
