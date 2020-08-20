import React, { Component } from 'react';

class OrderDisplay extends Component {
    constructor() {
        super()
        this.state = {
            orders: ""
        }
    }

    renderOrders = (orderData) => {
        if (orderData) {

            return orderData.map((item) => {
                return (
                    <tr>
                        <td>{item.order_id}</td>
                        <td>{item.rest_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.person}</td>
                        

                    </tr>
                )
            })
        }

    }

    render() {
        return (
            <div className="container">
                <center>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>order_id</th>
                                <th>rest_name</th>
                                <th>name</th>
                                <th>phone</th>
                                <th>email</th>
                                <th>address</th>
                                <th>person</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderOrders(this.state.orders)}
                        </tbody>
                    </table>
                </center>

            </div>
        )
    }

    componentDidMount() {
        let url = 'http://localhost:8900/orders';
        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                { this.setState({ orders: data }) }
            })
    }
}

export default OrderDisplay;