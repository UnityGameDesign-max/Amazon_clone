import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" alt="amazon_img" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            <div className="header_search">
                <input className="header_search_input" type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>
            
        </div>
    )
}

export default Header
