import React, { Component } from 'react';

import Pagination from 'react-js-pagination';
import './Paginate.css';
// require("bootstrap/less/bootstrap.less");

class Paginate extends Component {
    constructor() {
        super()
        this.state = {
            activePage: ""
        }
    }


    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    render() {
        return (
            <div>
                <Pagination
                    hideFirstLastPages
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>

        )
    }
}
export default Paginate;