import React, { Component } from 'react';
import DetailsDisplay from './DetailsDisplay';
import CusineFilter from '../Filter/CusineFilter';
import CostFilter from '../Filter/CostFilter';
import Sort from '../Filter/Sort';
import './Details.css';


const detailsUrl = "http://localhost:8900/restaurantlist";
const restdetailUrl = "http://localhost:8900/restaurantlist";

class Details extends Component {

    constructor(props) {
        super(props)

        this.state = {
            restData: ""
        }

    }

   
    setDataPerCuisine(data) {
       
        this.setState({restData:data})
    }
    setDataPerCost(data1, data2) {
      
        this.setState({restData:data})
    }
    setDataPerSort = (data) => {

        this.setState({restData:data})
       
        
   }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 filtercontainer">
                        <CusineFilter filterByCuisine={(data)=> { this.setDataPerCuisine(cusineId)}}/>
                        <CostFilter filterByCost = {(hcost, lcost) => {this.setDataPerCost(hcost, lcost)}}/>
                        <Sort filterBySort= {(sort) => {this.setDataPerSort(sort)}}/>
                        
                    </div>
                    <div className="col-md-9">
                        <DetailsDisplay restData = {this.state.restData} />
                    </div>
                    
                </div>
                
            </div>
        )
    }

    componentDidMount() {
        var mealid = parseInt(this.props.match.params.mealtype);
        sessionStorage.setItem("meal", this.props.match.params.mealtype);
        var cityid = sessionStorage.getItem("city");
        
        let url = `${detailsUrl}/${cityid}/${mealid}`;
       
        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                this.setState({ restData: data })
            })
        
    }
}

export default Details;