import React, { Component } from 'react';
import './Filter.css';
const restdetailUrl = "http://localhost:8900/restaurantlist";
var restUrl;

class CostFilter extends Component {

    costFilter = (event) => {
        var costvalues = event.target.value.split(",");
        
        let cityId = sessionStorage.getItem("city");
        let mealId = sessionStorage.getItem("meal");
        let lcost, hcost;
       

        if (costvalues[1] == null) {
            hcost = costvalues[0];
            restUrl = `${restdetailUrl}/${cityId}/${mealId}?hcost=${hcost}`;
        }

        else {
            lcost = costvalues[0];
            hcost = costvalues[1];
            restUrl = `${restdetailUrl}/${cityId}/${mealId}?hcost=${hcost}&lcost=${lcost}`;
        }
        
        fetch(restUrl, {method:'GET'})
        .then(res => res.json())
        .then(data => this.props.filterByCost(data))


    }
    render() {
        return (
            <div className = "filter">
                <h4>Cost for two </h4>
                <hr />
                <div onChange={this.costFilter}>
                    <div className="radio">
                        <label className="radio">
                            <input type="radio" value="0,500" name="cost" /> 0 to <i class="fa fa-inr " aria-hidden="true" > 500</i>
                     </label>
                    </div>
                    <div>
                        <label className="radio">
                            <input type="radio" value="500,1000" name="cost" /> <i class="fa fa-inr " aria-hidden="true"> 500</i> to <i class="fa fa-inr " aria-hidden="true" > 1000 </i>
                     </label>
                    </div>
                    <div>
                        <label className="radio">
                            <input type="radio" value="1000,1500" name="cost" /> <i class="fa fa-inr " aria-hidden="true" > 1000 </i> to <i class="fa fa-inr " aria-hidden="true" > 1500 </i>
                    </label>
                    </div>
                    <div>
                        <label className="radio">
                            <input type="radio" value="1500,2000" name="cost" /> <i class="fa fa-inr " aria-hidden="true" > 1500 </i> to <i class="fa fa-inr " aria-hidden="true" > 2000 </i>
                    </label>
                    </div>
                    <div>
                        <label className="radio">
                            <input type="radio" value="2000" name="cost" /> <i class="fa fa-inr " aria-hidden="true"> 2000+</i>
                    </label>
                    </div>
                </div>

            </div>
        )
    }

}

export default CostFilter;