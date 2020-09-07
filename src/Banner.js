import React, {useState} from 'react'
import './Banner.css';
import {Button} from '@material-ui/core';
import Search from './Search'
import { useHistory } from 'react-router-dom';

function Banner() {
    // read about useState and the binding things around
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search/>}
                <Button onClick={() => setShowSearch(!showSearch)}
                variant="outlined"
                className="banner_searchButton">{showSearch ? "Hide" : "Search Dates"} </Button>
            </div>
            <div className="banner_info">
                <h1>get out and stretch your imagination</h1>
                <h5>plan a different kind off gateway to uncover the hidden gems near you.</h5>
                <Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
