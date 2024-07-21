'use client';
import {react,useState,useEffect, useRef  } from 'react'
import {motion} from 'framer-motion'
import { TiArrowLeftThick,TiArrowRightThick } from 'react-icons/ti';
import Style from './Slide.module.css'
import SliderCard from './SliderCard'
import images from '../../img'
const  Slide=()=> {
    const sliderArray=[
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
    ]
    const [Width,setWidth]=useState(0);
    const dragSlider=useRef();
    useEffect(()=>{
        setWidth(dragSlider.current.scrollWidth-dragSlider.current.offsetWidth);
    },[])
    const handleScroll=(direction)=>{
        const {current}=dragSlider;
        const scrollAmount=window.innerWidth>1000?270:210;
        if(direction=='left'){
            current.scrollLeft-=scrollAmount;
        }else{
            current.scrollLeft+=scrollAmount;
        }
    }
    return (
        <div className={Style.slider}>
                <div className={Style.slider_box_button}>
                <p>click on play icon &enjoy Nfts video</p>
                    <div className={Style.slider_box_button_btn}>
                        <div className={Style.slider_box_button_btn}>
                            <div className={Style.slider_box_button_btn_icon} onClick={()=>handleScroll('left')}>
                            <TiArrowLeftThick />
                            </div>
                            <div className={Style.slider_box_button_btn_icon} onClick={()=>handleScroll('right')}>
                            <TiArrowRightThick />
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div className={Style.slider_box_items} ref={dragSlider}>
            <motion.div  ref={dragSlider} className={Style.slider_box_item}
            drag="x" dragConstraints={{right:0,left:-Width}}
            >{sliderArray.map((el,i)=>(
                <SliderCard key={i+1} el={el} i={i}/>
            ))}
            </motion.div>
                 </motion.div>

            </div>
    
    );
}

export default Slide;