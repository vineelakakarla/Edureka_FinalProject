import React, { Component } from 'react';

class OrderForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            order_id: Math.floor(Math.random() * 10000),
            name: "",
            phone: "",
            email: "",
            address: "",
            rest_name: "",
            person: 1
        }
    }
    nameHandler =(event) => {
        {this.setState({name:event.target.value})}
    }

    phoneHandler=(event) => {
        this.setState({phone:event.target.value})
    }
    emailHandler=(event) => {
        this.setState({email:event.target.value})
    }
    addressHandler=(event) => {
        this.setState({address:event.target.value})
    }
    personHandler=(event) => {
        this.setState({person:event.target.value})
    }

    handleSubmit=() => {
        var data = {
            "order_id":this.state.order_id,
            "name":this.state.name,
            "phone":this.state.phone,
            "email":this.state.email,
            "address":this.state.address,
            "rest_name":this.state.rest_name,
            "person":this.state.person
        }

        let url = "http://localhost:8900/placeorder"

        fetch(url, 
            {method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
            }
        )
        .then((this.props.history.push('/orderDisplay')))
    }

    render() {
        return (
            <div className="container">
                
                        <div className="form-group">
                            <label name="control-label">Order Id:</label>
                            <input type="text" className="form-control" name="order_id" value={`${this.state.order_id}`} readOnly />

                            <label name="control-label">Name</label>
                            <input type="text" className="form-control" value={`${this.state.name}`} name="name" onChange={this.nameHandler}/>

                            <label name="control-label">Phone</label>
                            <input type="text" className="form-control" value={`${this.state.phone}`} name="phone"onChange={this.phoneHandler} />

                            <label name="control-label">Email</label>
                            <input type="text" className="form-control" value={`${this.state.email}`} name="email" onChange={this.emailHandler}/>

                            <label name="control-label">Address</label>
                            <input type="text" className="form-control" value={`${this.state.address}`} name="address"onChange={this.addressHandler} />

                            <label name="control-label">Restaurant name</label>
                            <input type="text" className="form-control" value={`${this.state.rest_name}`} name="rest_name" readOnly />

                            <label name="control-label">Persons</label>
                            <input type="text" className="form-control" value={`${this.state.person}`} name="person" onChange={this.personHandler} />
                        </div>
                        <div>
                            <button type="button" className = "btn btn-success" onClick = {this.handleSubmit}>Submit</button>
                        </div>

                   


            </div>
        )
    }


    componentDidMount() {
        let url = `http://localhost:8900/restaurantdetail/${this.props.match.params.id}`;

        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
         
                { this.setState({ rest_name: data[0].name }) }

            })
    }
}


export default OrderForm;