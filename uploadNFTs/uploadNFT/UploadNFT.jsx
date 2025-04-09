'use client'
import React,{useState} from 'react';
import { MdOutlineHttp,MdOutlineAttachFile } from 'react-icons/md';
import {FaPercent} from 'react-icons/fa'
import  {AiTwotonePropertySafety} from 'react-icons/ai'
import {TiTick} from 'react-icons/ti'
import images from '../../img'
import Image from 'next/image'
import Style from './UploadNFT.module.css'
import { Button } from '../../Component/componentIndex';
import formStyle from '../../accountPage/Form/Form.module.css'
import { DropeZone } from '../UploadNFTIndex';
import { useRouter } from 'next/router';
const  UploadNFT=({uploadToIPFS,createNFT}) =>{
    console.log('uploadToIPFS_UploadNFT:', uploadToIPFS); 
    const [price,setPrice]=useState('');
    const [active,setActive]=useState(0);
    const [name,setName]=useState('')
    const [website,setWebsite]=useState('')
    const [description,setDescription]=useState("")
    const [royalties,setRoyalties]=useState('')
    const [fileSize,setFileSize]=useState('')
    const [category,setCategory]=useState(0)
    const [propriety,setPropreties]=useState('')
    const [image,setImage]=useState(null)
    const router=useRouter()
    const categoryArray=[
        {
            image:images.nft_image_1,
            category:'Sports',
        },
        {
            image:images.nft_image_2,
            category:'Arts',
        },
        {
            image:images.nft_image_3,
            category:'Music',
        },
        {
            image:images.nft_image_3,
            category:'Digital',
        },

    ]

    return (
        <div className={Style.upload}>
          <DropeZone title='JPG,PNG,MAX 100MB'
            heading='Drag & drop file'
            subHeading='or Browse media on your  device'
            uploadToIPFS={uploadToIPFS} createNFT={createNFT}
            name={name} website={website}
            description={description}
            royalties={royalties}
            fileSize={fileSize}
            category={category}
            price={price}
            propriety={propriety} setImage={setImage}
            
            />  
             <div className={Style.upload_box}>
                <div className={formStyle.Form_box_input}>
                    <label htmlFor='nft'>Item Name
                                                                    </label>
                    <input type='text'
                    placeholder='shoaib bhai'
                    className={formStyle.Form_box_input_username}
                        onChange={(e)=>setItemName(e.target.value)}
                    />
                </div>
                    
                <div className={formStyle.Form_box_input}>
                        <label htmlFor='website'> website</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                                <MdOutlineHttp/> 
                            </div>
                            <input type='text'
                            placeholder='shoaib bhai'
                            className={formStyle.Form_box_input_username}
                                onChange={(e)=>setWebsite(e.target.value)}
                            />
                        </div>
                        <p className={Style.upload_box_input_para}>
                            dsfhsjfdhs jsdhfjhgf jsdgfkjsgdfk gsdjkfgsdkjf kjsdgff 
                            fsdqfhjg shdfjkqdsf
                            hsuhfdslhsdf hqhsdfls dsfhsdhflsd hsdjjhlsdhfsd sdhfjksdhflsdfh
                        </p>
                </div>
                    
                <div className={formStyle.Form_box_input}> 
                        <label htmlFor='description'>Description</label>
                        <textarea 
                        name='' 
                        id='' 
                        cols='30' 
                        rows='10' 
                        placeholder='somethinf about yourself in few words'
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                        
                        <p className={formStyle.upload_box_input_para}>
                        dsfhsjfdhs jsdhfjhgf jsdgfkjsgdfk gsdjkfgsdkjf kjsdgff 
                        fsdqfhjg shdfjkqdsf
                        hsuhfdslhsdf hqhsdfls dsfhsdhflsd hsdjjhlsdhfsd sdhfjksdhflsdfh
                        </p>
                </div> 

                <div className={formStyle.Form_box_input}>  
                            <label htmlFor='name'>Choose Collection</label>
                            <p className={formStyle.upload_box_input_para}>
                            dsfhsjfdhs jsdhfjhgf jsdgfkjsgdfk gsdjkfgsdkjf kjsdgff 
                            </p>
                        <div className={Style.upload_box_slider_div}>  
                            {categoryArray.map((el,i)=>(
                                <div className={`${Style.upload_box_slider} ${active==i+1 ?Style.active:""}`}
                                    key={i+1} 
                                    onClick={()=>{setActive(i+1);setCategory(el.category)}}>
                                    
                                    <div className={Style.upload_box_slider_box}>
                                    <div className={Style.upload_box_slider_box_img}> 
                                    <Image 
                                    src={el.image}
                                    alt="background image"
                                        width={70}
                                        height={70}
                                        className={Style.upload_box_slider_box_img_img}
                                    />  
                                    </div>  

                                    <div className={Style.upload_box_slider_box_img_icon}> 
                                    <TiTick/> 
                                    </div> 
                                    </div>
                                    <p>Crypto legent-Professor</p>
                                </div>
                            ))}
                        </div>
                </div>
            
                <div className={formStyle.Form_box_input_social}>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor='Royalties'>Royalties</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                            <FaPercent />
                            </div>
                            <input type='text' placeholder='20%'
                                onChange={(e)=>setRoyalties(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor='size'>Size</label>
                        <div className={formStyle.Form_box_input_box}>
                        <div className={formStyle.Form_box_input_box_icon}>
                        <MdOutlineAttachFile />
                        </div>
                        <input type='text' placeholder='165MB'
                            onChange={(e)=>setFileSize(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor='Propertie'>Propertie</label>
                        <div className={formStyle.Form_box_input_box}>
                        <div className={formStyle.Form_box_input_box_icon}>
                        <AiTwotonePropertySafety />
                        </div>
                        <input type='text' placeholder='165MB'
                        onChange={(e)=>setPropreties(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor='Price'>Price</label>
                        <div className={formStyle.Form_box_input_box}>
                        <div className={formStyle.Form_box_input_box_icon}>
                        <AiTwotonePropertySafety />
                        </div>
                        <input type='text' placeholder='165MB'
                        onChange={(e)=>setPrice(e.target.value)}
                        />
                        </div>
                    </div>
                </div>
                <div className={Style.upload_box_btn}>
 
                    <Button  
                     classStyle={Style.upload_box_btn_style}
                      btnName='Uploadxx'
                       handleClick={async ()=>
                       createNFT(name,price,description,image,
                       router) }  
                    /> 
                <Button  
                 classStyle={Style.upload_box_btn_style}
                  btnName='Preview'
                   handleClick={()=>{} }
                        /> 
                </div> 
             </div>
        </div>
    );
}

export default UploadNFT;