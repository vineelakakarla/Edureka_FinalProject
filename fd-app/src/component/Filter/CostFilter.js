import React, { Component } from 'react';
import './Filter.css';

class CostFilter extends Component {

    costFilter = (event) => {
        
        let hcost = "", lcost="";
        var costvalues = event.target.value.split(",");
            
        if (costvalues[1] == null) {
            hcost = costvalues[0];
        }

        else {
            lcost = costvalues[0];
            hcost = costvalues[1];
        }
       
        {this.props.filterByCost(hcost, lcost)}


    }
    render() {
        return (
            <div className = "filter">
                <h6>Cost for two </h6>
                <hr />
                <div onChange={this.costFilter}>
                    <div className="radio">
                        <label className="radio filterItem">
                            <input type="radio" value="0,500" name="cost" /> 0 to <i className="fa fa-inr " aria-hidden="true" > 500</i>
                     </label>
                    </div>
                    
                    <div>
                        <label className="radio filterItem">
                            <input type="radio" value="500,800" name="cost" /> <i className="fa fa-inr " aria-hidden="true" > 500 </i> to <i className="fa fa-inr " aria-hidden="true" > 800 </i>
                    </label>
                    </div>
                    <div>
                        <label className="radio filterItem">
                            <input type="radio" value="800,1000" name="cost" /> <i className="fa fa-inr " aria-hidden="true" > 800 </i> to <i className="fa fa-inr " aria-hidden="true" > 1000 </i>
                    </label>
                    </div>
                    <div>
                        <label className="radio filterItem">
                            <input type="radio" value="1000" name="cost" /> <i className="fa fa-inr " aria-hidden="true"> 1000+</i>
                    </label>
                    </div>
                </div>

            </div>
        )
    }

}

export default CostFilter;