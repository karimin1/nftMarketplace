import  React , {useState,useEffect, useContext} from 'react',
import  {useRouter} from 'next/router'
import axios from 'axios'
import { Button } from '../../Component/componentIndex'
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext'
import Image from 'next/image'
//INTERNAL IMPORT  
import formStyle from '../../accountPage/Form/Form.module.css'
import Style from '../Styles/reSellToken.module.css'
const reSellToken=()=>{
    const {createSale}=useContext(NFTMarketplaceContext)
    const [price,setPrice]=useState('')
    const [image,setImage]=useState('')
    const router=useRouter();
    const {id,tokenURI}=router.query;
const fetchNT=()=>{
    if(!tokenURI) return;
    const {data}=await axios.get(tokenURI);
    //setPrice(data.price);
    setImage(data.image);
}        
    useEffect(()=>{
        fetchNT()
    },[id])
    const resell=()=>{
        try{
            await createSale(tokenURI,price,true,id)
            router.push('/author')
        }catch(error){
            console.log('error',error)
        }
        
    }
    return(
        <div className={Style.reSellToken}>
        <div className={Style.reSellToken_box}>
        <h1>ReSell your token,set price</h1>
        <div className={formStyle.Form_box_input}> 
            <label htmlFor='name'> Username </label>
            <input type='text' min={1} placeholder='shoaib bhai' 
               onChange={(e)=>{setPrice(e.target.value)}} className={formStyle.Form_box_input_userName}/>  
           </div>
           <div className={Style.reSellToken_box_image}> 
           {image && (
            <Image src={image} alt='reselt nft' width={400}
           height={400} />
           )}
           </div>
           <div className={Style.reSellToken_box_btn}>
           <Button btnName='Resell NFT' handleClick={resell}/>
            </div>
        </div>
        </div>
    )   }
export default reSellToken