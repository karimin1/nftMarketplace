import React, { useCallback } from 'react';
import Image from 'next/image'
import Style from './Form.module.css'
import {MdOutlineContentCopy,MdOutlineHttp} from 'react-icons/md'
import { HiOutlineMail} from 'react-icons/hi'

//INTERNAL IMPORT 
import { TiSocialTwitter,TiSocialFacebook ,TiSocialInstagram} from 'react-icons/ti';
import { Button } from '@/Component/componentIndex';
import { useDropzone } from 'react-dropzone';
const Form =  () =>{
   
    return (
        <div className={Style.Form}>
                <div className={Style.Form_box}>
                <form action='#'>
                <div className={Style.Form_box_input}> 
                <label htmlFor='name'> Username </label>
                <input type='text' placeholder='shoaib bhai' 
                className={Style.Form_box_input_userName}/>  
                </div>

                <div className={Style.From_box_input}>
                <label  htmlFor='email'>
                Email
                </label>
                <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail/>
                </div>
                <input type='text' placeHolder='Email*' />
                </div>
                </div>

                <div className={Style.Form_box_input}> 
                <label htmlFor='description'>Description</label>
                <textarea 
                name='' 
                id='' 
                cols='30' 
                rows='10' 
                placeholder='somethinf about yourself in few words'/>
                </div>

                <div className={Style.Form_box_input}>
                <label htmlFor='website'> website</label>
                <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp/> 
                </div>
                <input type='text' placeholder='website' />
                </div>
                </div>


                <div className={Style.Form_box_input_box_social}>
                <div className={Style.Form_box_input}>
                    <label htmlFor='facebook'>Facebook</label>
                    <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                     <TiSocialFacebook />
                     </div>
                     <input type='text' placeholder='http://shoaib'/>
                     </div>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor='twiter'>Twiter</label>
                    <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                     <TiSocialTwitter />
                     </div>
                     <input type='text' placeholder='http://shoaib'/>
                     </div>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor='instagramme'>Instagramme</label>
                    <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                     <TiSocialInstagram />
                     </div>
                     <input type='text' placeholder='http://shoaib'/>
                     </div>
                </div>
                </div>

                <div className={Style.Form_box_input}>
                <label htmlFor='wallet'>Wallet address</label>
                 <div className={Style.Form_box_input_box}>
                  <div className={Style.Form_box_input_box_icon}>
                   <MdOutlineHttp/>
                   </div>
                    <input type='text' placeholder='0xEahs14d577gskqjdfjd224744574fd'/>
                    <div className={Style.Form_box_input_box_icon}>
                    <MdOutlineContentCopy/>
                    </div>
                 </div>
                </div>
                <div className={Style.Form_box_btn}>
                <Button btnName='Upload profile handleClick'
                 handleClick={()=>{}}
                 classStyle={Style.button}/>
                 </div>
                </form> 
                
                </div>
        </div>
    );
}

export default Form;