import React, {Component} from 'react';
import RestImg from './RestImg';
import RestDetails from './RestDetails';
const restUrl = "http://localhost:8900/restaurantdetail/";

class RestData extends Component{
    constructor(props) {
        super(props)
        this.state={
            restData:''
        }
    }

    render() {
        
        return (
            <div>
                <RestImg restData={this.state.restData}/>
                <RestDetails restData={this.state.restData}/>
            </div>
        )
    }

    componentDidMount(){
        var restId = parseInt(this.props.match.params.id);
        fetch(`${restUrl}${restId}`, {method:'GET'})
        .then(res => res.json())
        .then((data) => {
            this.setState({restData:data})
        })
    }

}

export default RestData;