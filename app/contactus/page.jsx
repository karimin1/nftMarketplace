'use client'
import React from 'react';
import { TiSocialTwitter,TiSocialFacebook ,TiSocialInstagram, TiSocialLinkedin, TiSocialYoutube} from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';
//INTERNAL IMPORT
import  Style from '../Styles/contactus.module.css'
import formStyle from '../../accountPage/Form/Form.module.css'
import { Button } from '../../Component/componentIndex';
const contactus =()=> {
    return (
        <div className={Style.contactus}>
            <div className={Style.contactus_box}>
                <h1>Contact</h1>
                <div className={Style.contactus_box_box}>
                    <div className={Style.contactus_box_box_left}>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>🏠Address</h3>
                            <p>
                            photo booth tattooed prism,bh njidf 5524 jd 45 sdfijdsfin sdfsfdiu
                            </p>
                        </div>

                        <div className={Style.contactus_box_box_left_item}>
                        <h3>📧Email</h3>
                        <p>said@gmail.com
                        </p>
                        </div>

                        <div className={Style.contactus_box_box_left_item}>
                            <h3>📞Phone</h3>
                            <p>
                                02525242424   
                            </p>
                        </div>

                        <div className={Style.contactus_box_box_left_item}>
                        <h3> 🌐Social</h3>
                        <a href="#">
                        <TiSocialFacebook/>   
                        </a>
                        <a href="#">
                        <TiSocialInstagram/>   
                        </a>
                        <a href="#">
                        <TiSocialTwitter/>   
                        </a>
                        <a href="#">
                        <TiSocialLinkedin/>   
                        </a>
                        <a href="#">
                        <TiSocialYoutube/>   
                        </a>

                

                        </div>
                    </div>
                    <div className={Style.contactus_box_box_right}>
                        <div className={formStyle.Form}>
                            <div className={formStyle.Form_box}>
                                <form action='#'>
                                    <div className={formStyle.Form_box_input}> 
                                    <label htmlFor='name'> Username </label>
                                    <input type='text' placeholder='shoaib bhai' 
                                    className={formStyle.Form_box_input_userName}/>  
                                    </div>
                                    <div className={formStyle.From_box_input}>
                                <label  htmlFor='email'>
                                Email
                                </label>
                                <div className={formStyle.Form_box_input_box}>
                                <div className={formStyle.Form_box_input_box_icon}>
                                <HiOutlineMail/>
                                </div>
                                <input type='text' placeHolder='Email*' />
                                </div>
                                    </div>

                                    <div className={formStyle.Form_box_input}> 
                                <label htmlFor='description'>Description</label>
                                <textarea 
                                name='' 
                                id='' 
                                cols='30' 
                                rows='10' 
                                placeholder='somethinf about yourself in few words'/>
                                    </div>
                                    <Button    classStyle={formStyle.button} btnName='Send message'/> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contactus;
