import React, { Component } from 'react';
import './Search.css'
const loctnUrl = "http://localhost:8900/location";
const restUrl = "http://localhost:8900/restauranthome?city=";
class Search extends Component {
    constructor() {
        super()

        this.state = {
            location: '',
            city: '',
            restaurant: ''
        }
    }

    cityHandler = (event) => {
        { this.setState({ restaurant: '' }) }
        { this.setState({ city: event.target.value }) }
        var cityId;
        if(event.target.value) {
            cityId = event.target.value;
        }
        else
            cityId =1;
        sessionStorage.setItem("city", cityId);
        var cityId = parseInt(event.target.value)
        fetch(`${restUrl}${cityId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurant: data })
            })

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
                    <option >
                        
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
                            {this.renderLocation(this.state.location)}
                        </select>
                        <input list="restList" name="rest" id="rest" className="form-control searchInput" type="text" placeholder=" &#xF002; Search by restaurent" style={{ "font-family": "Arial, FontAwesome" }} />
                        <datalist id="restList">
                            {this.renderRest(this.state.restaurant)}
                        </datalist>

                    </div>

                </div>
            </div>

        )
    }
    componentDidMount() {
        fetch(loctnUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ location: data })

            }
        )
    }

}
export default Search;


