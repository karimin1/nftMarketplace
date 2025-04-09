'use client'
import React ,{useEffect,useState,useContext} from 'react';
import SearchBar from '../../searchPage/searchBar/SearchBar'
import Style from '../Styles/Search.module.css'
import {Slide,Filter,Brand,Loader} from "../../Component/componentIndex"
import {Banner} from '../../collectionPage/CollectionIndex'
import {NFTCardTwo} from '../../collectionPage/CollectionIndex'
import images from '../../img'
//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';
const Search =()=> {
    // const CollectionArray=[images.nft_image_1,images.nft_image_2,images.nft_image_3]
   const {fetchNFTs,setError}=useContext(NFTMarketplaceContext)
   const [nfts,setNfts]=useState([])
   const [nftsCopy,setNftsCopy]=useState([]);

useEffect(()=>{
    try{
        fetchNFTs().then((item)=>{
            setNfts(item.reverse())
            setNftsCopy(item)
            console.log(nfts)
        })
    }catch(error){
setError('please reload this browser')
    }
   
},[])

const handleSearch=(value)=>{
    const filterNTS=nfts.filter(({el})=>(
        el.tolowerCase().includes(value.tolowerCase())
    ))
    if(filterNTS.length==0) {setNfts(nftsCopy)} 
    else setNfts(filterNTS)
}
const clearSearch=()=>{
    if(nfts.length&&nfts.copy){
        setNfts(nftsCopy)
    }
}
    return (
        <div className={Style.Search}>
        <Banner bannerImage={images.creatorbackground2}/>
        <Filter/>  
        <SearchBar onHandleSearch={onHandleSearch}
            clearSearch={clearSearch}
        />
        {nfts.length==0?<Loader/> 
        :<NFTCardTwo NFTData={nfts}/> }
        <Slide/> 
        <Brand/> 
        </div>
    );
}

export default Search;