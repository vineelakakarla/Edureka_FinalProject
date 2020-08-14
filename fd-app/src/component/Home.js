import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Search from './Search/Search';
import QuickSearch from './QuickSearch/QuickSearch';

const Home =() => {
    return(
    <BrowserRouter>
        <div>           
            <Search/>
            <QuickSearch/>
        </div>
    </BrowserRouter>
    )
}
export default Home;