import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img 
            className="header_icon"
            src="https://i.pinimg.com/originals/3e/bc/89/3ebc89385f468948b821a4dd3436a2e1.png"
            alt="missing"></img>
            </Link>
            <div className="header_center">
                <input type="text"/>
                <SearchIcon/>
            </div>
            <div className="header_right">
                <p>become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
