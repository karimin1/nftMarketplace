import React,{useState} from 'react';
import images from '../../img'
import { TiArrowSortedDown,TiArrowSortedUp,TiTick
 } from 'react-icons/ti';
import Style from './AuthorTaps.module.css'
import { AuthorNFTCardBox } from '../ComponentIndex';
const AuthorTaps=({setCollectiables,setCreated,setLike,setFollower,setFollowing})=> {
   const [openList,setOpenList]=useState(false);
   const [activeBtn,setActiveBtn]=useState(0);
   const [selectedMenu,setSelectedMenu]=useState('most Recent')
   const listArray=['Created By Admin',
    'Most Apprciated',
    'Most Discussed',
    'Most Viexed'
   ]
   const openDropDownList=()=>{
    if(!openList){
        setOpenList(true);
    }else{
        setOpenList(false)
    }
}
    const openTab=(e)=>{
       const btnText=e.target.innerText
    console.log(btnText);
    if(btnText=='Listed NFTs'){
        setCollectiables(true)
        setCreated(false)
        setFollower(false)
        setFollowing(false)
        setLike(false)
        setActiveBtn(1)
    }else if(btnText=='Own NFTs'){
        setCollectiables(false)
        setCreated(true)
        setFollower(false)
        setFollowing(false)
        setLike(false)
        setActiveBtn(2)
    }else if(btnText=='Like'){
        setCollectiables(false)
        setCreated(false)
        setFollower(false)
        setFollowing(false)
        setLike(true)
        setActiveBtn(3)
    }else if(btnText=='Following') {
        setCollectiables(false)
        setCreated(false)
        setFollower(false)
        setFollowing(true)
        setLike(false)
        setActiveBtn(4)
    }else if(btnText=='Follower'){
        setCollectiables(false)
        setCreated(false)
        setFollower(true)
        setFollowing(false)
        setLike(false)
        setActiveBtn(5)
    }
}
   return (
        <div className={Style.AuthorTaps}>
            <div className={Style.AuthorTaps_box}>
                <div className={Style.AuthorTaps_box_left}>
                    <div className={Style.AuthorTaps_box_left_btn}>
                    <button className={activeBtn==1 ? Style.active:""}
                    onClick={(e)=>openTab(e)}>Listed NFTs{''}
                    </button>
                    <button className={activeBtn==2 ? Style.active:""}
                    onClick={(e)=>openTab(e)}>Owned NFTs{''}
                    </button>
                    <button className={activeBtn==3 ? Style.active:""}
                    onClick={(e)=>openTab(e)}>Like{''}
                    </button>
                    <button className={activeBtn==4 ? Style.active:""}
                    onClick={(e)=>openTab(e)}>Following{''}
                    </button>
                    <button className={activeBtn==4 ? Style.active:""}
                    onClick={(e)=>openTab(e)}>Follower{''}
                    </button>
                    </div>
                </div>
                <div className={Style.AuthorTaps_box_right}>
                <div className={Style.AuthorTaps_box_right_para}
                onClick={()=>openDropDownList()}>
                <p>{selectedMenu}</p>
                {openList ? <TiArrowSortedUp/>:<TiArrowSortedDown/>}
                 </div>
                 </div>
                 {openList && (
                    <div className={Style.AuthorTaps_box_right_list}> 
                    
                    {listArray.map((el,i)=>(
                        <div key={i+1}
                        onClick={()=>setSelectedMenu(el)}   
                        className={Style.AuthorTaps_box_right_list_item}>
                        <p>{el}</p>
                        <span>{selectedMenu==el &&<TiTick/>}</span>
                        </div>
                    ))}
                    </div>
                 )}
            </div>
        </div>
    );
}

export default AuthorTaps;