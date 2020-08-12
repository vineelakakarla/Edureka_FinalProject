import React from 'react';
import ReactDOM from 'react-dom';
import Search from './component/Search';
import Header from './component/Header';
import QuickSearch from './component/QuickSearch'

const Home = () =>{
    return(
        <div>
            <Header/>
            <Search/>
            <QuickSearch/>
        </div>
    )
}

ReactDOM.render(<Home/>, document.getElementById('root'));
