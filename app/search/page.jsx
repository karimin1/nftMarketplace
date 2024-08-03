'use client'
import React from 'react';
import SearchBar from '../../searchPage/searchBar/SearchBar'
import Style from '../Styles/Search.module.css'
import {Slide,Filter,Brand} from "../../Component/componentIndex"
import {Banner} from '../../collectionPage/CollectionIndex'
import {NFTCardTwo} from '../../collectionPage/CollectionIndex'
import images from '../../img'
const Search =()=> {
    const CollectionArray=[images.nft_image_1,images.nft_image_2,images.nft_image_3]
    return (
        <div className={Style.Search}>
        <Banner bannerImage={images.creatorbackground2}/>
        <Filter/>  
        <SearchBar/>
        <NFTCardTwo NFTData={CollectionArray}/> 
        <Slide/> 
        <Brand/> 
        </div>
    );
}

export default Search;