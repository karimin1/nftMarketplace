'use client';
import React,{useState,useEffect} from 'react';
import Style from './Collection.module.css';
import images from '../../img'
import{
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3,}from 'react-icons/bs';
import DaysComponents from '../DaysComponents/DaysComponents';
const Collection=()=> {
    const [popular,setPopular]=useState(true);
    const [following,setFollowing]=useState(false);
    const [news,setNews]=useState(false);
    const CardArray=[
        {
            user:images.user1,
            background:images.creatorbackground1
        },
        {
            user:images.user2,
            background:images.creatorbackground2
        },
        {
            user:images.user3,
            background:images.creatorbackground3
        },
        {
            user:images.user4,
            background:images.creatorbackground4
        },
        {
            user:images.user5,
            background:images.creatorbackground5
        },
        {
            user:images.user6,
            background:images.creatorbackground6
        },
    ] ;
    const followingArray=[    {
        user:images.user3,
        background:images.creatorbackground3
    },
    {
        user:images.user6,
        background:images.creatorbackground6
    },
    {
        user:images.user5,
        background:images.creatorbackground5
    },
    ];
    const newsArray=[    {
        user:images.user6,
        background:images.creatorbackground6
    },
    {
        user:images.user4,
        background:images.creatorbackground4
    },
    {
        user:images.user7,
        background:images.creatorbackground7
    },
    ];
    const openNews=()=>{
        if(news){
            setNews(false);
        }else setNews(true);
    }
    const openPopular=()=>{
        if(popular){
            setPopular(false)
        }else setPopular(true)
    }
    const openFollower=()=>{
        if(following) setFollowing(false);
        else setFollowing(true)
    }
    
    return (
        <div className={Style.Collection}>
            <div className={Style.Collection_title}>
            <h2>Top List Creators</h2> 
            <div className={Style.Collection_collections}>
                    <div className={Style.Collection_collections_btn}>
                        <button onClick={()=>openPopular()}>
                        <BsFillAlarmFill/>Last 24 hours
                        </button>
                        <button onClick={()=>openFollower()}>
                        <BsCalendar3/>Last 7days
                        </button>
                        <button onClick={()=>openNews()}>
                        <BsFillCalendarDateFill/>Last 30 days
                        </button>
                    </div>
            </div>
            </div>   
            {popular && (
            <div className={Style.Collection_box}>
        
            {CardArray.map((el,i)=>(
                <DaysComponents key={i+1} el={el} i={i}/>
            ))}
            </div>
            ) }
            {following && (
                <div className={Style.Collection_box}>
                {followingArray.map((el,i)=>(
                    <DaysComponents key={i+1} el={el} i={i}/>
                ))}
                </div>
            )}
            {news && (
                <div className={Style.Collection_box}>
                {newsArray.map((el,i)=>(
                    <DaysComponents key={i+1} el={el} i={i}/>
            ))}
                </div>
            )}
        </div>
)
}
export default Collection;