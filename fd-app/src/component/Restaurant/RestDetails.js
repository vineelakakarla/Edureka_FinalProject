import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import {useHistory, Link} from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';
import './RestDetails.css';


const RestDetails = (props) => {
    var mealId = sessionStorage.getItem("meal");
    var history = useHistory();

    const backButton = (event) => {
        if(mealId)
            history.push(`/details/${mealId}`);
        else
            history.push('/');
        
    }

    const restaurantData = ({ restData }) => {
    

        if (restData) {
        
            return (
                <div className="matter">
                    <h1 id="heading">{restData[0].name}</h1>

                    <Tabs>
                        <TabList>
                            <Tab className="react-tabs__tab">Overview</Tab>
                            <Tab className="react-tabs__tab"> Contact</Tab>
                        </TabList>
                        <TabPanel>
                            <h3 className="overview">About this place</h3>
                            <p className="overTxt">This restaurant is famous for {restData[0].Cuisine[0].name} and {restData[0].Cuisine[1].name} </p>
                        </TabPanel>
                        <TabPanel>
                            <h5 className="head">Cost for two : {restData[0].cost}</h5>
                            <div className="add">
                                <h3 className="addName">{restData[0].name}</h3>
                                <p className="addTxt">{restData[0].address}</p>
                            </div>
                        </TabPanel>
                    </Tabs>
                    <div>
                        <button type="button" className="btn btn-danger btn-lg order-buttons" onClick={backButton}>Back</button>
                        <Link to = {`/form/${restData[0]._id}`} ><button type="button" className="btn btn-success btn-lg  order-buttons">Place Order</button></Link>
                    </div>
                </div>

            )
        }
    }


    return (

        <React.Fragment>


            <div className="container">
                {restaurantData(props)}

            </div>
        </React.Fragment>

    )
}
export default RestDetails;