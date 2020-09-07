import React from 'react'
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult'; 

function SearchPage() {
    return (
        <div>
            <div className="searchPage_info">
                <p>62 stays * 26 august to 30 august * 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexability</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult
            img="https://images.unsplash.com/photo-1553881651-43348b2ca74e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            location="private room in center of the city"
            title="center of london, near the london center"
            description="1 guest, 2 ghosts, 1 werewolf, 1 wizard"
            star={4.73}
            price="$30 / night"
            total="$700 total"/>
        </div>
    )
}

export default SearchPage
