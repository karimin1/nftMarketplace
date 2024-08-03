import React from 'react';
import Style from './SearchBar.module.css'
import {BsSearch,BsArrowRight} from "react-icons/bs";
const SearchBar=()=> {
    return (
        <div className={Style.SearchBar}>
              <div className={Style.SearchBar_box}>
              <BsSearch className={Style.SearchBar_box_icon}/>
              <input type='text' placeholder='Type yout keyword...'/>
              <BsArrowRight className={Style.SearchBar_box_icon} />
        </div>
        </div>
    );
}

export default SearchBar;