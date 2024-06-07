import React,{useState,useEffect} from 'react';
import Style from './Collection.module.css';
import{
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3,}from 'react-icons/bs';
import DaysComponents from '../DaysComponents/DaysComponents';
const Collection=()=> {
    const [popular,setPopular]=useState(true);
    const [following,setFollowing]=useState(false);
    const [news,setNews]=useState(false);
    const CardArray=[1,2,3,4,5,6,7,8] ;
    const followingArray=[1,2,3,4];
    const newsArray=[1,2];
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
                <DaysComponents key={i+1}/>
            ))}
            </div>
            ) }
            {following && (
                <div className={Style.Collection_box}>
                {followingArray.map((el,i)=>(
                    <DaysComponents key={i+1}/>
                ))}
                </div>
            )}
            {news && (
                <div className={Style.Collection_box}>
                {newsArray.map((el,i)=>(
                    <DaysComponents key={i+1}/>
            ))}
                </div>
            )}
        </div>
)
}
export default Collection;