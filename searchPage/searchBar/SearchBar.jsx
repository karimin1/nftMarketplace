import React, { useEffect, useState } from 'react';
import Style from './SearchBar.module.css'
import {BsSearch,BsArrowRight} from "react-icons/bs";
const SearchBar=(onHandleSearch,clearSearch)=> {
    const [search,setsearch]=useState('')
    const [searchItem,setSearchItem]=useState(search)
  useEffect(()=>{
    const timer=setTimeout(()=>setsearch(searchItem),1000)
    return ()=>clearTimeout()
  },[searchItem])
  useEffect(()=>{
    if(search){
        onHandleSearch()
    }else{
        clearSearch()
    }
  },[search])
    return (
        <div className={Style.SearchBar}>
              <div className={Style.SearchBar_box}>
              <BsSearch className={Style.SearchBar_box_icon}/>
              <input type='text' 
              onChange={(e)=>{setSearchItem(e.target.value)}}
              value={searchItem} placeholder='Type yout keyword...'/>
              <BsArrowRight className={Style.SearchBar_box_icon} />
        </div>
        </div>
    );
}

export default SearchBar;