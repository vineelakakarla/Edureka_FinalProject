import React, { Component } from 'react';
import './Search.css'
const loctnUrl = "http://localhost:8900/location";
const restUrl = "http://localhost:8900/restauranthome?city=";
class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: '',
            city: '',
            restaurant: ''
        }
    }

    cityHandler = (event) => {
        { this.setState({ restaurant: '' }) }
        { this.setState({ city: event.target.value }) }
 
        
        sessionStorage.setItem("city", event.target.value);
       
        var cityId = event.target.value;
       
        fetch(`${restUrl}${cityId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurant: data })
            })

    }

    restHandler = (event) => {
        this.props.history.push(`/rest/${Number(event.target.value)}`);
    }

    renderLocation = (locdata) => {
        if (locdata) {
            return locdata.map((item) => {
                return (
                    <option value={item.city}>
                        {item.name}
                    </option>
                )
            })
        }
    }

    renderRest = (restdata) => {
        if (restdata) {
            return restdata.map((item) => {
                return (
                    <option value ={item._id}>
                        
                        {item.name} |{item.locality}
                    </option>
                )
            })
        }
    }

    render() {

        return (
            <div className="imageContainer container-fluid">

                <div className="mainText">
                    <div className="logo">
                        Fd
                    </div>

                    <div className="heading">
                        <h1>Find the best restaurents, cafes, bars</h1>
                    </div>
                    <div className="locationContainer input-group">

                        <select className="location" onChange={this.cityHandler}>
                            {this.renderLocation(this.props.location)}
                        </select>
                        {/* <input list="restList" name="rest" id="rest" className="form-control searchInput" type="text" placeholder=" &#xF002; Search by restaurent" style={{ "font-family": "Arial, FontAwesome" }} /> */}
                        <select id="restList" onChange = {this.restHandler} >
                            {this.renderRest(this.state.restaurant)}
                        </select>

                    </div>

                </div>
            </div>

        )
    }
    

}
export default Search;


