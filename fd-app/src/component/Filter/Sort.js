import React, { Component } from 'react';
import './Filter.css';
const restdetailUrl = "http://localhost:8900/restaurantlist";
var restUrl;

class Sort extends Component {

    sortFilter = (event) => {
            
        let cityId = sessionStorage.getItem("city");
        let mealId = sessionStorage.getItem("meal");
        let sort = event.target.value;
        restUrl = `${restdetailUrl}/${cityId}/${mealId}?sort=${sort}`;
        fetch(restUrl, {method:'GET'})
        .then(res => res.json())
        .then(data => this.props.filterBySort(data))
    }
    render() {
        return (
            <div className = "filter">
                <h4>Sort </h4>
                <hr />
                <div onChange={this.sortFilter}>
                    <div className="radio">
                        <label className="radio">
                            <input type="radio" value="1" name="sort" /> Ascending
                     </label>
                    </div>
                    <div>
                        <label className="radio">
                            <input type="radio" value="-1" name="sort" /> Descending
                     </label>
                    </div>
                </div>

            </div>
        )
    }

}

export default Sort;