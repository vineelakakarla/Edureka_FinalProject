import React, { Component } from 'react';
import './Filter.css';


class Sort extends Component {

    sortFilter = (event) => {
    let sort;
    if(event.target.value)
        sort=event.target.value;
    {this.props.filterBySort(sort)}
            
    }
    render() {
        return (
            <div className = "filter">
                <h6>Sort </h6>
                <hr />
                <div onChange={this.sortFilter}>
                    <div className="radio">
                        <label className="radio filterItem">
                            <input type="radio" value="1" name="sort" /> Ascending
                     </label>
                    </div>
                    <div>
                        <label className="radio filterItem">
                            <input type="radio" value="-1" name="sort" /> Descending
                     </label>
                    </div>
                </div>

            </div>
        )
    }

}

export default Sort;