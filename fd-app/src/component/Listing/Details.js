import React, { Component } from 'react';
import DetailsDisplay from './DetailsDisplay';
import CusineFilter from '../Filter/CusineFilter';
import CostFilter from '../Filter/CostFilter';
import Sort from '../Filter/Sort';
import './Details.css';
import Paginate from './Paginate';
import axios from 'axios';


const detailsUrl = "http://localhost:8900/restaurantlist";
const restdetailUrl = "http://localhost:8900/restaurantlist";
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cusineId: "",
            hcost: "",
            lcost: "",
            sort: "1",
            restData: "",
            cusineData:""
        }
    }

    getRestData() {


        let cusineparam, lcostparam, hcostparam;
        let cityId = sessionStorage.getItem("city");
        let mealId = sessionStorage.getItem("meal");
        let restUrl = `${restdetailUrl}/${cityId}/${mealId}?sort=${this.state.sort}`;

        if (this.state.cusineId == "")
            cusineparam = "";
        else
            cusineparam = `&cuisine=${this.state.cusineId}`;
        if (this.state.hcost == "")
            hcostparam = "";
        else
            hcostparam = `&hcost=${this.state.hcost}`;
        if (this.state.lcost == "")
            lcostparam = "";
        else
            lcostparam = `&lcost=${this.state.lcost}`;
        let url = `${restUrl}${cusineparam}${hcostparam}${lcostparam}`;


        console.log(`Url = ${restUrl}`)
        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                this.setState({ restData: data })
            })

    }

    setDataPerCuisine(data) {
        this.setState({ cusineId: data }, this.getRestData)
    }

    setDataPerCost(data1, data2) {

        this.setState({ hcost: data1, lcost: data2 }, this.getRestData)
    }
    setDataPerSort = (data) => {
        this.setState({ sort: data }, this.getRestData)
    }


    render() {

        return (

            <div className="container-fluid">
                <div className="content">
                    <div className="row">
                        <div className = "heading">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 filtercontainer">
                            <CusineFilter cusineData={this.state.cusineData} filterByCuisine={(cusineId) => { this.setDataPerCuisine(cusineId) }} />
                            <CostFilter filterByCost={(hcost, lcost) => { this.setDataPerCost(hcost, lcost) }} />
                            <Sort filterBySort={(sort) => { this.setDataPerSort(sort) }} />

                        </div>
                        <div className="col-md-8 detailDiv">
                            <DetailsDisplay restData={this.state.restData} />
                        </div>

                    </div>
                </div>

                <div className="paginate">
                    <Paginate/>
                </div>
                
               
               

            </div>
        )
    }

    componentDidMount() {
        var mealid = parseInt(this.props.match.params.mealtype);
        sessionStorage.setItem("meal", mealid);
        var cityid = sessionStorage.getItem("city");
        let url = `${detailsUrl}/${cityid}/${mealid}`;
        let cusineUrl = "http://localhost:8900/cuisine";

        axios.get(url)
        .then((response) => {this.setState({ restData: response.data })})

        axios.get(cusineUrl)
        .then((response) => {this.setState({cusineData:response.data})})
        
    }


}
export default Details;
