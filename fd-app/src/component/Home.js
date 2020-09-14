import React,{Component} from 'react';
import Search from './Search/Search';
import QuickSearch from './QuickSearch/QuickSearch';

const mealUrl = "http://localhost:8900/mealtype";
const loctnUrl = "http://localhost:8900/location";


class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            location:"",
            mealData:""

        }
    }
    setrestId = (data) => {
        this.props.history.push(`/rest/${Number(data)}`);
    }
    render() {
        return (
            <div>           
                <Search location ={this.state.location} restid = {(data) => this.setrestId(data)}/>
                <QuickSearch mealData ={this.state.mealData}/>
            </div>
        )
    }

    componentDidMount() {
        sessionStorage.setItem("city", 1);
        sessionStorage.setItem("meal", 0);
        fetch(loctnUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ location: data })

            }
        )


        fetch(mealUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ mealData: data })
        })
    }
}
export default Home;