'use client';
import { React,useState }  from 'react';
import images from '../../img';
import Style from "./NFTCard.module.css"
import Image from "next/image"
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import {BsImages}from "react-icons/bs";
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NFTCard=(NFTData)=> {
    //const featureArray=[images.nft_image_1,images.nft_image_2,images.nft_image_3];
    const [like,setLike]=useState(true);
    const likeNFT=()=>{
      if(like){
        setLike(false);
      }else{
          setLike(true);
        }
      }
    return (
        <div>
        <div className={Style.NFTCard}>
        {NFTData.map((el,i)=>(
          <Link href={{usePathname:'/nftdetails',query:el}}>
            <div className={Style.NFTCard_box}  key={i+1}  > 
              <div className={Style.NFTCard_box_update}> 
                <div className={Style.NFTCard_box_update_left}> 
                <div className={Style.NFTCard_box_update_left_like}
                onClick={()=>likeNFT()}> 
                {like ?(
                  <AiOutlineHeart/>
                ):(
                  <AiFillHeart className={Style.NFTCard_box_update_left_like_icon}/> 
                )}
                {''}22
              </div>  
              </div> 
              <div className={Style.NFTCard_box_update_right}>
                <div className={Style.NFTCard_box_update_right_info}>
                  <small>Remaining time</small>
                  <p>3h :15m : 20s</p>
                </div>
              </div>
              </div>
              <div className={Style.NFTCard_box_img}  >  
              <Image src={el.images} alt='NFT images'
              width={300}
              height={300} className={Style.NFTCard_box_img_img}/>  
              </div> 
              <div className={Style.NFTCard_box_update_details}>
                <div className={Style.NFTCard_box_update_details_price}>
                  <div className={Style.NFTCard_box_update_details_price_box}>
                  <h4>{el.tokenId}</h4>
                    <div className={Style.NFTCard_box_update_details_price_box_box}>
                      <div className={Style.NFTCard_box_update_details_price_box_bid}>
                        <small>Current Bid</small>
                        <p>{el.price}</p>
                      </div>
                      <div className={Style.NFTCard_box_update_details_price_box_stock}>
                        <small>61 in stock</small>
                      </div>
                  </div>
                </div>
                </div>
                <div className={Style.NFTCard_box_update_details_category}>
                <BsImages/>
              </div>
            </div>
            </div>
          </Link>
        ))}
            </div>
            </div>
            )}
export default NFTCard;